function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var i={},r={},o=t.parcelRequire3a7d;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire3a7d=o),o.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("67vkq",(function(t,n){function i(e){e.classList.add("current-page")}e(t.exports,"currentPageSwitcher",(function(){return i}))})),o.register("4zyeF",(function(e,t){var n=o("4TNnu"),i=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},i=0;i<t.length;i++)n[t[i]]=Object.getOwnPropertyDescriptor(e,t[i]);return n},r=/%[sdj%]/g;e.exports.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var i=arguments,o=i.length,s=String(e).replace(r,(function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(e){return"[Circular]"}default:return e}})),a=i[n];n<o;a=i[++n])g(a)||!_(a)?s+=" "+a:s+=" "+c(a);return s},e.exports.deprecate=function(t,i){if(void 0!==n&&!0===n.noDeprecation)return t;if(void 0===n)return function(){return e.exports.deprecate(t,i).apply(this,arguments)};var r=!1;return function(){if(!r){if(n.throwDeprecation)throw new Error(i);n.traceDeprecation?console.trace(i):console.error(i),r=!0}return t.apply(this,arguments)}};var s={},a=/^$/;function c(t,n){var i={seen:[],stylize:u};return arguments.length>=3&&(i.depth=arguments[2]),arguments.length>=4&&(i.colors=arguments[3]),m(n)?i.showHidden=n:n&&e.exports._extend(i,n),v(i.showHidden)&&(i.showHidden=!1),v(i.depth)&&(i.depth=2),v(i.colors)&&(i.colors=!1),v(i.customInspect)&&(i.customInspect=!0),i.colors&&(i.stylize=l),h(i,t,i.depth)}function l(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function u(e,t){return e}function h(t,n,i){if(t.customInspect&&n&&S(n.inspect)&&n.inspect!==e.exports.inspect&&(!n.constructor||n.constructor.prototype!==n)){var r=n.inspect(i,t);return b(r)||(r=h(t,r,i)),r}var o=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(y(t))return e.stylize(""+t,"number");if(m(t))return e.stylize(""+t,"boolean");if(g(t))return e.stylize("null","null")}(t,n);if(o)return o;var s=Object.keys(n),a=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),k(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return d(n);if(0===s.length){if(S(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(w(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(x(n))return t.stylize(Date.prototype.toString.call(n),"date");if(k(n))return d(n)}var l,u="",_=!1,E=["{","}"];(p(n)&&(_=!0,E=["[","]"]),S(n))&&(u=" [Function"+(n.name?": "+n.name:"")+"]");return w(n)&&(u=" "+RegExp.prototype.toString.call(n)),x(n)&&(u=" "+Date.prototype.toUTCString.call(n)),k(n)&&(u=" "+d(n)),0!==s.length||_&&0!=n.length?i<0?w(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=_?function(e,t,n,i,r){for(var o=[],s=0,a=t.length;s<a;++s)T(t,String(s))?o.push(f(e,t,n,i,String(s),!0)):o.push("");return r.forEach((function(r){r.match(/^\d+$/)||o.push(f(e,t,n,i,r,!0))})),o}(t,n,i,a,s):s.map((function(e){return f(t,n,i,a,e,_)})),t.seen.pop(),function(e,t,n){var i=e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return i>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}(l,u,E)):E[0]+u+E[1]}function d(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,i,r,o){var s,a,c;if((c=Object.getOwnPropertyDescriptor(t,r)||{value:t[r]}).get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),T(i,r)||(s="["+r+"]"),a||(e.seen.indexOf(c.value)<0?(a=g(n)?h(e,c.value,null):h(e,c.value,n-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map((function(e){return"  "+e})).join("\n").slice(2):"\n"+a.split("\n").map((function(e){return"   "+e})).join("\n")):a=e.stylize("[Circular]","special")),v(s)){if(o&&r.match(/^\d+$/))return a;(s=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.slice(1,-1),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function p(e){return Array.isArray(e)}function m(e){return"boolean"==typeof e}function g(e){return null===e}function y(e){return"number"==typeof e}function b(e){return"string"==typeof e}function v(e){return void 0===e}function w(e){return _(e)&&"[object RegExp]"===E(e)}function _(e){return"object"==typeof e&&null!==e}function x(e){return _(e)&&"[object Date]"===E(e)}function k(e){return _(e)&&("[object Error]"===E(e)||e instanceof Error)}function S(e){return"function"==typeof e}function E(e){return Object.prototype.toString.call(e)}function I(e){return e<10?"0"+e.toString(10):e.toString(10)}e.exports.debuglog=function(t){if(t=t.toUpperCase(),!s[t])if(a.test(t)){var i=n.pid;s[t]=function(){var n=e.exports.format.apply(e.exports,arguments);console.error("%s %d: %s",t,i,n)}}else s[t]=function(){};return s[t]},e.exports.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.exports.types=o("kPQSU"),e.exports.isArray=p,e.exports.isBoolean=m,e.exports.isNull=g,e.exports.isNullOrUndefined=function(e){return null==e},e.exports.isNumber=y,e.exports.isString=b,e.exports.isSymbol=function(e){return"symbol"==typeof e},e.exports.isUndefined=v,e.exports.isRegExp=w,e.exports.types.isRegExp=w,e.exports.isObject=_,e.exports.isDate=x,e.exports.types.isDate=x,e.exports.isError=k,e.exports.types.isNativeError=k,e.exports.isFunction=S,e.exports.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},e.exports.isBuffer=o("kieVX");var C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports.log=function(){var t,n;console.log("%s - %s",(t=new Date,n=[I(t.getHours()),I(t.getMinutes()),I(t.getSeconds())].join(":"),[t.getDate(),C[t.getMonth()],n].join(" ")),e.exports.format.apply(e.exports,arguments))},e.exports.inherits=o("eSHUL"),e.exports._extend=function(e,t){if(!t||!_(t))return e;for(var n=Object.keys(t),i=n.length;i--;)e[n[i]]=t[n[i]];return e};var N="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function R(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}e.exports.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(N&&e[N]){var t;if("function"!=typeof(t=e[N]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,N,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,i=new Promise((function(e,i){t=e,n=i})),r=[],o=0;o<arguments.length;o++)r.push(arguments[o]);r.push((function(e,i){e?n(e):t(i)}));try{e.apply(this,r)}catch(e){n(e)}return i}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),N&&Object.defineProperty(t,N,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,i(e))},e.exports.promisify.custom=N,e.exports.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function t(){for(var t=[],i=0;i<arguments.length;i++)t.push(arguments[i]);var r=t.pop();if("function"!=typeof r)throw new TypeError("The last argument must be of type Function");var o=this,s=function(){return r.apply(o,arguments)};e.apply(this,t).then((function(e){n.nextTick(s.bind(null,null,e))}),(function(e){n.nextTick(R.bind(null,e,s))}))}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),Object.defineProperties(t,i(e)),t}})),o.register("4TNnu",(function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var c,l=[],u=!1,h=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),o.register("kPQSU",(function(e,t){var n=o("6LFJs"),i=o("lhqXC"),r=o("nBFK4"),s=o("htkB6");function a(e){return e.call.bind(e)}var c="undefined"!=typeof BigInt,l="undefined"!=typeof Symbol,u=a(Object.prototype.toString),h=a(Number.prototype.valueOf),d=a(String.prototype.valueOf),f=a(Boolean.prototype.valueOf);if(c)var p=a(BigInt.prototype.valueOf);if(l)var m=a(Symbol.prototype.valueOf);function g(e,t){if("object"!=typeof e)return!1;try{return t(e),!0}catch(e){return!1}}function y(e){return"[object Map]"===u(e)}function b(e){return"[object Set]"===u(e)}function v(e){return"[object WeakMap]"===u(e)}function w(e){return"[object WeakSet]"===u(e)}function _(e){return"[object ArrayBuffer]"===u(e)}function x(e){return"undefined"!=typeof ArrayBuffer&&(_.working?_(e):e instanceof ArrayBuffer)}function k(e){return"[object DataView]"===u(e)}function S(e){return"undefined"!=typeof DataView&&(k.working?k(e):e instanceof DataView)}e.exports.isArgumentsObject=n,e.exports.isGeneratorFunction=i,e.exports.isTypedArray=s,e.exports.isPromise=function(e){return"undefined"!=typeof Promise&&e instanceof Promise||null!==e&&"object"==typeof e&&"function"==typeof e.then&&"function"==typeof e.catch},e.exports.isArrayBufferView=function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):s(e)||S(e)},e.exports.isUint8Array=function(e){return"Uint8Array"===r(e)},e.exports.isUint8ClampedArray=function(e){return"Uint8ClampedArray"===r(e)},e.exports.isUint16Array=function(e){return"Uint16Array"===r(e)},e.exports.isUint32Array=function(e){return"Uint32Array"===r(e)},e.exports.isInt8Array=function(e){return"Int8Array"===r(e)},e.exports.isInt16Array=function(e){return"Int16Array"===r(e)},e.exports.isInt32Array=function(e){return"Int32Array"===r(e)},e.exports.isFloat32Array=function(e){return"Float32Array"===r(e)},e.exports.isFloat64Array=function(e){return"Float64Array"===r(e)},e.exports.isBigInt64Array=function(e){return"BigInt64Array"===r(e)},e.exports.isBigUint64Array=function(e){return"BigUint64Array"===r(e)},y.working="undefined"!=typeof Map&&y(new Map),e.exports.isMap=function(e){return"undefined"!=typeof Map&&(y.working?y(e):e instanceof Map)},b.working="undefined"!=typeof Set&&b(new Set),e.exports.isSet=function(e){return"undefined"!=typeof Set&&(b.working?b(e):e instanceof Set)},v.working="undefined"!=typeof WeakMap&&v(new WeakMap),e.exports.isWeakMap=function(e){return"undefined"!=typeof WeakMap&&(v.working?v(e):e instanceof WeakMap)},w.working="undefined"!=typeof WeakSet&&w(new WeakSet),e.exports.isWeakSet=function(e){return w(e)},_.working="undefined"!=typeof ArrayBuffer&&_(new ArrayBuffer),e.exports.isArrayBuffer=x,k.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&k(new DataView(new ArrayBuffer(1),0,1)),e.exports.isDataView=S;var E="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function I(e){return"[object SharedArrayBuffer]"===u(e)}function C(e){return void 0!==E&&(void 0===I.working&&(I.working=I(new E)),I.working?I(e):e instanceof E)}function T(e){return g(e,h)}function N(e){return g(e,d)}function R(e){return g(e,f)}function A(e){return c&&g(e,p)}function O(e){return l&&g(e,m)}e.exports.isSharedArrayBuffer=C,e.exports.isAsyncFunction=function(e){return"[object AsyncFunction]"===u(e)},e.exports.isMapIterator=function(e){return"[object Map Iterator]"===u(e)},e.exports.isSetIterator=function(e){return"[object Set Iterator]"===u(e)},e.exports.isGeneratorObject=function(e){return"[object Generator]"===u(e)},e.exports.isWebAssemblyCompiledModule=function(e){return"[object WebAssembly.Module]"===u(e)},e.exports.isNumberObject=T,e.exports.isStringObject=N,e.exports.isBooleanObject=R,e.exports.isBigIntObject=A,e.exports.isSymbolObject=O,e.exports.isBoxedPrimitive=function(e){return T(e)||N(e)||R(e)||A(e)||O(e)},e.exports.isAnyArrayBuffer=function(e){return"undefined"!=typeof Uint8Array&&(x(e)||C(e))},["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(t){Object.defineProperty(e.exports,t,{enumerable:!1,value:function(){throw new Error(t+" is not supported in userland")}})}))})),o.register("6LFJs",(function(e,t){var n=o("65kqK")(),i=o("jLsQW")("Object.prototype.toString"),r=function(e){return!(n&&e&&"object"==typeof e&&Symbol.toStringTag in e)&&"[object Arguments]"===i(e)},s=function(e){return!!r(e)||null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Array]"!==i(e)&&"[object Function]"===i(e.callee)},a=function(){return r(arguments)}();r.isLegacyArguments=s,e.exports=a?r:s})),o.register("65kqK",(function(e,t){var n=o("fNdnD");e.exports=function(){return n()&&!!Symbol.toStringTag}})),o.register("fNdnD",(function(e,t){e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),n=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var i=Object.getOwnPropertySymbols(e);if(1!==i.length||i[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var r=Object.getOwnPropertyDescriptor(e,t);if(42!==r.value||!0!==r.enumerable)return!1}return!0}})),o.register("jLsQW",(function(e,t){var n=o("avqmt"),i=o("e9CQ6"),r=i(n("String.prototype.indexOf"));e.exports=function(e,t){var o=n(e,!!t);return"function"==typeof o&&r(e,".prototype.")>-1?i(o):o}})),o.register("avqmt",(function(e,t){var n,i=SyntaxError,r=Function,s=TypeError,a=function(e){try{return r('"use strict"; return ('+e+").constructor;")()}catch(e){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(e){c=null}var l=function(){throw new s},u=c?function(){try{return l}catch(e){try{return c(arguments,"callee").get}catch(e){return l}}}():l,h=o("5CmBX")(),d=Object.getPrototypeOf||function(e){return e.__proto__},f={},p="undefined"==typeof Uint8Array?n:d(Uint8Array),m={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":h?d([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":f,"%AsyncGenerator%":f,"%AsyncGeneratorFunction%":f,"%AsyncIteratorPrototype%":f,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?n:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":r,"%GeneratorFunction%":f,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":h?d(d([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&h?d((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&h?d((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":h?d(""[Symbol.iterator]()):n,"%Symbol%":h?Symbol:n,"%SyntaxError%":i,"%ThrowTypeError%":u,"%TypedArray%":p,"%TypeError%":s,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet};try{null.error}catch(e){var g=d(d(e));m["%Error.prototype%"]=g}var y=function e(t){var n;if("%AsyncFunction%"===t)n=a("async function () {}");else if("%GeneratorFunction%"===t)n=a("function* () {}");else if("%AsyncGeneratorFunction%"===t)n=a("async function* () {}");else if("%AsyncGenerator%"===t){var i=e("%AsyncGeneratorFunction%");i&&(n=i.prototype)}else if("%AsyncIteratorPrototype%"===t){var r=e("%AsyncGenerator%");r&&(n=d(r.prototype))}return m[t]=n,n},b={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},v=o("a7ABz"),w=o("56d6a"),_=v.call(Function.call,Array.prototype.concat),x=v.call(Function.apply,Array.prototype.splice),k=v.call(Function.call,String.prototype.replace),S=v.call(Function.call,String.prototype.slice),E=v.call(Function.call,RegExp.prototype.exec),I=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,C=/\\(\\)?/g,T=function(e,t){var n,r=e;if(w(b,r)&&(r="%"+(n=b[r])[0]+"%"),w(m,r)){var o=m[r];if(o===f&&(o=y(r)),void 0===o&&!t)throw new s("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:n,name:r,value:o}}throw new i("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new s('"allowMissing" argument must be a boolean');if(null===E(/^%?[^%]*%?$/,e))throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=function(e){var t=S(e,0,1),n=S(e,-1);if("%"===t&&"%"!==n)throw new i("invalid intrinsic syntax, expected closing `%`");if("%"===n&&"%"!==t)throw new i("invalid intrinsic syntax, expected opening `%`");var r=[];return k(e,I,(function(e,t,n,i){r[r.length]=n?k(i,C,"$1"):t||e})),r}(e),r=n.length>0?n[0]:"",o=T("%"+r+"%",t),a=o.name,l=o.value,u=!1,h=o.alias;h&&(r=h[0],x(n,_([0,1],h)));for(var d=1,f=!0;d<n.length;d+=1){var p=n[d],g=S(p,0,1),y=S(p,-1);if(('"'===g||"'"===g||"`"===g||'"'===y||"'"===y||"`"===y)&&g!==y)throw new i("property names with quotes must have matching quotes");if("constructor"!==p&&f||(u=!0),w(m,a="%"+(r+="."+p)+"%"))l=m[a];else if(null!=l){if(!(p in l)){if(!t)throw new s("base intrinsic for "+e+" exists, but the property is not available.");return}if(c&&d+1>=n.length){var b=c(l,p);l=(f=!!b)&&"get"in b&&!("originalValue"in b.get)?b.get:l[p]}else f=w(l,p),l=l[p];f&&!u&&(m[a]=l)}}return l}})),o.register("5CmBX",(function(e,t){var n="undefined"!=typeof Symbol&&Symbol,i=o("fNdnD");e.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&i())))}})),o.register("a7ABz",(function(e,t){var n=o("cytJY");e.exports=Function.prototype.bind||n})),o.register("cytJY",(function(e,t){var n=Array.prototype.slice,i=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==i.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var r,o=n.call(arguments,1),s=Math.max(0,t.length-o.length),a=[],c=0;c<s;c++)a.push("$"+c);if(r=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof r){var i=t.apply(this,o.concat(n.call(arguments)));return Object(i)===i?i:this}return t.apply(e,o.concat(n.call(arguments)))})),t.prototype){var l=function(){};l.prototype=t.prototype,r.prototype=new l,l.prototype=null}return r}})),o.register("56d6a",(function(e,t){var n=o("a7ABz");e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)})),o.register("e9CQ6",(function(e,t){var n=o("a7ABz"),i=o("avqmt"),r=i("%Function.prototype.apply%"),s=i("%Function.prototype.call%"),a=i("%Reflect.apply%",!0)||n.call(s,r),c=i("%Object.getOwnPropertyDescriptor%",!0),l=i("%Object.defineProperty%",!0),u=i("%Math.max%");if(l)try{l({},"a",{value:1})}catch(e){l=null}e.exports=function(e){var t=a(n,s,arguments);c&&l&&(c(t,"length").configurable&&l(t,"length",{value:1+u(0,e.length-(arguments.length-1))}));return t};var h=function(){return a(n,r,arguments)};l?l(e.exports,"apply",{value:h}):e.exports.apply=h})),o.register("lhqXC",(function(e,t){var n,i=Object.prototype.toString,r=Function.prototype.toString,s=/^\s*(?:function)?\*/,a=o("65kqK")(),c=Object.getPrototypeOf;e.exports=function(e){if("function"!=typeof e)return!1;if(s.test(r.call(e)))return!0;if(!a)return"[object GeneratorFunction]"===i.call(e);if(!c)return!1;if(void 0===n){var t=function(){if(!a)return!1;try{return Function("return function*() {}")()}catch(e){}}();n=!!t&&c(t)}return c(e)===n}})),o.register("nBFK4",(function(e,n){var i=o("lF3bv"),r=o("lUXdk"),s=o("jLsQW"),a=o("crSdH"),c=s("Object.prototype.toString"),l=o("65kqK")(),u="undefined"==typeof globalThis?t:globalThis,h=r(),d=s("String.prototype.slice"),f={},p=Object.getPrototypeOf;l&&a&&p&&i(h,(function(e){if("function"==typeof u[e]){var t=new u[e];if(Symbol.toStringTag in t){var n=p(t),i=a(n,Symbol.toStringTag);if(!i){var r=p(n);i=a(r,Symbol.toStringTag)}f[e]=i.get}}}));var m=o("htkB6");e.exports=function(e){return!!m(e)&&(l&&Symbol.toStringTag in e?function(e){var t=!1;return i(f,(function(n,i){if(!t)try{var r=n.call(e);r===i&&(t=r)}catch(e){}})),t}(e):d(c(e),8,-1))}})),o.register("lF3bv",(function(e,t){var n=o("8pyWb"),i=Object.prototype.toString,r=Object.prototype.hasOwnProperty;e.exports=function(e,t,o){if(!n(t))throw new TypeError("iterator must be a function");var s;arguments.length>=3&&(s=o),"[object Array]"===i.call(e)?function(e,t,n){for(var i=0,o=e.length;i<o;i++)r.call(e,i)&&(null==n?t(e[i],i,e):t.call(n,e[i],i,e))}(e,t,s):"string"==typeof e?function(e,t,n){for(var i=0,r=e.length;i<r;i++)null==n?t(e.charAt(i),i,e):t.call(n,e.charAt(i),i,e)}(e,t,s):function(e,t,n){for(var i in e)r.call(e,i)&&(null==n?t(e[i],i,e):t.call(n,e[i],i,e))}(e,t,s)}})),o.register("8pyWb",(function(e,t){var n,i,r=Function.prototype.toString,o="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof o&&"function"==typeof Object.defineProperty)try{n=Object.defineProperty({},"length",{get:function(){throw i}}),i={},o((function(){throw 42}),null,n)}catch(e){e!==i&&(o=null)}else o=null;var s=/^\s*class\b/,a=function(e){try{var t=r.call(e);return s.test(t)}catch(e){return!1}},c=function(e){try{return!a(e)&&(r.call(e),!0)}catch(e){return!1}},l=Object.prototype.toString,u="function"==typeof Symbol&&!!Symbol.toStringTag,h=!(0 in[,]),d=function(){return!1};if("object"==typeof document){var f=document.all;l.call(f)===l.call(document.all)&&(d=function(e){if((h||!e)&&(void 0===e||"object"==typeof e))try{var t=l.call(e);return("[object HTMLAllCollection]"===t||"[object HTML document.all class]"===t||"[object HTMLCollection]"===t||"[object Object]"===t)&&null==e("")}catch(e){}return!1})}e.exports=o?function(e){if(d(e))return!0;if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;try{o(e,null,n)}catch(e){if(e!==i)return!1}return!a(e)&&c(e)}:function(e){if(d(e))return!0;if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;if(u)return c(e);if(a(e))return!1;var t=l.call(e);return!("[object Function]"!==t&&"[object GeneratorFunction]"!==t&&!/^\[object HTML/.test(t))&&c(e)}})),o.register("lUXdk",(function(e,n){var i=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],r="undefined"==typeof globalThis?t:globalThis;e.exports=function(){for(var e=[],t=0;t<11;t++)"function"==typeof r[i[t]]&&(e[e.length]=i[t]);return e}})),o.register("crSdH",(function(e,t){var n=o("avqmt")("%Object.getOwnPropertyDescriptor%",!0);if(n)try{n([],"length")}catch(e){n=null}e.exports=n})),o.register("htkB6",(function(e,n){var i=o("lF3bv"),r=o("lUXdk"),s=o("jLsQW"),a=s("Object.prototype.toString"),c=o("65kqK")(),l=o("crSdH"),u="undefined"==typeof globalThis?t:globalThis,h=r(),d=s("Array.prototype.indexOf",!0)||function(e,t){for(var n=0;n<e.length;n+=1)if(e[n]===t)return n;return-1},f=s("String.prototype.slice"),p={},m=Object.getPrototypeOf;c&&l&&m&&i(h,(function(e){var t=new u[e];if(Symbol.toStringTag in t){var n=m(t),i=l(n,Symbol.toStringTag);if(!i){var r=m(n);i=l(r,Symbol.toStringTag)}p[e]=i.get}}));e.exports=function(e){if(!e||"object"!=typeof e)return!1;if(!c||!(Symbol.toStringTag in e)){var t=f(a(e),8,-1);return d(h,t)>-1}return!!l&&function(e){var t=!1;return i(p,(function(n,i){if(!t)try{t=n.call(e)===i}catch(e){}})),t}(e)}})),o.register("kieVX",(function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}})),o.register("eSHUL",(function(e,t){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}})),o.register("bhJ7Q",(function(e,t){var n=o("4TNnu");function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var r,s,a=o("9XRIq").codes,c=a.ERR_AMBIGUOUS_ARGUMENT,l=a.ERR_INVALID_ARG_TYPE,u=a.ERR_INVALID_ARG_VALUE,h=a.ERR_INVALID_RETURN_VALUE,d=a.ERR_MISSING_ARGS,f=o("1Nj8z"),p=o("4zyeF").inspect,m=o("4zyeF").types,g=m.isPromise,y=m.isRegExp,b=Object.assign?Object.assign:o("cgET4").assign,v=Object.is?Object.is:o("fmpVL");new Map;function w(){var e=o("dFslL");r=e.isDeepEqual,s=e.isDeepStrictEqual}var _=!1,x=e.exports=I,k={};function S(e){if(e.message instanceof Error)throw e.message;throw new f(e)}function E(e,t,n,i){if(!n){var r=!1;if(0===t)r=!0,i="No value argument passed to `assert.ok()`";else if(i instanceof Error)throw i;var o=new f({actual:n,expected:!0,message:i,operator:"==",stackStartFn:e});throw o.generatedMessage=r,o}}function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];E.apply(void 0,[I,t.length].concat(t))}x.fail=function e(t,i,r,o,s){var a,c=arguments.length;if(0===c)a="Failed";else if(1===c)r=t,t=void 0;else{if(!1===_)_=!0,(n.emitWarning?n.emitWarning:console.warn.bind(console))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.","DeprecationWarning","DEP0094");2===c&&(o="!=")}if(r instanceof Error)throw r;var l={actual:t,expected:i,operator:void 0===o?"fail":o,stackStartFn:s||e};void 0!==r&&(l.message=r);var u=new f(l);throw a&&(u.message=a,u.generatedMessage=!0),u},x.AssertionError=f,x.ok=I,x.equal=function e(t,n,i){if(arguments.length<2)throw new d("actual","expected");t!=n&&S({actual:t,expected:n,message:i,operator:"==",stackStartFn:e})},x.notEqual=function e(t,n,i){if(arguments.length<2)throw new d("actual","expected");t==n&&S({actual:t,expected:n,message:i,operator:"!=",stackStartFn:e})},x.deepEqual=function e(t,n,i){if(arguments.length<2)throw new d("actual","expected");void 0===r&&w(),r(t,n)||S({actual:t,expected:n,message:i,operator:"deepEqual",stackStartFn:e})},x.notDeepEqual=function e(t,n,i){if(arguments.length<2)throw new d("actual","expected");void 0===r&&w(),r(t,n)&&S({actual:t,expected:n,message:i,operator:"notDeepEqual",stackStartFn:e})},x.deepStrictEqual=function e(t,n,i){if(arguments.length<2)throw new d("actual","expected");void 0===r&&w(),s(t,n)||S({actual:t,expected:n,message:i,operator:"deepStrictEqual",stackStartFn:e})},x.notDeepStrictEqual=function e(t,n,i){if(arguments.length<2)throw new d("actual","expected");void 0===r&&w();s(t,n)&&S({actual:t,expected:n,message:i,operator:"notDeepStrictEqual",stackStartFn:e})},x.strictEqual=function e(t,n,i){if(arguments.length<2)throw new d("actual","expected");v(t,n)||S({actual:t,expected:n,message:i,operator:"strictEqual",stackStartFn:e})},x.notStrictEqual=function e(t,n,i){if(arguments.length<2)throw new d("actual","expected");v(t,n)&&S({actual:t,expected:n,message:i,operator:"notStrictEqual",stackStartFn:e})};var C=function e(t,n,i){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n.forEach((function(e){e in t&&(void 0!==i&&"string"==typeof i[e]&&y(t[e])&&t[e].test(i[e])?r[e]=i[e]:r[e]=t[e])}))};function T(e,t,n,o){if("function"!=typeof t){if(y(t))return t.test(e);if(2===arguments.length)throw new l("expected",["Function","RegExp"],t);if("object"!==i(e)||null===e){var a=new f({actual:e,expected:t,message:n,operator:"deepStrictEqual",stackStartFn:o});throw a.operator=o.name,a}var c=Object.keys(t);if(t instanceof Error)c.push("name","message");else if(0===c.length)throw new u("error",t,"may not be an empty object");return void 0===r&&w(),c.forEach((function(i){"string"==typeof e[i]&&y(t[i])&&t[i].test(e[i])||function(e,t,n,i,r,o){if(!(n in e)||!s(e[n],t[n])){if(!i){var a=new C(e,r),c=new C(t,r,e),l=new f({actual:a,expected:c,operator:"deepStrictEqual",stackStartFn:o});throw l.actual=e,l.expected=t,l.operator=o.name,l}S({actual:e,expected:t,message:i,operator:o.name,stackStartFn:o})}}(e,t,i,n,c,o)})),!0}return void 0!==t.prototype&&e instanceof t||!Error.isPrototypeOf(t)&&!0===t.call({},e)}function N(e){if("function"!=typeof e)throw new l("fn","Function",e);try{e()}catch(e){return e}return k}function R(e){return g(e)||null!==e&&"object"===i(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function A(e){return Promise.resolve().then((function(){var t;if("function"==typeof e){if(!R(t=e()))throw new h("instance of Promise","promiseFn",t)}else{if(!R(e))throw new l("promiseFn",["Function","Promise"],e);t=e}return Promise.resolve().then((function(){return t})).then((function(){return k})).catch((function(e){return e}))}))}function O(e,t,n,r){if("string"==typeof n){if(4===arguments.length)throw new l("error",["Object","Error","Function","RegExp"],n);if("object"===i(t)&&null!==t){if(t.message===n)throw new c("error/message",'The error message "'.concat(t.message,'" is identical to the message.'))}else if(t===n)throw new c("error/message",'The error "'.concat(t,'" is identical to the message.'));r=n,n=void 0}else if(null!=n&&"object"!==i(n)&&"function"!=typeof n)throw new l("error",["Object","Error","Function","RegExp"],n);if(t===k){var o="";n&&n.name&&(o+=" (".concat(n.name,")")),o+=r?": ".concat(r):".";var s="rejects"===e.name?"rejection":"exception";S({actual:void 0,expected:n,operator:e.name,message:"Missing expected ".concat(s).concat(o),stackStartFn:e})}if(n&&!T(t,n,r,e))throw t}function P(e,t,n,i){if(t!==k){if("string"==typeof n&&(i=n,n=void 0),!n||T(t,n)){var r=i?": ".concat(i):".",o="doesNotReject"===e.name?"rejection":"exception";S({actual:t,expected:n,operator:e.name,message:"Got unwanted ".concat(o).concat(r,"\n")+'Actual message: "'.concat(t&&t.message,'"'),stackStartFn:e})}throw t}}function L(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];E.apply(void 0,[L,t.length].concat(t))}x.throws=function e(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];O.apply(void 0,[e,N(t)].concat(i))},x.rejects=function e(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return A(t).then((function(t){return O.apply(void 0,[e,t].concat(i))}))},x.doesNotThrow=function e(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];P.apply(void 0,[e,N(t)].concat(i))},x.doesNotReject=function e(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return A(t).then((function(t){return P.apply(void 0,[e,t].concat(i))}))},x.ifError=function e(t){if(null!=t){var n="ifError got unwanted exception: ";"object"===i(t)&&"string"==typeof t.message?0===t.message.length&&t.constructor?n+=t.constructor.name:n+=t.message:n+=p(t);var r=new f({actual:t,expected:null,operator:"ifError",message:n,stackStartFn:e}),o=t.stack;if("string"==typeof o){var s=o.split("\n");s.shift();for(var a=r.stack.split("\n"),c=0;c<s.length;c++){var l=a.indexOf(s[c]);if(-1!==l){a=a.slice(0,l);break}}r.stack="".concat(a.join("\n"),"\n").concat(s.join("\n"))}throw r}},x.strict=b(L,x,{equal:x.strictEqual,deepEqual:x.deepStrictEqual,notEqual:x.notStrictEqual,notDeepEqual:x.notDeepStrictEqual}),x.strict.strict=x.strict})),o.register("9XRIq",(function(t,n){var i;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}e(t.exports,"codes",(function(){return i}),(function(e){return i=e}));var l,u,h={};function d(e,t,n){n||(n=Error);var i=function(n){function i(n,r,o){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),c=s(this,a(i).call(this,function(e,n,i){return"string"==typeof t?t:t(e,n,i)}(n,r,o))),c.code=e,c}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(i,n),i}(n);h[e]=i}function f(e,t){if(Array.isArray(e)){var n=e.length;return e=e.map((function(e){return String(e)})),n>2?"one of ".concat(t," ").concat(e.slice(0,n-1).join(", "),", or ")+e[n-1]:2===n?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}return"of ".concat(t," ").concat(String(e))}d("ERR_AMBIGUOUS_ARGUMENT",'The "%s" argument is ambiguous. %s',TypeError),d("ERR_INVALID_ARG_TYPE",(function(e,t,n){var i,s,a,c;if(void 0===l&&(l=o("bhJ7Q")),l("string"==typeof e,"'name' must be a string"),"string"==typeof t&&(s="not ",t.substr(!a||a<0?0:+a,s.length)===s)?(i="must not be",t=t.replace(/^not /,"")):i="must be",function(e,t,n){return(void 0===n||n>e.length)&&(n=e.length),e.substring(n-t.length,n)===t}(e," argument"))c="The ".concat(e," ").concat(i," ").concat(f(t,"type"));else{var u=function(e,t,n){return"number"!=typeof n&&(n=0),!(n+t.length>e.length)&&-1!==e.indexOf(t,n)}(e,".")?"property":"argument";c='The "'.concat(e,'" ').concat(u," ").concat(i," ").concat(f(t,"type"))}return c+=". Received type ".concat(r(n))}),TypeError),d("ERR_INVALID_ARG_VALUE",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is invalid";void 0===u&&(u=o("4zyeF"));var i=u.inspect(t);return i.length>128&&(i="".concat(i.slice(0,128),"...")),"The argument '".concat(e,"' ").concat(n,". Received ").concat(i)}),TypeError,RangeError),d("ERR_INVALID_RETURN_VALUE",(function(e,t,n){var i;return i=n&&n.constructor&&n.constructor.name?"instance of ".concat(n.constructor.name):"type ".concat(r(n)),"Expected ".concat(e,' to be returned from the "').concat(t,'"')+" function but got ".concat(i,".")}),TypeError),d("ERR_MISSING_ARGS",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];void 0===l&&(l=o("bhJ7Q")),l(t.length>0,"At least one arg needs to be specified");var i="The ",r=t.length;switch(t=t.map((function(e){return'"'.concat(e,'"')})),r){case 1:i+="".concat(t[0]," argument");break;case 2:i+="".concat(t[0]," and ").concat(t[1]," arguments");break;default:i+=t.slice(0,r-1).join(", "),i+=", and ".concat(t[r-1]," arguments")}return"".concat(i," must be specified")}),TypeError),i=h})),o.register("1Nj8z",(function(e,t){var n=o("4TNnu");function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){var t="function"==typeof Map?new Map:void 0;return c=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return l(e,arguments,h(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),u(i,e)},c(e)}function l(e,t,n){return l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&u(r,n.prototype),r},l.apply(null,arguments)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}var f=o("4zyeF").inspect,p=o("9XRIq").codes.ERR_INVALID_ARG_TYPE;function m(e,t,n){return(void 0===n||n>e.length)&&(n=e.length),e.substring(n-t.length,n)===t}var g="",y="",b="",v="",w={deepStrictEqual:"Expected values to be strictly deep-equal:",strictEqual:"Expected values to be strictly equal:",strictEqualObject:'Expected "actual" to be reference-equal to "expected":',deepEqual:"Expected values to be loosely deep-equal:",equal:"Expected values to be loosely equal:",notDeepStrictEqual:'Expected "actual" not to be strictly deep-equal to:',notStrictEqual:'Expected "actual" to be strictly unequal to:',notStrictEqualObject:'Expected "actual" not to be reference-equal to "expected":',notDeepEqual:'Expected "actual" not to be loosely deep-equal to:',notEqual:'Expected "actual" to be loosely unequal to:',notIdentical:"Values identical but not reference-equal:"};function _(e){var t=Object.keys(e),n=Object.create(Object.getPrototypeOf(e));return t.forEach((function(t){n[t]=e[t]})),Object.defineProperty(n,"message",{value:e.message}),n}function x(e){return f(e,{compact:!1,customInspect:!1,depth:1e3,maxArrayLength:1/0,showHidden:!1,breakLength:1/0,showProxy:!1,sorted:!0,getters:!0})}function k(e,t,i){var r="",o="",s=0,a="",c=!1,l=x(e),u=l.split("\n"),h=x(t).split("\n"),f=0,p="";if("strictEqual"===i&&"object"===d(e)&&"object"===d(t)&&null!==e&&null!==t&&(i="strictEqualObject"),1===u.length&&1===h.length&&u[0]!==h[0]){var _=u[0].length+h[0].length;if(_<=10){if(!("object"===d(e)&&null!==e||"object"===d(t)&&null!==t||0===e&&0===t))return"".concat(w[i],"\n\n")+"".concat(u[0]," !== ").concat(h[0],"\n")}else if("strictEqualObject"!==i){if(_<(n.stderr&&n.stderr.isTTY?n.stderr.columns:80)){for(;u[0][f]===h[0][f];)f++;f>2&&(p="\n  ".concat(function(e,t){if(t=Math.floor(t),0==e.length||0==t)return"";var n=e.length*t;for(t=Math.floor(Math.log(t)/Math.log(2));t;)e+=e,t--;return e+e.substring(0,n-e.length)}(" ",f),"^"),f=0)}}}for(var k=u[u.length-1],S=h[h.length-1];k===S&&(f++<2?a="\n  ".concat(k).concat(a):r=k,u.pop(),h.pop(),0!==u.length&&0!==h.length);)k=u[u.length-1],S=h[h.length-1];var E=Math.max(u.length,h.length);if(0===E){var I=l.split("\n");if(I.length>30)for(I[26]="".concat(g,"...").concat(v);I.length>27;)I.pop();return"".concat(w.notIdentical,"\n\n").concat(I.join("\n"),"\n")}f>3&&(a="\n".concat(g,"...").concat(v).concat(a),c=!0),""!==r&&(a="\n  ".concat(r).concat(a),r="");var C=0,T=w[i]+"\n".concat(y,"+ actual").concat(v," ").concat(b,"- expected").concat(v),N=" ".concat(g,"...").concat(v," Lines skipped");for(f=0;f<E;f++){var R=f-s;if(u.length<f+1)R>1&&f>2&&(R>4?(o+="\n".concat(g,"...").concat(v),c=!0):R>3&&(o+="\n  ".concat(h[f-2]),C++),o+="\n  ".concat(h[f-1]),C++),s=f,r+="\n".concat(b,"-").concat(v," ").concat(h[f]),C++;else if(h.length<f+1)R>1&&f>2&&(R>4?(o+="\n".concat(g,"...").concat(v),c=!0):R>3&&(o+="\n  ".concat(u[f-2]),C++),o+="\n  ".concat(u[f-1]),C++),s=f,o+="\n".concat(y,"+").concat(v," ").concat(u[f]),C++;else{var A=h[f],O=u[f],P=O!==A&&(!m(O,",")||O.slice(0,-1)!==A);P&&m(A,",")&&A.slice(0,-1)===O&&(P=!1,O+=","),P?(R>1&&f>2&&(R>4?(o+="\n".concat(g,"...").concat(v),c=!0):R>3&&(o+="\n  ".concat(u[f-2]),C++),o+="\n  ".concat(u[f-1]),C++),s=f,o+="\n".concat(y,"+").concat(v," ").concat(O),r+="\n".concat(b,"-").concat(v," ").concat(A),C+=2):(o+=r,r="",1!==R&&0!==f||(o+="\n  ".concat(O),C++))}if(C>20&&f<E-2)return"".concat(T).concat(N,"\n").concat(o,"\n").concat(g,"...").concat(v).concat(r,"\n")+"".concat(g,"...").concat(v)}return"".concat(T).concat(c?N:"","\n").concat(o).concat(r).concat(a).concat(p)}var S=function(e){function t(e){var i;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),"object"!==d(e)||null===e)throw new p("options","Object",e);var r=e.message,o=e.operator,c=e.stackStartFn,l=e.actual,u=e.expected,f=Error.stackTraceLimit;if(Error.stackTraceLimit=0,null!=r)i=s(this,h(t).call(this,String(r)));else if(n.stderr&&n.stderr.isTTY&&(n.stderr&&n.stderr.getColorDepth&&1!==n.stderr.getColorDepth()?(g="[34m",y="[32m",v="[39m",b="[31m"):(g="",y="",v="",b="")),"object"===d(l)&&null!==l&&"object"===d(u)&&null!==u&&"stack"in l&&l instanceof Error&&"stack"in u&&u instanceof Error&&(l=_(l),u=_(u)),"deepStrictEqual"===o||"strictEqual"===o)i=s(this,h(t).call(this,k(l,u,o)));else if("notDeepStrictEqual"===o||"notStrictEqual"===o){var m=w[o],S=x(l).split("\n");if("notStrictEqual"===o&&"object"===d(l)&&null!==l&&(m=w.notStrictEqualObject),S.length>30)for(S[26]="".concat(g,"...").concat(v);S.length>27;)S.pop();i=1===S.length?s(this,h(t).call(this,"".concat(m," ").concat(S[0]))):s(this,h(t).call(this,"".concat(m,"\n\n").concat(S.join("\n"),"\n")))}else{var E=x(l),I="",C=w[o];"notDeepEqual"===o||"notEqual"===o?(E="".concat(w[o],"\n\n").concat(E)).length>1024&&(E="".concat(E.slice(0,1021),"...")):(I="".concat(x(u)),E.length>512&&(E="".concat(E.slice(0,509),"...")),I.length>512&&(I="".concat(I.slice(0,509),"...")),"deepEqual"===o||"equal"===o?E="".concat(C,"\n\n").concat(E,"\n\nshould equal\n\n"):I=" ".concat(o," ").concat(I)),i=s(this,h(t).call(this,"".concat(E).concat(I)))}return Error.stackTraceLimit=f,i.generatedMessage=!r,Object.defineProperty(a(i),"name",{value:"AssertionError [ERR_ASSERTION]",enumerable:!1,writable:!0,configurable:!0}),i.code="ERR_ASSERTION",i.actual=l,i.expected=u,i.operator=o,Error.captureStackTrace&&Error.captureStackTrace(a(i),c),i.stack,i.name="AssertionError",s(i)}var o,c,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),o=t,c=[{key:"toString",value:function(){return"".concat(this.name," [").concat(this.code,"]: ").concat(this.message)}},{key:f.custom,value:function(e,t){return f(this,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},t,{customInspect:!1,depth:0}))}}],c&&r(o.prototype,c),l&&r(o,l),t}(c(Error));e.exports=S})),o.register("cgET4",(function(e,t){function n(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o=Object.keys(Object(r)),s=0,a=o.length;s<a;s++){var c=o[s],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}e.exports={assign:n,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:n})}}})),o.register("fmpVL",(function(e,t){var n=o("5AcsX"),i=o("e9CQ6"),r=o("5kJ8M"),s=o("7f1SY"),a=o("h1yzf"),c=i(s(),Object);n(c,{getPolyfill:s,implementation:r,shim:a}),e.exports=c})),o.register("5AcsX",(function(e,t){var n=o("lTDqP"),i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,s=Array.prototype.concat,a=Object.defineProperty,c=o("73hDB")(),l=a&&c,u=function(e,t,n,i){if(t in e)if(!0===i){if(e[t]===n)return}else if("function"!=typeof(o=i)||"[object Function]"!==r.call(o)||!i())return;var o;l?a(e,t,{configurable:!0,enumerable:!1,value:n,writable:!0}):e[t]=n},h=function(e,t){var r=arguments.length>2?arguments[2]:{},o=n(t);i&&(o=s.call(o,Object.getOwnPropertySymbols(t)));for(var a=0;a<o.length;a+=1)u(e,o[a],t[o[a]],r[o[a]])};h.supportsDescriptors=!!l,e.exports=h})),o.register("lTDqP",(function(e,t){var n=Array.prototype.slice,i=o("cqifw"),r=Object.keys,s=r?function(e){return r(e)}:o("2HCYb"),a=Object.keys;s.shim=function(){if(Object.keys){var e=function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2);e||(Object.keys=function(e){return i(e)?a(n.call(e)):a(e)})}else Object.keys=s;return Object.keys||s},e.exports=s})),o.register("cqifw",(function(e,t){var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),i="[object Arguments]"===t;return i||(i="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),i}})),o.register("2HCYb",(function(e,t){var n;if(!Object.keys){var i=Object.prototype.hasOwnProperty,r=Object.prototype.toString,s=o("cqifw"),a=Object.prototype.propertyIsEnumerable,c=!a.call({toString:null},"toString"),l=a.call((function(){}),"prototype"),u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],h=function(e){var t=e.constructor;return t&&t.prototype===e},d={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!d["$"+e]&&i.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{h(window[e])}catch(e){return!0}}catch(e){return!0}return!1}();n=function(e){var t=null!==e&&"object"==typeof e,n="[object Function]"===r.call(e),o=s(e),a=t&&"[object String]"===r.call(e),d=[];if(!t&&!n&&!o)throw new TypeError("Object.keys called on a non-object");var p=l&&n;if(a&&e.length>0&&!i.call(e,0))for(var m=0;m<e.length;++m)d.push(String(m));if(o&&e.length>0)for(var g=0;g<e.length;++g)d.push(String(g));else for(var y in e)p&&"prototype"===y||!i.call(e,y)||d.push(String(y));if(c)for(var b=function(e){if("undefined"==typeof window||!f)return h(e);try{return h(e)}catch(e){return!1}}(e),v=0;v<7;++v)b&&"constructor"===u[v]||!i.call(e,u[v])||d.push(u[v]);return d}}e.exports=n})),o.register("73hDB",(function(e,t){var n=o("avqmt")("%Object.defineProperty%",!0),i=function(){if(n)try{return n({},"a",{value:1}),!0}catch(e){return!1}return!1};i.hasArrayLengthDefineBug=function(){if(!i())return null;try{return 1!==n([],"length",{value:1}).length}catch(e){return!0}},e.exports=i})),o.register("5kJ8M",(function(e,t){var n=function(e){return e!=e};e.exports=function(e,t){return 0===e&&0===t?1/e==1/t:e===t||!(!n(e)||!n(t))}})),o.register("7f1SY",(function(e,t){var n=o("5kJ8M");e.exports=function(){return"function"==typeof Object.is?Object.is:n}})),o.register("h1yzf",(function(e,t){var n=o("7f1SY"),i=o("5AcsX");e.exports=function(){var e=n();return i(Object,{is:e},{is:function(){return Object.is!==e}}),e}})),o.register("dFslL",(function(e,t){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var r=void 0!==/a/g.flags,s=function(e){var t=[];return e.forEach((function(e){return t.push(e)})),t},a=function(e){var t=[];return e.forEach((function(e,n){return t.push([n,e])})),t},c=Object.is?Object.is:o("fmpVL"),l=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]},u=Number.isNaN?Number.isNaN:o("4GuR1");function h(e){return e.call.bind(e)}var d=h(Object.prototype.hasOwnProperty),f=h(Object.prototype.propertyIsEnumerable),p=h(Object.prototype.toString),m=o("4zyeF").types,g=m.isAnyArrayBuffer,y=m.isArrayBufferView,b=m.isDate,v=m.isMap,w=m.isRegExp,_=m.isSet,x=m.isNativeError,k=m.isBoxedPrimitive,S=m.isNumberObject,E=m.isStringObject,I=m.isBooleanObject,C=m.isBigIntObject,T=m.isSymbolObject,N=m.isFloat32Array,R=m.isFloat64Array;function A(e){if(0===e.length||e.length>10)return!0;for(var t=0;t<e.length;t++){var n=e.charCodeAt(t);if(n<48||n>57)return!0}return 10===e.length&&e>=Math.pow(2,32)}function O(e){return Object.keys(e).filter(A).concat(l(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function P(e,t){if(e===t)return 0;for(var n=e.length,i=t.length,r=0,o=Math.min(n,i);r<o;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0}var L=0,D=1,M=2,j=3;function F(e,t,n,o){if(e===t)return 0!==e||(!n||c(e,t));if(n){if("object"!==i(e))return"number"==typeof e&&u(e)&&u(t);if("object"!==i(t)||null===e||null===t)return!1;if(Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1}else{if(null===e||"object"!==i(e))return(null===t||"object"!==i(t))&&e==t;if(null===t||"object"!==i(t))return!1}var s,a,l,h,d=p(e);if(d!==p(t))return!1;if(Array.isArray(e)){if(e.length!==t.length)return!1;var f=O(e),m=O(t);return f.length===m.length&&B(e,t,n,o,D,f)}if("[object Object]"===d&&(!v(e)&&v(t)||!_(e)&&_(t)))return!1;if(b(e)){if(!b(t)||Date.prototype.getTime.call(e)!==Date.prototype.getTime.call(t))return!1}else if(w(e)){if(!w(t)||(l=e,h=t,!(r?l.source===h.source&&l.flags===h.flags:RegExp.prototype.toString.call(l)===RegExp.prototype.toString.call(h))))return!1}else if(x(e)||e instanceof Error){if(e.message!==t.message||e.name!==t.name)return!1}else{if(y(e)){if(n||!N(e)&&!R(e)){if(!function(e,t){return e.byteLength===t.byteLength&&0===P(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}(e,t))return!1}else if(!function(e,t){if(e.byteLength!==t.byteLength)return!1;for(var n=0;n<e.byteLength;n++)if(e[n]!==t[n])return!1;return!0}(e,t))return!1;var A=O(e),F=O(t);return A.length===F.length&&B(e,t,n,o,L,A)}if(_(e))return!(!_(t)||e.size!==t.size)&&B(e,t,n,o,M);if(v(e))return!(!v(t)||e.size!==t.size)&&B(e,t,n,o,j);if(g(e)){if(a=t,(s=e).byteLength!==a.byteLength||0!==P(new Uint8Array(s),new Uint8Array(a)))return!1}else if(k(e)&&!function(e,t){return S(e)?S(t)&&c(Number.prototype.valueOf.call(e),Number.prototype.valueOf.call(t)):E(e)?E(t)&&String.prototype.valueOf.call(e)===String.prototype.valueOf.call(t):I(e)?I(t)&&Boolean.prototype.valueOf.call(e)===Boolean.prototype.valueOf.call(t):C(e)?C(t)&&BigInt.prototype.valueOf.call(e)===BigInt.prototype.valueOf.call(t):T(t)&&Symbol.prototype.valueOf.call(e)===Symbol.prototype.valueOf.call(t)}(e,t))return!1}return B(e,t,n,o,L)}function U(e,t){return t.filter((function(t){return f(e,t)}))}function B(e,t,r,o,c,u){if(5===arguments.length){u=Object.keys(e);var h=Object.keys(t);if(u.length!==h.length)return!1}for(var p=0;p<u.length;p++)if(!d(t,u[p]))return!1;if(r&&5===arguments.length){var m=l(e);if(0!==m.length){var g=0;for(p=0;p<m.length;p++){var y=m[p];if(f(e,y)){if(!f(t,y))return!1;u.push(y),g++}else if(f(t,y))return!1}var b=l(t);if(m.length!==b.length&&U(t,b).length!==g)return!1}else{var v=l(t);if(0!==v.length&&0!==U(t,v).length)return!1}}if(0===u.length&&(c===L||c===D&&0===e.length||0===e.size))return!0;if(void 0===o)o={val1:new Map,val2:new Map,position:0};else{var w=o.val1.get(e);if(void 0!==w){var _=o.val2.get(t);if(void 0!==_)return w===_}o.position++}o.val1.set(e,o.position),o.val2.set(t,o.position);var x=function(e,t,r,o,c,l){var u=0;if(l===M){if(!function(e,t,n,r){for(var o=null,a=s(e),c=0;c<a.length;c++){var l=a[c];if("object"===i(l)&&null!==l)null===o&&(o=new Set),o.add(l);else if(!t.has(l)){if(n)return!1;if(!q(e,t,l))return!1;null===o&&(o=new Set),o.add(l)}}if(null!==o){for(var u=s(t),h=0;h<u.length;h++){var d=u[h];if("object"===i(d)&&null!==d){if(!z(o,d,n,r))return!1}else if(!n&&!e.has(d)&&!z(o,d,n,r))return!1}return 0===o.size}return!0}(e,t,r,c))return!1}else if(l===j){if(!function(e,t,r,o){for(var s=null,c=a(e),l=0;l<c.length;l++){var u=n(c[l],2),h=u[0],d=u[1];if("object"===i(h)&&null!==h)null===s&&(s=new Set),s.add(h);else{var f=t.get(h);if(void 0===f&&!t.has(h)||!F(d,f,r,o)){if(r)return!1;if(!$(e,t,h,d,o))return!1;null===s&&(s=new Set),s.add(h)}}}if(null!==s){for(var p=a(t),m=0;m<p.length;m++){var g=n(p[m],2),y=(h=g[0],g[1]);if("object"===i(h)&&null!==h){if(!H(s,e,h,y,r,o))return!1}else if(!(r||e.has(h)&&F(e.get(h),y,!1,o)||H(s,e,h,y,!1,o)))return!1}return 0===s.size}return!0}(e,t,r,c))return!1}else if(l===D)for(;u<e.length;u++){if(!d(e,u)){if(d(t,u))return!1;for(var h=Object.keys(e);u<h.length;u++){var f=h[u];if(!d(t,f)||!F(e[f],t[f],r,c))return!1}return h.length===Object.keys(t).length}if(!d(t,u)||!F(e[u],t[u],r,c))return!1}for(u=0;u<o.length;u++){var p=o[u];if(!F(e[p],t[p],r,c))return!1}return!0}(e,t,r,u,o,c);return o.val1.delete(e),o.val2.delete(t),x}function z(e,t,n,i){for(var r=s(e),o=0;o<r.length;o++){var a=r[o];if(F(t,a,n,i))return e.delete(a),!0}return!1}function W(e){switch(i(e)){case"undefined":return null;case"object":return;case"symbol":return!1;case"string":e=+e;case"number":if(u(e))return!1}return!0}function q(e,t,n){var i=W(n);return null!=i?i:t.has(i)&&!e.has(i)}function $(e,t,n,i,r){var o=W(n);if(null!=o)return o;var s=t.get(o);return!(void 0===s&&!t.has(o)||!F(i,s,!1,r))&&(!e.has(o)&&F(i,s,!1,r))}function H(e,t,n,i,r,o){for(var a=s(e),c=0;c<a.length;c++){var l=a[c];if(F(n,l,r,o)&&F(i,t.get(l),r,o))return e.delete(l),!0}return!1}e.exports={isDeepEqual:function(e,t){return F(e,t,false)},isDeepStrictEqual:function(e,t){return F(e,t,true)}}})),o.register("4GuR1",(function(e,t){var n=o("e9CQ6"),i=o("5AcsX"),r=o("3o2B8"),s=o("eJ6Gj"),a=o("9j2pv"),c=n(s(),Number);i(c,{getPolyfill:s,implementation:r,shim:a}),e.exports=c})),o.register("3o2B8",(function(e,t){e.exports=function(e){return e!=e}})),o.register("eJ6Gj",(function(e,t){var n=o("3o2B8");e.exports=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:n}})),o.register("9j2pv",(function(e,t){var n=o("5AcsX"),i=o("eJ6Gj");e.exports=function(){var e=i();return n(Number,{isNaN:e},{isNaN:function(){return Number.isNaN!==e}}),e}})),o("kyEFX").register(JSON.parse('{"hZ8Bi":"index.4843786d.js","6pysX":"save_the_children_@1x.e387eaa5.png","hRcsc":"projech_hope_@1x.25b46d6c.png","6PD6k":"united24_@1x.7e58352b.png","b8gBG":"international_medical_corps_@1x.bcacdce8.png","aEdw0":"medecins_sans_frontieres_@1x.f7a113c5.png","6HXmE":"razom_@1x.fd446c8a.png","hy5T9":"action_against_hunger_@1x.f9dec778.png","9xxqi":"world_vision_@1x.99cc7292.png","iYxKf":"sergiy_prytula_@1x.ad8be370.png","1w34Y":"amazon-link_2x.88450da7.png","iITAK":"books-link_2x.b396e612.png","gqoTZ":"book-shop-link_2x.4495e777.png"}'));const s="isDark",a="theme-toggle-js",c=document.querySelector(`.${a}`);function l(e,t){if(e.target.classList.contains(a)){e.target;!function(e){c.checked&&(localStorage.setItem(s,"true"),u(e));c.checked||(localStorage.removeItem(s),u(e))}(t)}}function u(e){localStorage.getItem(s)?(e.setAttribute("data-theme","dark"),c.checked=!0):(e.setAttribute("data-theme","light"),c.checked=!1)}function h(e,t){return function(){return e.apply(t,arguments)}}const{toString:d}=Object.prototype,{getPrototypeOf:f}=Object,p=(m=Object.create(null),e=>{const t=d.call(e);return m[t]||(m[t]=t.slice(8,-1).toLowerCase())});var m;const g=e=>(e=e.toLowerCase(),t=>p(t)===e),y=e=>t=>typeof t===e,{isArray:b}=Array,v=y("undefined");const w=g("ArrayBuffer");const _=y("string"),x=y("function"),k=y("number"),S=e=>null!==e&&"object"==typeof e,E=e=>{if("object"!==p(e))return!1;const t=f(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},I=g("Date"),C=g("File"),T=g("Blob"),N=g("FileList"),R=g("URLSearchParams");function A(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),b(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),o=r.length;let s;for(i=0;i<o;i++)s=r[i],t.call(null,e[s],s,e)}}function O(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,L=e=>!v(e)&&e!==P;const D=(M="undefined"!=typeof Uint8Array&&f(Uint8Array),e=>M&&e instanceof M);var M;const j=g("HTMLFormElement"),F=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),U=g("RegExp"),B=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};A(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)},z="abcdefghijklmnopqrstuvwxyz",W="0123456789",q={DIGIT:W,ALPHA:z,ALPHA_DIGIT:z+z.toUpperCase()+W};var $={isArray:b,isArrayBuffer:w,isBuffer:function(e){return null!==e&&!v(e)&&null!==e.constructor&&!v(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||d.call(e)===t||x(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&w(e.buffer),t},isString:_,isNumber:k,isBoolean:e=>!0===e||!1===e,isObject:S,isPlainObject:E,isUndefined:v,isDate:I,isFile:C,isBlob:T,isRegExp:U,isFunction:x,isStream:e=>S(e)&&x(e.pipe),isURLSearchParams:R,isTypedArray:D,isFileList:N,forEach:A,merge:function e(){const{caseless:t}=L(this)&&this||{},n={},i=(i,r)=>{const o=t&&O(n,r)||r;E(n[o])&&E(i)?n[o]=e(n[o],i):E(i)?n[o]=e({},i):b(i)?n[o]=i.slice():n[o]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&A(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(A(t,((t,i)=>{n&&x(t)?e[i]=h(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,o,s;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)s=r[o],i&&!i(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&f(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:p,kindOfTest:g,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(b(e))return e;let t=e.length;if(!k(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:j,hasOwnProperty:F,hasOwnProp:F,reduceDescriptors:B,freezeMethods:e=>{B(e,((t,n)=>{if(x(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];x(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return b(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:O,global:P,isContextDefined:L,ALPHABET:q,generateString:(e=16,t=q.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n},isSpecCompliantForm:function(e){return!!(e&&x(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(S(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=b(e)?[]:{};return A(e,((e,t)=>{const o=n(e,i+1);!v(o)&&(r[t]=o)})),t[i]=void 0,r}}return e};return n(e,0)}};function H(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}$.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const V=H.prototype,X={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{X[e]={value:e}})),Object.defineProperties(H,X),Object.defineProperty(V,"isAxiosError",{value:!0}),H.from=(e,t,n,i,r,o)=>{const s=Object.create(V);return $.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),H.call(s,e.message,t,n,i,r),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};var G,K,J,Y=H,Q=null;K=function(e){var t,n,i=se(e),r=i[0],o=i[1],s=new ie(function(e,t,n){return 3*(t+n)/4-n}(0,r,o)),a=0,c=o>0?r-4:r;for(n=0;n<c;n+=4)t=ne[e.charCodeAt(n)]<<18|ne[e.charCodeAt(n+1)]<<12|ne[e.charCodeAt(n+2)]<<6|ne[e.charCodeAt(n+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;2===o&&(t=ne[e.charCodeAt(n)]<<2|ne[e.charCodeAt(n+1)]>>4,s[a++]=255&t);1===o&&(t=ne[e.charCodeAt(n)]<<10|ne[e.charCodeAt(n+1)]<<4|ne[e.charCodeAt(n+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t);return s},J=function(e){for(var t,n=e.length,i=n%3,r=[],o=16383,s=0,a=n-i;s<a;s+=o)r.push(ae(e,s,s+o>a?a:s+o));1===i?(t=e[n-1],r.push(te[t>>2]+te[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(te[t>>10]+te[t>>4&63]+te[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Z,ee,te=[],ne=[],ie="undefined"!=typeof Uint8Array?Uint8Array:Array,re="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",oe=0;oe<64;++oe)te[oe]=re[oe],ne[re.charCodeAt(oe)]=oe;function se(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function ae(e,t,n){for(var i,r,o=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(te[(r=i)>>18&63]+te[r>>12&63]+te[r>>6&63]+te[63&r]);return o.join("")}ne["-".charCodeAt(0)]=62,ne["_".charCodeAt(0)]=63,Z=function(e,t,n,i,r){var o,s,a=8*r-i-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=e[t+h];for(h+=d,o=f&(1<<-u)-1,f>>=-u,u+=a;u>0;o=256*o+e[t+h],h+=d,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=i;u>0;s=256*s+e[t+h],h+=d,u-=8);if(0===o)o=1-l;else{if(o===c)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),o-=l}return(f?-1:1)*s*Math.pow(2,o-i)},ee=function(e,t,n,i,r,o){var s,a,c,l=8*o-r-1,u=(1<<l)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:o-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(s++,c/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(t*c-1)*Math.pow(2,r),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,r),s=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(s=s<<r|a,l+=r;l>0;e[n+f]=255&s,f+=p,s/=256,l-=8);e[n+f-p]|=128*m};const ce="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;G=he;const le=2147483647;function ue(e){if(e>le)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,he.prototype),t}function he(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return pe(e)}return de(e,t,n)}function de(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!he.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|be(e,t);let i=ue(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Qe(e,Uint8Array)){const t=new Uint8Array(e);return ge(t.buffer,t.byteOffset,t.byteLength)}return me(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Qe(e,ArrayBuffer)||e&&Qe(e.buffer,ArrayBuffer))return ge(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Qe(e,SharedArrayBuffer)||e&&Qe(e.buffer,SharedArrayBuffer)))return ge(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return he.from(i,t,n);const r=function(e){if(he.isBuffer(e)){const t=0|ye(e.length),n=ue(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Ze(e.length)?ue(0):me(e);if("Buffer"===e.type&&Array.isArray(e.data))return me(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return he.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function fe(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function pe(e){return fe(e),ue(e<0?0:0|ye(e))}function me(e){const t=e.length<0?0:0|ye(e.length),n=ue(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function ge(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,he.prototype),i}function ye(e){if(e>=le)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+le.toString(16)+" bytes");return 0|e}function be(e,t){if(he.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Qe(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ke(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Je(e).length;default:if(r)return i?-1:Ke(e).length;t=(""+t).toLowerCase(),r=!0}}function ve(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Pe(this,t,n);case"utf8":case"utf-8":return Ne(this,t,n);case"ascii":return Ae(this,t,n);case"latin1":case"binary":return Oe(this,t,n);case"base64":return Te(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Le(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function we(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function _e(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Ze(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=he.from(t,i)),he.isBuffer(t))return 0===t.length?-1:xe(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):xe(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function xe(e,t,n,i,r){let o,s=1,a=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;s=2,a/=2,c/=2,n/=2}function l(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(r){let i=-1;for(o=n;o<a;o++)if(l(e,o)===l(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===c)return i*s}else-1!==i&&(o-=o-i),i=-1}else for(n+c>a&&(n=a-c),o=n;o>=0;o--){let n=!0;for(let i=0;i<c;i++)if(l(e,o+i)!==l(t,i)){n=!1;break}if(n)return o}return-1}function ke(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const o=t.length;let s;for(i>o/2&&(i=o/2),s=0;s<i;++s){const i=parseInt(t.substr(2*s,2),16);if(Ze(i))return s;e[n+s]=i}return s}function Se(e,t,n,i){return Ye(Ke(t,e.length-n),e,n,i)}function Ee(e,t,n,i){return Ye(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function Ie(e,t,n,i){return Ye(Je(t),e,n,i)}function Ce(e,t,n,i){return Ye(function(e,t){let n,i,r;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(t,e.length-n),e,n,i)}function Te(e,t,n){return 0===t&&n===e.length?J(e):J(e.slice(t,n))}function Ne(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(r+s<=n){let n,i,a,c;switch(s){case 1:t<128&&(o=t);break;case 2:n=e[r+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(o=c));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(c=(15&t)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),r+=s}return function(e){const t=e.length;if(t<=Re)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=Re));return n}(i)}he.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),he.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(he.prototype,"parent",{enumerable:!0,get:function(){if(he.isBuffer(this))return this.buffer}}),Object.defineProperty(he.prototype,"offset",{enumerable:!0,get:function(){if(he.isBuffer(this))return this.byteOffset}}),he.poolSize=8192,he.from=function(e,t,n){return de(e,t,n)},Object.setPrototypeOf(he.prototype,Uint8Array.prototype),Object.setPrototypeOf(he,Uint8Array),he.alloc=function(e,t,n){return function(e,t,n){return fe(e),e<=0?ue(e):void 0!==t?"string"==typeof n?ue(e).fill(t,n):ue(e).fill(t):ue(e)}(e,t,n)},he.allocUnsafe=function(e){return pe(e)},he.allocUnsafeSlow=function(e){return pe(e)},he.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==he.prototype},he.compare=function(e,t){if(Qe(e,Uint8Array)&&(e=he.from(e,e.offset,e.byteLength)),Qe(t,Uint8Array)&&(t=he.from(t,t.offset,t.byteLength)),!he.isBuffer(e)||!he.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},he.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},he.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return he.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=he.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(Qe(t,Uint8Array))r+t.length>i.length?(he.isBuffer(t)||(t=he.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!he.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},he.byteLength=be,he.prototype._isBuffer=!0,he.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)we(this,t,t+1);return this},he.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)we(this,t,t+3),we(this,t+1,t+2);return this},he.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)we(this,t,t+7),we(this,t+1,t+6),we(this,t+2,t+5),we(this,t+3,t+4);return this},he.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Ne(this,0,e):ve.apply(this,arguments)},he.prototype.toLocaleString=he.prototype.toString,he.prototype.equals=function(e){if(!he.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===he.compare(this,e)},he.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ce&&(he.prototype[ce]=he.prototype.inspect),he.prototype.compare=function(e,t,n,i,r){if(Qe(e,Uint8Array)&&(e=he.from(e,e.offset,e.byteLength)),!he.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(o,s),c=this.slice(i,r),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){o=c[e],s=l[e];break}return o<s?-1:s<o?1:0},he.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},he.prototype.indexOf=function(e,t,n){return _e(this,e,t,n,!0)},he.prototype.lastIndexOf=function(e,t,n){return _e(this,e,t,n,!1)},he.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return ke(this,e,t,n);case"utf8":case"utf-8":return Se(this,e,t,n);case"ascii":case"latin1":case"binary":return Ee(this,e,t,n);case"base64":return Ie(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ce(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},he.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const Re=4096;function Ae(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function Oe(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function Pe(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=et[e[i]];return r}function Le(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function De(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Me(e,t,n,i,r,o){if(!he.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<o)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function je(e,t,n,i,r){He(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function Fe(e,t,n,i,r){He(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function Ue(e,t,n,i,r,o){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Be(e,t,n,i,r){return t=+t,n>>>=0,r||Ue(e,0,n,4),ee(e,t,n,i,23,4),n+4}function ze(e,t,n,i,r){return t=+t,n>>>=0,r||Ue(e,0,n,8),ee(e,t,n,i,52,8),n+8}he.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,he.prototype),i},he.prototype.readUintLE=he.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return i},he.prototype.readUintBE=he.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},he.prototype.readUint8=he.prototype.readUInt8=function(e,t){return e>>>=0,t||De(e,1,this.length),this[e]},he.prototype.readUint16LE=he.prototype.readUInt16LE=function(e,t){return e>>>=0,t||De(e,2,this.length),this[e]|this[e+1]<<8},he.prototype.readUint16BE=he.prototype.readUInt16BE=function(e,t){return e>>>=0,t||De(e,2,this.length),this[e]<<8|this[e+1]},he.prototype.readUint32LE=he.prototype.readUInt32LE=function(e,t){return e>>>=0,t||De(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},he.prototype.readUint32BE=he.prototype.readUInt32BE=function(e,t){return e>>>=0,t||De(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},he.prototype.readBigUInt64LE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Xe(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),he.prototype.readBigUInt64BE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Xe(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),he.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},he.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=t,r=1,o=this[e+--i];for(;i>0&&(r*=256);)o+=this[e+--i]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*t)),o},he.prototype.readInt8=function(e,t){return e>>>=0,t||De(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},he.prototype.readInt16LE=function(e,t){e>>>=0,t||De(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},he.prototype.readInt16BE=function(e,t){e>>>=0,t||De(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},he.prototype.readInt32LE=function(e,t){return e>>>=0,t||De(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},he.prototype.readInt32BE=function(e,t){return e>>>=0,t||De(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},he.prototype.readBigInt64LE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Xe(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),he.prototype.readBigInt64BE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Xe(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),he.prototype.readFloatLE=function(e,t){return e>>>=0,t||De(e,4,this.length),Z(this,e,!0,23,4)},he.prototype.readFloatBE=function(e,t){return e>>>=0,t||De(e,4,this.length),Z(this,e,!1,23,4)},he.prototype.readDoubleLE=function(e,t){return e>>>=0,t||De(e,8,this.length),Z(this,e,!0,52,8)},he.prototype.readDoubleBE=function(e,t){return e>>>=0,t||De(e,8,this.length),Z(this,e,!1,52,8)},he.prototype.writeUintLE=he.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Me(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,o=0;for(this[t]=255&e;++o<n&&(r*=256);)this[t+o]=e/r&255;return t+n},he.prototype.writeUintBE=he.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Me(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,o=1;for(this[t+r]=255&e;--r>=0&&(o*=256);)this[t+r]=e/o&255;return t+n},he.prototype.writeUint8=he.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,1,255,0),this[t]=255&e,t+1},he.prototype.writeUint16LE=he.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},he.prototype.writeUint16BE=he.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},he.prototype.writeUint32LE=he.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},he.prototype.writeUint32BE=he.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},he.prototype.writeBigUInt64LE=tt((function(e,t=0){return je(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),he.prototype.writeBigUInt64BE=tt((function(e,t=0){return Fe(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),he.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Me(this,e,t,n,i-1,-i)}let r=0,o=1,s=0;for(this[t]=255&e;++r<n&&(o*=256);)e<0&&0===s&&0!==this[t+r-1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},he.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Me(this,e,t,n,i-1,-i)}let r=n-1,o=1,s=0;for(this[t+r]=255&e;--r>=0&&(o*=256);)e<0&&0===s&&0!==this[t+r+1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},he.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},he.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},he.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},he.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},he.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},he.prototype.writeBigInt64LE=tt((function(e,t=0){return je(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),he.prototype.writeBigInt64BE=tt((function(e,t=0){return Fe(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),he.prototype.writeFloatLE=function(e,t,n){return Be(this,e,t,!0,n)},he.prototype.writeFloatBE=function(e,t,n){return Be(this,e,t,!1,n)},he.prototype.writeDoubleLE=function(e,t,n){return ze(this,e,t,!0,n)},he.prototype.writeDoubleBE=function(e,t,n){return ze(this,e,t,!1,n)},he.prototype.copy=function(e,t,n,i){if(!he.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},he.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!he.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const o=he.isBuffer(e)?e:he.from(e,i),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=o[r%s]}return this};const We={};function qe(e,t,n){We[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function $e(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function He(e,t,n,i,r,o){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new We.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){Ve(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||Xe(t,e.length-(n+1))}(i,r,o)}function Ve(e,t){if("number"!=typeof e)throw new We.ERR_INVALID_ARG_TYPE(t,"number",e)}function Xe(e,t,n){if(Math.floor(e)!==e)throw Ve(e,n),new We.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new We.ERR_BUFFER_OUT_OF_BOUNDS;throw new We.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}qe("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),qe("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),qe("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=$e(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=$e(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const Ge=/[^+/0-9A-Za-z-_]/g;function Ke(e,t){let n;t=t||1/0;const i=e.length;let r=null;const o=[];for(let s=0;s<i;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(t-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Je(e){return K(function(e){if((e=(e=e.split("=")[0]).trim().replace(Ge,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Ye(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function Qe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Ze(e){return e!=e}const et=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function tt(e){return"undefined"==typeof BigInt?nt:e}function nt(){throw new Error("BigInt not supported")}var it=G;function rt(e){return $.isPlainObject(e)||$.isArray(e)}function ot(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function st(e,t,n){return e?e.concat(t).map((function(e,t){return e=ot(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const at=$.toFlatObject($,{},null,(function(e){return/^is[A-Z]/.test(e)}));var ct=function(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new(Q||FormData);const i=(n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!$.isUndefined(t[e])}))).metaTokens,r=n.visitor||l,o=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if($.isDate(e))return e.toISOString();if(!a&&$.isBlob(e))throw new Y("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(e)||$.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):it.from(e):e}function l(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if($.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if($.isArray(e)&&function(e){return $.isArray(e)&&!e.some(rt)}(e)||($.isFileList(e)||$.endsWith(n,"[]"))&&(a=$.toArray(e)))return n=ot(n),a.forEach((function(e,i){!$.isUndefined(e)&&null!==e&&t.append(!0===s?st([n],i,o):null===s?n:n+"[]",c(e))})),!1;return!!rt(e)||(t.append(st(r,n,o),c(e)),!1)}const u=[],h=Object.assign(at,{defaultVisitor:l,convertValue:c,isVisitable:rt});if(!$.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!$.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),$.forEach(n,(function(n,o){!0===(!($.isUndefined(n)||null===n)&&r.call(t,n,$.isString(o)?o.trim():o,i,h))&&e(n,i?i.concat(o):[o])})),u.pop()}}(e),t};function lt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ut(e,t){this._pairs=[],e&&ct(e,this,t)}const ht=ut.prototype;ht.append=function(e,t){this._pairs.push([e,t])},ht.toString=function(e){const t=e?function(t){return e.call(this,t,lt)}:lt;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var dt=ut;function ft(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pt(e,t,n){if(!t)return e;const i=n&&n.encode||ft,r=n&&n.serialize;let o;if(o=r?r(t,n):$.isURLSearchParams(t)?t.toString():new dt(t,n).toString(i),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}var mt=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){$.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},gt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var yt={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:dt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function bt(e,t){return ct(e,new yt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return yt.isNode&&$.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var vt=function(e){function t(e,n,i,r){let o=e[r++];const s=Number.isFinite(+o),a=r>=e.length;if(o=!o&&$.isArray(i)?i.length:o,a)return $.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!s;i[o]&&$.isObject(i[o])||(i[o]=[]);return t(e,n,i[o],r)&&$.isArray(i[o])&&(i[o]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],t[o]=e[o];return t}(i[o])),!s}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,((e,i)=>{t(function(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const wt={"Content-Type":void 0};const _t={transitional:gt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=$.isObject(e);r&&$.isHTMLForm(e)&&(e=new FormData(e));if($.isFormData(e))return i&&i?JSON.stringify(vt(e)):e;if($.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return bt(e,this.formSerializer).toString();if((o=$.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ct(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if($.isString(e))try{return(t||JSON.parse)(e),$.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||_t.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&$.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw Y.from(e,Y.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:yt.classes.FormData,Blob:yt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};$.forEach(["delete","get","head"],(function(e){_t.headers[e]={}})),$.forEach(["post","put","patch"],(function(e){_t.headers[e]=$.merge(wt)}));var xt=_t;const kt=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var St=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&kt[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const Et=Symbol("internals");function It(e){return e&&String(e).trim().toLowerCase()}function Ct(e){return!1===e||null==e?e:$.isArray(e)?e.map(Ct):String(e)}function Tt(e,t,n,i,r){return $.isFunction(i)?i.call(this,t,n):(r&&(t=n),$.isString(t)?$.isString(i)?-1!==t.indexOf(i):$.isRegExp(i)?i.test(t):void 0:void 0)}class Nt{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function r(e,t,n){const r=It(t);if(!r)throw new Error("header name must be a non-empty string");const o=$.findKey(i,r);(!o||void 0===i[o]||!0===n||void 0===n&&!1!==i[o])&&(i[o||t]=Ct(e))}const o=(e,t)=>$.forEach(e,((e,n)=>r(e,n,t)));return $.isPlainObject(e)||e instanceof this.constructor?o(e,t):$.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?o(St(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=It(e)){const n=$.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if($.isFunction(t))return t.call(this,e,n);if($.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=It(e)){const n=$.findKey(this,e);return!(!n||void 0===this[n]||t&&!Tt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=It(e)){const r=$.findKey(n,e);!r||t&&!Tt(0,n[r],r,t)||(delete n[r],i=!0)}}return $.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const r=t[n];e&&!Tt(0,this[r],r,e,!0)||(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return $.forEach(this,((i,r)=>{const o=$.findKey(n,r);if(o)return t[o]=Ct(i),void delete t[r];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();s!==r&&delete t[r],t[s]=Ct(i),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return $.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&$.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Et]=this[Et]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=It(e);t[i]||(!function(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return $.isArray(e)?e.forEach(i):i(e),this}}Nt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),$.freezeMethods(Nt.prototype),$.freezeMethods(Nt);var Rt=Nt;function At(e,t){const n=this||xt,i=t||n,r=Rt.from(i.headers);let o=i.data;return $.forEach(e,(function(e){o=e.call(n,o,r.normalize(),t?t.status:void 0)})),r.normalize(),o}function Ot(e){return!(!e||!e.__CANCEL__)}function Pt(e,t,n){Y.call(this,null==e?"canceled":e,Y.ERR_CANCELED,t,n),this.name="CanceledError"}$.inherits(Pt,Y,{__CANCEL__:!0});var Lt=Pt;function Dt(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new Y("Request failed with status code "+n.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Mt=yt.isStandardBrowserEnv?{write:function(e,t,n,i,r,o){const s=[];s.push(e+"="+encodeURIComponent(t)),$.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),$.isString(i)&&s.push("path="+i),$.isString(r)&&s.push("domain="+r),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function jt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ft(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?jt(e,t):t}var Ut=yt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=$.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Bt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var zt=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=i[s];r||(r=c),n[o]=a,i[o]=c;let u=s,h=0;for(;u!==o;)h+=n[u++],u%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-r<t)return;const d=l&&c-l;return d?Math.round(1e3*h/d):void 0}};function Wt(e,t){let n=0;const i=zt(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-n,c=i(a);n=o;const l={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&o<=s?(s-o)/c:void 0,event:r};l[t?"download":"upload"]=!0,e(l)}}var qt="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=Rt.from(e.headers).normalize(),o=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}$.isFormData(i)&&(yt.isStandardBrowserEnv||yt.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const l=Ft(e.baseURL,e.url);function u(){if(!c)return;const i=Rt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());Dt((function(e){t(e),a()}),(function(e){n(e),a()}),{data:o&&"text"!==o&&"json"!==o?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),pt(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new Y("Request aborted",Y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new Y("Network Error",Y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||gt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Y(t,i.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,e,c)),c=null},yt.isStandardBrowserEnv){const t=(e.withCredentials||Ut(l))&&e.xsrfCookieName&&Mt.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&$.forEach(r.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),$.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&"json"!==o&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Wt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Wt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new Lt(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=Bt(l);h&&-1===yt.protocols.indexOf(h)?n(new Y("Unsupported protocol "+h+":",Y.ERR_BAD_REQUEST,e)):c.send(i||null)}))};const $t={http:Q,xhr:qt};$.forEach($t,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Ht={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=$.isString(n)?$t[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new Y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error($.hasOwnProp($t,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!$.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:$t};function Vt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Lt(null,e)}function Xt(e){Vt(e),e.headers=Rt.from(e.headers),e.data=At.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ht.getAdapter(e.adapter||xt.adapter)(e).then((function(t){return Vt(e),t.data=At.call(e,e.transformResponse,t),t.headers=Rt.from(t.headers),t}),(function(t){return Ot(t)||(Vt(e),t&&t.response&&(t.response.data=At.call(e,e.transformResponse,t.response),t.response.headers=Rt.from(t.response.headers))),Promise.reject(t)}))}const Gt=e=>e instanceof Rt?e.toJSON():e;function Kt(e,t){t=t||{};const n={};function i(e,t,n){return $.isPlainObject(e)&&$.isPlainObject(t)?$.merge.call({caseless:n},e,t):$.isPlainObject(t)?$.merge({},t):$.isArray(t)?t.slice():t}function r(e,t,n){return $.isUndefined(t)?$.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function o(e,t){if(!$.isUndefined(t))return i(void 0,t)}function s(e,t){return $.isUndefined(t)?$.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,o){return o in t?i(n,r):o in e?i(void 0,n):void 0}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>r(Gt(e),Gt(t),!0)};return $.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const o=c[i]||r,s=o(e[i],t[i],i);$.isUndefined(s)&&o!==a||(n[i]=s)})),n}const Jt="1.3.5",Yt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Yt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Qt={};Yt.transitional=function(e,t,n){function i(e,t){return"[Axios v1.3.5] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,o)=>{if(!1===e)throw new Y(i(r," has been removed"+(t?" in "+t:"")),Y.ERR_DEPRECATED);return t&&!Qt[r]&&(Qt[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,o)}};var Zt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const o=i[r],s=t[o];if(s){const t=e[o],n=void 0===t||s(t,o,e);if(!0!==n)throw new Y("option "+o+" must be "+n,Y.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Y("Unknown option "+o,Y.ERR_BAD_OPTION)}},validators:Yt};const en=Zt.validators;class tn{constructor(e){this.defaults=e,this.interceptors={request:new mt,response:new mt}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Kt(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let o;void 0!==n&&Zt.assertOptions(n,{silentJSONParsing:en.transitional(en.boolean),forcedJSONParsing:en.transitional(en.boolean),clarifyTimeoutError:en.transitional(en.boolean)},!1),null!=i&&($.isFunction(i)?t.paramsSerializer={serialize:i}:Zt.assertOptions(i,{encode:en.function,serialize:en.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),o=r&&$.merge(r.common,r[t.method]),o&&$.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=Rt.concat(o,r);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[Xt.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);h<u;)l=l.then(e[h++],e[h++]);return l}u=s.length;let d=t;for(h=0;h<u;){const e=s[h++],t=s[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=Xt.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=c.length;h<u;)l=l.then(c[h++],c[h++]);return l}getUri(e){return pt(Ft((e=Kt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}$.forEach(["delete","get","head","options"],(function(e){tn.prototype[e]=function(t,n){return this.request(Kt(n||{},{method:e,url:t,data:(n||{}).data}))}})),$.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(Kt(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}tn.prototype[e]=t(),tn.prototype[e+"Form"]=t(!0)}));var nn=tn;class rn{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new Lt(e,i,r),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new rn((function(t){e=t})),cancel:e}}}var on=rn;const sn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sn).forEach((([e,t])=>{sn[t]=e}));var an=sn;const cn=function e(t){const n=new nn(t),i=h(nn.prototype.request,n);return $.extend(i,nn.prototype,n,{allOwnKeys:!0}),$.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(Kt(t,n))},i}(xt);cn.Axios=nn,cn.CanceledError=Lt,cn.CancelToken=on,cn.isCancel=Ot,cn.VERSION=Jt,cn.toFormData=ct,cn.AxiosError=Y,cn.Cancel=cn.CanceledError,cn.all=function(e){return Promise.all(e)},cn.spread=function(e){return function(t){return e.apply(null,t)}},cn.isAxiosError=function(e){return $.isObject(e)&&!0===e.isAxiosError},cn.mergeConfig=Kt,cn.AxiosHeaders=Rt,cn.formToJSON=e=>vt($.isHTMLForm(e)?new FormData(e):e),cn.HttpStatusCode=an,cn.default=cn;var ln=cn;const{Axios:un,AxiosError:hn,CanceledError:dn,isCancel:fn,CancelToken:pn,VERSION:mn,all:gn,Cancel:yn,isAxiosError:bn,spread:vn,toFormData:wn,AxiosHeaders:_n,HttpStatusCode:xn,formToJSON:kn,mergeConfig:Sn}=ln;class En{#e="https://books-backend.p.goit.global/books/";constructor(){this.bookId=0,this.category=""}fetchCategoryList(){return ln.get(`${this.#e}/category-list`).then((e=>e)).catch(console.error)}fetchTopBooks(){return ln.get(`${this.#e}/top-books`).then((e=>e)).catch(console.error)}fetchBookId(){return ln.get(`${this.#e}${this.bookId}`).then((e=>e)).catch(console.error)}fetchCategoryOfBooks(){return ln.get(`${this.#e}category?category=${this.category}`).then((e=>e)).catch((e=>console.error(e)))}}const In=document.querySelector("body");function Cn(){In.classList.add("loading")}function Tn(){window.setTimeout((function(){In.classList.remove("loading"),In.classList.add("loaded")}),1500)}const Nn=document.querySelector(".categories-list"),Rn=new En;function An(e){if(e.target.classList.contains("category")){if(e.target.classList.contains("checked-category"))return;Nn.querySelector(".checked-category").classList.remove("checked-category"),e.target.classList.add("checked-category")}}var On=o("67vkq");let Pn;var Ln;Ln=new URL(o("kyEFX").resolve("6pysX"),import.meta.url).toString();var Dn;Dn=new URL(o("kyEFX").resolve("hRcsc"),import.meta.url).toString();var Mn;Mn=new URL(o("kyEFX").resolve("6PD6k"),import.meta.url).toString();var jn;jn=new URL(o("kyEFX").resolve("b8gBG"),import.meta.url).toString();var Fn;Fn=new URL(o("kyEFX").resolve("aEdw0"),import.meta.url).toString();var Un;Un=new URL(o("kyEFX").resolve("6HXmE"),import.meta.url).toString();var Bn;Bn=new URL(o("kyEFX").resolve("hy5T9"),import.meta.url).toString();var zn;zn=new URL(o("kyEFX").resolve("9xxqi"),import.meta.url).toString();var Wn;Wn=new URL(o("kyEFX").resolve("iYxKf"),import.meta.url).toString();const qn=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(Ln)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(Dn)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(Mn)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(jn)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:new URL(Fn)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(Un)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(Bn)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(zn)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL(Wn)}],$n=document.querySelector(".js-support_list"),Hn=document.querySelector(".js-support_btn");Hn.addEventListener("click",(function(){if(window.innerWidth<768)return void Gn(Vn,Xn,Kn(Xn+1));Gn(Vn,Xn,Kn(Xn))}));const Vn=qn.map((({img:e,title:t,url:n},i)=>`<li class="support__item"><a href="${n}" class="support__link" aria-label="${t}" target="_blank" rel="noopener norefferer nofollow">\n    <p class="support__number">${(i+1).toString().padStart(2,"0")}</p><img class="support__img" src= ${e} alt="${t}"/></a></li>`));let Xn=0;function Gn(e,t,n){const i=e.slice(t,n).join("");Xn=Kn(Xn),$n.insertAdjacentHTML("beforeend",i),Vn.length<=n&&(Hn.style.display="none")}function Kn(e){return window.innerWidth<768?e+4:e+6}Gn(Vn,Xn,Kn(Xn)),(()=>{const e={openModalBtnBurger:document.querySelector("[data-burgermodal-auth-open]"),openModalBtnOptions:document.querySelector("[data-optionmodal-auth-open]"),openModalBtn:document.querySelector("[data-modal-auth-open]"),closeModalBtn:document.querySelector("[data-modal-auth-close]"),modal:document.querySelector("[data-modal-auth]"),modalWindow:document.querySelector("[data-modal-auth-window]")};function t(){window.addEventListener("keydown",i),e.modal.classList.remove("is-hidden"),e.modalWindow.classList.add("modal-animation")}function n(){window.removeEventListener("keydown",i),e.modal.classList.add("is-hidden"),e.modalWindow.classList.add("modal-animation")}function i(e){"Escape"===e.code&&n()}e.openModalBtnBurger.addEventListener("click",t),e.openModalBtnOptions.addEventListener("click",t),e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",n),e.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&n()}))})();const Jn=e=>{const t=document.querySelector(e),n=[{attribute:"required",isValid:e=>""!==e.value.trim(),errorMessage:(e,t)=>`${t.textContent} is required`},{attribute:"minlength",isValid:e=>e.value&&e.value.length>=parseInt(e.minLength,6),errorMessage:(e,t)=>`${t.textContent} needs to be at least ${e.minLength} characters`},{attribute:"pattern",isValid:e=>new RegExp(e.pattern).test(e.value),errorMessage:(e,t)=>`${t.textContent} should be valid`}],i=e=>{const t=e.querySelector("label"),i=e.querySelector("input, textarea"),r=e.querySelector(".error");let o=!1;for(const e of n)i.hasAttribute(e.attribute)&&!e.isValid(i)&&(r.textContent=e.errorMessage(i,t),o=!0);o||(r.textContent="")};t.addEventListener("submit",(e=>{e.preventDefault();const n=new FormData(e.currentTarget);console.log(n),n.forEach(((e,t)=>{console.log(t),console.log(e)}));document.querySelector("[data-modal-auth]");r(t)}));const r=e=>{Array.from(e.querySelectorAll("._req")).forEach((e=>{i(e)}))};t.setAttribute("novalidate",""),Array.from(t.elements).forEach((e=>e.addEventListener("blur",(e=>{i(e.srcElement.parentElement)}))))};Jn("#form"),Jn("#formbrief");const Yn=document.querySelector("[data-modal-options-window]"),Qn=document.querySelector("[data-modal-options-close]"),Zn="user choise",ei=(document.querySelector("[data-modal-auth]"),document.querySelector("[data-optionmodal-auth-open]"));1!=localStorage.getItem(Zn)&&setTimeout((()=>{Yn.classList.add("is-shown"),ei.addEventListener("click",(function(){localStorage.setItem(Zn,1),Yn.classList.remove("is-shown")})),Qn.addEventListener("click",(function(){localStorage.setItem(Zn,1),Yn.classList.remove("is-shown")}))}),8e3);var ti;ti=new URL(o("kyEFX").resolve("1w34Y"),import.meta.url).toString();var ni;ni=new URL(o("kyEFX").resolve("iITAK"),import.meta.url).toString();var ii;function ri(e,t){const n=t?'<button class="card__btn remove-card__bnt btn">remove from shop list</button>':'<button class="card__btn add-card__bnt btn">add to shop list</button>';return`<div class="backdrop backdrop__modal js-book-modal">\n  <div class="modal book-card__modal scrollable">\n    <button class="modal-close__btn js-book-close">\n      <svg class="close__icon">\n        <use href="./images/icons.svg#close"></use>\n      </svg>\n    </button>\n    <div class="book-card">\n      <div class="book-card__thumb">\n        <img class="book-card__img" src="${e.book_image}" alt="book_image" loading="lazy" />\n      </div>\n      <div class="book-info">\n        <h2 class="book-title">${e.title}</h2>\n        <h3 class="book-author">${e.author}</h3>\n        <p class="book-description">${e.description}</p>\n        <ul class="shops-list list">\n          <li class="shops-item">\n            <a\n              class="buy-links"\n              href="${e.amazon_link}"\n              aria-label="amazon-shop icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="amazon-shop__icon book-shop__icons"\n                src="${new URL(ti)}"\n                alt="amazon-shop icon"\n                loading="lazy"\n              />\n            </a>\n          </li>\n          <li class="shops-item">\n            <a\n              class="buy-links"\n              href="${e.apple_link}"\n              aria-label="apple-book icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="apple-book__icon book-shop__icons"\n                src="${new URL(ni)}"\n                alt="apple-book icon"\n                loading="lazy"\n              />\n            </a>\n          </li>\n          <li class="shops-item">\n            <a\n              class="buy-links"\n              href="${e.bookshop_link}"\n              aria-label="bookshop icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="bookshop-icon book-shop__icons"\n                src="${new URL(ii)}"\n                alt="bookshop icon"\n                loading="lazy"\n              />\n            </a>\n          </li>\n        </ul>\n      </div>\n      \n    </div>\n    <div class="book-card__btn">${n}</div>`}ii=new URL(o("kyEFX").resolve("gqoTZ"),import.meta.url).toString();const oi=document.querySelector(".top-books");oi&&oi.addEventListener("click",(async e=>{const t=e.target.closest("li.js-book-modal");if(!t)return;const n=t.getAttribute("data-book-id"),i=new En;i.bookId=n;const r=(await i.fetchBookId()).data,o={book_image:r.book_image,title:r.title,description:r.description,author:r.author,amazon_link:r.buy_links.find((e=>"Amazon"===e.name))?.url,apple_link:r.buy_links.find((e=>"Apple Books"===e.name))?.url,bookshop_link:r.buy_links.find((e=>"Bookshop"===e.name))?.url},s="books",a=document.createElement("div");a.innerHTML=ri(o,u(n)),document.body.appendChild(a);const c=e=>{"Escape"===e.key&&(document.body.removeChild(a),document.removeEventListener("keyup",c))};document.addEventListener("keyup",c);a.querySelector(".modal-close__btn").addEventListener("click",(function(){document.body.removeChild(a),document.removeEventListener("keyup",c),e.stopPropagation()}));const l=a.querySelector(".backdrop__modal");function u(e){let t=localStorage.getItem(s);return t||(t="[]"),-1!==JSON.parse(t).indexOf(e)}l.addEventListener("click",(function(t){if(t.target!==l)return;document.body.removeChild(a),document.removeEventListener("keyup",c),e.stopPropagation()})),a.querySelector(".book-card__btn").addEventListener("click",(e=>{u(n)?(!function(e){let t=localStorage.getItem(s);if(null===t)return;let n=JSON.parse(t);n=n.filter((t=>t!==e)),localStorage.setItem(s,JSON.stringify(n))}(n),e.target.innerText="add to shopping list"):(!function(e){let t=localStorage.getItem(s);t||(t="[]");const n=JSON.parse(t);n.push(e),localStorage.setItem(s,JSON.stringify(n))}(n),e.target.innerText="remove from the shopping list")}))}))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;var si=o("4TNnu");const ai=!1,ci=!1,li="${JSCORE_VERSION}",ui=function(e,t){if(!e)throw hi(t)},hi=function(e){return new Error("Firebase Database ("+li+") INTERNAL ASSERT FAILED: "+e)},di=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},fi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(di(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==o||null==s||null==a)throw new pi;const c=r<<2|o>>4;if(i.push(c),64!==s){const e=o<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mi=function(e){const t=di(e);return fi.encodeByteArray(t,!0)},gi=function(e){return mi(e).replace(/\./g,"")},yi=function(e){try{return fi.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(e){return vi(void 0,e)}function vi(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=vi(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wi=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,_i=()=>{try{return wi()||(()=>{if(void 0===si||void 0===si.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&yi(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},xi=e=>{var t,n;return null===(n=null===(t=_i())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ki=e=>{const t=xi(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Si=()=>{var e;return null===(e=_i())||void 0===e?void 0:e.config},Ei=e=>{var t;return null===(t=_i())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[gi(JSON.stringify({alg:"none",type:"JWT"})),gi(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ni(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ti())}function Ri(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Ai(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Oi(){const e=Ti();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Pi(){return!0===ai||!0===ci}function Li(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Di extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Di.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mi.prototype.create)}}class Mi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?function(e,t){return e.replace(ji,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new Di(i,s,n)}}const ji=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){return JSON.parse(e)}function Ui(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=function(e){let t={},n={},i={},r="";try{const o=e.split(".");t=Fi(yi(o[0])||""),n=Fi(yi(o[1])||""),r=o[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},zi=function(e){const t=Bi(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Wi=function(e){const t=Bi(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qi(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function $i(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Hi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Vi(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function Xi(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(Gi(n)&&Gi(o)){if(!Xi(n,o))return!1}else if(n!==o)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Gi(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ki(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ji(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Yi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^s&(a^c),r=1518500249):(i=s^a^c,r=1859775393):e<60?(i=s&a|c&(s|a),r=2400959708):(i=s^a^c,r=3395469782);const t=(o<<5|o>>>27)+i+l+r+n[e]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(0===o)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function Zi(e,t){const n=new er(e,t);return n.subscribe.bind(n)}class er{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=tr),void 0===i.error&&(i.error=tr),void 0===i.complete&&(i.complete=tr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function tr(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ir=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,ui(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},rr=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function or(e){return e&&e._delegate?e._delegate:e}class sr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ii;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===ar?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class lr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=[];var hr,dr;(dr=hr||(hr={}))[dr.DEBUG=0]="DEBUG",dr[dr.VERBOSE=1]="VERBOSE",dr[dr.INFO=2]="INFO",dr[dr.WARN=3]="WARN",dr[dr.ERROR=4]="ERROR",dr[dr.SILENT=5]="SILENT";const fr={debug:hr.DEBUG,verbose:hr.VERBOSE,info:hr.INFO,warn:hr.WARN,error:hr.ERROR,silent:hr.SILENT},pr=hr.INFO,mr={[hr.DEBUG]:"log",[hr.VERBOSE]:"log",[hr.INFO]:"info",[hr.WARN]:"warn",[hr.ERROR]:"error"},gr=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=mr[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class yr{constructor(e){this.name=e,this._logLevel=pr,this._logHandler=gr,this._userLogHandler=null,ur.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in hr))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?fr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,hr.DEBUG,...e),this._logHandler(this,hr.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,hr.VERBOSE,...e),this._logHandler(this,hr.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,hr.INFO,...e),this._logHandler(this,hr.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,hr.WARN,...e),this._logHandler(this,hr.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,hr.ERROR,...e),this._logHandler(this,hr.ERROR,...e)}}const br=(e,t)=>t.some((t=>e instanceof t));let vr,wr;const _r=new WeakMap,xr=new WeakMap,kr=new WeakMap,Sr=new WeakMap,Er=new WeakMap;let Ir={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return xr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||kr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Cr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(wr||(wr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Rr(this),t),Nr(_r.get(this))}:function(...t){return Nr(e.apply(Rr(this),t))}:function(t,...n){const i=e.call(Rr(this),t,...n);return kr.set(i,t.sort?t.sort():[t]),Nr(i)}}function Tr(e){return"function"==typeof e?Cr(e):(e instanceof IDBTransaction&&function(e){if(xr.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));xr.set(e,t)}(e),br(e,vr||(vr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Ir):e)}function Nr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(Nr(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&_r.set(t,e)})).catch((()=>{})),Er.set(t,e),t}(e);if(Sr.has(e))return Sr.get(e);const t=Tr(e);return t!==e&&(Sr.set(e,t),Er.set(t,e)),t}const Rr=e=>Er.get(e);function Ar(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(e,t),a=Nr(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(Nr(s.result),e.oldVersion,e.newVersion,Nr(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Or=["get","getKey","getAll","getAllKeys","count"],Pr=["put","add","delete","clear"],Lr=new Map;function Dr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Lr.get(t))return Lr.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Pr.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Or.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&o.done]))[0]};return Lr.set(t,o),o}Ir=(e=>({...e,get:(t,n,i)=>Dr(t,n)||e.get(t,n,i),has:(t,n)=>!!Dr(t,n)||e.has(t,n)}))(Ir);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const jr="@firebase/app",Fr="0.9.7",Ur=new yr("@firebase/app"),Br="[DEFAULT]",zr={[jr]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Wr=new Map,qr=new Map;function $r(e,t){try{e.container.addComponent(t)}catch(n){Ur.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Hr(e){const t=e.name;if(qr.has(t))return Ur.debug(`There were multiple attempts to register component ${t}.`),!1;qr.set(t,e);for(const t of Wr.values())$r(t,e);return!0}function Vr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xr=new Mi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new sr("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="9.19.1";function Jr(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Br,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw Xr.create("bad-app-name",{appName:String(r)});if(n||(n=Si()),!n)throw Xr.create("no-options");const o=Wr.get(r);if(o){if(Xi(n,o.options)&&Xi(i,o.config))return o;throw Xr.create("duplicate-app",{appName:r})}const s=new lr(r);for(const e of qr.values())s.addComponent(e);const a=new Gr(n,i,s);return Wr.set(r,a),a}function Yr(e=Br){const t=Wr.get(e);if(!t&&e===Br)return Jr();if(!t)throw Xr.create("no-app",{appName:e});return t}function Qr(e,t,n){var i;let r=null!==(i=zr[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ur.warn(e.join(" "))}Hr(new sr(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zr="firebase-heartbeat-database",eo=1,to="firebase-heartbeat-store";let no=null;function io(){return no||(no=Ar(Zr,eo,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(to)}}).catch((e=>{throw Xr.create("idb-open",{originalErrorMessage:e.message})}))),no}async function ro(e,t){try{const n=(await io()).transaction(to,"readwrite"),i=n.objectStore(to);return await i.put(t,oo(e)),n.done}catch(e){if(e instanceof Di)Ur.warn(e.message);else{const t=Xr.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ur.warn(t.message)}}}function oo(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new co(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ao();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ao(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),lo(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),lo(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=gi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ao(){return(new Date).toISOString().substring(0,10)}class co{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Li()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await io()).transaction(to).objectStore(to).get(oo(e))}catch(e){if(e instanceof Di)Ur.warn(e.message);else{const t=Xr.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ur.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ro(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ro(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function lo(e){return gi(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var uo;uo="",Hr(new sr("platform-logger",(e=>new Mr(e)),"PRIVATE")),Hr(new sr("heartbeat",(e=>new so(e)),"PRIVATE")),Qr(jr,Fr,uo),Qr(jr,Fr,"esm2017"),Qr("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qr("firebase","9.19.1","app");si=o("4TNnu");const ho="@firebase/database",fo="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ui(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Fi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return qi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new mo(t)}}catch(e){}return new go},bo=yo("localStorage"),vo=yo("sessionStorage"),wo=new yr("@firebase/database"),_o=function(){let e=1;return function(){return e++}}(),xo=function(e){const t=ir(e),n=new Qi;n.update(t);const i=n.digest();return fi.encodeByteArray(i)},ko=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=ko.apply(null,i):t+="object"==typeof i?Ui(i):i,t+=" "}return t};let So=null,Eo=!0;const Io=function(e,t){ui(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(wo.logLevel=hr.VERBOSE,So=wo.log.bind(wo),t&&vo.set("logging_enabled",!0)):"function"==typeof e?So=e:(So=null,vo.remove("logging_enabled"))},Co=function(...e){if(!0===Eo&&(Eo=!1,null===So&&!0===vo.get("logging_enabled")&&Io(!0)),So){const t=ko.apply(null,e);So(t)}},To=function(e){return function(...t){Co(e,...t)}},No=function(...e){const t="FIREBASE INTERNAL ERROR: "+ko(...e);wo.error(t)},Ro=function(...e){const t=`FIREBASE FATAL ERROR: ${ko(...e)}`;throw wo.error(t),new Error(t)},Ao=function(...e){const t="FIREBASE WARNING: "+ko(...e);wo.warn(t)},Oo=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Po="[MIN_NAME]",Lo="[MAX_NAME]",Do=function(e,t){if(e===t)return 0;if(e===Po||t===Lo)return-1;if(t===Po||e===Lo)return 1;{const n=qo(e),i=qo(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Mo=function(e,t){return e===t?0:e<t?-1:1},jo=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ui(t))},Fo=function(e){if("object"!=typeof e||null===e)return Ui(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Ui(t[i]),n+=":",n+=Fo(e[t[i]]);return n+="}",n},Uo=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Bo(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const zo=function(e){ui(!Oo(e),"Invalid JSON number");const t=1023;let n,i,r,o,s;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=o+t,r=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(s=11;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(s=0;s<64;s+=8){let e=parseInt(c.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const Wo=new RegExp("^-?(0*)\\d{1,10}$"),qo=function(e){if(Wo.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},$o=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Ao("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ho=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ao(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Co("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ao(e)}}class Go{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Go.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ko="5",Jo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yo="ac",Qo="websocket",Zo="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(e,t,n,i,r=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bo.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ts(e,t,n){let i;if(ui("string"==typeof t,"typeof type must == string"),ui("object"==typeof n,"typeof params must == object"),t===Qo)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Zo)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Bo(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.counters_={}}incrementCounter(e,t=1){qi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return bi(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is={},rs={};function os(e){const t=e.toString();return is[t]||(is[t]=new ns),is[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&$o((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="start";class cs{constructor(e,t,n,i,r,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=To(e),this.stats_=os(t),this.urlFn=e=>(this.appCheckToken&&(e[Yo]=this.appCheckToken),ts(t,Zo,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ss(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Pi()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ls(((...e)=>{const[t,n,i,r,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===as)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[as]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=Ko,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Yo]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Jo.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cs.forceAllow_=!0}static forceDisallow(){cs.forceDisallow_=!0}static isAvailable(){return!Pi()&&(!!cs.forceAllow_||!(cs.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ui(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=mi(t),i=Uo(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Pi())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ui(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ls{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Pi())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_o(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ls.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Co("frame writing exception"),e.stack&&Co(e.stack),Co(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Co("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){Pi()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Co("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us=null;"undefined"!=typeof MozWebSocket?us=MozWebSocket:"undefined"!=typeof WebSocket&&(us=WebSocket);class hs{constructor(e,t,n,i,r,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=To(this.connId),this.stats_=os(t),this.connURL=hs.connectionURL_(t,o,s,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const o={};return o.v=Ko,!Pi()&&"undefined"!=typeof location&&location.hostname&&Jo.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),i&&(o[Yo]=i),r&&(o.p=r),ts(e,Qo,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bo.set("previous_websocket_failure",!0);try{let e;if(Pi()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Ko}/${po}/${si.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new us(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){hs.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==us&&!hs.forceDisallow_}static previouslyFailed(){return bo.isInMemoryStorage||!0===bo.get("previous_websocket_failure")}markConnectionHealthy(){bo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Fi(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ui(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Ui(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Uo(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hs.responsesRequiredToBeHealthy=2,hs.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[cs,hs]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=hs&&hs.isAvailable();let n=t&&!hs.previouslyFailed();if(e.webSocketOnly&&(t||Ao("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[hs];else{const e=this.transports_=[];for(const t of ds.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ds.globalTransportInitialized_=!1;class fs{constructor(e,t,n,i,r,o,s,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=To("c:"+this.id+":"),this.transportManager_=new ds(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ho((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=jo("t",e),n=jo("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=jo("t",e),n=jo("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=jo("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?No("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):No("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ko!==n&&Ao("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ho((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ho((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.allowedEvents_=e,this.listeners_={},ui(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){ui(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends ms{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ni()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new gs}getInitialEvent(e){return ui("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=32,bs=768;class vs{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ws(){return new vs("")}function _s(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function xs(e){return e.pieces_.length-e.pieceNum_}function ks(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new vs(e.pieces_,t)}function Ss(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Es(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Is(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new vs(t,0)}function Cs(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof vs)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new vs(n,0)}function Ts(e){return e.pieceNum_>=e.pieces_.length}function Ns(e,t){const n=_s(e),i=_s(t);if(null===n)return t;if(n===i)return Ns(ks(e),ks(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Rs(e,t){const n=Es(e,0),i=Es(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=Do(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function As(e,t){if(xs(e)!==xs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Os(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(xs(e)>xs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ps{constructor(e,t){this.errorPrefix_=t,this.parts_=Es(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=rr(this.parts_[e]);Ls(this)}}function Ls(e){if(e.byteLength_>bs)throw new Error(e.errorPrefix_+"has a key path longer than "+bs+" bytes ("+e.byteLength_+").");if(e.parts_.length>ys)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ys+") or object contains a cycle "+Ds(e))}function Ds(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends ms{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ms}getInitialEvent(e){return ui("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=1e3;class Fs extends ps{constructor(e,t,n,i,r,o,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=Fs.nextPersistentConnectionId_++,this.log_=To("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=js,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Pi())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ms.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&gs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Ui(r)),ui(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new Ii,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),ui(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ui(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const s={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const o=r.d,s=r.s;Fs.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==s&&this.removeListen_(n,i),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&qi(e,"w")){const n=$i(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ao(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Wi(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=zi(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),ui(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const o={p:t,d:n};void 0!==r&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ui(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):No("Unrecognized action received from server: "+Ui(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ui(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=js),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fs.nextConnectionId_++,r=this.lastSessionId;let o=!1,s=null;const a=function(){s?s.close():(o=!0,n())},c=function(e){ui(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?Co("getToken() completed but was canceled"):(Co("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,s=new fs(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Ao(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Ao(e),a())}}}interrupt(e){Co("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Co("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hi(this.interruptReasons_)&&(this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Fo(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new vs(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Co("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Co("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Pi()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+po.replace(/\./g,"-")]=1,Ni()?e["framework.cordova"]=1:Ai()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gs.getInstance().currentlyOnline();return Hi(this.interruptReasons_)&&e}}Fs.nextPersistentConnectionId_=0,Fs.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Us(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Us(Po,e),i=new Us(Po,t);return 0!==this.compare(n,i)}minPost(){return Us.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs;class Ws extends Bs{static get __EMPTY_NODE(){return zs}static set __EMPTY_NODE(e){zs=e}compare(e,t){return Do(e.name,t.name)}isDefinedOn(e){throw hi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Us.MIN}maxPost(){return new Us(Lo,zs)}makePost(e,t){return ui("string"==typeof e,"KeyIndex indexValue must always be a string."),new Us(e,zs)}toString(){return".key"}}const qs=new Ws;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,i&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Hs{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Hs.RED,this.left=null!=i?i:Vs.EMPTY_NODE,this.right=null!=r?r:Vs.EMPTY_NODE}copy(e,t,n,i,r){return new Hs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vs.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Vs.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Hs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Hs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Hs.RED=!0,Hs.BLACK=!1;class Vs{constructor(e,t=Vs.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Vs(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Hs.BLACK,null,null))}remove(e){return new Vs(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Hs.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $s(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $s(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $s(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $s(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xs(e,t){return Do(e.name,t.name)}function Gs(e,t){return Do(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;Vs.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Hs(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Js=function(e){return"number"==typeof e?"number:"+zo(e):"string:"+e},Ys=function(e){if(e.isLeafNode()){const t=e.val();ui("string"==typeof t||"number"==typeof t||"object"==typeof t&&qi(t,".sv"),"Priority must be a string or number.")}else ui(e===Ks||e.isEmpty(),"priority of unexpected type.");ui(e===Ks||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qs,Zs,ea;class ta{constructor(e,t=ta.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ui(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ys(this.priorityNode_)}static set __childrenNodeConstructor(e){Qs=e}static get __childrenNodeConstructor(){return Qs}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ta(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ta.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ts(e)?this:".priority"===_s(e)?this.priorityNode_:ta.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ta.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=_s(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(ui(".priority"!==n||1===xs(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ta.__childrenNodeConstructor.EMPTY_NODE.updateChild(ks(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Js(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?zo(this.value_):this.value_,this.lazyHash_=xo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ta.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ta.__childrenNodeConstructor?-1:(ui(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ta.VALUE_TYPE_ORDER.indexOf(t),r=ta.VALUE_TYPE_ORDER.indexOf(n);return ui(i>=0,"Unknown leaf type: "+t),ui(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}ta.VALUE_TYPE_ORDER=["object","boolean","number","string"];const na=new class extends Bs{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Do(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Us.MIN}maxPost(){return new Us(Lo,new ta("[PRIORITY-POST]",ea))}makePost(e,t){const n=Zs(e);return new Us(t,new ta("[PRIORITY-POST]",n))}toString(){return".priority"}},ia=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ia,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oa=function(e,t,n,i){e.sort(t);const r=function(t,i){const o=i-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Hs(a,s.node,Hs.BLACK,null,null);{const c=parseInt(o/2,10)+t,l=r(t,c),u=r(c+1,i);return s=e[c],a=n?n(s):s,new Hs(a,s.node,Hs.BLACK,l,u)}},o=function(t){let i=null,o=null,s=e.length;const a=function(t,i){const o=s-t,a=s;s-=t;const l=r(o+1,a),u=e[o],h=n?n(u):u;c(new Hs(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(o=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Hs.BLACK):(a(i,Hs.BLACK),a(i,Hs.RED))}return o}(new ra(e.length));return new Vs(i||t,o)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa;const aa={};class ca{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return ui(aa&&na,"ChildrenNode.ts has not been loaded"),sa=sa||new ca({".priority":aa},{".priority":na}),sa}get(e){const t=$i(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Vs?t:null}hasIndex(e){return qi(this.indexSet_,e.toString())}addIndex(e,t){ui(e!==qs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Us.Wrap);let o,s=r.getNext();for(;s;)i=i||e.isDefinedOn(s.node),n.push(s),s=r.getNext();o=i?oa(n,e.getCompare()):aa;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=o,new ca(l,c)}addToIndexes(e,t){const n=Vi(this.indexes_,((n,i)=>{const r=$i(this.indexSet_,i);if(ui(r,"Missing index implementation for "+i),n===aa){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Us.Wrap);let o=i.getNext();for(;o;)o.name!==e.name&&n.push(o),o=i.getNext();return n.push(e),oa(n,r.getCompare())}return aa}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Us(e.name,i))),r.insert(e,e.node)}}));return new ca(n,this.indexSet_)}removeFromIndexes(e,t){const n=Vi(this.indexes_,(n=>{if(n===aa)return n;{const i=t.get(e.name);return i?n.remove(new Us(e.name,i)):n}}));return new ca(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la;class ua{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ys(this.priorityNode_),this.children_.isEmpty()&&ui(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return la||(la=new ua(new Vs(Gs),null,ca.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||la}updatePriority(e){return this.children_.isEmpty()?this:new ua(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?la:t}}getChild(e){const t=_s(e);return null===t?this:this.getImmediateChild(t).getChild(ks(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(ui(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Us(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const o=i.isEmpty()?la:this.priorityNode_;return new ua(i,o,r)}}updateChild(e,t){const n=_s(e);if(null===n)return t;{ui(".priority"!==_s(e)||1===xs(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ks(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(na,((o,s)=>{t[o]=s.val(e),n++,r&&ua.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Js(this.getPriority().val())+":"),this.forEachChild(na,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":xo(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Us(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Us(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Us(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Us.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Us.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ha?-1:0}withIndex(e){if(e===qs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ua(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(na),n=t.getIterator(na);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===qs?null:this.indexMap_.get(e.toString())}}ua.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ha=new class extends ua{constructor(){super(new Vs(Gs),ua.EMPTY_NODE,ca.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ua.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Us,{MIN:{value:new Us(Po,ua.EMPTY_NODE)},MAX:{value:new Us(Lo,ha)}}),Ws.__EMPTY_NODE=ua.EMPTY_NODE,ta.__childrenNodeConstructor=ua,Ks=ha,function(e){ea=e}(ha);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const da=!0;function fa(e,t=null){if(null===e)return ua.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),ui(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new ta(e,fa(t))}if(e instanceof Array||!da){let n=ua.EMPTY_NODE;return Bo(e,((t,i)=>{if(qi(e,t)&&"."!==t.substring(0,1)){const e=fa(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(fa(t))}{const n=[];let i=!1;if(Bo(e,((e,t)=>{if("."!==e.substring(0,1)){const r=fa(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Us(e,r)))}})),0===n.length)return ua.EMPTY_NODE;const r=oa(n,Xs,(e=>e.name),Gs);if(i){const e=oa(n,na.getCompare());return new ua(r,fa(t),new ca({".priority":e},{".priority":na}))}return new ua(r,fa(t),ca.Default)}}!function(e){Zs=e}(fa);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pa extends Bs{constructor(e){super(),this.indexPath_=e,ui(!Ts(e)&&".priority"!==_s(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Do(e.name,t.name):r}makePost(e,t){const n=fa(e),i=ua.EMPTY_NODE.updateChild(this.indexPath_,n);return new Us(t,i)}maxPost(){const e=ua.EMPTY_NODE.updateChild(this.indexPath_,ha);return new Us(Lo,e)}toString(){return Es(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new class extends Bs{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Do(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Us.MIN}maxPost(){return Us.MAX}makePost(e,t){const n=fa(e);return new Us(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e){return{type:"value",snapshotNode:e}}function ya(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ba(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function va(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=na}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return ui(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ui(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Po}hasEnd(){return this.endSet_}getIndexEndValue(){return ui(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ui(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Lo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return ui(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===na}copy(){const e=new wa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _a(e){const t={};if(e.isDefault())return t;let n;if(e.index_===na?n="$priority":e.index_===ma?n="$value":e.index_===qs?n="$key":(ui(e.index_ instanceof pa,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ui(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Ui(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Ui(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Ui(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Ui(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function xa(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==na&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends ps{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=To("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(ui(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ka.getListenId_(e,n),s={};this.listens_[o]=s;const a=_a(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),$i(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=ka.getListenId_(e,t);delete this.listens_[n]}get(e){const t=_a(e._queryParams),n=e._path.toString(),i=new Ii;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ki(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=Fi(s.responseText)}catch(e){Ao("Failed to parse JSON response for "+o+": "+s.responseText)}n(null,e)}else 401!==s.status&&404!==s.status&&Ao("Got unsuccessful REST response for "+o+" Status: "+s.status),n(s.status);n=null}},s.open("GET",o,!0),s.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.rootNode_=ua.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){return{value:null,children:new Map}}function Ia(e,t,n){if(Ts(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=_s(t);e.children.has(i)||e.children.set(i,Ea());Ia(e.children.get(i),t=ks(t),n)}}function Ca(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Ca(i,new vs(t.toString()+"/"+e),n)}))}class Ta{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Bo(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ta(e);const n=1e4+2e4*Math.random();Ho(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Bo(e,((e,i)=>{i>0&&qi(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Ho(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ra,Aa;function Oa(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Aa=Ra||(Ra={}))[Aa.OVERWRITE=0]="OVERWRITE",Aa[Aa.MERGE=1]="MERGE",Aa[Aa.ACK_USER_WRITE=2]="ACK_USER_WRITE",Aa[Aa.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Pa{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ra.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Ts(this.path)){if(null!=this.affectedTree.value)return ui(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new vs(e));return new Pa(ws(),t,this.revert)}}return ui(_s(this.path)===e,"operationForChild called for unrelated child."),new Pa(ks(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class La{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ra.OVERWRITE}operationForChild(e){return Ts(this.path)?new La(this.source,ws(),this.snap.getImmediateChild(e)):new La(this.source,ks(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ra.MERGE}operationForChild(e){if(Ts(this.path)){const t=this.children.subtree(new vs(e));return t.isEmpty()?null:t.value?new La(this.source,ws(),t.value):new Da(this.source,ws(),t)}return ui(_s(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Da(this.source,ks(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ts(e))return this.isFullyInitialized()&&!this.filtered_;const t=_s(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(e,t,n,i,r,o){const s=i.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw hi("Should only compare child_ events.");const i=new Us(t.childName,t.snapshotNode),r=new Us(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),s.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Fa(e,t){return{eventCache:e,serverCache:t}}function Ua(e,t,n,i){return Fa(new Ma(t,n,i),e.serverCache)}function Ba(e,t,n,i){return Fa(e.eventCache,new Ma(t,n,i))}function za(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Wa(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;class $a{constructor(e,t=(()=>(qa||(qa=new Vs(Mo)),qa))()){this.value=e,this.children=t}static fromObject(e){let t=new $a(null);return Bo(e,((e,n)=>{t=t.set(new vs(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ws(),value:this.value};if(Ts(e))return null;{const n=_s(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(ks(e),t);if(null!=r){return{path:Cs(new vs(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ts(e))return this;{const t=_s(e),n=this.children.get(t);return null!==n?n.subtree(ks(e)):new $a(null)}}set(e,t){if(Ts(e))return new $a(t,this.children);{const n=_s(e),i=(this.children.get(n)||new $a(null)).set(ks(e),t),r=this.children.insert(n,i);return new $a(this.value,r)}}remove(e){if(Ts(e))return this.children.isEmpty()?new $a(null):new $a(null,this.children);{const t=_s(e),n=this.children.get(t);if(n){const i=n.remove(ks(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new $a(null):new $a(this.value,r)}return this}}get(e){if(Ts(e))return this.value;{const t=_s(e),n=this.children.get(t);return n?n.get(ks(e)):null}}setTree(e,t){if(Ts(e))return t;{const n=_s(e),i=(this.children.get(n)||new $a(null)).setTree(ks(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new $a(this.value,r)}}fold(e){return this.fold_(ws(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Cs(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ws(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ts(e))return null;{const i=_s(e),r=this.children.get(i);return r?r.findOnPath_(ks(e),Cs(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ws(),t)}foreachOnPath_(e,t,n){if(Ts(e))return this;{this.value&&n(t,this.value);const i=_s(e),r=this.children.get(i);return r?r.foreachOnPath_(ks(e),Cs(t,i),n):new $a(null)}}foreach(e){this.foreach_(ws(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Cs(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.writeTree_=e}static empty(){return new Ha(new $a(null))}}function Va(e,t,n){if(Ts(t))return new Ha(new $a(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let o=i.value;const s=Ns(r,t);return o=o.updateChild(s,n),new Ha(e.writeTree_.set(r,o))}{const i=new $a(n),r=e.writeTree_.setTree(t,i);return new Ha(r)}}}function Xa(e,t,n){let i=e;return Bo(n,((e,n)=>{i=Va(i,Cs(t,e),n)})),i}function Ga(e,t){if(Ts(t))return Ha.empty();{const n=e.writeTree_.setTree(t,new $a(null));return new Ha(n)}}function Ka(e,t){return null!=Ja(e,t)}function Ja(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ns(n.path,t)):null}function Ya(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(na,((e,n)=>{t.push(new Us(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Us(e,n.value))})),t}function Qa(e,t){if(Ts(t))return e;{const n=Ja(e,t);return new Ha(null!=n?new $a(n):e.writeTree_.subtree(t))}}function Za(e){return e.writeTree_.isEmpty()}function ec(e,t){return tc(ws(),e.writeTree_,t)}function tc(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(ui(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=tc(Cs(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Cs(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(e,t){return mc(t,e)}function ic(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));ui(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,s=e.allWrites.length-1;for(;r&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&rc(t,i.path)?r=!1:Os(i.path,t.path)&&(o=!0)),s--}if(r){if(o)return function(e){e.visibleWrites=sc(e.allWrites,oc,ws()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Ga(e.visibleWrites,i.path);else{Bo(i.children,(t=>{e.visibleWrites=Ga(e.visibleWrites,Cs(i.path,t))}))}return!0}return!1}function rc(e,t){if(e.snap)return Os(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Os(Cs(e.path,n),t))return!0;return!1}function oc(e){return e.visible}function sc(e,t,n){let i=Ha.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)Os(n,e)?(t=Ns(n,e),i=Va(i,t,o.snap)):Os(e,n)&&(t=Ns(e,n),i=Va(i,ws(),o.snap.getChild(t)));else{if(!o.children)throw hi("WriteRecord should have .snap or .children");if(Os(n,e))t=Ns(n,e),i=Xa(i,t,o.children);else if(Os(e,n))if(t=Ns(e,n),Ts(t))i=Xa(i,ws(),o.children);else{const e=$i(o.children,_s(t));if(e){const n=e.getChild(ks(t));i=Va(i,ws(),n)}}}}}return i}function ac(e,t,n,i,r){if(i||r){const o=Qa(e.visibleWrites,t);if(!r&&Za(o))return n;if(r||null!=n||Ka(o,ws())){const o=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Os(e.path,t)||Os(t,e.path))};return ec(sc(e.allWrites,o,t),n||ua.EMPTY_NODE)}return null}{const i=Ja(e.visibleWrites,t);if(null!=i)return i;{const i=Qa(e.visibleWrites,t);if(Za(i))return n;if(null!=n||Ka(i,ws())){return ec(i,n||ua.EMPTY_NODE)}return null}}}function cc(e,t,n,i){return ac(e.writeTree,e.treePath,t,n,i)}function lc(e,t){return function(e,t,n){let i=ua.EMPTY_NODE;const r=Ja(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(na,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Qa(e.visibleWrites,t);return n.forEachChild(na,((e,t)=>{const n=ec(Qa(r,new vs(e)),t);i=i.updateImmediateChild(e,n)})),Ya(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Ya(Qa(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function uc(e,t,n,i){return function(e,t,n,i,r){ui(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=Cs(t,n);if(Ka(e.visibleWrites,o))return null;{const t=Qa(e.visibleWrites,o);return Za(t)?r.getChild(n):ec(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function hc(e,t){return function(e,t){return Ja(e.visibleWrites,t)}(e.writeTree,Cs(e.treePath,t))}function dc(e,t,n,i,r,o){return function(e,t,n,i,r,o,s){let a;const c=Qa(e.visibleWrites,t),l=Ja(c,ws());if(null!=l)a=l;else{if(null==n)return[];a=ec(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,o)}function fc(e,t,n){return function(e,t,n,i){const r=Cs(t,n),o=Ja(e.visibleWrites,r);if(null!=o)return o;if(i.isCompleteForChild(n))return ec(Qa(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function pc(e,t){return mc(Cs(e.treePath,t),e.writeTree)}function mc(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;ui("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),ui(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,va(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,ba(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,ya(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw hi("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,va(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class bc{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ma(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fc(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Wa(this.viewCache_),r=dc(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(e,t,n,i,r){const o=new gc;let s,a;if(n.type===Ra.OVERWRITE){const c=n;c.source.fromUser?s=xc(e,t,c.path,c.snap,i,r,o):(ui(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!Ts(c.path),s=_c(e,t,c.path,c.snap,i,r,a,o))}else if(n.type===Ra.MERGE){const c=n;c.source.fromUser?s=function(e,t,n,i,r,o,s){let a=t;return i.foreach(((i,c)=>{const l=Cs(n,i);kc(t,_s(l))&&(a=xc(e,a,l,c,r,o,s))})),i.foreach(((i,c)=>{const l=Cs(n,i);kc(t,_s(l))||(a=xc(e,a,l,c,r,o,s))})),a}(e,t,c.path,c.children,i,r,o):(ui(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),s=Ec(e,t,c.path,c.children,i,r,a,o))}else if(n.type===Ra.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,i,r,o){let s;if(null!=hc(i,n))return t;{const a=new bc(i,t,r),c=t.eventCache.getNode();let l;if(Ts(n)||".priority"===_s(n)){let n;if(t.serverCache.isFullyInitialized())n=cc(i,Wa(t));else{const e=t.serverCache.getNode();ui(e instanceof ua,"serverChildren would be complete if leaf node"),n=lc(i,e)}l=e.filter.updateFullNode(c,n,o)}else{const r=_s(n);let u=fc(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=c.getImmediateChild(r)),l=null!=u?e.filter.updateChild(c,r,u,ks(n),a,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,ua.EMPTY_NODE,ks(n),a,o):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=cc(i,Wa(t)),s.isLeafNode()&&(l=e.filter.updateFullNode(l,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=hc(i,ws()),Ua(t,l,s,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,o):function(e,t,n,i,r,o,s){if(null!=hc(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(Ts(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return _c(e,t,n,c.getNode().getChild(n),r,o,a,s);if(Ts(n)){let i=new $a(null);return c.getNode().forEachChild(qs,((e,t)=>{i=i.set(new vs(e),t)})),Ec(e,t,n,i,r,o,a,s)}return t}{let l=new $a(null);return i.foreach(((e,t)=>{const i=Cs(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),Ec(e,t,n,l,r,o,a,s)}}(e,t,a.path,a.affectedTree,i,r,o)}else{if(n.type!==Ra.LISTEN_COMPLETE)throw hi("Unknown operation type: "+n.type);s=function(e,t,n,i,r){const o=t.serverCache,s=Ba(t,o.getNode(),o.isFullyInitialized()||Ts(n),o.isFiltered());return wc(e,s,n,i,yc,r)}(e,t,n.path,i,o)}const c=o.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=za(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(ga(za(t)))}}(t,s,c),{viewCache:s,changes:c}}function wc(e,t,n,i,r,o){const s=t.eventCache;if(null!=hc(i,n))return t;{let a,c;if(Ts(n))if(ui(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Wa(t),r=lc(i,n instanceof ua?n:ua.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=cc(i,Wa(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const l=_s(n);if(".priority"===l){ui(1===xs(n),"Can't have a priority with additional path components");const r=s.getNode();c=t.serverCache.getNode();const o=uc(i,n,r,c);a=null!=o?e.filter.updatePriority(r,o):s.getNode()}else{const u=ks(n);let h;if(s.isCompleteForChild(l)){c=t.serverCache.getNode();const e=uc(i,n,s.getNode(),c);h=null!=e?s.getNode().getImmediateChild(l).updateChild(u,e):s.getNode().getImmediateChild(l)}else h=fc(i,l,t.serverCache);a=null!=h?e.filter.updateChild(s.getNode(),l,h,u,r,o):s.getNode()}}return Ua(t,a,s.isFullyInitialized()||Ts(n),e.filter.filtersNodes())}}function _c(e,t,n,i,r,o,s,a){const c=t.serverCache;let l;const u=s?e.filter:e.filter.getIndexedFilter();if(Ts(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=_s(n);if(!c.isCompleteForPath(n)&&xs(n)>1)return t;const r=ks(n),o=c.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,yc,null)}const h=Ba(t,l,c.isFullyInitialized()||Ts(n),u.filtersNodes());return wc(e,h,n,r,new bc(r,h,o),a)}function xc(e,t,n,i,r,o,s){const a=t.eventCache;let c,l;const u=new bc(r,t,o);if(Ts(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,s),c=Ua(t,l,!0,e.filter.filtersNodes());else{const r=_s(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=Ua(t,l,a.isFullyInitialized(),a.isFiltered());else{const o=ks(n),l=a.getNode().getImmediateChild(r);let h;if(Ts(o))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===Ss(o)&&e.getChild(Is(o)).isEmpty()?e:e.updateChild(o,i):ua.EMPTY_NODE}if(l.equals(h))c=t;else{c=Ua(t,e.filter.updateChild(a.getNode(),r,h,o,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function kc(e,t){return e.eventCache.isCompleteForChild(t)}function Sc(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Ec(e,t,n,i,r,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=Ts(n)?i:new $a(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=Sc(0,t.serverCache.getNode().getImmediateChild(n),i);l=_c(e,l,new vs(n),c,r,o,s,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=Sc(0,t.serverCache.getNode().getImmediateChild(n),i);l=_c(e,l,new vs(n),c,r,o,s,a)}})),l}function Ic(e,t){const n=Wa(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ts(t)&&!n.getImmediateChild(_s(t)).isEmpty())?n.getChild(t):null}function Cc(e,t,n,i){t.type===Ra.MERGE&&null!==t.source.queryId&&(ui(Wa(e.viewCache_),"We should always have a full cache before handling merges"),ui(za(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=vc(e.processor_,r,t,n,i);var s,a;return s=e.processor_,a=o.viewCache,ui(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),ui(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),ui(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Tc(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Tc(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],o=[];return t.forEach((t=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),ja(e,r,"child_removed",t,i,n),ja(e,r,"child_added",t,i,n),ja(e,r,"child_moved",o,i,n),ja(e,r,"child_changed",t,i,n),ja(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc,Rc;function Ac(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return ui(null!=o,"SyncTree gave us an op for an invalid query."),Cc(o,t,n,i)}{let r=[];for(const o of e.views.values())r=r.concat(Cc(o,t,n,i));return r}}function Oc(e,t){let n=null;for(const i of e.views.values())n=n||Ic(i,t);return n}class Pc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $a(null),this.pendingWriteTree_={visibleWrites:Ha.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Lc(e,t,n,i,r){return function(e,t,n,i,r){ui(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Va(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Bc(e,new La({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Dc(e,t,n,i){!function(e,t,n,i){ui(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Xa(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const r=$a.fromObject(n);return Bc(e,new Da({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function Mc(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(ic(e.pendingWriteTree_,t)){let t=new $a(null);return null!=i.snap?t=t.set(ws(),!0):Bo(i.children,(e=>{t=t.set(new vs(e),!0)})),Bc(e,new Pa(i.path,t,n))}return[]}function jc(e,t,n){return Bc(e,new La({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Fc(e,t,n,i){const r=qc(e,i);if(null!=r){const i=$c(r),o=i.path,s=i.queryId,a=Ns(o,t);return Hc(e,o,new La(Oa(s),a,n))}return[]}function Uc(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Oc(n,Ns(e,t));if(i)return i}));return ac(i,t,r,n,!0)}function Bc(e,t){return zc(t,e.syncPointTree_,null,nc(e.pendingWriteTree_,ws()))}function zc(e,t,n,i){if(Ts(e.path))return Wc(e,t,n,i);{const r=t.get(ws());null==n&&null!=r&&(n=Oc(r,ws()));let o=[];const s=_s(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=pc(i,s);o=o.concat(zc(a,c,e,t))}return r&&(o=o.concat(Ac(r,e,i,n))),o}}function Wc(e,t,n,i){const r=t.get(ws());null==n&&null!=r&&(n=Oc(r,ws()));let o=[];return t.children.inorderTraversal(((t,r)=>{const s=n?n.getImmediateChild(t):null,a=pc(i,t),c=e.operationForChild(t);c&&(o=o.concat(Wc(c,r,s,a)))})),r&&(o=o.concat(Ac(r,e,i,n))),o}function qc(e,t){return e.tagToQueryMap.get(t)}function $c(e){const t=e.indexOf("$");return ui(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new vs(e.substr(0,t))}}function Hc(e,t,n){const i=e.syncPointTree_.get(t);ui(i,"Missing sync point for query tag that we're tracking");return Ac(i,n,nc(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Vc(t)}node(){return this.node_}}class Xc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Cs(this.path_,e);return new Xc(this.syncTree_,t)}node(){return Uc(this.syncTree_,this.path_)}}const Gc=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Kc=function(e,t,n){return e&&"object"==typeof e?(ui(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Jc(e[".sv"],t,n):"object"==typeof e[".sv"]?Yc(e[".sv"],t):void ui(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Jc=function(e,t,n){if("timestamp"===e)return n.timestamp;ui(!1,"Unexpected server value: "+e)},Yc=function(e,t,n){e.hasOwnProperty("increment")||ui(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&ui(!1,"Unexpected increment value: "+i);const r=t.node();if(ui(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return"number"!=typeof o?i:o+i},Qc=function(e,t,n,i){return el(t,new Xc(n,e),i)},Zc=function(e,t,n){return el(e,new Vc(t),n)};function el(e,t,n){const i=e.getPriority().val(),r=Kc(i,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const i=e,o=Kc(i.getValue(),t,n);return o!==i.getValue()||r!==i.getPriority().val()?new ta(o,fa(r)):e}{const i=e;return o=i,r!==i.getPriority().val()&&(o=o.updatePriority(new ta(r))),i.forEachChild(na,((e,i)=>{const r=el(i,t.getImmediateChild(e),n);r!==i&&(o=o.updateImmediateChild(e,r))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function nl(e,t){let n=t instanceof vs?t:new vs(t),i=e,r=_s(n);for(;null!==r;){const e=$i(i.node.children,r)||{children:{},childCount:0};i=new tl(r,i,e),n=ks(n),r=_s(n)}return i}function il(e){return e.node.value}function rl(e,t){e.node.value=t,ll(e)}function ol(e){return e.node.childCount>0}function sl(e,t){Bo(e.node.children,((n,i)=>{t(new tl(n,e,i))}))}function al(e,t,n,i){n&&!i&&t(e),sl(e,(e=>{al(e,t,!0,i)})),n&&i&&t(e)}function cl(e){return new vs(null===e.parent?e.name:cl(e.parent)+"/"+e.name)}function ll(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===il(e)&&!ol(e)}(n),r=qi(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,ll(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,ll(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const ul=/[\[\].#$\/\u0000-\u001F\u007F]/,hl=/[\[\].#$\u0000-\u001F\u007F]/,dl=10485760,fl=function(e){return"string"==typeof e&&0!==e.length&&!ul.test(e)},pl=function(e){return"string"==typeof e&&0!==e.length&&!hl.test(e)},ml=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Oo(e)||e&&"object"==typeof e&&qi(e,".sv")},gl=function(e,t,n,i){i&&void 0===t||yl(nr(e,"value"),t,n)},yl=function(e,t,n){const i=n instanceof vs?new Ps(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ds(i));if("function"==typeof t)throw new Error(e+"contains a function "+Ds(i)+" with contents = "+t.toString());if(Oo(t))throw new Error(e+"contains "+t.toString()+" "+Ds(i));if("string"==typeof t&&t.length>3495253.3333333335&&rr(t)>dl)throw new Error(e+"contains a string greater than "+dl+" utf8 bytes "+Ds(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Bo(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!fl(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ds(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=t,(s=i).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=rr(a),Ls(s),yl(e,o,i),function(e){const t=e.parts_.pop();e.byteLength_-=rr(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Ds(i)+" in addition to actual children.")}},bl=function(e,t,n,i){if(i&&void 0===t)return;const r=nr(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];Bo(t,((e,t)=>{const i=new vs(e);if(yl(r,t,Cs(n,i)),".priority"===Ss(i)&&!ml(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=Es(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!fl(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Rs);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Os(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}}(r,o)},vl=function(e,t,n,i){if(!(i&&void 0===n||pl(n)))throw new Error(nr(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},wl=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vl(e,t,n,i)},_l=function(e,t){if(".info"===_s(t))throw new Error(e+" failed = Can't modify data under /.info/")},xl=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!fl(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),pl(e)}(n))throw new Error(nr(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kl{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sl(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],o=r.getPath();null===n||As(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(r)}n&&e.eventLists_.push(n)}function El(e,t,n){Sl(e,n),Il(e,(e=>Os(e,t)||Os(t,e)))}function Il(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Cl(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Cl(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();So&&Co("event: "+n.toString()),$o(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="repo_interrupt",Nl=25;class Rl{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kl,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ea(),this.transactionQueueTree_=new tl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Al(e,t,n){if(e.stats_=os(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new ka(e.repoInfo_,((t,n,i,r)=>{Ll(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Dl(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ui(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Fs(e.repoInfo_,t,((t,n,i,r)=>{Ll(e,t,n,i,r)}),(t=>{Dl(e,t)}),(t=>{!function(e,t){Bo(t,((t,n)=>{Ml(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return rs[n]||(rs[n]=t()),rs[n]}(e.repoInfo_,(()=>new Na(e.stats_,e.server_))),e.infoData_=new Sa,e.infoSyncTree_=new Pc({startListening:(t,n,i,r)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=jc(e.infoSyncTree_,t._path,s),setTimeout((()=>{r("ok")}),0)),o},stopListening:()=>{}}),Ml(e,"connected",!1),e.serverSyncTree_=new Pc({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const o=r(n,i);El(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Ol(e){const t=e.infoData_.getNode(new vs(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Pl(e){return Gc({timestamp:Ol(e)})}function Ll(e,t,n,i,r){e.dataUpdateCount++;const o=new vs(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(r)if(i){const t=Vi(n,(e=>fa(e)));s=function(e,t,n,i){const r=qc(e,i);if(r){const i=$c(r),o=i.path,s=i.queryId,a=Ns(o,t),c=$a.fromObject(n);return Hc(e,o,new Da(Oa(s),a,c))}return[]}(e.serverSyncTree_,o,t,r)}else{const t=fa(n);s=Fc(e.serverSyncTree_,o,t,r)}else if(i){const t=Vi(n,(e=>fa(e)));s=function(e,t,n){const i=$a.fromObject(n);return Bc(e,new Da({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,o,t)}else{const t=fa(n);s=jc(e.serverSyncTree_,o,t)}let a=o;s.length>0&&(a=$l(e,o)),El(e.eventQueue_,a,s)}function Dl(e,t){Ml(e,"connected",t),!1===t&&function(e){Bl(e,"onDisconnectEvents");const t=Pl(e),n=Ea();Ca(e.onDisconnect_,ws(),((i,r)=>{const o=Qc(i,r,e.serverSyncTree_,t);Ia(n,i,o)}));let i=[];Ca(n,ws(),((t,n)=>{i=i.concat(jc(e.serverSyncTree_,t,n));const r=Kl(e,t);$l(e,r)})),e.onDisconnect_=Ea(),El(e.eventQueue_,ws(),i)}(e)}function Ml(e,t,n){const i=new vs("/.info/"+t),r=fa(n);e.infoData_.updateSnapshot(i,r);const o=jc(e.infoSyncTree_,i,r);El(e.eventQueue_,i,o)}function jl(e){return e.nextWriteId_++}function Fl(e,t,n,i,r){Bl(e,"set",{path:t.toString(),value:n,priority:i});const o=Pl(e),s=fa(n,i),a=Uc(e.serverSyncTree_,t),c=Zc(s,a,o),l=jl(e),u=Lc(e.serverSyncTree_,t,c,l,!0);Sl(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,i)=>{const o="ok"===n;o||Ao("set at "+t+" failed: "+n);const s=Mc(e.serverSyncTree_,l,!o);El(e.eventQueue_,t,s),zl(e,r,n,i)}));const h=Kl(e,t);$l(e,h),El(e.eventQueue_,h,[])}function Ul(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Tl)}function Bl(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Co(n,...t)}function zl(e,t,n,i){t&&$o((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const o=new Error(r);o.code=e,t(o)}}))}function Wl(e,t,n){return Uc(e.serverSyncTree_,t,n)||ua.EMPTY_NODE}function ql(e,t=e.transactionQueueTree_){if(t||Gl(e,t),il(t)){const n=Vl(e,t);ui(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Wl(e,t,i);let o=r;const s=r.hash();for(let e=0;e<n.length;e++){const i=n[e];ui(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=Ns(t,i.path);o=o.updateChild(r,i.currentOutputSnapshotRaw)}const a=o.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{Bl(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Mc(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Gl(e,nl(e.transactionQueueTree_,t)),ql(e,e.transactionQueueTree_),El(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)$o(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ao("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}$l(e,t)}}),s)}(e,cl(t),n)}else ol(t)&&sl(t,(t=>{ql(e,t)}))}function $l(e,t){const n=Hl(e,t),i=cl(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)),s=o.map((e=>e.currentWriteId));for(let o=0;o<t.length;o++){const c=t[o],l=Ns(n,c.path);let u,h=!1;if(ui(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,u=c.abortReason,r=r.concat(Mc(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=Nl)h=!0,u="maxretry",r=r.concat(Mc(e.serverSyncTree_,c.currentWriteId,!0));else{const n=Wl(e,c.path,s);c.currentInputSnapshot=n;const i=t[o].update(n.val());if(void 0!==i){yl("transaction failed: Data returned ",i,c.path);let t=fa(i);"object"==typeof i&&null!=i&&qi(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=Pl(e),l=Zc(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=jl(e),s.splice(s.indexOf(o),1),r=r.concat(Lc(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),r=r.concat(Mc(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",r=r.concat(Mc(e.serverSyncTree_,c.currentWriteId,!0))}El(e.eventQueue_,n,r),r=[],h&&(t[o].status=2,a=t[o].unwatcher,setTimeout(a,Math.floor(0)),t[o].onComplete&&("nodata"===u?i.push((()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot))):i.push((()=>t[o].onComplete(new Error(u),!1,null)))))}var a;Gl(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)$o(i[e]);ql(e,e.transactionQueueTree_)}(e,Vl(e,n),i),i}function Hl(e,t){let n,i=e.transactionQueueTree_;for(n=_s(t);null!==n&&void 0===il(i);)i=nl(i,n),n=_s(t=ks(t));return i}function Vl(e,t){const n=[];return Xl(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Xl(e,t,n){const i=il(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);sl(t,(t=>{Xl(e,t,n)}))}function Gl(e,t){const n=il(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,rl(t,n.length>0?n:void 0)}sl(t,(t=>{Gl(e,t)}))}function Kl(e,t){const n=cl(Hl(e,t)),i=nl(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Jl(e,t)})),Jl(e,i),al(i,(t=>{Jl(e,t)})),n}function Jl(e,t){const n=il(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(ui(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(ui(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Mc(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?rl(t,void 0):n.length=o+1,El(e.eventQueue_,cl(t),r);for(let e=0;e<i.length;e++)$o(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=function(e,t){const n=Ql(e),i=n.namespace;"firebase.com"===n.domain&&Ro(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Ro("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ao("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new es(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new vs(n.pathString)}},Ql=function(e){let t="",n="",i="",r="",o="",s=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ao(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=i}"ns"in d&&(o=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:s,scheme:a,pathString:r,namespace:o}},Zl="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Ts(this._path)?null:Ss(this._path)}get ref(){return new tu(this._repo,this._path)}get _queryIdentifier(){const e=xa(this._queryParams),t=Fo(e);return"{}"===t?"default":t}get _queryObject(){return xa(this._queryParams)}isEqual(e){if(!((e=or(e))instanceof eu))return!1;const t=this._repo===e._repo,n=As(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class tu extends eu{constructor(e,t){super(e,t,new wa,!1)}get parent(){const e=Is(this._path);return null===e?null:new tu(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}function nu(e,t){return(e=or(e))._checkNotDeleted("ref"),void 0!==t?iu(e._root,t):e._root}function iu(e,t){return null===_s((e=or(e))._path)?wl("child","path",t,!1):vl("child","path",t,!1),new tu(e._repo,Cs(e._path,t))}function ru(e,t){e=or(e),_l("set",e._path),gl("set",t,e._path,!1);const n=new Ii;return Fl(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function ou(e,t){bl("update",t,e._path,!1);const n=new Ii;return function(e,t,n,i){Bl(e,"update",{path:t.toString(),value:n});let r=!0;const o=Pl(e),s={};if(Bo(n,((n,i)=>{r=!1,s[n]=Qc(Cs(t,n),fa(i),e.serverSyncTree_,o)})),r)Co("update() called with empty data.  Don't do anything."),zl(0,i,"ok",void 0);else{const r=jl(e),o=Dc(e.serverSyncTree_,t,s,r);Sl(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n;s||Ao("update at "+t+" failed: "+n);const a=Mc(e.serverSyncTree_,r,!s),c=a.length>0?$l(e,t):t;El(e.eventQueue_,c,a),zl(0,i,n,o)})),Bo(n,(n=>{const i=Kl(e,Cs(t,n));$l(e,i)})),El(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}!function(e){ui(!Nc,"__referenceConstructor has already been defined"),Nc=e}(tu),function(e){ui(!Rc,"__referenceConstructor has already been defined"),Rc=e}(tu);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const su="FIREBASE_DATABASE_EMULATOR_HOST",au={};let cu=!1;function lu(e,t,n,i,r){let o=i||e.options.databaseURL;void 0===o&&(e.options.projectId||Ro("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Co("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=Yl(o,r),l=c.repoInfo;void 0!==si&&si.env&&(a=si.env[su]),a?(s=!0,o=`http://${a}?ns=${l.namespace}`,c=Yl(o,r),l=c.repoInfo):s=!c.repoInfo.secure;const u=r&&s?new Go(Go.OWNER):new Xo(e.name,e.options,t);xl("Invalid Firebase Database URL",c),Ts(c.path)||Ro("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let r=au[t.name];r||(r={},au[t.name]=r);let o=r[e.toURLString()];o&&Ro("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new Rl(e,cu,n,i),r[e.toURLString()]=o,o}(l,e,u,new Vo(e.name,n));return new uu(h,e)}class uu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Al(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tu(this._repo,ws())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=au[t];n&&n[e.key]===e||Ro(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Ul(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Ro("Cannot call "+e+" on a deleted database.")}}Fs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Fs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){po=Kr,Hr(new sr("database",((e,{instanceIdentifier:t})=>lu(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Qr(ho,fo,e),Qr(ho,fo,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();function hu(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function du(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fu=du,pu=new Mi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),mu=new yr("@firebase/auth");function gu(e,...t){mu.logLevel<=hr.ERROR&&mu.error(`Auth (${Kr}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(e,...t){throw wu(e,...t)}function bu(e,...t){return wu(e,...t)}function vu(e,t,n){const i=Object.assign(Object.assign({},fu()),{[t]:n});return new Mi("auth","Firebase",i).create(t,{appName:e.name})}function wu(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return pu.create(e,...t)}function _u(e,t,...n){if(!e)throw wu(t,...n)}function xu(e){const t="INTERNAL ASSERTION FAILED: "+e;throw gu(t),new Error(t)}function ku(e,t){e||xu(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map;function Eu(e){ku(e instanceof Function,"Expected a class definition");let t=Su.get(e);return t?(ku(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Su.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Iu(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Cu(){return"http:"===Tu()||"https:"===Tu()}function Tu(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Cu()||Ri()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ru{constructor(e,t){this.shortDelay=e,this.longDelay=t,ku(t>e,"Short delay should be less than long delay!"),this.isMobile=Ni()||Ai()}get(){return Nu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(e,t){ku(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void xu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void xu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void xu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Lu=new Ru(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Mu(e,t,n,i,r={}){return ju(e,r,(async()=>{let r={},o={};i&&("GET"===t?o=i:r={body:JSON.stringify(i)});const s=Ki(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ou.fetch()(Uu(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function ju(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Pu),t);try{const t=new Bu(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zu(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw zu(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw zu(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw zu(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw vu(e,a,s);yu(e,a)}}catch(t){if(t instanceof Di)throw t;yu(e,"network-request-failed",{message:String(t)})}}async function Fu(e,t,n,i,r={}){const o=await Mu(e,t,n,i,r);return"mfaPendingCredential"in o&&yu(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Uu(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Au(e.config,r):`${e.config.apiScheme}://${r}`}class Bu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(bu(this.auth,"network-request-failed"))),Lu.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function zu(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=bu(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wu(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(e){return 1e3*Number(e)}function $u(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const e=yi(n);return e?JSON.parse(e):(gu("Failed to decode base64 JWT payload"),null)}catch(e){return gu("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Hu(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Di&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Vu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wu(this.lastLoginAt),this.creationTime=Wu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gu(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Hu(e,async function(e,t){return Mu(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));_u(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=hu(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=s,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Xu(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ku{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_u(e.idToken,"internal-error"),_u(void 0!==e.idToken,"internal-error"),_u(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=$u(e);return _u(t,"internal-error"),_u(void 0!==t.exp,"internal-error"),_u(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _u(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await ju(e,{},(async()=>{const n=Ki({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=Uu(e,i,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Ou.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new Ku;return n&&(_u("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(_u("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(_u("number"==typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ku,this.toJSON())}_performRefresh(){return xu("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e,t){_u("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Yu{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=hu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Xu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Hu(this,this.stsTokenManager.getToken(this.auth,e));return _u(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=or(e),i=await n.getIdToken(t),r=$u(i);_u(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:Wu(qu(r.auth_time)),issuedAtTime:Wu(qu(r.iat)),expirationTime:Wu(qu(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=or(e);await Gu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_u(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Yu(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_u(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hu(this,async function(e,t){return Mu(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:v,isAnonymous:w,providerData:_,stsTokenManager:x}=t;_u(b&&x,e,"internal-error");const k=Ku.fromJSON(this.name,x);_u("string"==typeof b,e,"internal-error"),Ju(u,e.name),Ju(h,e.name),_u("boolean"==typeof v,e,"internal-error"),_u("boolean"==typeof w,e,"internal-error"),Ju(d,e.name),Ju(f,e.name),Ju(p,e.name),Ju(m,e.name),Ju(g,e.name),Ju(y,e.name);const S=new Yu({uid:b,auth:e,email:h,emailVerified:v,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const i=new Ku;i.updateFromServerResponse(t);const r=new Yu({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Gu(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qu.type="NONE";const Zu=Qu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(e,t,n){return`firebase:${e}:${t}:${n}`}class th{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=eh(this.userKey,i.apiKey,r),this.fullPersistenceKey=eh("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yu._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new th(Eu(Zu),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Eu(Zu);const o=eh(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const i=Yu._fromJSON(e,t);n!==r&&(s=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new th(r,e,n)):new th(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ih(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ch(t))return"Blackberry";if(lh(t))return"Webos";if(rh(t))return"Safari";if((t.includes("chrome/")||oh(t))&&!t.includes("edge/"))return"Chrome";if(ah(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ih(e=Ti()){return/firefox\//i.test(e)}function rh(e=Ti()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function oh(e=Ti()){return/crios\//i.test(e)}function sh(e=Ti()){return/iemobile/i.test(e)}function ah(e=Ti()){return/android/i.test(e)}function ch(e=Ti()){return/blackberry/i.test(e)}function lh(e=Ti()){return/webos/i.test(e)}function uh(e=Ti()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function hh(){return Oi()&&10===document.documentMode}function dh(e=Ti()){return uh(e)||ah(e)||lh(e)||ch(e)||/windows phone/i.test(e)||sh(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fh(e,t=[]){let n;switch(e){case"Browser":n=nh(Ti());break;case"Worker":n=`${nh(Ti())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yh(this),this.idTokenSubscription=new yh(this),this.beforeStateQueue=new ph(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Eu(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await th.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _u(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?or(e):null;return t&&_u(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_u(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Eu(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Eu(e)||this._popupRedirectResolver;_u(t,this,"argument-error"),this.redirectPersistenceManager=await th.create(this,[Eu(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _u(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _u(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function gh(e){return or(e)}class yh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zi((e=>this.observer=e))}get next(){return _u(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function bh(e,t,n){const i=gh(e);_u(i._canInitEmulator,i,"emulator-config-failed"),_u(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),o=vh(t),{host:s,port:a}=function(e){const t=vh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:wh(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:wh(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function vh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function wh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class _h{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xu("not implemented")}_getIdTokenResponse(e){return xu("not implemented")}_linkToIdToken(e,t){return xu("not implemented")}_getReauthenticationResolver(e){return xu("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(e,t){return Mu(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kh extends _h{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new kh(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new kh(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Fu(e,"POST","/v1/accounts:signInWithPassword",Du(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Fu(e,"POST","/v1/accounts:signInWithEmailLink",Du(e,t))}(e,{email:this._email,oobCode:this._password});default:yu(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return xh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Fu(e,"POST","/v1/accounts:signInWithEmailLink",Du(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:yu(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sh(e,t){return Fu(e,"POST","/v1/accounts:signInWithIdp",Du(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends _h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Eh(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yu("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=hu(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Eh(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return Sh(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Sh(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sh(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ki(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ch extends _h{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ch({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ch({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Fu(e,"POST","/v1/accounts:signInWithPhoneNumber",Du(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Fu(e,"POST","/v1/accounts:signInWithPhoneNumber",Du(e,t));if(n.temporaryProof)throw zu(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Fu(e,"POST","/v1/accounts:signInWithPhoneNumber",Du(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ih)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Ch({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){var t,n,i,r,o,s;const a=Ji(Yi(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);_u(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Ji(Yi(e)).link,n=t?Ji(Yi(t)).deep_link_id:null,i=Ji(Yi(e)).deep_link_id;return(i?Ji(Yi(i)).link:null)||i||n||t||e}(e);try{return new Th(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nh{constructor(){this.providerId=Nh.PROVIDER_ID}static credential(e,t){return kh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Th.parseLink(t);return _u(n,"argument-error"),kh._fromEmailAndCode(e,n.code,n.tenantId)}}Nh.PROVIDER_ID="password",Nh.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Nh.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends Rh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oh extends Ah{constructor(){super("facebook.com")}static credential(e){return Eh._fromParams({providerId:Oh.PROVIDER_ID,signInMethod:Oh.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oh.credentialFromTaggedObject(e)}static credentialFromError(e){return Oh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Oh.credential(e.oauthAccessToken)}catch(e){return null}}}Oh.FACEBOOK_SIGN_IN_METHOD="facebook.com",Oh.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ph extends Ah{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Eh._fromParams({providerId:Ph.PROVIDER_ID,signInMethod:Ph.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ph.credentialFromTaggedObject(e)}static credentialFromError(e){return Ph.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ph.credential(t,n)}catch(e){return null}}}Ph.GOOGLE_SIGN_IN_METHOD="google.com",Ph.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lh extends Ah{constructor(){super("github.com")}static credential(e){return Eh._fromParams({providerId:Lh.PROVIDER_ID,signInMethod:Lh.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lh.credentialFromTaggedObject(e)}static credentialFromError(e){return Lh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Lh.credential(e.oauthAccessToken)}catch(e){return null}}}Lh.GITHUB_SIGN_IN_METHOD="github.com",Lh.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dh extends Ah{constructor(){super("twitter.com")}static credential(e,t){return Eh._fromParams({providerId:Dh.PROVIDER_ID,signInMethod:Dh.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dh.credentialFromTaggedObject(e)}static credentialFromError(e){return Dh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Dh.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mh(e,t){return Fu(e,"POST","/v1/accounts:signUp",Du(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dh.TWITTER_SIGN_IN_METHOD="twitter.com",Dh.PROVIDER_ID="twitter.com";class jh{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Yu._fromIdTokenResponse(e,n,i),o=Fh(n);return new jh({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Fh(n);return new jh({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Fh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uh extends Di{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Uh.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Uh(e,t,n,i)}}function Bh(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Uh._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(e,t,n=!1){const i=await Hu(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return jh._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wh(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const o=await Hu(e,Bh(i,r,t,e),n);_u(o.idToken,i,"internal-error");const s=$u(o.idToken);_u(s,i,"internal-error");const{sub:a}=s;return _u(e.uid===a,i,"user-mismatch"),jh._forOperation(e,r,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&yu(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qh(e,t,n=!1){const i="signIn",r=await Bh(e,i,t),o=await jh._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}async function $h(e,t){return qh(gh(e),t)}async function Hh(e,t,n){const i=gh(e),r=await Mh(i,{returnSecureToken:!0,email:t,password:n}),o=await jh._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(o.user),o}new WeakMap;const Vh="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vh,"1"),this.storage.removeItem(Vh),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh extends Xh{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ti();return rh(e)||uh(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=dh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);hh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gh.type="LOCAL";const Kh=Gh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh extends Xh{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jh.type="SESSION";const Yh=Jh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Qh(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zh(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qh.receivers=[];class ed{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const c=Zh("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nd(){return void 0!==td().WorkerGlobalScope&&"function"==typeof td().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const id="firebaseLocalStorageDb",rd="firebaseLocalStorage",od="fbase_key";class sd{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ad(e,t){return e.transaction([rd],t?"readwrite":"readonly").objectStore(rd)}function cd(){const e=indexedDB.open(id,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(rd,{keyPath:od})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(rd)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(id);return new sd(e).toPromise()}(),t(await cd()))}))}))}async function ld(e,t,n){const i=ad(e,!0).put({[od]:t,value:n});return new sd(i).toPromise()}function ud(e,t){const n=ad(e,!0).delete(t);return new sd(n).toPromise()}class hd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await cd()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qh._getInstance(nd()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ed(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cd();return await ld(e,Vh,"1"),await ud(e,Vh),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ld(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ad(e,!1).get(t),i=await new sd(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ud(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ad(e,!1).getAll();return new sd(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}hd.type="LOCAL";const dd=hd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,o;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=bu("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function pd(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
pd("rcb"),new Ru(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const md="recaptcha";async function gd(e,t,n){var i;const r=await n.verify();try{let o;if(_u("string"==typeof r,e,"argument-error"),_u(n.type===md,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){_u("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Mu(e,"POST","/v2/accounts/mfaEnrollment:start",Du(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{_u("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;_u(n,e,"missing-multi-factor-info");const s=await function(e,t){return Mu(e,"POST","/v2/accounts/mfaSignIn:start",Du(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Mu(e,"POST","/v1/accounts:sendVerificationCode",Du(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yd{constructor(e){this.providerId=yd.PROVIDER_ID,this.auth=gh(e)}verifyPhoneNumber(e,t){return gd(this.auth,e,or(t))}static credential(e,t){return Ch._fromVerification(e,t)}static credentialFromResult(e){const t=e;return yd.credentialFromTaggedObject(t)}static credentialFromError(e){return yd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ch._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bd(e,t){return t?Eu(t):(_u(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yd.PROVIDER_ID="phone",yd.PHONE_SIGN_IN_METHOD="phone";class vd extends _h{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sh(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sh(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sh(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wd(e){return qh(e.auth,new vd(e),e.bypassAuthState)}function _d(e){const{auth:t,user:n}=e;return _u(n,t,"internal-error"),Wh(n,new vd(e),e.bypassAuthState)}async function xd(e){const{auth:t,user:n}=e;return _u(n,t,"internal-error"),zh(n,new vd(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wd;case"linkViaPopup":case"linkViaRedirect":return xd;case"reauthViaPopup":case"reauthViaRedirect":return _d;default:yu(this.auth,"internal-error")}}resolve(e){ku(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ku(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=new Ru(2e3,1e4);class Ed extends kd{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Ed.currentPopupAction&&Ed.currentPopupAction.cancel(),Ed.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _u(e,this.auth,"internal-error"),e}async onExecution(){ku(1===this.filter.length,"Popup operations only handle one event");const e=Zh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(bu(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(bu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ed.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(bu(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Sd.get())};e()}}Ed.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Id="pendingRedirect",Cd=new Map;class Td extends kd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Cd.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ad(t),i=Rd(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Cd.set(this.auth._key(),e)}return this.bypassAuthState||Cd.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Nd(e,t){Cd.set(e._key(),t)}function Rd(e){return Eu(e._redirectPersistence)}function Ad(e){return eh(Id,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(e,t,n=!1){const i=gh(e),r=bd(i,t),o=new Td(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}class Pd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dd(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Dd(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(bu(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ld(e))}saveEventToCache(e){this.cachedEventUids.add(Ld(e)),this.lastProcessedEventTime=Date.now()}}function Ld(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Dd({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Md=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jd=/^https?/;async function Fd(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Mu(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ud(e))return}catch(e){}yu(e,"unauthorized-domain")}function Ud(e){const t=Iu(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!jd.test(n))return!1;if(Md.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new Ru(3e4,6e4);function zd(){const e=td().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Wd=null;function qd(e){return Wd=Wd||function(e){return new Promise(((t,n)=>{var i,r,o;function s(){zd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{zd(),n(bu(e,"network-request-failed"))},timeout:Bd.get()})}if(null===(r=null===(i=td().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=td().gapi)||void 0===o?void 0:o.load)){const t=pd("iframefcb");return td()[t]=()=>{gapi.load?s():n(bu(e,"network-request-failed"))},fd(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Wd=null,e}))}(e),Wd}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new Ru(5e3,15e3),Hd="__/auth/iframe",Vd="emulator/auth/iframe",Xd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kd(e){const t=e.config;_u(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Au(t,Vd):`https://${e.config.authDomain}/${Hd}`,i={apiKey:t.apiKey,appName:e.name,v:Kr},r=Gd.get(e.config.apiHost);r&&(i.eid=r);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Ki(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Qd(e,t,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Jd),{width:i.toString(),height:r.toString(),top:o,left:s}),l=Ti().toLowerCase();n&&(a=oh(l)?"_blank":n),ih(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ti()){var t;return uh(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Yd(null);const h=window.open(t||"",a,u);_u(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Yd(h)}const Zd="__/auth/handler",ef="emulator/auth/handler";function tf(e,t,n,i,r,o){_u(e.config.authDomain,e,"auth-domain-config-required"),_u(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Kr,eventId:r};if(t instanceof Rh){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Hi(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof Ah){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Au(e,ef):`https://${e.authDomain}/${Zd}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Ki(a).slice(1)}`}const nf="webStorageSupport";const rf=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yh,this._completeRedirectFn=Od,this._overrideRedirectResult=Nd}async _openPopup(e,t,n,i){var r;ku(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Qd(e,tf(e,t,n,Iu(),i),Zh())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=tf(e,t,n,Iu(),i),td().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ku(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await qd(e),n=td().gapi;return _u(n,e,"internal-error"),t.open({where:document.body,url:Kd(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xd,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=bu(e,"network-request-failed"),o=td().setTimeout((()=>{i(r)}),$d.get());function s(){td().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{i(r)}))}))))}(e),n=new Pd(e);return t.register("authEvent",(t=>{_u(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nf,{type:nf},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[nf];void 0!==r&&t(!!r),yu(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fd(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dh()||rh()||uh()}};var of="@firebase/auth",sf="0.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class af{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_u(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cf=Ei("authIdTokenMaxAge")||300;let lf=null;var uf;uf="Browser",Hr(new sr("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=n.options;return((e,n)=>{_u(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),_u(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:o,clientPlatform:uf,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fh(uf)},s=new mh(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Eu);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Hr(new sr("auth-internal",(e=>(e=>new af(e))(gh(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Qr(of,sf,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(uf)),Qr(of,sf,"esm2017");var hf,df,ff={};hf=void 0===t?"undefined"==typeof window?ff:window:t,df=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,i,r,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c="Success",l="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},b="Show",v="Ask",w="Prompt",_={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},x="Standard",k="Hourglass",S="Circle",E="Arrows",I="Dots",C="Pulse",T="Custom",N="Notiflix",R={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},A="Standard",O="Hourglass",P="Circle",L="Arrows",D="Dots",M="Pulse",j={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},F=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+s)},U=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+s)},B=function(t){return t||(t="head"),null!==e.document[t]||(F('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},z=function(t,n){if(!B("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},W=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=t&&"[object Object]"===Object.prototype.toString.call(n[i])?W(e[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return e},q=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},J=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,Q=function(n,i,r,o){if(!B("body"))return!1;t||le.Notify.init({});var s=W(!0,t,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var f={};"object"==typeof r?f=r:"object"==typeof o&&(f=o),t=W(!0,t,f)}var p=t[n.toLocaleLowerCase("en")];Y++,"string"!=typeof i&&(i="Notiflix "+n),t.plainText&&(i=q(i)),!t.plainText&&i.length>t.messageMaxLength&&(t=W(!0,t,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>t.messageMaxLength&&(i=i.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(d.wrapID)||e.document.createElement("div");if(m.id=d.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(d.overlayID)||e.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(d.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(d.wrapID)||e.document.body.appendChild(m);var y=e.document.createElement("div");y.id=t.ID+"-"+Y,y.className=t.className+" "+p.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var b="";if(t.closeButton&&"function"!=typeof r&&(b='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?b:"");else{var v="";n===c?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===l?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=v+'<span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?b:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(t.closeButton?b:"");if("left-bottom"===t.position||"right-bottom"===t.position){var w=e.document.getElementById(d.wrapID);w.insertBefore(y,w.firstChild)}else e.document.getElementById(d.wrapID).appendChild(y);var _=e.document.getElementById(y.id);if(_){var x,k,S=function(){_.classList.add("nx-remove");var t=e.document.getElementById(d.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(x)},E=function(){if(_&&null!==_.parentNode&&_.parentNode.removeChild(_),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(d.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(k)};if(t.closeButton&&"function"!=typeof r&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){S();var e=setTimeout((function(){E(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof r||t.clickToClose)&&_.addEventListener("click",(function(){"function"==typeof r&&r(),S();var e=setTimeout((function(){E(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof r){var I=function(){x=setTimeout((function(){S()}),t.timeout),k=setTimeout((function(){E()}),t.timeout+t.cssAnimationDuration)};I(),t.pauseOnHover&&(_.addEventListener("mouseenter",(function(){_.classList.add("nx-paused"),clearTimeout(x),clearTimeout(k)})),_.addEventListener("mouseleave",(function(){_.classList.remove("nx-paused"),I()})))}}if(t.showOnlyTheLastOne&&0<Y)for(var C,T=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Y+"])"),N=0;N<T.length;N++)null!==(C=T[N]).parentNode&&C.parentNode.removeChild(C);t=W(!0,t,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,i,r,o,s,c){if(!B("body"))return!1;n||le.Report.init({});var l={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof c&&!Array.isArray(c)){var u={};"object"==typeof s?u=s:"object"==typeof c&&(u=c),l=W(!0,n,{}),n=W(!0,n,u)}var h=n[t.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+t),"string"!=typeof r&&(t===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(i=q(i),r=q(r),o=q(o)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var b="",v=!0===n.backOverlayClickToClose;n.backOverlay&&(b='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(v?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w="";if(t===f?w=function(e,t){return e||(e="110px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===p?w=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===m?w=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===g&&(w=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=b+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+w+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+o+"</a></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var _=function(){var t=e.document.getElementById(d.id);t.classList.add("nx-remove");var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(i)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),_()})),b&&v&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){_()}))}n=W(!0,n,l)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,r,o,s,c,l,u,h){if(!B("body"))return!1;i||le.Confirm.init({});var d=W(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=W(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof c&&(c="No"),"function"!=typeof l&&(l=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=q(n),r=q(r),s=q(s),c=q(c)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",c="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",c="..."),(s.length||c.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",c="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),c.length>i.buttonsMaxLength&&(c=c.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=e.document.createElement("div");f.id=_.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof l&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+c+"</a>");var y="",b=null,x=void 0;if(t===v||t===w){b=o||"";var k=t===v||200<b.length?Math.ceil(1.5*b.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===w?'value="'+b+'"':"")+' maxlength="'+k+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof l?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!e.document.getElementById(f.id)){e.document.body.appendChild(f);var S=e.document.getElementById(f.id),E=e.document.getElementById("NXConfirmButtonOk"),I=e.document.getElementById("NXConfirmValidationInput");I&&(I.focus(),I.setSelectionRange(0,(I.value||"").length),I.addEventListener("keyup",(function(e){var n=e.target.value;t===v&&n!==b?(e.preventDefault(),I.classList.add("nx-validation-failure"),I.classList.remove("nx-validation-success")):(t===v&&(I.classList.remove("nx-validation-failure"),I.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&E.dispatchEvent(new Event("click")))}))),E.addEventListener("click",(function(e){if(t===v&&b&&I){if((I.value||"").toString()!==b)return I.focus(),I.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;I.classList.remove("nx-validation-failure")}"function"==typeof l&&(t===w&&I&&(x=I.value||""),l(x)),S.classList.add("nx-remove");var n=setTimeout((function(){null!==S.parentNode&&(S.parentNode.removeChild(S),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof l&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(t===w&&I&&(x=I.value||""),u(x)),S.classList.add("nx-remove");var e=setTimeout((function(){null!==S.parentNode&&(S.parentNode.removeChild(S),clearTimeout(e))}),i.cssAnimationDuration)}))}i=W(!0,i,d)},ie=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},re=function(t,n,i,o,s){if(!B("body"))return!1;r||le.Loading.init({});var c=W(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var l={};"object"==typeof n?l=n:"object"==typeof i&&(l=i),r=W(!0,r,l)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var h="";0<(u=u.length>r.messageMaxLength?q(u).toString().substring(0,r.messageMaxLength)+"...":q(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(t===x)d=$(r.svgSize,r.svgColor);else if(t===k)d=H(r.svgSize,r.svgColor);else if(t===S)d=V(r.svgSize,r.svgColor);else if(t===E)d=X(r.svgSize,r.svgColor);else if(t===I)d=G(r.svgSize,r.svgColor);else if(t===C)d=K(r.svgSize,r.svgColor);else if(t===T&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(t===T&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(t===T&&(null===r.customSvgUrl||null===r.customSvgCode))return F('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=e.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=e.document.createElement("div");y.id=R.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),r.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),r.cssAnimationDuration)}))}else if(e.document.getElementById(R.ID))var b=e.document.getElementById(R.ID),v=setTimeout((function(){b.classList.add("nx-remove");var e=setTimeout((function(){null!==b.parentNode&&(b.parentNode.removeChild(b),clearTimeout(e))}),r.cssAnimationDuration);clearTimeout(v)}),s);r=W(!0,r,c)},oe=function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(R.ID);if(n)if(0<t.length){t=t.length>r.messageMaxLength?q(t).substring(0,r.messageMaxLength)+"...":q(t);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=t;else{var o=e.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=t,n.appendChild(o)}}else F("Where is the new message?")},se=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ae=0,ce=function(t,n,i,r,s,c){var l;if(Array.isArray(i)){if(1>i.length)return F("Array of HTMLElements should contains at least one HTMLElement."),!1;l=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return F("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;l=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return F("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=e.document.querySelectorAll(i);if(1>u.length)return F('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;l=u}o||le.Block.init({});var h=W(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof r?d=r:"object"==typeof s&&(d=s),o=W(!0,o,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),o.cssAnimation||(o.cssAnimationDuration=0);var p=j.className;"string"==typeof o.className&&(p=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(l||[]).length>=m?m:l.length,y="nx-block-temporary-position";if(t){for(var b,v=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(b=l[w]){if(-1<v.indexOf(b.tagName.toLocaleLowerCase("en")))break;var _=b.querySelectorAll("[id^="+j.ID+"]");if(1>_.length){var x="";n&&(x=n===O?H(o.svgSize,o.svgColor):n===P?V(o.svgSize,o.svgColor):n===L?X(o.svgSize,o.svgColor):n===D?G(o.svgSize,o.svgColor):n===M?K(o.svgSize,o.svgColor):$(o.svgSize,o.svgColor));var k='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+x+"</span>",S="";0<f.length&&(f=f.length>o.messageMaxLength?q(f).substring(0,o.messageMaxLength)+"...":q(f),S='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+f+"</span>"),ae++;var E=e.document.createElement("div");E.id=j.ID+"-"+ae,E.className=p+(o.cssAnimation?" nx-with-animation":""),E.style.position=o.position,E.style.zIndex=o.zindex,E.style.background=o.backgroundColor,E.style.animationDuration=o.cssAnimationDuration+"ms",E.style.fontFamily='"'+o.fontFamily+'", '+a,E.style.display="flex",E.style.flexWrap="wrap",E.style.flexDirection="column",E.style.alignItems="center",E.style.justifyContent="center",o.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.innerHTML=k+S;var I,C=e.getComputedStyle(b).getPropertyValue("position"),T="string"==typeof C?C.toLocaleLowerCase("en"):"relative",N=Math.round(1.25*parseInt(o.svgSize))+40,R="";N>(b.offsetHeight||0)&&(R="min-height:"+N+"px;"),I=b.getAttribute("id")?"#"+b.getAttribute("id"):b.classList[0]?"."+b.classList[0]:(b.tagName||"").toLocaleLowerCase("en");var A="",z=-1>=["absolute","relative","fixed","sticky"].indexOf(T);if(z||0<R.length){if(!B("head"))return!1;z&&(A="position:relative!important;");var J='<style id="Style-'+j.ID+"-"+ae+'">'+I+"."+y+"{"+A+R+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var Q=Y.createContextualFragment(J);e.document.head.appendChild(Q),b.classList.add(y)}b.appendChild(E)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var i=t.getAttribute("id"),r=e.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),o.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else U("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),o.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=l[t])&&(te(e),_=e.querySelectorAll("[id^="+j.ID+"]"),ee(_));clearTimeout(ne)}),c);o=W(!0,o,h)},le={Notify:{init:function(e){t=W(!0,d,e),z(J,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=W(!0,t,e)):(F("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){Q(c,e,t,n)},failure:function(e,t,n){Q(l,e,t,n)},warning:function(e,t,n){Q(u,e,t,n)},info:function(e,t,n){Q(h,e,t,n)}},Report:{init:function(e){n=W(!0,y,e),z(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=W(!0,n,e)):(F("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,i,r){ee(f,e,t,n,i,r)},failure:function(e,t,n,i,r){ee(p,e,t,n,i,r)},warning:function(e,t,n,i,r){ee(m,e,t,n,i,r)},info:function(e,t,n,i,r){ee(g,e,t,n,i,r)}},Confirm:{init:function(e){i=W(!0,_,e),z(te,"NotiflixConfirmInternalCSS")},merge:function(e){return i?void(i=W(!0,i,e)):(F("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,i,r,o,s){ne(b,e,t,null,n,i,r,o,s)},ask:function(e,t,n,i,r,o,s,a){ne(v,e,t,n,i,r,o,s,a)},prompt:function(e,t,n,i,r,o,s,a){ne(w,e,t,n,i,r,o,s,a)}},Loading:{init:function(e){r=W(!0,R,e),z(ie,"NotiflixLoadingInternalCSS")},merge:function(e){return r?void(r=W(!0,r,e)):(F("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){re(x,e,t,!0,0)},hourglass:function(e,t){re(k,e,t,!0,0)},circle:function(e,t){re(S,e,t,!0,0)},arrows:function(e,t){re(E,e,t,!0,0)},dots:function(e,t){re(I,e,t,!0,0)},pulse:function(e,t){re(C,e,t,!0,0)},custom:function(e,t){re(T,e,t,!0,0)},notiflix:function(e,t){re(N,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),re(null,null,null,!1,e)},change:function(e){oe(e)}},Block:{init:function(e){o=W(!0,j,e),z(se,"NotiflixBlockInternalCSS")},merge:function(e){return o?void(o=W(!0,o,e)):(F('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){ce(!0,A,e,t,n)},hourglass:function(e,t,n){ce(!0,O,e,t,n)},circle:function(e,t,n){ce(!0,P,e,t,n)},arrows:function(e,t,n){ce(!0,L,e,t,n)},dots:function(e,t,n){ce(!0,D,e,t,n)},pulse:function(e,t,n){ce(!0,M,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),ce(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?W(!0,e.Notiflix,{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}):{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}},"function"==typeof define&&define.amd?define([],(function(){return df(hf)})):"object"==typeof ff?ff=df(hf):hf.Notiflix=df(hf);const pf=document.querySelector("[data-modal-auth-open]"),mf=document.querySelector(".user-authorized__btn"),gf=document.querySelector(".user-authorized__btn div"),yf=document.querySelector(".user-authorized__btn img"),bf=document.querySelector("[data-burgermodal-auth-open]"),vf=document.querySelector(".user-mob"),wf=document.querySelector(".user-mob div"),_f=document.querySelector(".user-mob img"),xf=document.querySelector("#logOut");function kf(e,t){pf.style.display="none",bf.style.display="none",mf.style.display="flex",vf.style.display="flex",xf.style.display="flex",e&&(gf.textContent=e,wf.textContent=e),t&&(yf.setAttribute("src",t),_f.setAttribute("src",t))}function Sf(){pf.style.display="flex",bf.style.display="flex",mf.style.display="none",vf.style.display="none",xf.style.display="none"}const Ef=function(e=Yr(),t){const n=Vr(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=ki("database");e&&function(e,t,n,i={}){e=or(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Ro("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Ro('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Go(Go.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:Ci(i.mockUserToken,e.app.options.projectId);o=new Go(t)}!function(e,t,n,i){e.repoInfo_=new es(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,o)}(n,...e)}return n}(Jr({apiKey:"AIzaSyA-_OfsYzJ0IruGwuB0MjrKn8CM_GP4gaw",authDomain:"jssf-bookstore.firebaseapp.com",databaseURL:"https://jssf-bookstore-default-rtdb.firebaseio.com",projectId:"jssf-bookstore",storageBucket:"jssf-bookstore.appspot.com",messagingSenderId:"159533621369",appId:"1:159533621369:web:49b6ecc78de1b0dd90f4a8"})),If=function(e=Yr()){const t=Vr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Vr(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Xi(n.getOptions(),null!=t?t:{}))return e;yu(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:rf,persistence:[dd,Kh,Yh]}),i=Ei("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>cf)return;const i=null==t?void 0:t.token;lf!==i&&(lf=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){or(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){or(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const o=xi("auth");return o&&bh(n,`http://${o}`),n}();submitBtn.addEventListener("click",(e=>{const t=document.getElementById("nameAuth").value,i=document.getElementById("signupMail").value,r=document.getElementById("signupPassword").value,o=form.querySelector('.auth_field[type="text"]');Hh(If,i,r).then((e=>{const s=e.user;ru(nu(Ef,"users/"+s.uid),{nameAuth:t,mailAuth:i,userPassword:r}),n(ff).Notify.success("user created!");const a=o.value;console.log(a),updateProfile(s,{displayName:a}),console.log(""),console.log(s),console.log(Ef),kf(),Sf(),document.getElementById("authModal").style.display="none",document.getElementById("mobileMenu").style.display="inline"})).catch((e=>{e.code;const t=e.message;n(ff).Notify.success(t)}))})),submitBtnCopy.addEventListener("click",(e=>{const t=document.getElementById("signinMail").value,i=document.getElementById("signinPassword").value;var r,o,s;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r=If,o=t,s=i,$h(or(r),Nh.credential(o,s))).then((e=>{const t=e.user,i=new Date;ou(nu(Ef,"users/"+t.uid),{last_login:i}),n(ff).Notify.success("User longed in!"),kf(),Sf(),document.getElementById("authModal").style.display="none",document.getElementById("mobileMenu").style.display="inline"})).catch((e=>{e.code;const t=e.message;n(ff).Notify.success(t)}))})),logOut.addEventListener("click",(e=>{signOut(If).then((()=>{const e=userCredential.user;n(ff).Notify.success("Sign-out successful"),removeUserLocalStorage(e)})).catch((e=>{e.code;const t=e.message;n(ff).Notify.success(t)}))}));var Cf=o("4zyeF"),Tf=o("bhJ7Q");function Nf(){return(new Date).getTime()}var Rf,Af=Array.prototype.slice,Of={};Rf=void 0!==t&&t.console?t.console:"undefined"!=typeof window&&window.console?window.console:{};for(var Pf=[[function(){},"log"],[function(){Rf.log.apply(Rf,arguments)},"info"],[function(){Rf.log.apply(Rf,arguments)},"warn"],[function(){Rf.warn.apply(Rf,arguments)},"error"],[function(e){Of[e]=Nf()},"time"],[function(e){var t=Of[e];if(!t)throw new Error("No such label: "+e);delete Of[e];var n=Nf()-t;Rf.log(e+": "+n+"ms")},"timeEnd"],[function(){var e=new Error;e.name="Trace",e.message=Cf.format.apply(null,arguments),Rf.error(e.stack)},"trace"],[function(e){Rf.log(Cf.inspect(e)+"\n")},"dir"],[function(e){if(!e){var t=Af.call(arguments,1);Tf.ok(!1,Cf.format.apply(null,t))}},"assert"]],Lf=0;Lf<9;Lf++){var Df=Pf[Lf],Mf=Df[0],jf=Df[1];Rf[jf]||(Rf[jf]=Mf)}const Ff=new En,Uf=document.querySelector(".top-books"),Bf=document.querySelector(".btn-up");Bf.classList.add("is-hidden-up");let zf="",Wf="";async function qf(){try{const{data:e}=await Ff.fetchTopBooks();return e}catch(e){console.log(e)}}async function $f(){try{Ff.category=Wf;const{data:e}=await Ff.fetchCategoryOfBooks();return e}catch(e){console.log(e)}}function Hf(){Uf.previousElementSibling.scrollIntoView({behavior:"smooth"})}Cn(),(async()=>{const e=await qf();if(window.screen.width<768)for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];zf+=`<li>\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n                </div>\n          </div>\n      </li>\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}else if(window.screen.width>=768&&window.screen.width<1280)for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];zf+=`\n<li>\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[1]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[1].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[1].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[1].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n          <li class="item-category-book js-book-modal" data-book-id="${i[2]._id}">\n           <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[2].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[2].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[2].author}</p>\n                  </div>\n              </div>\n           </div>\n          </li>\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}else for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];zf+=`\n<li>\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n                <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n            </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[1]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[1].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[1].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[1].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[2]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[2].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[2].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[2].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[3]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[3].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[3].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[3].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[4]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[4].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[4].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[4].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}Uf.innerHTML="",Uf.insertAdjacentHTML("beforeend",zf),Uf.insertAdjacentHTML("beforebegin",'<h2 class="title-best-sellers">Best sellers <span class ="title-best-sellers-color">books</span></h2>')})(),Tn(),Uf.addEventListener("click",(async function(e){try{if("BUTTON"===e.target.nodeName){Wf=e.target.closest("li").querySelector("h3").textContent.trim();const t=await $f();let n="";t.forEach((({_id:e,book_image:t,title:i,author:r})=>{n+=`<li class="item-category-book js-book-modal" data-book-id="${e}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${t}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-category">\n                <div class="box-title">  \n                  <p class="title-book">${i}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${r}</p>\n                  </div>\n              </div>\n          </div>\n      </li>`})),Uf.innerHTML="",Uf.previousElementSibling.remove(),Uf.insertAdjacentHTML("beforeend",n),Uf.insertAdjacentHTML("beforebegin",`<h2 class="title-category">${Wf}</h2>`),Hf();const i=Uf.previousElementSibling;!function(){if(i.classList.contains("title-category")){const e=i.textContent.trim(),t=e.split(" "),n=t[t.length-1];i.innerHTML=e.replace(n,`<span class="title-last-word-color">${n}</span>`)}}()}return}catch(e){console.log(e)}})),Cn(),Tn(),Bf.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){window.scrollY>200?Bf.classList.remove("is-hidden-up"):0==window.scrollY&&Bf.classList.add("is-hidden-up")}));document.querySelector(".categories-list").addEventListener("click",(async function(e){if("LI"===e.target.nodeName)if(Wf=e.target.textContent.trim(),"All categories"!==Wf){const e=await $f();let t="";e.forEach((({_id:e,book_image:n,title:i,author:r})=>{t+=`<li class="item-category-book js-book-modal" data-book-id="${e}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${n}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-category">\n                <div class="box-title">  \n                  <p class="title-book">${i}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${r}</p>\n                  </div>\n              </div>\n          </div>\n      </li>`})),Uf.innerHTML="",Uf.previousElementSibling.remove(),Uf.insertAdjacentHTML("beforeend",t),Uf.insertAdjacentHTML("beforebegin",`<h2 class="title-category">${Wf}</h2>`);const n=Uf.previousElementSibling;!function(){if(n.classList.contains("title-category")){const e=n.textContent.trim(),t=e.split(" "),i=t[t.length-1];n.innerHTML=e.replace(i,`<span class="title-last-word-color">${i}</span>`)}}(),Hf()}else(async()=>{const e=await qf();if(window.screen.width<768)for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];zf+=`<li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}else if(window.screen.width>=768&&window.screen.width<1280)for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];zf+=`\n<li>\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[1]._id}">\n          <div class="card-book">\n            <div class="img-card-book-best">\n            <img src="${i[1].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book">\n                <div class="box-title">  \n                  <p class="title-book">${i[1].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[1].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[2]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[2].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[2].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[2].author}</p>\n                  </div>\n              </div>\n          </div>\n            </li>\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}else for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];zf+=`\n<li>\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[1]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[1].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[1].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[1].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[2]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[2].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[2].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[2].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[3]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[3].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[3].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[3].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[4]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[4].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[4].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[4].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}Uf.innerHTML="",Uf.previousElementSibling.remove(),Uf.insertAdjacentHTML("beforeend",zf),Uf.insertAdjacentHTML("beforebegin",'<h2 class="title-best-sellers">Best sellers <span class ="title-best-sellers-color">books</span></h2>')})();return})),Cn(),Tn();const Vf=document.querySelector("html");u(Vf);const Xf=document.querySelector(".nav__link");(0,On.currentPageSwitcher)(Xf);document.querySelector(".user-authorized__btn").addEventListener("click",(()=>{document.querySelector(".user-log-out").classList.toggle("lo-open")})),Cn(),Rn.fetchCategoryList().then((e=>{Nn&&Nn.insertAdjacentHTML("beforeend",function(e){let t='<li class="category checked-category">All categories</li>';return e.map((e=>{t+=function(e){return`<li class="category">\n        ${e.trim()}\n      </li>`}(e.list_name)})),t}(e.data))})).catch((e=>{Nn&&Nn.insertAdjacentHTML("beforeend",function(e,t){return`<p class="category-error">${e}${t}</p>`}("Ooops! Something goes wrong... <br>We can`t download caregories. ",e))})),Tn(),Vf.addEventListener("click",(e=>{l(e,Vf),An(e)}));document.querySelector(".mobile-menu__icon").addEventListener("click",(function(e){const t=document.querySelector(".mobile-menu"),n=e.currentTarget.firstElementChild,i=n.getAttribute("href").split("#")[0];Pn=!Pn;const r=Pn?"close":"burger-menu";n.setAttribute("href",`${i}#${r}`),n.setAttribute("is-opened",Pn),t.classList.toggle("active")}));let Gf=window.innerWidth;addEventListener("resize",(()=>{(window.innerWidth>767&&Gf<768||window.innerWidth>1279&&Gf<1280||window.innerWidth<1280&&Gf>1279||window.innerWidth<768&&Gf>767)&&(Gf=window.innerWidth,location.reload())}));
//# sourceMappingURL=index.4843786d.js.map
