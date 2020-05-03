"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,n){return t(n={exports:{}},n.exports),n.exports}var e=function(t){return t&&t.Math==Math&&t},r=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,f={f:c&&!u.call({1:2},1)?function(t){var n=c(this,t);return!!n&&n.enumerable}:u},a=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},s={}.toString,l=function(t){return s.call(t).slice(8,-1)},p="".split,y=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==l(t)?p.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return y(g(t))},h=function(t){return"object"==typeof t?null!==t:"function"==typeof t},d=function(t,n){if(!h(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!h(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!h(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!h(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,m=function(t,n){return b.call(t,n)},S=r.document,O=h(S)&&h(S.createElement),j=!i&&!o((function(){return 7!=Object.defineProperty((t="div",O?S.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),w=Object.getOwnPropertyDescriptor,E={f:i?w:function(t,n){if(t=v(t),n=d(n,!0),j)try{return w(t,n)}catch(t){}if(m(t,n))return a(!f.f.call(t,n),t[n])}},_=function(t){if(!h(t))throw TypeError(String(t)+" is not an object");return t},x=Object.defineProperty,P={f:i?x:function(t,n,e){if(_(t),n=d(n,!0),_(e),j)try{return x(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},A=i?function(t,n,e){return P.f(t,n,a(1,e))}:function(t,n,e){return t[n]=e,t},T=function(t,n){try{A(r,t,n)}catch(e){r[t]=n}return n},k=r["__core-js_shared__"]||T("__core-js_shared__",{}),M=Function.toString;"function"!=typeof k.inspectSource&&(k.inspectSource=function(t){return M.call(t)});var C,I,N,R,z=k.inspectSource,F=r.WeakMap,L="function"==typeof F&&/native code/.test(z(F)),q=n((function(t){(t.exports=function(t,n){return k[t]||(k[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),D=0,G=Math.random(),W=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++D+G).toString(36)},B=q("keys"),K={},U=r.WeakMap;if(L){var V=new U,Y=V.get,H=V.has,J=V.set;C=function(t,n){return J.call(V,t,n),n},I=function(t){return Y.call(V,t)||{}},N=function(t){return H.call(V,t)}}else{var Q=B[R="state"]||(B[R]=W(R));K[Q]=!0,C=function(t,n){return A(t,Q,n),n},I=function(t){return m(t,Q)?t[Q]:{}},N=function(t){return m(t,Q)}}var X,Z,$={set:C,get:I,has:N,enforce:function(t){return N(t)?I(t):C(t,{})},getterFor:function(t){return function(n){var e;if(!h(n)||(e=I(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},tt=n((function(t){var n=$.get,e=$.enforce,o=String(String).split("String");(t.exports=function(t,n,i,u){var c=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,a=!!u&&!!u.noTargetGet;"function"==typeof i&&("string"!=typeof n||m(i,"name")||A(i,"name",n),e(i).source=o.join("string"==typeof n?n:"")),t!==r?(c?!a&&t[n]&&(f=!0):delete t[n],f?t[n]=i:A(t,n,i)):f?t[n]=i:T(n,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||z(this)}))})),nt=r,et=function(t){return"function"==typeof t?t:void 0},rt=function(t,n){return arguments.length<2?et(nt[t])||et(r[t]):nt[t]&&nt[t][n]||r[t]&&r[t][n]},ot=Math.ceil,it=Math.floor,ut=function(t){return isNaN(t=+t)?0:(t>0?it:ot)(t)},ct=Math.min,ft=function(t){return t>0?ct(ut(t),9007199254740991):0},at=Math.max,st=Math.min,lt=function(t){return function(n,e,r){var o,i=v(n),u=ft(i.length),c=function(t,n){var e=ut(t);return e<0?at(e+n,0):st(e,n)}(r,u);if(t&&e!=e){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},pt={includes:lt(!0),indexOf:lt(!1)}.indexOf,yt=function(t,n){var e,r=v(t),o=0,i=[];for(e in r)!m(K,e)&&m(r,e)&&i.push(e);for(;n.length>o;)m(r,e=n[o++])&&(~pt(i,e)||i.push(e));return i},gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],vt=gt.concat("length","prototype"),ht={f:Object.getOwnPropertyNames||function(t){return yt(t,vt)}},dt={f:Object.getOwnPropertySymbols},bt=rt("Reflect","ownKeys")||function(t){var n=ht.f(_(t)),e=dt.f;return e?n.concat(e(t)):n},mt=function(t,n){for(var e=bt(n),r=P.f,o=E.f,i=0;i<e.length;i++){var u=e[i];m(t,u)||r(t,u,o(n,u))}},St=/#|\.prototype\./,Ot=function(t,n){var e=wt[jt(t)];return e==_t||e!=Et&&("function"==typeof n?o(n):!!n)},jt=Ot.normalize=function(t){return String(t).replace(St,".").toLowerCase()},wt=Ot.data={},Et=Ot.NATIVE="N",_t=Ot.POLYFILL="P",xt=Ot,Pt=E.f,At=function(t,n){var e,o,i,u,c,f=t.target,a=t.global,s=t.stat;if(e=a?r:s?r[f]||T(f,{}):(r[f]||{}).prototype)for(o in n){if(u=n[o],i=t.noTargetGet?(c=Pt(e,o))&&c.value:e[o],!xt(a?o:f+(s?".":"#")+o,t.forced)&&void 0!==i){if(typeof u==typeof i)continue;mt(u,i)}(t.sham||i&&i.sham)&&A(u,"sham",!0),tt(e,o,u,t)}},Tt=Array.isArray||function(t){return"Array"==l(t)},kt=function(t){return Object(g(t))},Mt=function(t,n,e){var r=d(n);r in t?P.f(t,r,a(0,e)):t[r]=e},Ct=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),It=Ct&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Nt=q("wks"),Rt=r.Symbol,zt=It?Rt:Rt&&Rt.withoutSetter||W,Ft=function(t){return m(Nt,t)||(Ct&&m(Rt,t)?Nt[t]=Rt[t]:Nt[t]=zt("Symbol."+t)),Nt[t]},Lt=Ft("species"),qt=function(t,n){var e;return Tt(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!Tt(e.prototype)?h(e)&&null===(e=e[Lt])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)},Dt=rt("navigator","userAgent")||"",Gt=r.process,Wt=Gt&&Gt.versions,Bt=Wt&&Wt.v8;Bt?Z=(X=Bt.split("."))[0]+X[1]:Dt&&(!(X=Dt.match(/Edge\/(\d+)/))||X[1]>=74)&&(X=Dt.match(/Chrome\/(\d+)/))&&(Z=X[1]);var Kt=Z&&+Z,Ut=Ft("species"),Vt=function(t){return Kt>=51||!o((function(){var n=[];return(n.constructor={})[Ut]=function(){return{foo:1}},1!==n[t](Boolean).foo}))},Yt=Ft("isConcatSpreadable"),Ht=Kt>=51||!o((function(){var t=[];return t[Yt]=!1,t.concat()[0]!==t})),Jt=Vt("concat"),Qt=function(t){if(!h(t))return!1;var n=t[Yt];return void 0!==n?!!n:Tt(t)};At({target:"Array",proto:!0,forced:!Ht||!Jt},{concat:function(t){var n,e,r,o,i,u=kt(this),c=qt(u,0),f=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?u:arguments[n],Qt(i)){if(f+(o=ft(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,f++)e in i&&Mt(c,f,i[e])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Mt(c,f++,i)}return c.length=f,c}});var Xt=function(t,n,e){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}},Zt=[].push,$t=function(t){var n=1==t,e=2==t,r=3==t,o=4==t,i=6==t,u=5==t||i;return function(c,f,a,s){for(var l,p,g=kt(c),v=y(g),h=Xt(f,a,3),d=ft(v.length),b=0,m=s||qt,S=n?m(c,d):e?m(c,0):void 0;d>b;b++)if((u||b in v)&&(p=h(l=v[b],b,g),t))if(n)S[b]=p;else if(p)switch(t){case 3:return!0;case 5:return l;case 6:return b;case 2:Zt.call(S,l)}else if(o)return!1;return i?-1:r||o?o:S}},tn={forEach:$t(0),map:$t(1),filter:$t(2),some:$t(3),every:$t(4),find:$t(5),findIndex:$t(6)},nn=Object.defineProperty,en={},rn=function(t){throw t},on=function(t,n){if(m(en,t))return en[t];n||(n={});var e=[][t],r=!!m(n,"ACCESSORS")&&n.ACCESSORS,u=m(n,0)?n[0]:rn,c=m(n,1)?n[1]:void 0;return en[t]=!!e&&!o((function(){if(r&&!i)return!0;var t={length:-1};r?nn(t,1,{enumerable:!0,get:rn}):t[1]=1,e.call(t,u,c)}))},un=tn.filter,cn=Vt("filter"),fn=on("filter");At({target:"Array",proto:!0,forced:!cn||!fn},{filter:function(t){return un(this,t,arguments.length>1?arguments[1]:void 0)}});var an=tn.map,sn=Vt("map"),ln=on("map");At({target:"Array",proto:!0,forced:!sn||!ln},{map:function(t){return an(this,t,arguments.length>1?arguments[1]:void 0)}});var pn=Object.keys||function(t){return yt(t,gt)},yn=Object.assign,gn=Object.defineProperty,vn=!yn||o((function(){if(i&&1!==yn({b:1},yn(gn({},"a",{enumerable:!0,get:function(){gn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol();return t[e]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),7!=yn({},t)[e]||"abcdefghijklmnopqrst"!=pn(yn({},n)).join("")}))?function(t,n){for(var e=kt(t),r=arguments.length,o=1,u=dt.f,c=f.f;r>o;)for(var a,s=y(arguments[o++]),l=u?pn(s).concat(u(s)):pn(s),p=l.length,g=0;p>g;)a=l[g++],i&&!c.call(s,a)||(e[a]=s[a]);return e}:yn;At({target:"Object",stat:!0,forced:Object.assign!==vn},{assign:vn}),At({target:"Object",stat:!0,forced:o((function(){pn(1)}))},{keys:function(t){return pn(kt(t))}});var hn={};hn[Ft("toStringTag")]="z";var dn="[object z]"===String(hn),bn=Ft("toStringTag"),mn="Arguments"==l(function(){return arguments}()),Sn=dn?l:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),bn))?e:mn?l(n):"Object"==(r=l(n))&&"function"==typeof n.callee?"Arguments":r},On=dn?{}.toString:function(){return"[object "+Sn(this)+"]"};dn||tt(Object.prototype,"toString",On,{unsafe:!0});var jn=function(){var t=_(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n},wn=RegExp.prototype,En=wn.toString,_n=o((function(){return"/a/b"!=En.call({source:"a",flags:"b"})})),xn="toString"!=En.name;function Pn(t){this._events={},this.checkInitialEvents(t)}(_n||xn)&&tt(RegExp.prototype,"toString",(function(){var t=_(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in wn)?jn.call(t):e)}),{unsafe:!0}),Pn.prototype.checkInitialEvents=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=this;if("[object Object]"===Object.prototype.toString.call(t)){var e=Object.keys(t);e.length>0&&e.map((function(e){n.on(e,t[e])}))}},Pn.prototype.on=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if("function"==typeof n&&"string"==typeof t){this._events.hasOwnProperty(t)||(this._events[t]=[]);var r=Object.assign({},{once:!1},"[object Object]"===Object.prototype.toString.call(e)?e:{}),o=Object.assign({},r,{fn:n});return this._events[t]=this._events[t].concat([o]),!0}},Pn.prototype.once=function(t,n){return this.on(t,n,{once:!0})},Pn.prototype.emit=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=this;if("string"==typeof t&&e._events.hasOwnProperty(t)&&!(e._events[t].length<1)){var r=Array.isArray(n)&&n.length>0?n:void 0!==n?[n]:void 0,o=e._events[t].map((function(t){return t.fn.apply(e,r)}));return e._events[t]=e._events[t].filter((function(t){return!1===t.once})),o}},Pn.prototype.removeEvent=function(t){return"string"==typeof t&&(!!this._events.hasOwnProperty(t)&&(this._events[t]=[],!0))},Pn.prototype.flush=function(){this._events={}};var An=Pn;module.exports=An;
