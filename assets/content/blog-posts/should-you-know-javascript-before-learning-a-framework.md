_Original cover photo by [Yancy Min](https://unsplash.com/@yancymin) on Unsplash._

There is often a debate online that goes exactly like the title of this blog post, and lots of junior or completely entry-level developers also ask this question: "Can I learn React (or Angular, or whatever) without knowing JavaScript?".

Well, first of all, does this question even make sense? I mean, how is anyone going to create a component without knowing what a function, a class, or even a variable is? But here we understand that when people ask this question they mean something else.

So, let's get a bit philosophical. 

## What does "knowing a language" mean?

I have conducted lots of interviews for software jobs, mainly of course Angular and sometimes React positions. I also have trained complete beginners in JavaScript, React, and Angular. Both of those experiences have taught me a bunch of stuff that is important for this topic. And I hope, that after reading this post, people who both conduct interviews *and* teach programming will reconsider some opinions on how strict we should be. 

So, what does "knowing JavaScript" really mean?

Well, first of all, we might assume that it at least entails knowing the syntax of the language and main building blocks, loops, conditional statements, functions, classes, and so on. But is that enough? And what is? 

Imagine a situation: You are a young software developer learning JavaScript; you are enthusiastic, passionate, and want to get lots of stuff done, so, naturally, you try React. You already know about functions, variables, classes, and the full package, but nothing in-depth. Now imagine you come across this sort of code:

```javascript
export function MyComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}
```

This code is fairly understandable, but there is a little issue: you have not yet learned about closures, maybe heard the word and the myth that it is very important to know "for interviews", but you do not know what it is, or how to recognize one out in the wild. But will that affect your learning process? Of course, going forward, you will learn about `useEffect`, about the restrictions on using those hooks (not calling in `if` statements for example), and it could get very confusing very fast (hell, some seasoned developers are confused by some behaviors in ***all*** frameworks).

So you might think I am going to make a case that you should learn JavaScript first, and then React or whatever.

*Actually, no.*

## Experience in the fields is the most important part

Now imagine you have not tried React or anything, and just come upon an article explaining what a closure is. The article is decent, but the concept is still not really "grasped" by you. Why on earth would someone declare (and then return!) a function inside another function? What is the point of that? Explaining callbacks is kinda hard, but at least a `setTimeout` example can do the job fairly well; explaining closures is *way* harder. 

Now, will this article really help you get what a closure is? Maybe, but we all understand that the best way would be to use it, see it, and recognize it in a real-life, working, functioning environment. But how will anyone realistically get an environment like this when working with plain JavaScript? Maybe they could, but that is unlikely. 

Now imagine you also still try things with React in parallel and come across the concept of [Higer-Order Components(HOCs)](https://legacy.reactjs.org/docs/higher-order-components.html). You read it, try it out, the style of writing in this way is very different from what you are used to, but you get the hang of it, it kinda works out and even makes some sense. You read a bit more, and come across some article that actually mentions that a HOC is a closure, and bang, you now understand closures way better than you used to! Then you come back to the previous example, with `useState` and suddenly you realize that, well, `useState` is a function, it returns `setCount`, which is also a function, so it *must* be a closure! Now you also learned how to spot a closure in the wild, and this is real progress.

## How to proceed if you are learning?

Well, the **most** important thing about learning is to make it as comfortable for you as possible. If you grasped lots of JavaScript concepts and really want to try them in action with something working - **go for it!**. You can always come back and fill in any gaps - just do not forget about the theoretical parts of the language, which is also very important for your thinking process. If you, on the other hand, feel you know something on a surface level, but are a bit afraid to try it out - you can stick for a while with watching tutorials or trying simpler examples, or maybe learnign the theory deeper before proceeding. Just keep in mind, that at some point you *will have to* move on to doing it in practice, in the actual code.

Here are some things to keep in mind:

- For a beginner is better to improve knowledge horizontally (learn more new concepts) than vertically (learn several concepts in much depth).
- For a more experienced learner it is better to do the opposite - maybe slow down on new blows and whistles and focus on strengthening the existing knowledge base
- Best practices are important - learn them early on, but remember working messy code is better than clean code that is not working, if you are learning, it is important to get into a rhythm of always delivering working things. Next focus on improving the code
- Mistakes will happen *either way* - do not get discouraged, turn every mistake into a learning experience. Every single human being who learned what you are learning has gone through the same process, and so will you
- Do not listen to too many online debates, try to make informed decisions, but refrain from arguments affecting your own experience. There is no shame in trying out yourself.


Now let's do the opposite side of the debate:

## What if you are a teacher/mentor or are performing interviews/assessments?

Well, let's first examine a learning process that is messy:

- You might be jumping from concept to concept too fast
- Your curriculum might not be structured too well
- Students that are on different skill levels might be solving the same problems

All three are actually organizational problems, and have, obviously, nothing to do with students. Here is a better way of organizing the process:

- Spend enough time on core concepts and do not move on until *almost* everyone grasps them
- Structure the process in a way that helps students learn things that depend on other things *after* you have learned the latter. So, in that context, React *cannot* be approached before properly learning JavaScript. 
- "Isolate" (for a lack of a better word) better-performing students and "reward" them with more challenging problems or new concepts. Focus on the rest to improve their learning. 

Now imagine a situation, where one of the students approaches you and says that they tried a framework out before you finished the JS course. There might be two scenarios here:

1. They had a positive experience, grasped some concepts, and built something simple
2. They had a negative experience - didn't understand how stuff works, what to use where, and so on

Your reaction to the first one should be one of pleasant surprise and *curiosity*, yes, curiosity. You should ask questions like "did you manage to build something working?", "did you like it?", "do you have any questions about it?". **Do not** discourage them - there are enough people discouraging newbies for questions on StackOverflow. But also make sure to explain that to become a complete developer they will also need to grasp the actual language they are coding in well. Turn this into an even more positive experience for them, help them try out what they learned in JavaScript theoretically in a framework practically: "did you learn how to render a list of elements dynamically? Do you know the `Array` methods like `map` and `filter` that we learned sare handy there? Try that out too!"

Now, what if the experience has been negative? Use *compassion*: they are already discouraged from the experience, no need to tell them they shouldn't have tried it. Praise them for being inquisitive and wanting to learn more, stress that it's okay to have issues while learning, be friendly, show genuine care, ask them if they have specific questions, ask if they got the whole picture and maybe are struggling with nuances rather then being completely in the dark. 

The next part is interviewing people for a front-end position

Now, if you are looking for an entry-level person, rather than looking for the knowledge itself look for the *ability* to learn. You might encounter people who know a framework decently well and can do some interesting things there but are struggling with more advanced JavaScript concepts. Examine their ability to learn it, and make decisions based on that, rather than arbitrary checkboxes of what someone should or should not know. Hell, I learned about the difference between primitive and reference types in JavaScript in my *seventh* (!) month of working as a junior developer. If someone asked me about it in my very first interview and made their judgment based on that, my entire career would have been completely different.

This is going to be different if we are looking for an experienced developer though. Until a certain threshold, every developer has to face stricter rules; remember the part in this article where I suggested coming back and strengthening the theoretical knowledge? Well, that is what you should be looking for in an experienced developer. You should be able to trust them to be able to learn new things on their own, and this will be going to be crucial.

## In Conclusion

As you have noticed in this article, we examined several scenarios, and in each and every one of them not once did the question of whether you should learn a framework before or after JS or not come up. This is because it is not the question that should be asked. The question is: **how should learning be done?**. The answer to this question is: **in a way that is most comfortable for you, structured in a way that creates the least issues on the run**.

