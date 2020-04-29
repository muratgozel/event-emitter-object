function EventEmitter(initialEvents) {
  this._events = {}
  this.checkInitialEvents(initialEvents)
}

EventEmitter.prototype.checkInitialEvents = function checkInitialEvents(events = null) {
  const self = this

  if (Object.prototype.toString.call(events) === '[object Object]') {
    const names = Object.keys(events)
    if (names.length > 0) {
      names.map(function(name) {
        self.on(name, events[name])
      })
    }
  }
}

EventEmitter.prototype.on = function on(name, fn, _opts = null) {
  if (typeof fn != 'function' || typeof name != 'string') return undefined;

  if (!this._events.hasOwnProperty(name)) this._events[name] = []

  const opts = Object.assign({},
    {once: false},
    Object.prototype.toString.call(_opts) === '[object Object]' ? _opts : {}
  )
  const e = Object.assign({}, opts, {fn: fn})

  this._events[name] = this._events[name].concat([e])

  return true
}

EventEmitter.prototype.once = function once(name, fn) {
  return this.on(name, fn, {once: true})
}

EventEmitter.prototype.emit = function emit(name, _args = []) {
  const self = this
  if (typeof name != 'string') return undefined;
  if (!self._events.hasOwnProperty(name)) return undefined;
  if (self._events[name].length < 1) return undefined;

  const args = Array.isArray(_args) ? _args : [_args]
  const results = self._events[name].map(function(obj) {
    return obj.fn.apply(self, args)
  })

  self._events[name] = self._events[name].filter(function(obj) {
    return obj.once === false
  })

  return results
}

EventEmitter.prototype.removeEvent = function removeEvent(eventName) {
  if (typeof eventName != 'string') return false;
  if (!this._events.hasOwnProperty(eventName)) return false

  this._events[eventName] = []

  return true
}

EventEmitter.prototype.flush = function flush() {
  this._events = {}
}

module.exports = EventEmitter
