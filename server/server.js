'use strict';

const express = require('express');
const app = express();
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
/////////////////////////////////////////


/////////////////////////////////////////
connect()
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  });
/////////////////////////////////////////
