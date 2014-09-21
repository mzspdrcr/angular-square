
'use strict';

/**
 * @ngdoc overview
 * @name owlApp
 * @description
 * # owlApp
 *
 * Main module of the application.
 */
angular
  .module('owlApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'app.controllers',
    'app.localization',
    'app.task',
    'app.chart.ctrls',
    'app.map',
    'app.form.validation',
    'app.page.ctrls',
    'app.tables',
    'app.ui.ctrls',
    'app.ui.directives',
    'app.ui.services',
    'ui.bootstrap',
    'mgo-angular-wizard',
    'textAngular',
    'ui.tree',
    'ngMap',
    'ngTagsInput',
    'app.directives',
    'app.ui.form.ctrls',
    'app.ui.form.directives',
    'app.tables',
    'app.chart.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contracts', {
        templateUrl: 'views/contracts.html',
        controller: 'ContractsCtrl'
      })
      .when('/404', {
        templateUrl: 'views/pages/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
