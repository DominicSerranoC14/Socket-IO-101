'use strict';

  app.controller('ChatCtrl', function ($scope, $http) {

    /////////////////////////////////////////
    //Receive the array of messages
    $http.get('/api/messages').then(({data: {messages}}) => {
      $scope.messages = messages;
    });


    $scope.sendMessage = () => {

      //Store the users message and name from the form
      const msg = { author: $scope.author, content: $scope.content};

      //Send the msg obj to the api
      //Then push the msg to the array to display in the angular html
      $http.post('/api/messages', msg)
      .then(() => $scope.messages.push(msg));

    };
    /////////////////////////////////////////


  });
