const express = require('express');
const ks = require('node-key-sender');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/key/:code', (req, res) => {
  console.log('key:', +req.params.code + 32);
  ks.sendKey(String.fromCharCode(+req.params.code + 32));
  res.send('ok');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
