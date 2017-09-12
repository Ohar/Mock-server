const express = require('express'),
      config  = require('./config');

const app            = express(),
      mockedResponse = 'Hello world!'

app.get(
    '/',
    (req, res) => {
        const request  = `< ${req.url}`,
              response = `> ${mockedResponse}`

        console.log(request);
        console.log(response);

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

        res.send(mockedResponse)
    }
)

app.listen(
    config.port,
    () => {
        console.log(`Express server listening on port ${config.port}`)
    }
)
