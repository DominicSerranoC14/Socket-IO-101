'use strict';

  app.controller('MainCtrl', function ($scope, $http) {

    //Receive a var with $http from Node sever
    $http.get('/api/title').then(({data: {title}}) =>
      $scope.title = title
    );

  });
