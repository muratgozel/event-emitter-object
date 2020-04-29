const Object = require('../dist/event-emitter-object.cjs.js')

test('Initial events.', () => {
  const obj = new Object()
  expect(obj._events).toMatchObject({})

  const obj2 = new Object({
    sample1: function() {
      return '1'
    }
  })
  expect(obj2._events).toMatchObject({
    sample1: [{
      once: false
    }]
  })
})

test('Register events.', () => {
  const obj = new Object()
  obj.on('sample1', function() {return 'A'})
  const results = obj.emit('sample1')
  expect(results).toHaveLength(1)
  expect(results[0]).toBe('A')

  obj.on('sample1', function() {return 'A2'})
  const results2 = obj.emit('sample1')
  expect(results2).toHaveLength(2)
  expect(results2[1]).toBe('A2')

  obj.on('sample2', function() {return 'B'})
  const results3 = obj.emit('sample2')
  expect(results3).toHaveLength(1)
  expect(results3[0]).toBe('B')
})

test('One time events.', () => {
  const obj = new Object()
  obj.on('sample1', function() {return 'A'})
  obj.on('sample1', function() {return 'B'}, {once: true})
  obj.on('sample1', function() {return 'C'})
  const results = obj.emit('sample1')
  expect(results).toHaveLength(3)
  expect(results[0]).toBe('A')
  expect(results[1]).toBe('B')
  expect(results[2]).toBe('C')

  const results2 = obj.emit('sample1')
  expect(results2).toHaveLength(2)
  expect(results2[0]).toBe('A')
  expect(results2[1]).toBe('C')
})
