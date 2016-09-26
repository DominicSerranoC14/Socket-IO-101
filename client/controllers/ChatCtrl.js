'use strict';

  app.controller('ChatCtrl', function ($scope, $http) {

    //Receive the array of messages
    $http.get('/api/messages').then(({data: {messages}}) => {
      $scope.messages = messages;
    });

  });
