# node-server-script

One command to setup NodeJS server side developer environment. Edit
Add topics

# What inside

* simple say is forever + babel.
* [chokidar](https://github.com/paulmillr/chokidar), like forever, whatch your file and auto restart your server when you changed files.
* [babel](https://github.com/babel/babel) whith presets : `es2015`, `flow`

# What provide

* ES7 syntax.
* [flow](https://flow.org) type check.
* auto restart your app when you changed files.
* simple start : `npm start`

# Usage

* first install package

```
npm install --save-dev git+https://github.com/iineva/node-server-script
```

* then add to package.json `scripts`

```
  "start": "server-script start"
```

* and run your app

```
npm start
```
