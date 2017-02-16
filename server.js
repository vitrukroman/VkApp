'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var Horseman = require('node-horseman');
var horseman = new Horseman();

let token;

if (!process.env.email || !process.env.pass) {
  throw "Require credentials";
}

horseman
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open([
    'https://oauth.vk.com/authorize?',
    'client_id=5585106&',
    'display=mobile&',
    'redirect_uri=https://oauth.vk.com/blank.html&',
    'scope=wall&',
    'response_type=token&'
  ].join(''))
  .waitForSelector('input[type=submit]')
  .waitForSelector('input[name=email]')
  .type('input[name=email]', process.env.email)
  .type('input[name=pass]', process.env.pass)
  .waitForSelector('input[type=submit]')
  .click('input[type=submit]')
  .waitForNextPage()
  .url()
  .then(url => {
    console.log('url', url);
    const matches = url.match(/access_token=(\w+)/);
    if (matches) {
      token = matches[1];
      console.log('token', token);
    }

    horseman.close();
  }, e => console.error(e));


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(token);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
