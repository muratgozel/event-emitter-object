define((function(){"use strict";function t(t){this._events={},this.checkInitialEvents(t)}return t.prototype.checkInitialEvents=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this;if("[object Object]"===Object.prototype.toString.call(t)){var n=Object.keys(t);n.length>0&&n.map((function(n){e.on(n,t[n])}))}},t.prototype.on=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if("function"==typeof e&&"string"==typeof t){this._events.hasOwnProperty(t)||(this._events[t]=[]);var o=Object.assign({},{once:!1},"[object Object]"===Object.prototype.toString.call(n)?n:{}),i=Object.assign({},o,{fn:e});return this._events[t]=this._events[t].concat([i]),!0}},t.prototype.once=function(t,e){return this.on(t,e,{once:!0})},t.prototype.emit=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=this;if("string"==typeof t&&n._events.hasOwnProperty(t)&&!(n._events[t].length<1)){var o=Array.isArray(e)&&e.length>0?e:void 0!==e?[e]:void 0,i=n._events[t].map((function(t){return t.fn.apply(n,o)}));return n._events[t]=n._events[t].filter((function(t){return!1===t.once})),i}},t.prototype.removeEvent=function(t){return"string"==typeof t&&(!!this._events.hasOwnProperty(t)&&(this._events[t]=[],!0))},t.prototype.flush=function(){this._events={}},t}));
