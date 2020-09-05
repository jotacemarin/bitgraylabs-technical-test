/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-template */

const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/proxy', (req, res) => {
  const url = Object.keys(req.query)
    .map(key => key !== 'url' ? key + '=' + req.query[key] : req.query[key])
    .join('&');
  request(
    { url },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        res.status(500).json({ type: 'error', error });
      }

      const responseJSON = JSON.parse(body);
      console.log(responseJSON);

      res.status(200).json(responseJSON);
    }
  );
});

const PORT = 4000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));