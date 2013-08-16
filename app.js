var fs = require('fs');
var argv = require('optimist').argv;

if (argv._.length !== 2) {
  usage();
}

var command = argv._[0];

var port = argv._[1];

if (!port.toString().match(/^\d+$/)) {
  usage();
}

var daemon = require("daemonize2").setup({
    main: "serve.js",
    name: "standby-" + port,
    pidfile: "/tmp/standby-" + port + ".pid"
});

switch (command) {
  case "start":
    daemon.start();
    break;

  case "stop":
    daemon.stop();
    break;

  default:
    usage();
}

function usage() {
  console.error('Usage: standby start|stop port-number');
  process.exit(1);
}
