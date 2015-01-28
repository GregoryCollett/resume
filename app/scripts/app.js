'use strict';

/**
 * @ngdoc overview
 * @name meApp
 * @description
 * # meApp
 *
 * Main module of the application.
 */
angular
  .module('meApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'akoenig.deckgrid',
    'scroll-animate-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
