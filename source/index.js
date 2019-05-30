function EventEmitter() {}

EventEmitter.prototype.events = {}

EventEmitter.prototype.eventsWillBeFiredOnce = {}

EventEmitter.prototype.isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

EventEmitter.prototype.on = function on(eventName, fn, _opts = null) {
  if (typeof fn != 'function' || typeof eventName != 'string') {
    return false
  }

  if (!this.events.hasOwnProperty(eventName)) {
    this.events[eventName] = []
  }

  if (!this.eventsWillBeFiredOnce.hasOwnProperty(eventName)) {
    this.eventsWillBeFiredOnce[eventName] = []
  }

  const opts = this.isObject(_opts) ? _opts : {once: false}

  const newLength = this.events[eventName].push(fn)

  if (opts.once && opts.once === true) {
    this.eventsWillBeFiredOnce[eventName].push( newLength - 1 )
  }

  return true
}

EventEmitter.prototype.once = function once(eventName, fn) {
  this.on(eventName, fn, {once: true})
}

EventEmitter.prototype.emit = function emit(eventName, _args = []) {
  if (!this.events.hasOwnProperty(eventName)) {
    if (eventName == 'error') {
      const err = _args instanceof Error ? _args : new Error('Unhandled error.')
      throw err
    }

    return false
  }

  const args = Array.isArray(_args) ? _args : [_args]

  for (let i = 0; i < this.events[eventName].length; i++) {
    this.events[eventName][i].apply(this, args)
  }

  if (this.eventsWillBeFiredOnce.hasOwnProperty(eventName)) {
    for (var j = 0; j < this.eventsWillBeFiredOnce[eventName].length; j++) {
      this.removeListener(eventName, this.eventsWillBeFiredOnce[eventName][j])
    }
  }

  return true
}

EventEmitter.prototype.removeListener = function removeListener(eventName, index) {
  this.events[eventName].splice(index, 1)
}

EventEmitter.prototype.removeListeners = function removeListeners(eventName) {
  if (typeof eventName != 'string') {
    return false
  }

  if (!this.events.hasOwnProperty(eventName)) {
    return false
  }

  this.events[eventName] = []

  if (this.eventsWillBeFiredOnce.hasOwnProperty(eventName)) {
    this.eventsWillBeFiredOnce[eventName] = []
  }

  return true
}

EventEmitter.prototype.flush = function flush() {
  this.events = {}
  this.eventsWillBeFiredOnce = {}
}

module.exports = EventEmitter
