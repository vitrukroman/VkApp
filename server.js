'use strict';

const http = require('http');
var webdriverio = require('webdriverio');

const hostname = '127.0.0.1';
const port = 3000;


let token;

var options = { desiredCapabilities: { browserName: 'phantomjs'}};
var client = webdriverio.remote(options);

if (!process.env.email || !process.env.pass) {
  throw "Require credentials";
}

client
  .init()
  .url([
    'https://oauth.vk.com/authorize?',
    'client_id=5585106&',
    'display=mobile&',
    'redirect_uri=https://oauth.vk.com/blank.html&',
    'scope=wall&',
    'response_type=token&'
  ].join(''))
  .setValue('input[name=email]', process.env.email)
  .setValue('input[name=pass]', process.env.pass)
  .submitForm('form')
  .getUrl()
  .then(url => token = url.match(/access_token=(\w+)/)[1])
  .then(token => {
    console.log(token);
    return token;
  })
  .end();


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(token);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
