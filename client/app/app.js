'use strict';

const app = angular.module('MEAN', ['ngRoute'])
  .config(($routeProvider, $locationProvider) => {

    $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'partials/main.html'
    })
    .when('/chat', {
      controller: 'ChatCtrl',
      templateUrl: 'partials/chat.html'
    })
    .otherwise('/');

    //Cleans up the url, does not use '!#' in url
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  });
