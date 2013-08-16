// app.js launches this if the command is "start"

var argv = require('optimist').argv;
var fs = require('fs');

fs.writeFileSync("/tmp/test", JSON.stringify(argv));

var express = require('express');
var app = express();

var content = argv.content || __dirname + '/public';

app.use(express.static(content));

// The user might not be trying to access the home page. Deliver all
// other pages using the same static content without changing the URL in
// the browser, so that once the site is back they are refreshed to the
// correct page. Cache it in memory for performance. Note this means
// you must restart standby if you edit index.html and wish to see
// those edits

var page = fs.readFileSync(content + '/index.html');
app.get('*', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  return res.send(page);
});

app.listen(argv._[1]);
