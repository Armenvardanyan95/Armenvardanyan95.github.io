Recently, I wrote an article that discussed some common dilemmas that Angular developers face when building applications. One of them was the debate on whether to use template-driven or reactive forms. While the article is written from a neutral point of view, today I am going to elaborate why I am now inclined to choose template-driven forms at all the times.

> **WARNING** This post is purely opinionated, and you are fully justified in disagreeing with me and continuing to use reactive forms.

## Why did we use reactive forms anyway?

In the past, I was really a big fan of reactive forms. After all, they are reactive, right?! I can listen to changes of specific form controls, and I can add/remove the controls, their validations, and so on.

However, with some recent advents in the framework, I came to realize that, ironically enough, reactive forms are not reactive at all, and often result in some really imperative code spaghetti.

The thing that changed my mind was signals. Let's dive into comparisons.

## Disabling form controls

With reactive forms, disabling/enabling a form control is as simple as calling the `FormControl.disable()` method. This is a very simple operation, however, what we can notice is that it is a straightforward command, and does not really tell us why a given control is being disabled or not. Let's look at the code:

```typescript
export class DeliveryComponent implements OnInit {
  private readonly service = inject(Service)
  form = new FormGroup({
    description: new FormControl(''),
    addresses: new FormArray([
        new FormGroup({
            city: new FormControl(''),
            street: new FormControl(''),
            building: new FormControl(''),
        }),
    ]),
  });

  ngOnInit(): void {
    this.service.isCityDisabled().subscribe((disabled) => {
        for (const address of this.form.controls.addresses.controls) {
            if (disabled) {
                address.controls.city.disable();
            } else {
                address.controls.city.enable();
            }
        }
    });
  }
}
```

Looks pretty much like a mess. Imagine having multiple such scenarios in a single component - it will drive the code quality into oblivion! Now, the same thing with template-driven forms:

```typescript
@Component({
    template: `
        <h1>Delivery</h1>
        @for (
            address of controls.addresses(); 
            track address.street; 
            let i = $index
        ) {
            <div>
                <input [(ngModel)]="address.city" [disabled]="cityDisabled()" placeholder="City" />
                <input [(ngModel)]="address.street" placeholder="Street" />
                <input [(ngModel)]="address.building" placeholder="Building" />
                <button (click)="removeAddress(i)">Remove Address</button>
            </div>
        }
        <button (click)="addAddress()">Add Address</button>
    `,
})
export class DeliveryComponent {
    private readonly service = inject(Service);
    controls = {
        description: signal(''), 
        addresses: signal<DeliveryAddress[]>([]),
    };

    cityDisabled = toSignal(this.service.isCityDisabled(), {
        initialValue: false,
    });
}
```

From this code, we can easily understand why and when is a certain form control disabled. Almost no code in the component class itself. Clear superiority of template-driven forms. Let's move on to the next comparison.

## Dynamic initial value

Often when editing existing data, we need to fetch something from the server and use it as an initial value of a form. With reactive forms, we are forced to subscribe to the HTTP call Observable and manually set the initial form value. Here is some code:

```typescript
export class ReactiveFormComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly hasPermission$ = this.store.select(selectHasPermission);
  private readonly userPreferences$ = this.store.select(selectUserPreferences);
  form = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    permission: new FormControl(''),
    preferences: new FormControl(''),
  });

  ngOnInit() {
    // lots of imperative code
    this.hasPermission$.subscribe((hasPermission) => {
        if (hasPermission) {
            this.form.controls.name.enable()
        } else {
            this.form.controls.name.disable();
        }
    });

    this.userPreferences$.subscribe(preferences => {
        this.form.controls.preferences.setValue(preferences);
        this.form.controls.preferences.enable();
    })
  }
}
```

Here we alter a control's value and its disabled status. Does not look nice at all. 

Until signals, same was more or less true with template-driven forms. However, with the recent improvements, this can become way simpler and more intuitive. We are going to showcase the same example using the upcoming [`linkedSignal`]() function, that allows creating signals that update when other signals change, but also can be mutated manually (and be bound to `[(ngModel)]`):

```typescript
export class TemplateDrivenFormComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly hasPermissions = this.store.select(selectHasPermission);
  private readonly userPreferences = toSignal(
    this.store.select(selectUserPreferences),
    { initialValue: [] },
  );
  form = {
    name: signal(''),
    age: signal(0),
    // the disabled state for this input will be now handled
    // in the template with a simple [disabled]="hasPermissions()" binding
    permission: signal(''),
    preferences: linkedSignal(() => this.userPreferences()),
  };
}
```

Very elegant. I don't think reactive forms have anything of comparable quality. Let's move to the next comparison example.

## Dynamic validations

Again, as we already saw with dynamic initial values, with reactive forms we need to manually add/remove validations. Here is an example:

```typescript
@Component({
  template: `
    <form>
      <input [formControl]="form.controls.password" />
    </form>
  `,
})
export class SomeComponent implements OnInit {
  private readonly preferencesService = inject(PreferencesService);
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, validatePassword]),
  });

  ngOnInit() {
    this.preferencesService.getPreferences().subscribe((preferences) => {
      if (preferences.strongPassword) {
        this.form.controls.password.setValidators([
          Validators.required, validatePassword,
        ]);
      } else {
        this.form.controls.password.removeValidators(validatePassword);
      }
    })
  }
}
```

Again, complicated code, too many commands, unnecessary subscriptions (notice I didn't even include any logic to unsubscribe, with that the code would be even longer). Simple with template driven forms:

```typescript
@Directive({
  selector: '[validatePassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidatePasswordDirective),
      multi: true,
    },
  ],
})
export class ValidatePasswordDirective implements Validator {
  shouldValidate = input(true, {alias: 'validatePassword'});  
  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.shouldValidate()) {
      return null;
    }
    
    if (control.value.length < 8) {
      return { minLength: { min: 8 } };
    }
    return null;
  }
}

@Component({
  template: `
    <form>
      <input [formControl]="form.controls.email" required />
      <input [formControl]="form.controls.password" required
             [validatePassword]="shouldValidatePassword()" />
    </form>
  `,
})
export class TemplateDrivenFormComponent implements OnInit {
  private readonly preferencesService = inject(PreferencesService);
  form = {
    email: signal(''),
    password: signal(''),
  };

  shouldValidatePassword = toSignal(
    this.preferencesService.getPreferences().pipe(
      map(preferences => preferences.strongPassword)
    ), 
    { initialValue: false},
  );
}
```

Yet again, the component is simple and elegant. The only boilerplate-ey thing is the validator directive, but that is a small price to play for having muc cleaner component code.

>**NOTE** For ways of reducing the boilerplate with directive validators, take a look at this blog post by Tim Deschryver: [A generic Angular template-driven validator](https://timdeschryver.dev/blog/a-generic-angular-template-driven-validator#).

Let's see our final example now.

## Dynamic form controls

Often we need to add/remove form controls dynamically, which becomes especially tedious when that depends on a value of another form control. Here, we have a question form, where one can select a question topic, and, depending on a topic, the form might have a (or have not) a subtopic control. i;m noty even including a reactive forms example, as you already can imagine how much code it would be.

```typescript
@Component({
  selector: 'add-question',
  template: `
    <form>
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" [(ngModel)]="form().title" />
      </div>
      <div>
        <label for="topic">Topic</label>
        <select id="topic" name="topic" [(ngModel)]="form().topic">
          @for (topic of topics(); track topic.id) {
          <option [value]="topic.id">{{ topic.name }}</option>
          }
        </select>
      </div>
      @if (form().subtopic) {
      <div>
        <label for="subtopic">Sub Topic</label>
        <select id="subtopic" name="subtopic" [(ngModel)]="form().subtopic">
          @for (subTopic of subTopics(); track subTopic.id) {
          <option [value]="subTopic.id">{{ subTopic.name }}</option>
          }
        </select>
      </div>
      }
    </form>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class AddQuestionComponent {
  private readonly topicService = inject(TopicService);
  defaultControls = {
    title: signal(''),
    topic: signal<number | null>(null),
  };

  hasSubtopic = computed(() => {
    return !!this.topics().find(
      (topic) => topic.id === +(this.defaultControls.topic() ?? 0)
    )?.hasSubtopic;
  });

  form = computed(() => {
    return ({
      title: this.defaultControls.title,
      topic: this.defaultControls.topic,
      ...(this.hasSubtopic() ? { subtopic: signal<number | null>(null) } : {}),
    });
  });

  topics = toSignal(this.topicService.getTopics(), { initialValue: [] });
  subTopics = toSignal(
    toObservable(this.defaultControls.topic).pipe(
      filter((topicId) => this.hasSubtopic()),
      switchMap((topicId) => this.topicService.getSubTopics(topicId!))
    ),
    { initialValue: [] }
  );
}
```

Again, simple, and everything dynamic is handled in the template.

## In Conclusion

Template-driven forms before signals had many issues and were generally weaker than reactive forms. However, as seen in these examples, with signals, they have the potential to actually be even more reactive.

Still, the decision is up to the individual developer/team, but I would advice to reconsider template-driven forms before firmly deciding against them.