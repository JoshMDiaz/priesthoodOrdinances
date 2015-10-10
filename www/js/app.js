'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.administering-sick', {
    url: '/administering-sick',
    views: {
      'menuContent': {
        templateUrl: 'templates/administering-sick.html'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.all-ordinances', {
    url: '/all-ordinances',
    views: {
      'menuContent': {
        templateUrl: 'templates/all-ordinances.html'
      }
    }
  })

  .state('app.baptism-confirmation', {
      url: '/baptism-confirmation',
      views: {
        'menuContent': {
          templateUrl: 'templates/baptism-confirmation.html'
        }
      }
    })

    .state('app.conferring-priesthood-ordaining-office', {
      url: '/conferring-priesthood-ordaining-office',
      views: {
        'menuContent': {
          templateUrl: 'templates/conferring-priesthood-ordaining-office.html'
        }
      }
    })

    .state('app.consecrating-oil', {
      url: '/consecrating-oil',
      views: {
        'menuContent': {
          templateUrl: 'templates/consecrating-oil.html'
        }
      }
    })

    .state('app.dedicating-graves', {
      url: '/dedicating-graves',
      views: {
        'menuContent': {
          templateUrl: 'templates/dedicating-graves.html'
        }
      }
    })

    .state('app.dedicating-homes', {
      url: '/dedicating-homes',
      views: {
        'menuContent': {
          templateUrl: 'templates/dedicating-homes.html'
        }
      }
    })

    .state('app.father-other-blessings', {
      url: '/father-other-blessings',
      views: {
        'menuContent': {
          templateUrl: 'templates/father-other-blessings.html'
        }
      }
    })

    .state('app.naming-blessing-children', {
      url: '/naming-blessing-children',
      views: {
        'menuContent': {
          templateUrl: 'templates/naming-blessing-children.html'
        }
      }
    })

    .state('app.patriarchal-blessings', {
      url: '/patriarchal-blessings',
      views: {
        'menuContent': {
          templateUrl: 'templates/patriarchal-blessings.html'
        }
      }
    })

    .state('app.sacrament', {
      url: '/sacrament',
      views: {
        'menuContent': {
          templateUrl: 'templates/sacrament.html'
        }
      }
    })

    .state('app.setting-apart-officers-teachers', {
      url: '/setting-apart-officers-teachers',
      views: {
        'menuContent': {
          templateUrl: 'templates/setting-apart-officers-teachers.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
