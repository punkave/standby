# standby

<a href="http://apostrophenow.org/"><img src="https://raw.github.com/punkave/standby/master/logos/logo-box-madefor.png" align="right" /></a>

Standby is an incredibly simple server that just delivers a page saying your site will be back shortly. That's all!

Use it in your deployment scripts to put up a placeholder page on the port number of your node app while you are migrating data or performing other tasks that can't be done while the site is up.

The standby page will automatically refresh until your site comes back.

*The URL in the browser does not change,* so the user typically gets the page they wanted once the site is back up.

## How to Install

npm install -g standby

## How to Use

To display a standby page on port 3000:

    standby start 3000

To stop displaying a standby page on port 3000:

    standby stop 3000

To substitute your own static content in place of our standby page:

    standby start 3000 --content=/path/to/my/assets/folder

*The page displayed to the user will be `index.html` in the content folder.*

Note that you need to stop `standby` before launching your app again.

Standby uses files in `/tmp/standby` to keep track of what's already running. We use `/tmp` rather than `/var/run` because we hardly ever launch node apps as root.

### Requirements

You need node and npm, of course. That's about it.

## About P'unk Avenue and Apostrophe

`standby` was created at [P'unk Avenue](http://punkave.com) for use with sites built on Apostrophe, an open-source content management system built on node.js. If you like `standby` you should definitely [check out apostrophenow.org](http://apostrophenow.org). Also be sure to visit us on [github](http://github.com/punkave).

## Support

Feel free to open issues on [github](http://github.com/punkave/standby).

<a href="http://punkave.com/"><img src="https://raw.github.com/punkave/standby/master/logos/logo-box-builtby.png" /></a>

