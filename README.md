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
const EventEmitter = require('event-emitter-object')
```

or via script tag:

```html
<script src="https://unpkg.com/event-emitter-object@1/dist/event-emitter-object.iife.js" crossorigin type="text/javascript"></script>
```

but there are lots of other options. See distribution report below.

## Use

This is a pure javascript object which can be used as a super class of another objects or as a standalone.

### Using it as a standalone library

```js
const EventEmitter = require('event-emitter-object')

const logger = new EventEmitter()

logger.on('criticalError', function(err) {
  // send log to the server
})

if (resourceNotFound) {
  logger.emit('criticalError', [new Error('resourceNotFound')])
}
```

### Using as a super class

```js
const EventEmitter = require('event-emitter-object')

// A Logger object which inherits the methods of EventEmitter
const initialEvents = {} // you may not send this
function Logger() {
  EventEmitter.call(this, initialEvents)
}
Logger.prototype = Object.create(EventEmitter.prototype)
Logger.prototype.constructor = Logger

Logger.prototype.propertyYouWant = function() {}

// Initiate a logger for a particular type of logs
const errorLogger = new Logger()
errorLogger.on('error', function(err) {
  // send log to the server
})
if (resourceNotFound) {
  errorLogger.emit('error', [new Error('resourceNotFound')])
}
```

## API

### .on(eventName, callback, opts)

Registers a new listener for a certain event.

```js
emitter.on('someEvent', function() {
  console.log('Some event happened in some emitter.')
}, {
  once: true // default is false
})
```

### .once(eventName, callback)

This is a shortcut for the `on` method with `{once: true}`:

```js
// instead of doin this:
emitter.on('someEvent', function(){}, {once: true})
// you can do this:
emitter.once('someEvent', function(){})
```

### .emit(eventName, args)

Emits a certain event with arguments.

```js
emitter.emit('someEvent')

// or with arguments
emitter.on('anotherEvent', function(arg1, arg2) {
  console.log('Another event emitted with arguments: ', arg1, arg2)
})
emitter.emit('anotherEvent', ['hello', 'world'])
```

`.emit` returns the results of the listeners:
```js
function listener() {
  return 'hey'
}

function listener2() {
  return 'selam'
}

emitter.on('sampleEvent', listener)

const results = emitter.emit('sampleEvent')
// results === ['hey', 'selam']
```

### .removeEvent(eventName)

Removes all listeners belong to a certain event.

```js
emitter.removeEvent('someEvent')
```

### .flush()

Removes all events and listeners.

```js
emitter.flush()
```

## Distributions Report

This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "event-emitter-object.amd.js (1.29 KB)",
  "event-emitter-object.amd.polyfilled.js (11.68 KB)",
  "event-emitter-object.cjs.js (1.29 KB)",
  "event-emitter-object.cjs.polyfilled.js (11.68 KB)",
  "event-emitter-object.es.js (1.27 KB)",
  "event-emitter-object.es.polyfilled.js (11.67 KB)",
  "event-emitter-object.iife.js (1.31 KB)",
  "event-emitter-object.iife.polyfilled.js (11.70 KB)",
  "event-emitter-object.umd.js (1.46 KB)",
  "event-emitter-object.umd.polyfilled.js (11.85 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report

This is an auto-generated report that shows the pollyfils added by core-js based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[
  "es.symbol",
  "es.symbol.description",
  "es.symbol.iterator",
  "es.array.iterator",
  "es.object.get-prototype-of",
  "es.object.set-prototype-of",
  "es.object.to-string",
  "es.reflect.construct",
  "es.regexp.to-string",
  "es.string.iterator",
  "web.dom-collections.iterator",
  "es.object.set-prototype-of",
  "es.array.concat",
  "es.array.filter",
  "es.array.map",
  "es.object.assign",
  "es.object.keys",
  "es.object.to-string",
  "es.regexp.to-string"
]
// based on the targets:
{
  "android": "4.4.3",
  "chrome": "49",
  "edge": "17",
  "firefox": "52",
  "ie": "9",
  "ios": "9.3",
  "opera": "66",
  "safari": "11.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
