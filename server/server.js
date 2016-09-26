'use strict';

const express = require('express');
const app = express();
const { connect } = require('./db/database');
const port = process.env.PORT || 3000;
const Message = require('./models/message');
app.set('port', port);
/////////////////////////////////////////


/////////////////////////////////////////
//Middle wares
//Express.static is based on where 'server.js' is called
app.use(express.static('client'));
/////////////////////////////////////////


/////////////////////////////////////////
// Routes
app.get('/api/title', (req, res) => {
  res.send({title: 'MEAN Chat'});
});


app.get('/api/messages', (req, res, err) => {
  Message.find()
    .then((messages) => res.json({messages}))
    .catch(err)
});
/////////////////////////////////////////


/////////////////////////////////////////
connect()
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  });
/////////////////////////////////////////
