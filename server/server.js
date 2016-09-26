'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
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

app.get('/api/messages', (req, res) => {
  res.send({messages: [
    {
      author: 'Jack',
      content: 'Hello'
    },
    {
      author: 'John',
      content: 'Hey'
    }
  ]})
});
/////////////////////////////////////////


/////////////////////////////////////////
app.listen(port, () => console.log(`Listening on port ${port}`));
/////////////////////////////////////////
