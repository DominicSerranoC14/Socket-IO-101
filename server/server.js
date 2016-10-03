'use strict';

const express = require('express');
const socketio = require('socket.io');
const app = express();
const { Server } = require('http');
const server = Server(app);
const io = socketio(server);
const { connect } = require('./db/database');
const { json } = require('body-parser');
const port = process.env.PORT || 3000;
const Message = require('./models/message');
app.set('port', port);
/////////////////////////////////////////


/////////////////////////////////////////
//Middle wares
//Express.static is based on where 'server.js' is called
app.use(express.static('client'));
app.use(json());
/////////////////////////////////////////


/////////////////////////////////////////
// Routes
app.get('/api/title', (req, res) => {
  res.json({title: 'MEAN Chat'});
});

//Find all messages and display from db
app.get('/api/messages', (req, res, err) => {
  Message.find()
  .then((messages) => res.json({messages}))
  .catch(err)
});


//Handle a front-end posted msg
app.post('/api/messages', (req, res, err) => {
  const msg = req.body;

  Message.create(msg)
  .then(msg => res.json(msg))
  .catch(err);
});


//Middleware catch for virtual urls when using 'html5Mode' in Angular
app.use('/api', (req, res) => {
  res.status(404).send({message: 'Not found'});
});

app.use((req, res) => {
  res.sendFile(process.cwd() + '/client/index.html');
});
/////////////////////////////////////////


/////////////////////////////////////////
connect()
  .then(() => {
    server.listen(port, () => console.log(`Listening on port ${port}`));

    //Socket io logic for serverside handling -- handles specific socket
    io.on('connection', (socket) => {

      console.log("User signed in", socket.id);
      socket.on('disconnect', () => console.log('User disconnected'))

    });


  });
/////////////////////////////////////////
