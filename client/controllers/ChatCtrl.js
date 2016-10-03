'use strict';

  app.controller('ChatCtrl', function ($scope, $http) {

    //Clears the message form field
    $scope.clearMsgForm = () => {
      $scope.author = "";
      $scope.content = "";
    }


    $scope.sendMessage = () => {
      //Store the users message and name from the form
      const reqOrMsg = { author: $scope.author, content: $scope.content};

      //Emit the msg obj to the server
      socket.emit('PostMessage', reqOrMsg);
      $scope.clearMsgForm();
    };


    //Receive the array of messages
    $http.get('/api/messages').then(({data: {messages}}) => {
      $scope.messages = messages;

      socket.on('newMessage', (msg) => {
        $scope.messages.push(msg);
        //Use $apply for anything outside of angulars native modules to rerun the digest cycle
        $scope.$apply();
      });
    });


  });
