'use strict';

const app = angular.module('MEAN', ['ngRoute'])
  .config(($routeProvider) => {

    $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'partials/main.html'
    })
    .when('/chat', {
      controller: 'ChatCtrl',
      templateUrl: 'partials/chat.html'
    })

  });
