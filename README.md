# server-script

One command to setup NodeJS modern runtime. inspired by [create-react-app](https://github.com/facebookincubator/create-react-app)

# What provide

* zero config.
* ES7 syntax.
* [flow](https://flow.org) type check.
* auto restart your app when you changed files.
* simple start : `npm start`

# What inside

* simple say is forever + babel.
* [chokidar](https://github.com/paulmillr/chokidar), like watchman.
* [babel](https://github.com/babel/babel) whith presets : `es2015`, `flow`

# Usage

```
npm install -g server-script
cd <YOUR PROJECT DIR>
# make sure your app entrance is index.js
server-script start
```

# Or use with npm start

* first install package

```
npm install --save-dev server-script
```

* add to package.json `scripts`

```
  "start": "server-script start"
```

* and run your app

```
npm start
```
