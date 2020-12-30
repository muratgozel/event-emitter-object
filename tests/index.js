const assert = require('assert')
const colors = require('colors')
const EventEmitterFactory = require('../src')

const emitter = EventEmitterFactory.create()
emitter.on('updatedCart', function() {
  return 'ok'
})

let results = emitter.emit('updatedCart')
assert.ok(Array.isArray(results))
assert.ok(results.length == 1)
assert.ok(results[0] == 'ok')

emitter.on('updatedCart', function() {
  return 'yes'
})
emitter.on('updatedProfile', function() {
  return 'ok'
})

results = emitter.emit('updatedCart')
assert.ok(Array.isArray(results))
assert.ok(results.length == 2)
assert.ok(results[0] == 'ok')
assert.ok(results[1] == 'yes')

results = emitter.emit('updatedProfile')
assert.ok(Array.isArray(results))
assert.ok(results.length == 1)
assert.ok(results[0] == 'ok')

emitter.on('updatedCart', function() {
  return 'done'
}, {once: true})
results = emitter.emit('updatedCart')
assert.ok(results.length == 3)
assert.ok(results[0] == 'ok')
assert.ok(results[1] == 'yes')
assert.ok(results[2] == 'done')

results = emitter.emit('updatedCart')
assert.ok(results.length == 2)
assert.ok(results[0] == 'ok')
assert.ok(results[1] == 'yes')

console.log('All tests pass.'.green)
