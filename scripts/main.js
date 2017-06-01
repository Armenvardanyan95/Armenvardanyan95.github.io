(function () {
   angular
       .module('app', [
           'app.articles',
           'app.topics',
           'app.magazines',
           'app.accounts',
           'app.header',
           'app.sidebar',
           'app.resources',
           'app.utils',
           'ngMaterial',
           'angular-loading-bar',
           'infinite-scroll'
       ])
       .config(config)
       .run(run);

        run.$inject = ['$rootScope', 'accounts', '$state'];

        function config() {
                angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 2500)
        }

        function run($rootScope, accounts, $state) {

            $rootScope.xhrLoading = false;

            $rootScope.$on('cfpLoadingBar:started', function () {
                    $rootScope.xhrLoading = true;
            });

            $rootScope.$on('cfpLoadingBar:completed', function () {
                    $rootScope.xhrLoading = false;
            });

            $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){

                    if(!$rootScope.isAuth && toState.isAuth){
                        event.preventDefault();
                        var notice = 'Այս էջը տեսնելու համար անհրաժեշտ է մուտք գործել';
                        accounts.requireAuthorization(notice, $state.go, [toState.name, toParams])
                    }
            });

        }
    
})();
(function () {
    angular
        .module('app.utils', [])
        .constant('PS', Ps);
        
})();
(function () {
    angular
        .module('app.articles', [
            'app.articles.router',
            'app.utils'
        ])
        .constant('FB', {});
})();
(function () {
    angular
        .module('app.topics', []);
        
})();
(function () {
    angular
        .module('app.magazines', [
            'app.magazines.router'
        ]);
        
})();
(function () {
    angular
        .module('app.accounts', ['ngStorage'])
        .run(run);

    run.$inject = ['$localStorage', '$rootScope'];

    function run($localStorage, $rootScope) {

        $rootScope.user = $localStorage.user || false;
        $rootScope.isAuth = !!$rootScope.user;

    }
        
})();
(function () {
    angular
        .module('app.header', []);
        
})();
(function () {
    angular
        .module('app.sidebar', [])
        
})();
(function () {
   angular
       .module('app.articles.router', [
           'ui.router',
       ])
       .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');


        
        $stateProvider

            .state('home', {
                url: '/',
                template: '<articles articles="home.articles" load-articles="home.loadArticles()"></articles>',
                controller: 'HomeController',
                controllerAs: 'home'
            })

            .state('history', {
                url: '/history',
                template: '<articles articles="history.articles" load-articles="history.loadArticles()"></articles>',
                controller: 'HistoryController',
                controllerAs: 'history',
                isAuth: true
            })

            .state('custom', {
                url: '/:orderingType',
                template: '<articles articles="home.articles" load-articles="home.loadArticles()"></articles>',
                controller: 'HomeController',
                controllerAs: 'home'
            });


    }

})();
(function () {
    angular
        .module('app.magazines.router', ['ui.router'])
        .config(config);
    
    config.$inject = ['$stateProvider'];
    
    function config($stateProvider) {
        
        $stateProvider
            
            .state('magazines', {
                url: '/magazines/all',
                templateUrl: 'components/magazines/magazines.html',
                controller: 'MagazinesController',
                controllerAs: 'magazines',
                resolve: {
                    magazines: function (magazines) {
                        return magazines().query({limit: 1000}).$promise;
                    }
                }
            })

            .state('magazine', {
                url: '/magazines/:slug',
                template: `<articles articles="magazine.articles" magaz="magazine.magazine" load-articles="magazine.loadArticles()"></articles>`,
                controllerAs: 'magazine',
                controller: 'MagazineController',
                resolve: {
                    magazine: function (magazines, $stateParams) {
                        return magazines().get({id: $stateParams.slug}).$promise;
                    }
                }
            })
        
    }
        
})();
(function () {
    angular
        .module('app.resources', ['ngResource', 'ngStorage'])
        .config(config)
        .constant('API_URL', 'http://127.0.0.1\\:8000');
    
    config.$inject = ['$resourceProvider'];
    
    function config($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }

})();
(function () {
    'use strict';

    angular
        .module('app.resources')
        .factory('topics', topics);

    topics.$inject = ['$resource', 'API_URL', '$rootScope'];

    /* @ngInject */
    function topics($resource, API_URL, $rootScope) {

        return function(){
            return $resource(API_URL + '/topics/', {id: '@id'}, {
                query: {
                    isArray: false,
                    headers: {
                        'Authorization': $rootScope.user.token? 'Token ' + ($rootScope.user.token) : null
                    }
                },

                subscribe: {
                    isArray: false,
                    method: 'GET',
                    url: API_URL + '/topics/subscribe/:id/',
                    headers: {
                        'Authorization': $rootScope.user.token? 'Token ' + ($rootScope.user.token) : null
                    }
                }
            });
        };

    }

})();


(function () {
    'use strict';

    angular
        .module('app.resources')
        .factory('articles', articles);

    articles.$inject = ['$resource', 'API_URL', '$rootScope'];

    /* @ngInject */
    function articles($resource, API_URL, $rootScope) {

        return function() {
            return $resource(API_URL + '/articles/', {id: '@id'}, {
                query: {
                    isArray: false,
                    headers: {
                        'Authorization': $rootScope.user.token? 'Token ' + ($rootScope.user.token) : null
                    }
                },
                store: {
                    url: API_URL + '/articles/save/:id/',
                    method: 'GET',
                    isArray: false,
                    headers: {
                        'Authorization': $rootScope.user.token? 'Token ' + ($rootScope.user.token) : null
                    }
                },
                history: {
                    url: API_URL + '/articles/custom/history/',
                    method: 'GET',
                    isArray: false,
                    headers: {
                        'Authorization': $rootScope.user.token? 'Token ' + ($rootScope.user.token) : null
                    }
                }

            });
        };

    }

})();


(function () {
    'use strict';

    angular
        .module('app.resources')
        .factory('magazines', magazines);

    magazines.$inject = ['$resource', 'API_URL', '$rootScope'];

    /* @ngInject */
    function magazines($resource, API_URL, $rootScope) {

        return function () {
            return $resource(API_URL + '/magazines/:id/',
                {id: '@id'},
                {
                    query: {
                        isArray: false,
                        headers: {
                            'Authorization': $rootScope.user.token? 'Token ' + ($rootScope.user.token) : null
                        }
                    },
                    get: {
                        isArray: false,
                        headers: {
                            'Authorization': $rootScope.user.token? 'Token ' + ($rootScope.user.token) : null
                        }
                    },
                    subscribe: {
                        url: API_URL + '/magazines/subscribe/:slug/',
                        method: 'GET',
                        isArray: false,
                        headers: {
                            'Authorization': $rootScope.user.token? 'Token ' + ($rootScope.user.token) : null
                        }
                    },
                    unsubscribe: {
                        url: API_URL + '/magazines/unsubscribe/:slug/',
                        method: 'GET',
                        isArray: false,
                        headers: {
                            'Authorization': $rootScope.user.token? 'Token ' + ($rootScope.user.token) : null
                        }
                    },

                });
        };

    }

})();


(function () {
    'use strict';

    angular
        .module('app.resources')
        .factory('users', users);

    users.$inject = ['$resource', 'API_URL', '$rootScope', 'handlers'];

    /* @ngInject */
    function users($resource, API_URL, $rootScope, handlers) {

        return $resource(API_URL + '/users/',
            {id: '@id'},
            {
                query: {
                    isArray: false
                },
                save: {
                    method: 'POST',
                    interceptor: {
                        responseError: handlers.errorHandler
                    }
                },
                login: {
                    url: API_URL + '/get-auth-token/',
                    method: 'POST',
                    interceptor: {
                        responseError: handlers.errorHandler
                    }
                },
                headers: {
                    'Authorization': $rootScope.user.token? 'Token ' + ($rootScope.user.token) : null
                }

            });

    }

})();


(function () {
    'use strict';

    angular
        .module('app.resources')
        .factory('stats', stats);

    stats.$inject = ['$resource', 'API_URL', '$rootScope'];

    /* @ngInject */
    function stats($resource, API_URL, $rootScope) {

        return $resource(API_URL,
            {id: '@id'},
            {
                viewArticle: {
                    method: 'GET',
                    url: API_URL + '/stats-auth/:id/',
                    headers: {
                        'Authorization': $rootScope.user.token? 'Token ' + ($rootScope.user.token) : null
                    }
                }

            });

    }

})();


(function () {
    'use strict';

    angular
        .module('app.resources')
        .service('handlers', handlers);

    handlers.$inject = ['$mdToast', '$localStorage', '$rootScope'];

    /* @ngInject */
    function handlers($mdToast, $localStorage, $rootScope) {
        this.errorHandler = errorHandler;

        function reformatHeader(text) {
            var res = text.replace(/_/g, ' ');
            res = res.charAt(0).toUpperCase() + res.slice(1);
            return res;
        }

        function errorHandler(error) {
            error = error.data || error;
            if(!angular.isObject(error) && !angular.isArray(error)) return false;
            var shown = false;
            angular.forEach(error, function (value, key) {
                if(shown) return false;
                if(angular.isObject(value)) errorHandler(value);
                if(angular.isArray(value)){
                    angular.forEach(value, function (subvalue) {
                        subvalue = reformatHeader(subvalue);
                        key = reformatHeader(key);
                        $mdToast.show($mdToast.simple().textContent(key + ': ' + subvalue));
                        shown = true;
                    });
                }
            });
        }

    }

})();


(function () {
    'use strict';

    angular
        .module('app.articles')
        .service('articleActions', articleActions);

    articleActions.$inject = ['articles', 'FB', '$mdToast', 'stats', '$localStorage', '$rootScope', 'accounts'];

    /* @ngInject */
    function articleActions(articles, FB, $mdToast, stats, $localStorage, $rootScope, accounts) {

        this.share = share;
        this.store = store;
        this.viewAsAuth = viewAsAuth;
        this.viewAsNotAuth = viewAsNotAuth;


        function share(article) {
            FB.ui({
                method: 'share',
                href: article.reference
            }, function(response){
                console.log('shared');
            });
        }

        function viewAsNotAuth(article){
            if(!angular.isArray($localStorage.viewed_articles)){
                $localStorage.viewed_articles =  [];
            }
            $localStorage.viewed_articles.push(article.id);
        }

        function viewAsAuth(article) {
            stats.viewArticle({id: article.id});
        }

        function store(article) {
            if(!$rootScope.isAuth){
                var notice = 'Հոդվածի հղումը պահպանելու համար անհրաժեշտ է մուտք գործել';
                accounts.requireAuthorization(notice, store, [article]);
                return false;
            }

            articles().store({id: article.id}, {}, function () {
                article.is_saved = !article.is_saved;
                $mdToast.show($mdToast.simple().textContent('Հղումը հաջողությամբ պահպանվել է'));
            });

        }
    }

})();


(function () {
    'use strict';

    angular
        .module('app.accounts')
        .service('accounts', accounts);

    accounts.$inject = ['$mdDialog'];

    /* @ngInject */
    function accounts($mdDialog) {
        this.requireAuthorization = requireAuthorization;

        function requireAuthorization(explanation, action, args) {

            $mdDialog.show({
                controller: 'LoginController as vm',
                templateUrl: 'components/accounts/login.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                locals: {
                    explanation: explanation,
                    action: action,
                    args: args
                }
            })

        }
    }

})();


(function () {
    'use strict';

    angular
        .module('app.topics')
        .service('topicActions', topicActions);

    topicActions.$inject = ['topics', '$rootScope', 'accounts'];

    /* @ngInject */
    function topicActions(topics, $rootScope, accounts) {

        this.subscribe = subscribe;

        function subscribe(topic) {
            if(!$rootScope.isAuth){
                var notice = '"' + topic.title + '" թեմայի նորություններին բաժանորդագրվելու համար անհրաժեշտ է մուտք գործել';
                accounts.requireAuthorization(notice, subscribe, [topic]);
                return false;
            }

            topics().subscribe({id: topic.id}, function (res) {
                topic.is_subscribed = !topic.is_subscribed;
            });
        }

    }

})();


(function () {
    'use strict';

    angular
        .module('app.magazines')
        .service('magazineActions', magazineActions);

    magazineActions.$inject = ['magazines', '$rootScope', 'accounts'];

    /* @ngInject */
    function magazineActions(magazines, $rootScope, accounts) {
        this.subscribe = subscribe;
        this.unsubscribe = unsubscribe;

        function subscribe(magazine) {
            if(!$rootScope.isAuth){
                var notice = '"' + magazine.title + '" լրատվականի նորություններին բաժանորդագրվելու համար անհրաժեշտ է մուտք գործել';
                accounts.requireAuthorization(notice, subscribe, [magazine]);
                return;
            }
            magazines().subscribe({slug: magazine.slug}, function (res) {
                magazine.is_subscribed = true;
            });
        }

        function unsubscribe(magazine) {
            if(!$rootScope.isAuth){
                var notice = '"' + magazine.title + '" լրատվականի նորություններից ապաբաժանորդագրվելու համար անհրաժեշտ է մուտք գործել';
                accounts.requireAuthorization(notice, subscribe, [magazine]);
                return;
            }
            magazines().unsubscribe({slug: magazine.slug}, function (res) {
                magazine.is_subscribed = false;
            });
        }
    }

})();


(function () {
    'use strict';

    angular
        .module('app.articles.router')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['articles', '$stateParams', '$rootScope'];

    /* @ngInject */
    function HomeController(articles, $stateParams, $rootScope) {
        var vm = this;
        vm.articles = [];

        articles = articles();

        var mapping = {
            views: '-views',
            random: '?',
            created: '-created'
        };
        vm.ordering = mapping[$stateParams.orderingType || 'created'];
        vm.page = 1;
        vm.count = Infinity;
        vm.loadArticles = loadArticles;

        function loadArticles() {
            if(vm.articles.length >= vm.count || $rootScope.xhrLoading) return;
            articles.query({page: vm.page, ordering: vm.ordering}, function (res) {
                Rx.Observable.from(res.results)
                    .filter(function(article){
                        return !vm.articles.filter(function (element) {
                                return element.id == article.id;
                            }).length;
                    })
                    .subscribe(function (article) { if(vm.articles.indexOf(article) == -1) vm.articles.push(article); });
                vm.count = res.count;
                vm.page++;
            });
        }
        
    }

})();


(function () {
    'use strict';

    angular
        .module('app.header')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['magazines', 'topics', '$mdSidenav', '$timeout'];

    /* @ngInject */
    function HeaderController(magazines, topics, $mdSidenav, $timeout) {
        var vm = this;
        
        vm.showList = false;
        vm.toggleSideNav = toggleSideNav;
        vm.search = search;
        vm.toggleSearchBox = toggleSearchBox;

        vm.menu = [
            {
                label: 'Բլոգներ',
                url: 'magazines'
            },
            {
                label: 'Թեմաներ',
                url: 'magazines'
            },
            {
                label: 'Ռեյթինգային',
                url: 'custom({orderingType: \'views\'})'
            },
            {
                label: 'Թարմ',
                url: 'magazines'
            },
            {
                label: 'Խառը',
                url: 'custom({orderingType: \'random\'})'
            }
        ];
        
        function search(query) {
            if(query.length < 3){
                vm.topics = [];
                vm.magazines = [];
                return false;
            }
            topics().query({search: query, limit: 3}, function (res) {
                vm.topics = res.results;
            });
            magazines.query({search: query, limit: 3}, function (res) {
                vm.magazines = res.results;
            })
        }

        function toggleSideNav() {
            $mdSidenav('left').toggle();
        }

        function toggleSearchBox(value) {
            $timeout(function () {
                vm.showList = value;
                console.log(value, vm.showList, 'agrrr')
            }, 100);
        }
        
    }

})();


(function () {
    'use strict';

    angular
        .module('app.magazines.router')
        .controller('MagazinesController', MagazinesController);

    MagazinesController.$inject = ['magazines'];

    /* @ngInject */
    function MagazinesController(magazines) {
        var vm = this;

        vm.query = '';
        vm.allMagazines = [];
        vm.magazines = [];
        Array.prototype.push.apply(vm.allMagazines, magazines.results);
        Array.prototype.push.apply(vm.magazines, vm.allMagazines);

        vm.filterMagazines = filterMagazines;

        function filterMagazines() {
            vm.magazines = [];
            if(!vm.query.length){
                Array.prototype.push.apply(vm.magazines, vm.allMagazines);
                return;
            }
            Rx.Observable.from(vm.allMagazines)
                .filter(function (magazine) { return magazine.title.toLowerCase().startsWith(vm.query); })
                .subscribe(function (magazine) { vm.magazines.push(magazine); });
        }
        
    }

})();


(function () {
    'use strict';

    angular
        .module('app.magazines')
        .controller('MagazineController', MagazineController);

    MagazineController.$inject = ['magazine', 'articles', 'magazineActions'];

    /* @ngInject */
    function MagazineController(magazine, articles, magazineActions) {
        var vm = this;

        vm.magazine = magazine;
        vm.articles = [];

        vm.page = 1;
        vm.count = Infinity;
        vm.loadArticles = loadArticles;

        function loadArticles() {
            if(vm.articles.length >= vm.count) return;
            articles().query({page: vm.page, ordering: 'created', magazine: vm.magazine.id}, function (res) {
                Rx.Observable.from(res.results)
                    .filter(function(article){
                        return !vm.articles.filter(function (element) {
                            return element.id == article.id;
                        }).length;
                    })
                    .subscribe(function (article) { if(vm.articles.indexOf(article) == -1) vm.articles.push(article); });
                vm.count = res.count;
                vm.page++;
            });
        }
    }

})();


(function () {
    'use strict';

    angular
        .module('app.accounts')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['users', '$mdDialog', 'action', 'args', 'explanation', '$rootScope', '$localStorage', '$timeout'];

    /* @ngInject */
    function LoginController(users, $mdDialog, action, args, explanation, $rootScope, $localStorage, $timeout) {
        var vm = this;

        vm.user = users;
        vm.login = {};
        vm.registration = {};
        vm.explanation = explanation;
        vm.cancel = $mdDialog.hide;
        vm.signIn = signIn;

        
        function signIn() {
            users.login(vm.login).$promise.then(
                function (res) {
                    $localStorage.user = {
                        id: res.id,
                        token: res.token
                    };
                    $rootScope.user = $localStorage.user;
                    $rootScope.isAuth = true;
                    $timeout(function () {
                        if(action){
                            if(angular.isArray(args) && args.length){
                                action.apply(null, args);
                            } else {
                                action();
                            }
                        }
                        vm.cancel();
                    });
                }
            )
        }
        
    }

})();


(function () {
    'use strict';

    angular
        .module('app.articles')
        .controller('HistoryController', HistoryControler);

    HistoryControler.$inject = ['articles', '$rootScope'];

    /* @ngInject */
    function HistoryControler(articles, $rootScope) {
        var vm = this;
        articles = articles();

        vm.articles = [];

        vm.page = 1;
        vm.count = Infinity;
        vm.loadArticles = loadArticles;

        function loadArticles() {
            if(vm.articles.length >= vm.count || $rootScope.xhrLoading) return;
            articles.history({page: vm.page}, function (res) {
                Rx.Observable.from(res.results)
                    .filter(function(article){
                        return !vm.articles.filter(function (element) {
                            return element.id == article.id;
                        }).length;
                    })
                    .subscribe(function (article) { if(vm.articles.indexOf(article) == -1) vm.articles.push(article); });
                vm.count = res.count;
                vm.page++;
            });
        }


    }

})();

(function () {
    'use strict';

    angular
        .module('app.header')
        .directive('mdHeader', mdHeader);

    mdHeader.$inject = [];

    /* @ngInject */
    function mdHeader() {
        var directive = {
            template: '<md-toolbar layout="row" class="md-whiteframe-z3 fixed-header">' +
                            '<md-content flex layout="row" layout-align="center">' +
                                '<a hide-gt-sm class="sidebar-open" ng-click="header.toggleSideNav()">' +
                                    '<md-icon md-svg-src="assets/img/list.svg"></md-icon>' +
                                '</a>' +
                                '<md-content flex="70">' +
                                    '<div class="md-toolbar-tools">' +
                                        '<div hide-xs hide-sm>' +
                                            '<a ui-sref="{{item.url}}" ng-repeat="item in header.menu">' +
                                                '{{ item.label }}' +
                                            '</a>' +
                                        '</div>' +
                                        '<span flex></span>' +
                                        '<input type="search" ng-model="header.query" placeholder="Որոնել․․․" ' +
                                        'ng-blur="header.toggleSearchBox(false)" ng-focus="header.showList = true" ' +
                                        'ng-model-options="{debounce: 300}" ng-change="header.search(header.query)">' +
                                    '</div>' +
                                '</md-content>' +
                            '</md-content>' +
                      '</md-toolbar>' +
                      '<md-divider class="under-header"></md-divider>' +
                      '<md-content class="search-results">' +
                            '<md-list>' +
                                '<md-subheader ng-if="header.showList && header.query.length" class="md-no-sticky">' +
                                    'Որոնել \'{{ header.query }}\'' +
                                '</md-subheader>' +
                                '<md-list-item ng-if="header.showList && (header.magazines.length)" class="md-2-line list-item" ' +
                                'ng-repeat="magazine in header.magazines">' +
                                    '<img class="search-avatar" ng-src="{{ magazine.main_pic }}">' +
                                        '<div class="md-list-item-text">' +
                                            '<a ui-sref="magazine({slug: magazine.slug})">{{ magazine.title }}</a>' +
                                        '</div>' +
                                    '<md-divider></md-divider>' +
                                '</md-list-item>' +
                            '</md-list>' +
                          '<md-list ng-if="header.showList && (header.topics.length)" flex>' +
                              '<md-list-item class="md-2-line list-item" ' +
                              'ng-repeat="topic in header.topics">' +
                                  '<div class="md-list-item-text">' +
                                    '<a>#{{ topic.title }}</a>' +
                                  '</div>' +
                                  '<md-divider></md-divider>' +
                              '</md-list-item>' +
                          '</md-list>' +
                      '</md-content>',
            bindToController: true,
            replace: false,
            controller: 'HeaderController',
            controllerAs: 'header',
            link: link,
            restrict: 'E',
            scope: '@'
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

})();


(function () {
    'use strict';

    angular
        .module('app.topics')
        .directive('topics', topics);

    topics.$inject = [];

    /* @ngInject */
    function topics() {
        var directive = {
            template: '<md-card class="topics">'+
                        '<md-card-header>' +
                            '<md-card-header-text>' +
                                // '<span class="md-title">' +
                                    '<md-card-content>' +
                                        '<md-chips>' +
                                            '<md-chip ng-repeat="topic in topics.topics">' +
                                                '<a href="" ng-class="{\'forest-green\': topic.is_subscribed}">{{ topic.title }} &nbsp; &nbsp;</a>' +
                                                '<a href="" ng-click="topics.subscribe(topic)">' +
                                                    '<md-icon md-svg-icon="assets/img/{{ topic.is_subscribed ? \'topic-added\' : \'add-topic\'}}.svg">' +
                                                    '</md-icon>' +
                                                    '<md-tooltip md-direction="bottom">' +
                                                        '{{ topic.is_subscribed ? \'Ապաբաժանորդագրվել\' : \'Բաժանորդագրվել\' }} ' +
                                                    '</md-tooltip>' +
                                                '</a>' +
                                            '</md-chip>' +
                                        '</md-chips>' +
                                    '</md-card-content>' +
                                // '</span>' +
                            '</md-card-header-text>' +
                        '</md-card-header>' +
                      '</md-card>',
            bindToController: true,
            controller: topicsRandom,
            controllerAs: 'topics',
            link: link,
            replace: true,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
            
        }
    }

    topicsRandom.$inject = ['topics', 'topicActions'];

    /* @ngInject */
    function topicsRandom(topics, topicActions) {

        var vm = this;

        vm.reload = reload;
        vm.subscribe = subscribe;

        reload();

        function reload() {
            topics().query({page: 1, ordering: '?', not_mine: true}, function (res) {
                vm.topics = res.results;
            });
        }

        function subscribe(topic) {
            topicActions.subscribe(topic);
        }
    }

})();


(function () {
    'use strict';

    angular
        .module('app.sidebar')
        .directive('sideBar', sideBar);

    sideBar.$inject = [];

    /* @ngInject */
    function sideBar() {
        var directive = {
            template:
            '<md-sidenav class="md-sidenav-left md-whiteframe-z2 side-navigation" md-is-locked-open="true">' +
                '<sidebar-content></sidebar-content>' +
            '</md-sidenav>' +

            '<md-sidenav class="md-sidenav-left md-whiteframe-4dp" md-component-id="left">' +
                '<md-toolbar class="md-theme-light">' +
                    '<h1 class="md-toolbar-tools">Sidenav Right</h1>' +
                '</md-toolbar>' +
                '<sidebar-content></sidebar-content>' +
            '</md-sidenav>',
            bindToController: true,
            controller: SideBarController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    SideBarController.$inject = ['$state', '$mdDialog'];

    /* @ngInject */
    function SideBarController($state, $mdDialog) {
        var vm = this;

        vm.personal = [
            {
                label: 'Թեմաներ',
                img: 'label',
                url: 'topics.list'
            },
            {
                label: 'Լրատվականներ',
                img: 'globe'
            },
            {
                label: 'Դիտել Հետո',
                img: 'bookmark-add'
            },
            {
                label: 'Պատմություն',
                img: 'history'
            }
        ];

        vm.overall = [
            {
                label: 'Ռեյթինգային',
                img: 'trending'
            },
            {
                label: 'Թարմ',
                img: 'new'
            },
            {
                label: 'Խառը',
                img: 'xary'
            }
        ]
        
        vm.goTo = goTo;
        
        function goTo(urlName) {
            if(false) {
                $state.go(urlName);
            }
            else {
                $mdDialog.show({
                    controller: 'LoginController as vm',
                    templateUrl: 'components/accounts/login.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true
                })
            }
        }
    }

})();


(function () {
    'use strict';

    angular
        .module('app.articles')
        .directive('articles', articles);

    articles.$inject = [];

    /* @ngInject */
    function articles() {
        var directive = {
            bindToController: true,
            template:
            `<md-content flex layout="column" class="articles" scrollbar>
                <md-content flex="100" layout="row" layout-align="center">
                    <md-content flex-sm="95" flex-gt-xs="35">
                        <magazine magaz="home.magaz" ng-if="home.magaz"></magazine>
                        <md-divider ng-if="home.magaz"></md-divider>
                        <div infinite-scroll="home.loadArticles()" infinite-scroll-distance="1">
                        <md-card ng-repeat-start="article in home.articles track by article.id">
                            <md-card-header>
                                <md-card-avatar>
                                    <img class="md-user-avatar" ng-src="{{ article.magazine_details.main_pic }}">
                                </md-card-avatar>
                                <md-card-header-text>
                                    <span class="md-title">
                                        <a ui-sref="magazine({slug: article.magazine_details.slug})" class="innerLink">{{ article.magazine_details.title }}</a>
                                        <span flex></span>
                                        <span class="rightFloat">{{ article.created | date : "mediumDate" | armenianDate }}</span>
                                    </span>
                                <span class="md-subhead">
                                    <a href="{{ article.magazine_details.website }}" class="outerLink" target="_blank">
                                        {{ article.magazine_details.site_name }}
                                    </a>
                                </span>
                                </md-card-header-text>
                            </md-card-header>
                            <a href="{{ article.reference }}" ng-click="home.viewArticle(article)" class="in-article-link" target="_blank">
                                <img ng-src="{{ article.image }}" class="md-card-image" alt="image caption">
                    
                                <md-card-title>
                                    <md-card-title-text>
                                        <span class="md-subhead">
                                            {{ article.title }}
                                        </span>
                                    </md-card-title-text>
                                </md-card-title>
                            </a>
            
                            <md-card-actions layout="row" layout-align="space-between center">
                                <md-card-content>
                                    <md-icon md-svg-src="assets/img/label.svg" class="color-icon"></md-icon>
                                    <a href="" class="outerLink" ng-repeat="topic in article.topics">
                                        {{ topic.title }}<span ng-if="$index + 1 < article.topics.length">,&nbsp;</span>
                                    </a>
                                </md-card-content>
                    
                            <div>
                            <md-button class="md-icon-button" aria-label="Later" ng-click="home.store(article)">
                                <md-tooltip md-direction="bottom">{{ article.is_saved ? 'Հեռացնել' : 'Դիտել Հետո' }}</md-tooltip>
                                <md-icon md-svg-icon="assets/img/bookmark-add{{ article.is_saved ? '-fill' : '' }}.svg" class="color-icon"></md-icon>
                            </md-button>
                        <md-button class="md-icon-button" aria-label="Share" ng-click="home.share(article)">
                            <md-tooltip md-direction="bottom">Կիսվել</md-tooltip>
                            <md-icon md-svg-icon="assets/img/share.svg"></md-icon>
                        </md-button>
                            </div>
                        </md-card-actions>
                        </md-card>
                        <topics ng-repeat-end ng-if="!(($index + 1) % 3)"></topics>
                        <md-progress-circular layout-align="center center" layout="column" md-diameter="100" md-mode="indeterminate"></md-progress-circular>
                        </div>
            </md-content>
                </md-content>
            </md-content>`,
            controller: ArticleController,
            controllerAs: 'home',
            link: link,
            restrict: 'E',
            scope: {
                articles: '=',
                loadArticles: '&',
                magaz: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    ArticleController.$inject = ['articleActions', '$rootScope'];

    /* @ngInject */
    function ArticleController(articleActions, $rootScope) {
        var vm = this;

        vm.share = articleActions.share;
        vm.store = articleActions.store;
        vm.viewArticle = $rootScope.isAuth ? articleActions.viewAsAuth : articleActions.viewAsNotAuth;
    }

})();


(function () {
    'use strict';

    angular
        .module('app.magazines')
        .directive('magazine', magazine);

    magazine.$inject = [];

    /* @ngInject */
    function magazine() {
        var directive = {
            controllerAs: 'magazine',
            template: `
                        <md-card>
                            <a ui-sref="magazine({slug: magazine.magaz.slug})" ng-click="home.viewArticle(article)" class="in-article-link">
                                <img ng-src="{{ magazine.magaz.main_pic }}" height="400px" class="md-card-image" alt="image caption">
                                <md-card-title>
                                    <md-card-title-text>
                                        <span class="md-subhead">
                                            {{ magazine.magaz.title }}
                                        </span>
                                        
                                    </md-card-title-text>
                                </md-card-title>
                            </a>
            
                            <md-card-actions layout="row" layout-align="space-between center">
                                <md-card-content>
                                    <a class="md-icon-button social" ng-href="{{ magazine.magaz.facebook }}" target="_blank" ng-if="magazine.magaz.facebook" aria-label="Later">
                                        <md-tooltip md-direction="bottom">Facebook</md-tooltip>
                                        <md-icon md-svg-icon="assets/img/facebook.svg" class="color-icon"></md-icon>
                                    </a>
                            
                                    <a class="md-icon-button social" ng-href="{{ magazine.magaz.twitter }}" target="_blank" ng-if="magazine.magaz.twitter" aria-label="Later">
                                        <md-tooltip md-direction="bottom">Twitter</md-tooltip>
                                        <md-icon md-svg-icon="assets/img/twitter.svg" class="color-icon"></md-icon>
                                    </a>
                            
                                    <a class="md-icon-button social" ng-href="{{ magazine.magaz.vk }}" target="_blank" ng-if="magazine.magaz.vk" aria-label="Later">
                                        <md-tooltip md-direction="bottom">VK</md-tooltip>
                                        <md-icon md-svg-icon="assets/img/vk.svg" class="color-icon"></md-icon>
                                    </a>
                            
                                    <a class="md-icon-button social" ng-href="{{ magazine.magaz.instagram }}" target="_blank" ng-if="magazine.magaz.instagram" aria-label="Later">
                                        <md-tooltip md-direction="bottom">Instagram</md-tooltip>
                                        <md-icon md-svg-icon="assets/img/instagram.svg" class="color-icon"></md-icon>
                                    </a>
                                </md-card-content>
                                <md-card-content>
                                        <md-button class="md-icon-button float-right" aria-label="Share" ng-click="magazine[magazine.magaz.is_subscribed ? 'unsubscribe' : 'subscribe']()">
                                            <md-tooltip md-direction="bottom">
                                                {{ magazine.magaz.is_subscribed ? 'Ապաբաժանորդագրվել' : 'Բաժանորդագրվել' }}
                                            </md-tooltip>
                                            <md-icon md-svg-icon="assets/img/{{ magazine.magaz.is_subscribed ? \'topic-added\' : \'add-topic\'}}.svg"></md-icon>
                                        </md-button>
                                </md-card-content>
                                
                        </md-card-actions>
                        </md-card>`,
            link: link,
            restrict: 'E',
            bindToController: true,
            controller: MagazineController,
            scope: {
                magaz: '=',
            }
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    MagazineController.$inject = ['magazineActions', '$rootScope'];

    /* @ngInject */
    function MagazineController(magazineActions, $rootScope) {
        var vm = this;

        vm.subscribe = subscribe;
        vm.unsubscribe = unsubscribe;

        function subscribe() {
            return magazineActions.subscribe(vm.magaz);
        }

        function unsubscribe() {
            return magazineActions.unsubscribe(vm.magaz);
        }
    }


})();


(function () {
    'use strict';

    angular
        .module('app.sidebar')
        .directive('sidebarContent', sidebarContent);

    sidebarContent.$inject = ['$state', '$mdDialog'];

    /* @ngInject */
    function sidebarContent($state, $mdDialog) {
        var directive = {
            template: '<md-content layout-padding >' +
            '<md-list>' +
                '<md-subheader>' +
                    '<md-icon md-svg-src="assets/img/person.svg"></md-icon>' +
                        'Անձնական' +
                '</md-subheader>' +
                '<md-list-item ng-repeat="item in ::vm.personal">' +
                        '<md-button href="" ui-sref="{{ item.url }}">' +
                            '<md-icon md-svg-src="assets/img/{{ item.img }}.svg"></md-icon>' +
                            '{{ item.label }}' +
                        '</md-button>' +
                '</md-list-item>' +
                '<md-subheader hide-gt-xs>' +
                    '<md-icon md-svg-src="assets/img/people.svg"></md-icon>' +
                        'Ընդհանուր' +
                '</md-subheader>' +
                '<md-list-item hide-gt-xs ng-repeat="item in ::vm.overall">' +
                    '<md-button href="">' +
                        '<md-icon md-svg-src="assets/img/{{ item.img }}.svg"></md-icon>' +
                        '{{ item.label }}' +
                    '</md-button>' +
                '</md-list-item>' +
            '</md-list>' +
        '</md-content>',
            bindToController: true,
            controller: SidebarContentController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    SidebarContentController.$inject = ['$state', '$mdDialog'];
    function SidebarContentController($state, $mdDialog) {
        var vm = this;

        vm.personal = [
            {
                label: 'Իմ Հետաքրքրություները',
                img: 'label',
                url: 'topics.list'
            },
            {
                label: 'Լրատվականներ',
                img: 'globe'
            },
            {
                label: 'Դիտել Հետո',
                img: 'bookmark-add'
            },
            {
                label: 'Պատմություն',
                img: 'history',
                url: 'history'
            }
        ];

        vm.overall = [
            {
                label: 'Ռեյթինգային',
                img: 'trending'
            },
            {
                label: 'Թարմ',
                img: 'new'
            },
            {
                label: 'Խառը',
                img: 'xary'
            }
        ];

    }

})();


(function () {
    'use strict';

    angular
        .module('app.utils')
        .filter('armenianDate', armenianDate);

    function armenianDate() {
        return armenianDateFilter;

        function armenianDateFilter(parameters) {
            var mappings = {
                'Jan': 'Հունվարի',
                'Feb': 'Փետրվարի',
                'Mar': 'Մարտի',
                'Apr': 'Ապրիլի',
                'May': 'Մայիսի',
                'Jun': 'Հունիսի',
                'Jul': 'Հուլիսի',
                'Aug': 'Օգոստոսի',
                'Sep': 'Սեպտեմբերի',
                'Oct': 'Հոկտեմբերի',
                'Nov': 'Նոյեմբերի',
                'Dec': 'Դեկտեմբերի'
            };
            
            var key = '';

            angular.forEach(mappings, function (k, month) {
                if(parameters.indexOf(month) != -1){
                    key = month;
                }
            });
            
            return parameters.replace(key, mappings[key]);
        }
    }

})();


(function () {
    'use strict';

    angular
        .module('app.utils')
        .directive('scrollDirection', scrollDirection);

    scrollDirection.$inject = ['$rootScope'];

    /* @ngInject */
    function scrollDirection($rootScope) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            window.addEventListener('mousewheel', function(e){
                $rootScope.scrollDir = e.wheelDelta < 0 ? 'down' : 'up';
            });
        }
    }

})();

