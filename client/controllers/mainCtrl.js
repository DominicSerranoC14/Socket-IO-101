'use strict';

  app.controller('mainCtrl', ($scope, $http) => {

    //Receive a var with $http from Node sever
    $http.get('/api/title').then(({data: {title}}) =>
      $scope.title = title
    );

  });
