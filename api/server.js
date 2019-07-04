var express = require('express');
var bodyParser = require('body-parser');
var redis = require('./redisclient.js');

const PORT = process.env.PORT || 8080;
const KEY_EXPIRY = process.env.KEY_EXPIRY || 1800;
const WELLAND_CANAL_KEY = process.env.WELLAND_CANAL_KEY || 'WELLAND_CANAL_REDIS_STORAGE_KEY';

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile('views/index.html', { root: __dirname })
});

app.get('/bridges', function (req, res) {
  try {
    let client = redis.createClient();

    client.get(WELLAND_CANAL_KEY, function (error, result) {
      if (error) throw error;

      client.quit();
      res.status(200).send(result);
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post('/update_bridge_status', function (req, res) {
  try {
    var payload = req.body.payload;

    let client = redis.createClient();

    client.set(WELLAND_CANAL_KEY, payload);
    client.expire(WELLAND_CANAL_KEY, KEY_EXPIRY);

    client.quit();
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});