# Javascript Event Listener Object

A simple event emitter object that you can plug into your javascript libraries.

API is very similar to [the node.js events][305ab206].

  [305ab206]: https://nodejs.org/api/events.html "node.js events api"

## Install

```sh
npm install js-event-emitter
```

## Import

The default file imported by the module is polyfilled, bundled `dist/index.js` file:

```js
const EventEmitter = require('js-event-emitter')
```

If you already have a compiler like babel or already polyfilling your codebase, using `./source/index.js` recommended.

```js
const EventEmitter = require('js-event-emitter/source')
```

## Use

Let's say you have a state manager object to control the state of your app.

```js
function StateManager() {}
StateManager.prototype.updateState = function updateState(payload) {
  // update state
  // ...
  // and inform listeners that the state has just updated
  this.emit('update')
}
module.exports = StateManager
```

To plug event emitter into your state manager:

```js
StateManager.prototype = Object.assign({}, StateManager.prototype, EventEmitter.prototype)
```

Now, you can listen and emit events within your state manager:

```js
const state = new StateManager()
state.on('update', function() {
  console.log('State updated!')
})
```

## API

### on(eventName, callback, opts)

Registers a new listener for a certain event.

```js
emitter.on('someEvent', function() {
  console.log('Some event happened in some emitter.')
}, {
  once: true // default is false
})
```

### once(eventName, callback)

This is a shortcut for the `on` method with `{once: true}`:

```js
// instead of doin this:
emitter.on('someEvent', function(){}, {once: true})
// you can do this:
emitter.once('someEvent', function(){})
```

### emit(eventName, args)

Emits a certain event with arguments.

```js
emitter.emit('someEvent')

// or with arguments
emitter.on('anotherEvent', function(arg1, arg2) {
  console.log('Another event emitted with arguments: ', arg1, arg2)
})
emitter.emit('anotherEvent', ['hello', 'world'])
```

### removeListeners(eventName)

Removes all listeners that belong to a certain event.

```js
emitter.removeListeners('someEvent')
```

### flush()

Removes all events and listeners.

```js
emitter.flush()
```
