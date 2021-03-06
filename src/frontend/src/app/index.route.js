(function() {
  'use strict';

  angular
    .module('frontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
        })
    .state('users', {
        url: '/users',
        templateUrl: 'app/user/users.html',
        controller: 'UserController',
        controllerAs: 'u'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
