function EventEmitter(initialEvents) {
  const _initialEvents = initialEvents || {}
  const eventNames = Object.keys(_initialEvents)
  if (eventNames.length > 0) {
    this._events = eventNames.reduce(function(memo, eventName) {
      memo[eventName] = Array.isArray(_initialEvents[eventName])
        ? _initialEvents[eventName]
        : [_initialEvents[eventName]]
      return memo
    }, {})
  }
  else {
    this._events = {}
  }
}

EventEmitter.prototype._eventsWillBeFiredOnce = {}

EventEmitter.prototype.on = function on(eventName, fn, _opts = null) {
  if (typeof fn != 'function' || typeof eventName != 'string') {
    return false
  }

  if (!this._events.hasOwnProperty(eventName)) {
    this._events[eventName] = []
  }

  if (!this._eventsWillBeFiredOnce.hasOwnProperty(eventName)) {
    this._eventsWillBeFiredOnce[eventName] = []
  }

  const opts = Object.prototype.toString.call(_opts) === '[object Object]'
    ? _opts
    : {once: false}

  const newLength = this._events[eventName].push(fn)

  if (opts.once && opts.once === true) {
    this._eventsWillBeFiredOnce[eventName].push( newLength - 1 )
  }

  return true
}

EventEmitter.prototype.once = function once(eventName, fn) {
  return this.on(eventName, fn, {once: true})
}

EventEmitter.prototype.emit = function emit(eventName, _args = []) {
  if (!this._events.hasOwnProperty(eventName)) {
    if (eventName == 'error') {
      const err = _args instanceof Error ? _args : new Error('Unhandled error.')
      throw err
    }

    return false
  }

  const args = Array.isArray(_args) ? _args : [_args]

  for (let i = 0; i < this._events[eventName].length; i++) {
    this._events[eventName][i].apply(this, args)
  }

  if (this._eventsWillBeFiredOnce.hasOwnProperty(eventName)) {
    for (var j = 0; j < this._eventsWillBeFiredOnce[eventName].length; j++) {
      this.removeListener(eventName, this._eventsWillBeFiredOnce[eventName][j])
    }
  }

  return true
}

EventEmitter.prototype.removeListener = function removeListener(eventName, index) {
  this._events[eventName].splice(index, 1)
}

EventEmitter.prototype.removeListeners = function removeListeners(eventName) {
  if (typeof eventName != 'string') {
    return false
  }

  if (!this._events.hasOwnProperty(eventName)) {
    return false
  }

  this._events[eventName] = []

  if (this._eventsWillBeFiredOnce.hasOwnProperty(eventName)) {
    this._eventsWillBeFiredOnce[eventName] = []
  }

  return true
}

EventEmitter.prototype.flushEventEmitter = function flushEventEmitter() {
  this._events = {}
  this._eventsWillBeFiredOnce = {}
}

module.exports = EventEmitter
