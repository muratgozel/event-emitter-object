function EventEmitter(a){this._events=a||{}}EventEmitter.prototype._eventsWillBeFiredOnce={},EventEmitter.prototype.on=function(a,b,c=null){if("function"!=typeof b||"string"!=typeof a)return!1;this._events.hasOwnProperty(a)||(this._events[a]=[]),this._eventsWillBeFiredOnce.hasOwnProperty(a)||(this._eventsWillBeFiredOnce[a]=[]);const d="[object Object]"===Object.prototype.toString.call(c)?c:{once:!1},e=this._events[a].push(b);return d.once&&!0===d.once&&this._eventsWillBeFiredOnce[a].push(e-1),!0},EventEmitter.prototype.once=function(a,b){return this.on(a,b,{once:!0})},EventEmitter.prototype.emit=function(a,b=[]){if(!this._events.hasOwnProperty(a)){if("error"==a){const a=b instanceof Error?b:new Error("Unhandled error.");throw a}return!1}const c=Array.isArray(b)?b:[b];for(let d=0;d<this._events[a].length;d++)this._events[a][d].apply(this,c);if(this._eventsWillBeFiredOnce.hasOwnProperty(a))for(var d=0;d<this._eventsWillBeFiredOnce[a].length;d++)this.removeListener(a,this._eventsWillBeFiredOnce[a][d]);return!0},EventEmitter.prototype.removeListener=function(a,b){this._events[a].splice(b,1)},EventEmitter.prototype.removeListeners=function(a){return!("string"!=typeof a)&&!!this._events.hasOwnProperty(a)&&(this._events[a]=[],this._eventsWillBeFiredOnce.hasOwnProperty(a)&&(this._eventsWillBeFiredOnce[a]=[]),!0)},EventEmitter.prototype.flushEventEmitter=function(){this._events={},this._eventsWillBeFiredOnce={}},module.exports=EventEmitter;