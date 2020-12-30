# Javascript Event Emitter Object
A simple event emitter object that you can plug into your javascript libraries.

![NPM](https://img.shields.io/npm/l/event-emitter-object)
[![npm version](https://badge.fury.io/js/event-emitter-object.svg)](https://badge.fury.io/js/event-emitter-object)
![npm bundle size](https://img.shields.io/bundlephobia/min/event-emitter-object)
![npm](https://img.shields.io/npm/dy/event-emitter-object)

API is very similar to [the node.js events][305ab206].

  [305ab206]: https://nodejs.org/api/events.html "node.js events api"

## Install
```sh
npm install event-emitter-object
```

## Import
There are different types of distributions depending on your use case. Essentially, the package can be imported via require:
```js
const EventEmitterObject = require('event-emitter-object')
```
or via script tag:
```html
<script src="https://cdn.jsdelivr.net/npm/event-emitter-object@2/dist/event-emitter-object.iife.js" crossorigin type="text/javascript"></script>
```
but there are lots of other options. See distribution report below.

## Usage
Simple logger:
```js
const {create} = require('event-emitter-object')

const logger = create()

logger.on('criticalError', function(err) {
  // send log to the server
})

// ... when an error happens:
logger.emit('criticalError', new Error('resourceNotFound'))
```
When arguments and return values matter:
```js
const emailMessages = create()

emailMessages.on('emailMessage', function(recipient, subject, message) {
  // send an email and return the id of the sent message
  return {id: 1}
})

const results = emailMessages.emit('emailMessage', ['sample@example.com', 'Hey', 'Lorem ipsum.'])
// results == [{ok: 1}]
```
Return values are always array because multiple event functions can be attached to the same event:
```js
const emailMessages = create()

emailMessages.on('emailMessage', function(recipient, subject, message) {
  // send an email and return the id of the sent message
  return {id: 1}
})

emailMessages.on('emailMessage', function(recipient, subject, message) {
  return 'ok'
})

const results = emailMessages.emit('emailMessage', ['sample@example.com', 'Hey', 'Lorem ipsum.'])
// results == [{ok: 1}, 'ok']
```
An event that will be invoked by the emitter just once:
```js
const analytics = create()

analytics.on('view', function(id, title) {
  // save visitor and landing page info
  return 'done'
}, {once: true})

analytics.on('view', function(id, title) {
  // send page view to the analytics server
  return 'ok'
})

const results = analytics.emit('view', [1, 'Homepage'])
// results == ['done', 'ok']

const results2 = analytics.emit('view', [2, 'Contact'])
// results2 == ['ok']
```

## Distributions Report

This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "event-emitter-object.amd.js (1.11 KB)",
  "event-emitter-object.amd.polyfilled.js (10.69 KB)",
  "event-emitter-object.cjs.js (1.10 KB)",
  "event-emitter-object.cjs.polyfilled.js (10.70 KB)",
  "event-emitter-object.es.js (1.09 KB)",
  "event-emitter-object.es.polyfilled.js (10.69 KB)",
  "event-emitter-object.iife.js (1.13 KB)",
  "event-emitter-object.iife.polyfilled.js (10.70 KB)",
  "event-emitter-object.umd.js (1.32 KB)",
  "event-emitter-object.umd.polyfilled.js (10.90 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report

This is an auto-generated report that shows the pollyfils added by core-js based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[
  "es.object.get-prototype-of",
  "es.object.set-prototype-of",
  "es.array.filter",
  "es.array.index-of",
  "es.array.map",
  "es.object.keys",
  "es.object.to-string",
  "es.regexp.to-string"
]
// based on the targets:
{
  "chrome": "49",
  "edge": "18",
  "firefox": "78",
  "ie": "10",
  "ios": "9.3",
  "opera": "71",
  "safari": "5.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

---

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
