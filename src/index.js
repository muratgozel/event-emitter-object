function EventEmitterFactory() {
  const validEventOpts = ['once']

  function EventEmitter(initialEvents=null) {
    const state = {
      _events: {},
    }

    if (Object.prototype.toString.call(initialEvents) === '[object Object]') {
      loadInitialEvents(initialEvents)
    }

    function loadInitialEvents(events) {
      Object.keys(events).map(function(name) {
        on(name, events[name])
      })
    }

    function on(name, fn, opts=null) {
      if (!state._events.hasOwnProperty(name)) {
        state._events[name] = []
      }

      const eventObj = {}
      if (Object.prototype.toString.call(opts) === '[object Object]') {
        Object.keys(opts)
          .filter(function(opt) { return validEventOpts.indexOf(opt) !== -1; })
          .map(function(opt) { eventObj[opt] = opts[opt]; })
      }
      eventObj.fn = fn

      state._events[name].push(eventObj)
    }

    function once(name, fn) {
      on(name, fn, {once: true})
    }

    function emit(name, args=undefined) {
      if (!state._events.hasOwnProperty(name)) {
        return []
      }

      const results = []
      const willRemove = []
      for (let i = 0; i < state._events[name].length; i++) {
        const eventObj = state._events[name][i]
        if (eventObj.once === true) willRemove.push(i)
        const result = eventObj.fn.apply(null, args)
        results.push(result)
      }

      if (willRemove.length > 0) {
        cleanup(name, willRemove)
      }

      return results
    }

    function flush() {
      state._events = {}
    }

    function cleanup(name, indexes) {
      const newEvents = []
      for (let i = 0; i < state._events[name].length; i++) {
        if (indexes.indexOf(i) === -1) {
          newEvents.push(state._events[name][i])
        }
      }
      state._events[name] = newEvents
    }

    return {
      on: on,
      once: once,
      emit: emit,
      flush: flush
    }
  }

  return {
    create: EventEmitter
  }
}

module.exports = EventEmitterFactory()
