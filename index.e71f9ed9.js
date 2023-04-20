function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var i={},o={},r=t.parcelRequire3a7d;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire3a7d=r),r.register("kyEFX",(function(t,n){var i,o;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("67vkq",(function(t,n){function i(e){e.classList.add("current-page")}e(t.exports,"currentPageSwitcher",(function(){return i}))})),r("kyEFX").register(JSON.parse('{"hZ8Bi":"index.e71f9ed9.js","6pysX":"save_the_children_@1x.e387eaa5.png","hRcsc":"projech_hope_@1x.25b46d6c.png","6PD6k":"united24_@1x.7e58352b.png","b8gBG":"international_medical_corps_@1x.bcacdce8.png","aEdw0":"medecins_sans_frontieres_@1x.f7a113c5.png","6HXmE":"razom_@1x.fd446c8a.png","hy5T9":"action_against_hunger_@1x.f9dec778.png","9xxqi":"world_vision_@1x.99cc7292.png","iYxKf":"sergiy_prytula_@1x.ad8be370.png","bFtTG":"x-close.a3e5df78.svg","1w34Y":"amazon-link_2x.88450da7.png","iITAK":"books-link_2x.b396e612.png","gqoTZ":"book-shop-link_2x.4495e777.png"}'));const s="isDark",a="theme-toggle-js",l=document.querySelector(`.${a}`);function c(e,t){if(e.target.classList.contains(a)){e.target;!function(e){l.checked&&(localStorage.setItem(s,"true"),u(e));l.checked||(localStorage.removeItem(s),u(e))}(t)}}function u(e){localStorage.getItem(s)?(e.setAttribute("data-theme","dark"),l.checked=!0):(e.setAttribute("data-theme","light"),l.checked=!1)}function h(e,t){return function(){return e.apply(t,arguments)}}const{toString:d}=Object.prototype,{getPrototypeOf:f}=Object,p=(m=Object.create(null),e=>{const t=d.call(e);return m[t]||(m[t]=t.slice(8,-1).toLowerCase())});var m;const g=e=>(e=e.toLowerCase(),t=>p(t)===e),y=e=>t=>typeof t===e,{isArray:b}=Array,v=y("undefined");const _=g("ArrayBuffer");const w=y("string"),k=y("function"),x=y("number"),I=e=>null!==e&&"object"==typeof e,C=e=>{if("object"!==p(e))return!1;const t=f(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},E=g("Date"),T=g("File"),S=g("Blob"),N=g("FileList"),R=g("URLSearchParams");function A(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,o;if("object"!=typeof e&&(e=[e]),b(e))for(i=0,o=e.length;i<o;i++)t.call(null,e[i],i,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),r=o.length;let s;for(i=0;i<r;i++)s=o[i],t.call(null,e[s],s,e)}}function O(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,o=n.length;for(;o-- >0;)if(i=n[o],t===i.toLowerCase())return i;return null}const L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,P=e=>!v(e)&&e!==L;const D=(M="undefined"!=typeof Uint8Array&&f(Uint8Array),e=>M&&e instanceof M);var M;const U=g("HTMLFormElement"),B=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),F=g("RegExp"),z=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};A(n,((n,o)=>{!1!==t(n,o,e)&&(i[o]=n)})),Object.defineProperties(e,i)},j="abcdefghijklmnopqrstuvwxyz",W="0123456789",q={DIGIT:W,ALPHA:j,ALPHA_DIGIT:j+j.toUpperCase()+W};var $={isArray:b,isArrayBuffer:_,isBuffer:function(e){return null!==e&&!v(e)&&null!==e.constructor&&!v(e.constructor)&&k(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||d.call(e)===t||k(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&_(e.buffer),t},isString:w,isNumber:x,isBoolean:e=>!0===e||!1===e,isObject:I,isPlainObject:C,isUndefined:v,isDate:E,isFile:T,isBlob:S,isRegExp:F,isFunction:k,isStream:e=>I(e)&&k(e.pipe),isURLSearchParams:R,isTypedArray:D,isFileList:N,forEach:A,merge:function e(){const{caseless:t}=P(this)&&this||{},n={},i=(i,o)=>{const r=t&&O(n,o)||o;C(n[r])&&C(i)?n[r]=e(n[r],i):C(i)?n[r]=e({},i):b(i)?n[r]=i.slice():n[r]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&A(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(A(t,((t,i)=>{n&&k(t)?e[i]=h(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let o,r,s;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),r=o.length;r-- >0;)s=o[r],i&&!i(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&f(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:p,kindOfTest:g,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(b(e))return e;let t=e.length;if(!x(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:U,hasOwnProperty:B,hasOwnProp:B,reduceDescriptors:z,freezeMethods:e=>{z(e,((t,n)=>{if(k(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];k(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return b(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:O,global:L,isContextDefined:P,ALPHABET:q,generateString:(e=16,t=q.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n},isSpecCompliantForm:function(e){return!!(e&&k(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(I(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const o=b(e)?[]:{};return A(e,((e,t)=>{const r=n(e,i+1);!v(r)&&(o[t]=r)})),t[i]=void 0,o}}return e};return n(e,0)}};function H(e,t,n,i,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),o&&(this.response=o)}$.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const V=H.prototype,X={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{X[e]={value:e}})),Object.defineProperties(H,X),Object.defineProperty(V,"isAxiosError",{value:!0}),H.from=(e,t,n,i,o,r)=>{const s=Object.create(V);return $.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),H.call(s,e.message,t,n,i,o),s.cause=e,s.name=e.name,r&&Object.assign(s,r),s};var K,G,J,Y=H,Q=null;G=function(e){var t,n,i=se(e),o=i[0],r=i[1],s=new ie(function(e,t,n){return 3*(t+n)/4-n}(0,o,r)),a=0,l=r>0?o-4:o;for(n=0;n<l;n+=4)t=ne[e.charCodeAt(n)]<<18|ne[e.charCodeAt(n+1)]<<12|ne[e.charCodeAt(n+2)]<<6|ne[e.charCodeAt(n+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;2===r&&(t=ne[e.charCodeAt(n)]<<2|ne[e.charCodeAt(n+1)]>>4,s[a++]=255&t);1===r&&(t=ne[e.charCodeAt(n)]<<10|ne[e.charCodeAt(n+1)]<<4|ne[e.charCodeAt(n+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t);return s},J=function(e){for(var t,n=e.length,i=n%3,o=[],r=16383,s=0,a=n-i;s<a;s+=r)o.push(ae(e,s,s+r>a?a:s+r));1===i?(t=e[n-1],o.push(te[t>>2]+te[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],o.push(te[t>>10]+te[t>>4&63]+te[t<<2&63]+"="));return o.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Z,ee,te=[],ne=[],ie="undefined"!=typeof Uint8Array?Uint8Array:Array,oe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",re=0;re<64;++re)te[re]=oe[re],ne[oe.charCodeAt(re)]=re;function se(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function ae(e,t,n){for(var i,o,r=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),r.push(te[(o=i)>>18&63]+te[o>>12&63]+te[o>>6&63]+te[63&o]);return r.join("")}ne["-".charCodeAt(0)]=62,ne["_".charCodeAt(0)]=63,Z=function(e,t,n,i,o){var r,s,a=8*o-i-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?o-1:0,d=n?-1:1,f=e[t+h];for(h+=d,r=f&(1<<-u)-1,f>>=-u,u+=a;u>0;r=256*r+e[t+h],h+=d,u-=8);for(s=r&(1<<-u)-1,r>>=-u,u+=i;u>0;s=256*s+e[t+h],h+=d,u-=8);if(0===r)r=1-c;else{if(r===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),r-=c}return(f?-1:1)*s*Math.pow(2,r-i)},ee=function(e,t,n,i,o,r){var s,a,l,c=8*r-o-1,u=(1<<c)-1,h=u>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:r-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),(t+=s+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(s++,l/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(t*l-1)*Math.pow(2,o),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,o),s=0));o>=8;e[n+f]=255&a,f+=p,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;e[n+f]=255&s,f+=p,s/=256,c-=8);e[n+f-p]|=128*m};const le="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;K=he;const ce=2147483647;function ue(e){if(e>ce)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,he.prototype),t}function he(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return pe(e)}return de(e,t,n)}function de(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!he.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|be(e,t);let i=ue(n);const o=i.write(e,t);o!==n&&(i=i.slice(0,o));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Qe(e,Uint8Array)){const t=new Uint8Array(e);return ge(t.buffer,t.byteOffset,t.byteLength)}return me(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Qe(e,ArrayBuffer)||e&&Qe(e.buffer,ArrayBuffer))return ge(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Qe(e,SharedArrayBuffer)||e&&Qe(e.buffer,SharedArrayBuffer)))return ge(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return he.from(i,t,n);const o=function(e){if(he.isBuffer(e)){const t=0|ye(e.length),n=ue(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Ze(e.length)?ue(0):me(e);if("Buffer"===e.type&&Array.isArray(e.data))return me(e.data)}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return he.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function fe(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function pe(e){return fe(e),ue(e<0?0:0|ye(e))}function me(e){const t=e.length<0?0:0|ye(e.length),n=ue(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function ge(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,he.prototype),i}function ye(e){if(e>=ce)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ce.toString(16)+" bytes");return 0|e}function be(e,t){if(he.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Qe(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ge(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Je(e).length;default:if(o)return i?-1:Ge(e).length;t=(""+t).toLowerCase(),o=!0}}function ve(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Le(this,t,n);case"utf8":case"utf-8":return Ne(this,t,n);case"ascii":return Ae(this,t,n);case"latin1":case"binary":return Oe(this,t,n);case"base64":return Se(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pe(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function _e(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function we(e,t,n,i,o){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Ze(n=+n)&&(n=o?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(o)return-1;n=e.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof t&&(t=he.from(t,i)),he.isBuffer(t))return 0===t.length?-1:ke(e,t,n,i,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):ke(e,[t],n,i,o);throw new TypeError("val must be string, number or Buffer")}function ke(e,t,n,i,o){let r,s=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(o){let i=-1;for(r=n;r<a;r++)if(c(e,r)===c(t,-1===i?0:r-i)){if(-1===i&&(i=r),r-i+1===l)return i*s}else-1!==i&&(r-=r-i),i=-1}else for(n+l>a&&(n=a-l),r=n;r>=0;r--){let n=!0;for(let i=0;i<l;i++)if(c(e,r+i)!==c(t,i)){n=!1;break}if(n)return r}return-1}function xe(e,t,n,i){n=Number(n)||0;const o=e.length-n;i?(i=Number(i))>o&&(i=o):i=o;const r=t.length;let s;for(i>r/2&&(i=r/2),s=0;s<i;++s){const i=parseInt(t.substr(2*s,2),16);if(Ze(i))return s;e[n+s]=i}return s}function Ie(e,t,n,i){return Ye(Ge(t,e.length-n),e,n,i)}function Ce(e,t,n,i){return Ye(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function Ee(e,t,n,i){return Ye(Je(t),e,n,i)}function Te(e,t,n,i){return Ye(function(e,t){let n,i,o;const r=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),i=n>>8,o=n%256,r.push(o),r.push(i);return r}(t,e.length-n),e,n,i)}function Se(e,t,n){return 0===t&&n===e.length?J(e):J(e.slice(t,n))}function Ne(e,t,n){n=Math.min(e.length,n);const i=[];let o=t;for(;o<n;){const t=e[o];let r=null,s=t>239?4:t>223?3:t>191?2:1;if(o+s<=n){let n,i,a,l;switch(s){case 1:t<128&&(r=t);break;case 2:n=e[o+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(r=l));break;case 3:n=e[o+1],i=e[o+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(r=l));break;case 4:n=e[o+1],i=e[o+2],a=e[o+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(r=l))}}null===r?(r=65533,s=1):r>65535&&(r-=65536,i.push(r>>>10&1023|55296),r=56320|1023&r),i.push(r),o+=s}return function(e){const t=e.length;if(t<=Re)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=Re));return n}(i)}he.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),he.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(he.prototype,"parent",{enumerable:!0,get:function(){if(he.isBuffer(this))return this.buffer}}),Object.defineProperty(he.prototype,"offset",{enumerable:!0,get:function(){if(he.isBuffer(this))return this.byteOffset}}),he.poolSize=8192,he.from=function(e,t,n){return de(e,t,n)},Object.setPrototypeOf(he.prototype,Uint8Array.prototype),Object.setPrototypeOf(he,Uint8Array),he.alloc=function(e,t,n){return function(e,t,n){return fe(e),e<=0?ue(e):void 0!==t?"string"==typeof n?ue(e).fill(t,n):ue(e).fill(t):ue(e)}(e,t,n)},he.allocUnsafe=function(e){return pe(e)},he.allocUnsafeSlow=function(e){return pe(e)},he.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==he.prototype},he.compare=function(e,t){if(Qe(e,Uint8Array)&&(e=he.from(e,e.offset,e.byteLength)),Qe(t,Uint8Array)&&(t=he.from(t,t.offset,t.byteLength)),!he.isBuffer(e)||!he.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let o=0,r=Math.min(n,i);o<r;++o)if(e[o]!==t[o]){n=e[o],i=t[o];break}return n<i?-1:i<n?1:0},he.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},he.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return he.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=he.allocUnsafe(t);let o=0;for(n=0;n<e.length;++n){let t=e[n];if(Qe(t,Uint8Array))o+t.length>i.length?(he.isBuffer(t)||(t=he.from(t)),t.copy(i,o)):Uint8Array.prototype.set.call(i,t,o);else{if(!he.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,o)}o+=t.length}return i},he.byteLength=be,he.prototype._isBuffer=!0,he.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)_e(this,t,t+1);return this},he.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)_e(this,t,t+3),_e(this,t+1,t+2);return this},he.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)_e(this,t,t+7),_e(this,t+1,t+6),_e(this,t+2,t+5),_e(this,t+3,t+4);return this},he.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Ne(this,0,e):ve.apply(this,arguments)},he.prototype.toLocaleString=he.prototype.toString,he.prototype.equals=function(e){if(!he.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===he.compare(this,e)},he.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},le&&(he.prototype[le]=he.prototype.inspect),he.prototype.compare=function(e,t,n,i,o){if(Qe(e,Uint8Array)&&(e=he.from(e,e.offset,e.byteLength)),!he.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),t<0||n>e.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&t>=n)return 0;if(i>=o)return-1;if(t>=n)return 1;if(this===e)return 0;let r=(o>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(r,s),l=this.slice(i,o),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){r=l[e],s=c[e];break}return r<s?-1:s<r?1:0},he.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},he.prototype.indexOf=function(e,t,n){return we(this,e,t,n,!0)},he.prototype.lastIndexOf=function(e,t,n){return we(this,e,t,n,!1)},he.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const o=this.length-t;if((void 0===n||n>o)&&(n=o),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let r=!1;for(;;)switch(i){case"hex":return xe(this,e,t,n);case"utf8":case"utf-8":return Ie(this,e,t,n);case"ascii":case"latin1":case"binary":return Ce(this,e,t,n);case"base64":return Ee(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Te(this,e,t,n);default:if(r)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),r=!0}},he.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const Re=4096;function Ae(e,t,n){let i="";n=Math.min(e.length,n);for(let o=t;o<n;++o)i+=String.fromCharCode(127&e[o]);return i}function Oe(e,t,n){let i="";n=Math.min(e.length,n);for(let o=t;o<n;++o)i+=String.fromCharCode(e[o]);return i}function Le(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let o="";for(let i=t;i<n;++i)o+=et[e[i]];return o}function Pe(e,t,n){const i=e.slice(t,n);let o="";for(let e=0;e<i.length-1;e+=2)o+=String.fromCharCode(i[e]+256*i[e+1]);return o}function De(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Me(e,t,n,i,o,r){if(!he.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<r)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function Ue(e,t,n,i,o){He(t,i,o,e,n,7);let r=Number(t&BigInt(4294967295));e[n++]=r,r>>=8,e[n++]=r,r>>=8,e[n++]=r,r>>=8,e[n++]=r;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function Be(e,t,n,i,o){He(t,i,o,e,n,7);let r=Number(t&BigInt(4294967295));e[n+7]=r,r>>=8,e[n+6]=r,r>>=8,e[n+5]=r,r>>=8,e[n+4]=r;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function Fe(e,t,n,i,o,r){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function ze(e,t,n,i,o){return t=+t,n>>>=0,o||Fe(e,0,n,4),ee(e,t,n,i,23,4),n+4}function je(e,t,n,i,o){return t=+t,n>>>=0,o||Fe(e,0,n,8),ee(e,t,n,i,52,8),n+8}he.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,he.prototype),i},he.prototype.readUintLE=he.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=this[e],o=1,r=0;for(;++r<t&&(o*=256);)i+=this[e+r]*o;return i},he.prototype.readUintBE=he.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=this[e+--t],o=1;for(;t>0&&(o*=256);)i+=this[e+--t]*o;return i},he.prototype.readUint8=he.prototype.readUInt8=function(e,t){return e>>>=0,t||De(e,1,this.length),this[e]},he.prototype.readUint16LE=he.prototype.readUInt16LE=function(e,t){return e>>>=0,t||De(e,2,this.length),this[e]|this[e+1]<<8},he.prototype.readUint16BE=he.prototype.readUInt16BE=function(e,t){return e>>>=0,t||De(e,2,this.length),this[e]<<8|this[e+1]},he.prototype.readUint32LE=he.prototype.readUInt32LE=function(e,t){return e>>>=0,t||De(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},he.prototype.readUint32BE=he.prototype.readUInt32BE=function(e,t){return e>>>=0,t||De(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},he.prototype.readBigUInt64LE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Xe(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,o=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(o)<<BigInt(32))})),he.prototype.readBigUInt64BE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Xe(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],o=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(o)})),he.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=this[e],o=1,r=0;for(;++r<t&&(o*=256);)i+=this[e+r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},he.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=t,o=1,r=this[e+--i];for(;i>0&&(o*=256);)r+=this[e+--i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*t)),r},he.prototype.readInt8=function(e,t){return e>>>=0,t||De(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},he.prototype.readInt16LE=function(e,t){e>>>=0,t||De(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},he.prototype.readInt16BE=function(e,t){e>>>=0,t||De(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},he.prototype.readInt32LE=function(e,t){return e>>>=0,t||De(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},he.prototype.readInt32BE=function(e,t){return e>>>=0,t||De(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},he.prototype.readBigInt64LE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Xe(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),he.prototype.readBigInt64BE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Xe(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),he.prototype.readFloatLE=function(e,t){return e>>>=0,t||De(e,4,this.length),Z(this,e,!0,23,4)},he.prototype.readFloatBE=function(e,t){return e>>>=0,t||De(e,4,this.length),Z(this,e,!1,23,4)},he.prototype.readDoubleLE=function(e,t){return e>>>=0,t||De(e,8,this.length),Z(this,e,!0,52,8)},he.prototype.readDoubleBE=function(e,t){return e>>>=0,t||De(e,8,this.length),Z(this,e,!1,52,8)},he.prototype.writeUintLE=he.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Me(this,e,t,n,Math.pow(2,8*n)-1,0)}let o=1,r=0;for(this[t]=255&e;++r<n&&(o*=256);)this[t+r]=e/o&255;return t+n},he.prototype.writeUintBE=he.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Me(this,e,t,n,Math.pow(2,8*n)-1,0)}let o=n-1,r=1;for(this[t+o]=255&e;--o>=0&&(r*=256);)this[t+o]=e/r&255;return t+n},he.prototype.writeUint8=he.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,1,255,0),this[t]=255&e,t+1},he.prototype.writeUint16LE=he.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},he.prototype.writeUint16BE=he.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},he.prototype.writeUint32LE=he.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},he.prototype.writeUint32BE=he.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},he.prototype.writeBigUInt64LE=tt((function(e,t=0){return Ue(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),he.prototype.writeBigUInt64BE=tt((function(e,t=0){return Be(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),he.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Me(this,e,t,n,i-1,-i)}let o=0,r=1,s=0;for(this[t]=255&e;++o<n&&(r*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/r>>0)-s&255;return t+n},he.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Me(this,e,t,n,i-1,-i)}let o=n-1,r=1,s=0;for(this[t+o]=255&e;--o>=0&&(r*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/r>>0)-s&255;return t+n},he.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},he.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},he.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},he.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},he.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},he.prototype.writeBigInt64LE=tt((function(e,t=0){return Ue(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),he.prototype.writeBigInt64BE=tt((function(e,t=0){return Be(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),he.prototype.writeFloatLE=function(e,t,n){return ze(this,e,t,!0,n)},he.prototype.writeFloatBE=function(e,t,n){return ze(this,e,t,!1,n)},he.prototype.writeDoubleLE=function(e,t,n){return je(this,e,t,!0,n)},he.prototype.writeDoubleBE=function(e,t,n){return je(this,e,t,!1,n)},he.prototype.copy=function(e,t,n,i){if(!he.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const o=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),o},he.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!he.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{const r=he.isBuffer(e)?e:he.from(e,i),s=r.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-t;++o)this[o+t]=r[o%s]}return this};const We={};function qe(e,t,n){We[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function $e(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function He(e,t,n,i,o,r){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let o;throw o=r>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(r+1)}${i}`:`>= -(2${i} ** ${8*(r+1)-1}${i}) and < 2 ** ${8*(r+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new We.ERR_OUT_OF_RANGE("value",o,e)}!function(e,t,n){Ve(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||Xe(t,e.length-(n+1))}(i,o,r)}function Ve(e,t){if("number"!=typeof e)throw new We.ERR_INVALID_ARG_TYPE(t,"number",e)}function Xe(e,t,n){if(Math.floor(e)!==e)throw Ve(e,n),new We.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new We.ERR_BUFFER_OUT_OF_BOUNDS;throw new We.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}qe("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),qe("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),qe("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>2**32?o=$e(String(n)):"bigint"==typeof n&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=$e(o)),o+="n"),i+=` It must be ${t}. Received ${o}`,i}),RangeError);const Ke=/[^+/0-9A-Za-z-_]/g;function Ge(e,t){let n;t=t||1/0;const i=e.length;let o=null;const r=[];for(let s=0;s<i;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(t-=3)>-1&&r.push(239,191,189);continue}if(s+1===i){(t-=3)>-1&&r.push(239,191,189);continue}o=n;continue}if(n<56320){(t-=3)>-1&&r.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(t-=3)>-1&&r.push(239,191,189);if(o=null,n<128){if((t-=1)<0)break;r.push(n)}else if(n<2048){if((t-=2)<0)break;r.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;r.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;r.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return r}function Je(e){return G(function(e){if((e=(e=e.split("=")[0]).trim().replace(Ke,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Ye(e,t,n,i){let o;for(o=0;o<i&&!(o+n>=t.length||o>=e.length);++o)t[o+n]=e[o];return o}function Qe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Ze(e){return e!=e}const et=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let o=0;o<16;++o)t[i+o]=e[n]+e[o]}return t}();function tt(e){return"undefined"==typeof BigInt?nt:e}function nt(){throw new Error("BigInt not supported")}var it=K;function ot(e){return $.isPlainObject(e)||$.isArray(e)}function rt(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function st(e,t,n){return e?e.concat(t).map((function(e,t){return e=rt(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const at=$.toFlatObject($,{},null,(function(e){return/^is[A-Z]/.test(e)}));var lt=function(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new(Q||FormData);const i=(n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!$.isUndefined(t[e])}))).metaTokens,o=n.visitor||c,r=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if($.isDate(e))return e.toISOString();if(!a&&$.isBlob(e))throw new Y("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(e)||$.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):it.from(e):e}function c(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if($.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if($.isArray(e)&&function(e){return $.isArray(e)&&!e.some(ot)}(e)||($.isFileList(e)||$.endsWith(n,"[]"))&&(a=$.toArray(e)))return n=rt(n),a.forEach((function(e,i){!$.isUndefined(e)&&null!==e&&t.append(!0===s?st([n],i,r):null===s?n:n+"[]",l(e))})),!1;return!!ot(e)||(t.append(st(o,n,r),l(e)),!1)}const u=[],h=Object.assign(at,{defaultVisitor:c,convertValue:l,isVisitable:ot});if(!$.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!$.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),$.forEach(n,(function(n,r){!0===(!($.isUndefined(n)||null===n)&&o.call(t,n,$.isString(r)?r.trim():r,i,h))&&e(n,i?i.concat(r):[r])})),u.pop()}}(e),t};function ct(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ut(e,t){this._pairs=[],e&&lt(e,this,t)}const ht=ut.prototype;ht.append=function(e,t){this._pairs.push([e,t])},ht.toString=function(e){const t=e?function(t){return e.call(this,t,ct)}:ct;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var dt=ut;function ft(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pt(e,t,n){if(!t)return e;const i=n&&n.encode||ft,o=n&&n.serialize;let r;if(r=o?o(t,n):$.isURLSearchParams(t)?t.toString():new dt(t,n).toString(i),r){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}var mt=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){$.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},gt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var yt={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:dt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function bt(e,t){return lt(e,new yt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return yt.isNode&&$.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var vt=function(e){function t(e,n,i,o){let r=e[o++];const s=Number.isFinite(+r),a=o>=e.length;if(r=!r&&$.isArray(i)?i.length:r,a)return $.hasOwnProp(i,r)?i[r]=[i[r],n]:i[r]=n,!s;i[r]&&$.isObject(i[r])||(i[r]=[]);return t(e,n,i[r],o)&&$.isArray(i[r])&&(i[r]=function(e){const t={},n=Object.keys(e);let i;const o=n.length;let r;for(i=0;i<o;i++)r=n[i],t[r]=e[r];return t}(i[r])),!s}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,((e,i)=>{t(function(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const _t={"Content-Type":void 0};const wt={transitional:gt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,o=$.isObject(e);o&&$.isHTMLForm(e)&&(e=new FormData(e));if($.isFormData(e))return i&&i?JSON.stringify(vt(e)):e;if($.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let r;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return bt(e,this.formSerializer).toString();if((r=$.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return lt(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),function(e,t,n){if($.isString(e))try{return(t||JSON.parse)(e),$.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||wt.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&$.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw Y.from(e,Y.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:yt.classes.FormData,Blob:yt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};$.forEach(["delete","get","head"],(function(e){wt.headers[e]={}})),$.forEach(["post","put","patch"],(function(e){wt.headers[e]=$.merge(_t)}));var kt=wt;const xt=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var It=e=>{const t={};let n,i,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),i=e.substring(o+1).trim(),!n||t[n]&&xt[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const Ct=Symbol("internals");function Et(e){return e&&String(e).trim().toLowerCase()}function Tt(e){return!1===e||null==e?e:$.isArray(e)?e.map(Tt):String(e)}function St(e,t,n,i,o){return $.isFunction(i)?i.call(this,t,n):(o&&(t=n),$.isString(t)?$.isString(i)?-1!==t.indexOf(i):$.isRegExp(i)?i.test(t):void 0:void 0)}class Nt{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function o(e,t,n){const o=Et(t);if(!o)throw new Error("header name must be a non-empty string");const r=$.findKey(i,o);(!r||void 0===i[r]||!0===n||void 0===n&&!1!==i[r])&&(i[r||t]=Tt(e))}const r=(e,t)=>$.forEach(e,((e,n)=>o(e,n,t)));return $.isPlainObject(e)||e instanceof this.constructor?r(e,t):$.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?r(It(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=Et(e)){const n=$.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if($.isFunction(t))return t.call(this,e,n);if($.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Et(e)){const n=$.findKey(this,e);return!(!n||void 0===this[n]||t&&!St(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function o(e){if(e=Et(e)){const o=$.findKey(n,e);!o||t&&!St(0,n[o],o,t)||(delete n[o],i=!0)}}return $.isArray(e)?e.forEach(o):o(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const o=t[n];e&&!St(0,this[o],o,e,!0)||(delete this[o],i=!0)}return i}normalize(e){const t=this,n={};return $.forEach(this,((i,o)=>{const r=$.findKey(n,o);if(r)return t[r]=Tt(i),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=Tt(i),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return $.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&$.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Ct]=this[Ct]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=Et(e);t[i]||(!function(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,o){return this[i].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[i]=!0)}return $.isArray(e)?e.forEach(i):i(e),this}}Nt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),$.freezeMethods(Nt.prototype),$.freezeMethods(Nt);var Rt=Nt;function At(e,t){const n=this||kt,i=t||n,o=Rt.from(i.headers);let r=i.data;return $.forEach(e,(function(e){r=e.call(n,r,o.normalize(),t?t.status:void 0)})),o.normalize(),r}function Ot(e){return!(!e||!e.__CANCEL__)}function Lt(e,t,n){Y.call(this,null==e?"canceled":e,Y.ERR_CANCELED,t,n),this.name="CanceledError"}$.inherits(Lt,Y,{__CANCEL__:!0});var Pt=Lt;function Dt(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new Y("Request failed with status code "+n.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Mt=yt.isStandardBrowserEnv?{write:function(e,t,n,i,o,r){const s=[];s.push(e+"="+encodeURIComponent(t)),$.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),$.isString(i)&&s.push("path="+i),$.isString(o)&&s.push("domain="+o),!0===r&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ut(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Bt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Ut(e,t):t}var Ft=yt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=$.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function zt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var jt=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let o,r=0,s=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=i[s];o||(o=l),n[r]=a,i[r]=l;let u=s,h=0;for(;u!==r;)h+=n[u++],u%=e;if(r=(r+1)%e,r===s&&(s=(s+1)%e),l-o<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}};function Wt(e,t){let n=0;const i=jt(50,250);return o=>{const r=o.loaded,s=o.lengthComputable?o.total:void 0,a=r-n,l=i(a);n=r;const c={loaded:r,total:s,progress:s?r/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&r<=s?(s-r)/l:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}var qt="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const o=Rt.from(e.headers).normalize(),r=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}$.isFormData(i)&&(yt.isStandardBrowserEnv||yt.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const c=Bt(e.baseURL,e.url);function u(){if(!l)return;const i=Rt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());Dt((function(e){t(e),a()}),(function(e){n(e),a()}),{data:r&&"text"!==r&&"json"!==r?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),pt(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new Y("Request aborted",Y.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new Y("Network Error",Y.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||gt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Y(t,i.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,e,l)),l=null},yt.isStandardBrowserEnv){const t=(e.withCredentials||Ft(c))&&e.xsrfCookieName&&Mt.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===i&&o.setContentType(null),"setRequestHeader"in l&&$.forEach(o.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),$.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),r&&"json"!==r&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",Wt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Wt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{l&&(n(!t||t.type?new Pt(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=zt(c);h&&-1===yt.protocols.indexOf(h)?n(new Y("Unsupported protocol "+h+":",Y.ERR_BAD_REQUEST,e)):l.send(i||null)}))};const $t={http:Q,xhr:qt};$.forEach($t,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Ht={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let o=0;o<t&&(n=e[o],!(i=$.isString(n)?$t[n.toLowerCase()]:n));o++);if(!i){if(!1===i)throw new Y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error($.hasOwnProp($t,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!$.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:$t};function Vt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Pt(null,e)}function Xt(e){Vt(e),e.headers=Rt.from(e.headers),e.data=At.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ht.getAdapter(e.adapter||kt.adapter)(e).then((function(t){return Vt(e),t.data=At.call(e,e.transformResponse,t),t.headers=Rt.from(t.headers),t}),(function(t){return Ot(t)||(Vt(e),t&&t.response&&(t.response.data=At.call(e,e.transformResponse,t.response),t.response.headers=Rt.from(t.response.headers))),Promise.reject(t)}))}const Kt=e=>e instanceof Rt?e.toJSON():e;function Gt(e,t){t=t||{};const n={};function i(e,t,n){return $.isPlainObject(e)&&$.isPlainObject(t)?$.merge.call({caseless:n},e,t):$.isPlainObject(t)?$.merge({},t):$.isArray(t)?t.slice():t}function o(e,t,n){return $.isUndefined(t)?$.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function r(e,t){if(!$.isUndefined(t))return i(void 0,t)}function s(e,t){return $.isUndefined(t)?$.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,o,r){return r in t?i(n,o):r in e?i(void 0,n):void 0}const l={url:r,method:r,data:r,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(Kt(e),Kt(t),!0)};return $.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const r=l[i]||o,s=r(e[i],t[i],i);$.isUndefined(s)&&r!==a||(n[i]=s)})),n}const Jt="1.3.5",Yt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Yt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Qt={};Yt.transitional=function(e,t,n){function i(e,t){return"[Axios v1.3.5] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,r)=>{if(!1===e)throw new Y(i(o," has been removed"+(t?" in "+t:"")),Y.ERR_DEPRECATED);return t&&!Qt[o]&&(Qt[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,r)}};var Zt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let o=i.length;for(;o-- >0;){const r=i[o],s=t[r];if(s){const t=e[r],n=void 0===t||s(t,r,e);if(!0!==n)throw new Y("option "+r+" must be "+n,Y.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Y("Unknown option "+r,Y.ERR_BAD_OPTION)}},validators:Yt};const en=Zt.validators;class tn{constructor(e){this.defaults=e,this.interceptors={request:new mt,response:new mt}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Gt(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:o}=t;let r;void 0!==n&&Zt.assertOptions(n,{silentJSONParsing:en.transitional(en.boolean),forcedJSONParsing:en.transitional(en.boolean),clarifyTimeoutError:en.transitional(en.boolean)},!1),null!=i&&($.isFunction(i)?t.paramsSerializer={serialize:i}:Zt.assertOptions(i,{encode:en.function,serialize:en.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),r=o&&$.merge(o.common,o[t.method]),r&&$.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Rt.concat(r,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[Xt.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);h<u;)c=c.then(e[h++],e[h++]);return c}u=s.length;let d=t;for(h=0;h<u;){const e=s[h++],t=s[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=Xt.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(e){return pt(Bt((e=Gt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}$.forEach(["delete","get","head","options"],(function(e){tn.prototype[e]=function(t,n){return this.request(Gt(n||{},{method:e,url:t,data:(n||{}).data}))}})),$.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,o){return this.request(Gt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}tn.prototype[e]=t(),tn.prototype[e+"Form"]=t(!0)}));var nn=tn;class on{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,o){n.reason||(n.reason=new Pt(e,i,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new on((function(t){e=t})),cancel:e}}}var rn=on;const sn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sn).forEach((([e,t])=>{sn[t]=e}));var an=sn;const ln=function e(t){const n=new nn(t),i=h(nn.prototype.request,n);return $.extend(i,nn.prototype,n,{allOwnKeys:!0}),$.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(Gt(t,n))},i}(kt);ln.Axios=nn,ln.CanceledError=Pt,ln.CancelToken=rn,ln.isCancel=Ot,ln.VERSION=Jt,ln.toFormData=lt,ln.AxiosError=Y,ln.Cancel=ln.CanceledError,ln.all=function(e){return Promise.all(e)},ln.spread=function(e){return function(t){return e.apply(null,t)}},ln.isAxiosError=function(e){return $.isObject(e)&&!0===e.isAxiosError},ln.mergeConfig=Gt,ln.AxiosHeaders=Rt,ln.formToJSON=e=>vt($.isHTMLForm(e)?new FormData(e):e),ln.HttpStatusCode=an,ln.default=ln;var cn=ln;const{Axios:un,AxiosError:hn,CanceledError:dn,isCancel:fn,CancelToken:pn,VERSION:mn,all:gn,Cancel:yn,isAxiosError:bn,spread:vn,toFormData:_n,AxiosHeaders:wn,HttpStatusCode:kn,formToJSON:xn,mergeConfig:In}=cn;class Cn{#e="https://books-backend.p.goit.global/books/";constructor(){this.bookId=0,this.category=""}fetchCategoryList(){return cn.get(`${this.#e}/category-list`).then((e=>e)).catch(console.error)}fetchTopBooks(){return cn.get(`${this.#e}/top-books`).then((e=>e)).catch(console.error)}fetchBookId(){return cn.get(`${this.#e}${this.bookId}`).then((e=>e)).catch(console.error)}fetchCategoryOfBooks(){return cn.get(`${this.#e}category?category=${this.category}`).then((e=>e)).catch((e=>console.error(e)))}}const En=document.querySelector("body");function Tn(){En.classList.add("loading")}function Sn(){window.setTimeout((function(){En.classList.remove("loading"),En.classList.add("loaded")}),1500)}const Nn=document.querySelector(".categories-list"),Rn=new Cn;function An(e){if(e.target.classList.contains("category")){if(e.target.classList.contains("checked-category"))return;Nn.querySelector(".checked-category").classList.remove("checked-category"),e.target.classList.add("checked-category")}}var On=r("67vkq");let Ln;var Pn;Pn=new URL(r("kyEFX").resolve("6pysX"),import.meta.url).toString();var Dn;Dn=new URL(r("kyEFX").resolve("hRcsc"),import.meta.url).toString();var Mn;Mn=new URL(r("kyEFX").resolve("6PD6k"),import.meta.url).toString();var Un;Un=new URL(r("kyEFX").resolve("b8gBG"),import.meta.url).toString();var Bn;Bn=new URL(r("kyEFX").resolve("aEdw0"),import.meta.url).toString();var Fn;Fn=new URL(r("kyEFX").resolve("6HXmE"),import.meta.url).toString();var zn;zn=new URL(r("kyEFX").resolve("hy5T9"),import.meta.url).toString();var jn;jn=new URL(r("kyEFX").resolve("9xxqi"),import.meta.url).toString();var Wn;Wn=new URL(r("kyEFX").resolve("iYxKf"),import.meta.url).toString();const qn=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(Pn)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(Dn)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(Mn)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(Un)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:new URL(Bn)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(Fn)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(zn)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(jn)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL(Wn)}],$n=document.querySelector(".js-support_list"),Hn=document.querySelector(".js-support_btn");Hn.addEventListener("click",(function(){if(window.innerWidth<768)return void Kn(Vn,Xn,Gn(Xn+1));Kn(Vn,Xn,Gn(Xn))}));const Vn=qn.map((({img:e,title:t,url:n},i)=>`<li class="support__item"><a href="${n}" class="support__link" aria-label="${t}" target="_blank" rel="noopener norefferer nofollow">\n    <p class="support__number">${(i+1).toString().padStart(2,"0")}</p><img class="support__img" src= ${e} alt="${t}"/></a></li>`));let Xn=0;function Kn(e,t,n){const i=e.slice(t,n).join("");Xn=Gn(Xn),$n.insertAdjacentHTML("beforeend",i),Vn.length<=n&&(Hn.style.display="none")}function Gn(e){return window.innerWidth<768?e+4:e+6}Kn(Vn,Xn,Gn(Xn)),(()=>{const e={openModalBtnBurger:document.querySelector("[data-burgermodal-auth-open]"),openModalBtnOptions:document.querySelector("[data-optionmodal-auth-open]"),openModalBtn:document.querySelector("[data-modal-auth-open]"),closeModalBtn:document.querySelector("[data-modal-auth-close]"),modal:document.querySelector("[data-modal-auth]"),modalWindow:document.querySelector("[data-modal-auth-window]")};function t(){window.addEventListener("keydown",i),e.modal.classList.remove("is-hidden"),e.modalWindow.classList.add("modal-animation")}function n(){window.removeEventListener("keydown",i),e.modal.classList.add("is-hidden"),e.modalWindow.classList.add("modal-animation")}function i(e){"Escape"===e.code&&n()}e.openModalBtnBurger.addEventListener("click",t),e.openModalBtnOptions.addEventListener("click",t),e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",n),e.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&n()}))})();const Jn=e=>{const t=document.querySelector(e),n=[{attribute:"required",isValid:e=>""!==e.value.trim(),errorMessage:(e,t)=>`${t.textContent} is required`},{attribute:"minlength",isValid:e=>e.value&&e.value.length>=parseInt(e.minLength,6),errorMessage:(e,t)=>`${t.textContent} needs to be at least ${e.minLength} characters`},{attribute:"pattern",isValid:e=>new RegExp(e.pattern).test(e.value),errorMessage:(e,t)=>`${t.textContent} should be valid`}],i=e=>{const t=e.querySelector("label"),i=e.querySelector("input, textarea"),o=e.querySelector(".error");let r=!1;for(const e of n)i.hasAttribute(e.attribute)&&!e.isValid(i)&&(o.textContent=e.errorMessage(i,t),r=!0);r||(o.textContent="")};t.addEventListener("submit",(e=>{e.preventDefault();const n=new FormData(e.currentTarget);console.log(n),n.forEach(((e,t)=>{console.log(t),console.log(e)}));document.querySelector("[data-modal-auth]");o(t)}));const o=e=>{Array.from(e.querySelectorAll("._req")).forEach((e=>{i(e)}))};t.setAttribute("novalidate",""),Array.from(t.elements).forEach((e=>e.addEventListener("blur",(e=>{i(e.srcElement.parentElement)}))))};Jn("#form"),Jn("#formbrief");const Yn=document.querySelector("[data-modal-options-window]"),Qn=document.querySelector("[data-modal-options-close]"),Zn="user choise",ei=(document.querySelector("[data-modal-auth]"),document.querySelector("[data-optionmodal-auth-open]"));1!=localStorage.getItem(Zn)&&setTimeout((()=>{Yn.classList.add("is-shown"),ei.addEventListener("click",(function(){localStorage.setItem(Zn,1),Yn.classList.remove("is-shown")})),Qn.addEventListener("click",(function(){localStorage.setItem(Zn,1),Yn.classList.remove("is-shown")}))}),8e3);var ti;ti=new URL(r("kyEFX").resolve("bFtTG"),import.meta.url).toString();var ni;ni=new URL(r("kyEFX").resolve("1w34Y"),import.meta.url).toString();var ii;ii=new URL(r("kyEFX").resolve("iITAK"),import.meta.url).toString();var oi;function ri(e,t){const n=t?'<button class="card__btn add-card__bnt btn">remove from shop list</button> <p class = "congrat-text"></p>':'<button class="card__btn add-card__bnt btn">add to shop list</button> <p class = "congrat-text"></p>';return`<div class="backdrop backdrop__modal js-book-modal">\n  <div class="modal book-card__modal scrollable">\n    <button class="modal-close__btn js-book-close">\n      <img src=${new URL(ti)} alt="close_icon" width="24" height="24"/>\n    </button>\n    <div class="book-card">\n      <div class="book-card__thumb">\n        <img class="book-card__img" src="${e.book_image}" alt="book_image" loading="lazy" />\n      </div>\n      <div class="book-info">\n        <h2 class="book-title">${e.title}</h2>\n        <h3 class="book-author">${e.author}</h3>\n        <p class="book-description">${e.description}</p>\n        <ul class="shops-list list">\n          <li class="shops-item">\n            <a\n              class="buy-links"\n              href="${e.amazon_link}"\n              aria-label="amazon-shop icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="amazon-shop__icon book-shop__icons"\n                src="${new URL(ni)}"\n                alt="amazon-shop icon"\n                loading="lazy"\n              />\n            </a>\n          </li>\n          <li class="shops-item">\n            <a\n              class="buy-links"\n              href="${e.apple_link}"\n              aria-label="apple-book icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="apple-book__icon book-shop__icons"\n                src="${new URL(ii)}"\n                alt="apple-book icon"\n                loading="lazy"\n              />\n            </a>\n          </li>\n          <li class="shops-item">\n            <a\n              class="buy-links"\n              href="${e.bookshop_link}"\n              aria-label="bookshop icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="bookshop-icon book-shop__icons"\n                src="${new URL(oi)}"\n                alt="bookshop icon"\n                loading="lazy"\n              />\n            </a>\n          </li>\n        </ul>\n      </div>\n      \n    </div>\n    <div class="book-card__btn">${n}</div>`}oi=new URL(r("kyEFX").resolve("gqoTZ"),import.meta.url).toString();const si=document.querySelector(".top-books");si&&si.addEventListener("click",(async e=>{const t=e.target.closest("li.js-book-modal");if(!t)return;const n=t.getAttribute("data-book-id"),i=new Cn;i.bookId=n;const o=(await i.fetchBookId()).data,r={book_image:o.book_image,title:o.title,description:o.description,author:o.author,amazon_link:o.buy_links.find((e=>"Amazon"===e.name))?.url,apple_link:o.buy_links.find((e=>"Apple Books"===e.name))?.url,bookshop_link:o.buy_links.find((e=>"Bookshop"===e.name))?.url},s="books",a=document.createElement("div");a.innerHTML=ri(r,u(n)),document.body.appendChild(a);const l=e=>{"Escape"===e.key&&(document.body.removeChild(a),document.removeEventListener("keyup",l))};document.addEventListener("keyup",l);a.querySelector(".modal-close__btn").addEventListener("click",(function(e){document.body.removeChild(a),document.removeEventListener("keyup",l),e.stopPropagation()}));const c=a.querySelector(".backdrop__modal");function u(e){let t=localStorage.getItem(s);return t||(t="[]"),-1!==JSON.parse(t).indexOf(e)}c.addEventListener("click",(function(e){if(e.target!==c)return;document.body.removeChild(a),document.removeEventListener("keyup",l),e.stopPropagation()}));const h=document.querySelector(".congrat-text");a.querySelector(".add-card__bnt").addEventListener("click",(e=>{u(n)?(!function(e){let t=localStorage.getItem(s);if(null===t)return;let n=JSON.parse(t);n=n.filter((t=>t._id!==e&&t!==e)),localStorage.setItem(s,JSON.stringify(n))}(n),e.target.innerText="add to shopping list",h.textContent=""):(!function(e){let t=localStorage.getItem(s);t||(t="[]");const n=JSON.parse(t);n.push(e,o),localStorage.setItem(s,JSON.stringify(n))}(n),e.target.innerText="remove from the shopping list",h.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.")}))}))
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
 */;var ai,li,ci={},ui=ci={};function hi(){throw new Error("setTimeout has not been defined")}function di(){throw new Error("clearTimeout has not been defined")}function fi(e){if(ai===setTimeout)return setTimeout(e,0);if((ai===hi||!ai)&&setTimeout)return ai=setTimeout,setTimeout(e,0);try{return ai(e,0)}catch(t){try{return ai.call(null,e,0)}catch(t){return ai.call(this,e,0)}}}!function(){try{ai="function"==typeof setTimeout?setTimeout:hi}catch(e){ai=hi}try{li="function"==typeof clearTimeout?clearTimeout:di}catch(e){li=di}}();var pi,mi=[],gi=!1,yi=-1;function bi(){gi&&pi&&(gi=!1,pi.length?mi=pi.concat(mi):yi=-1,mi.length&&vi())}function vi(){if(!gi){var e=fi(bi);gi=!0;for(var t=mi.length;t;){for(pi=mi,mi=[];++yi<t;)pi&&pi[yi].run();yi=-1,t=mi.length}pi=null,gi=!1,function(e){if(li===clearTimeout)return clearTimeout(e);if((li===di||!li)&&clearTimeout)return li=clearTimeout,clearTimeout(e);try{return li(e)}catch(t){try{return li.call(null,e)}catch(t){return li.call(this,e)}}}(e)}}function _i(e,t){this.fun=e,this.array=t}function wi(){}ui.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];mi.push(new _i(e,t)),1!==mi.length||gi||fi(vi)},_i.prototype.run=function(){this.fun.apply(null,this.array)},ui.title="browser",ui.browser=!0,ui.env={},ui.argv=[],ui.version="",ui.versions={},ui.on=wi,ui.addListener=wi,ui.once=wi,ui.off=wi,ui.removeListener=wi,ui.removeAllListeners=wi,ui.emit=wi,ui.prependListener=wi,ui.prependOnceListener=wi,ui.listeners=function(e){return[]},ui.binding=function(e){throw new Error("process.binding is not supported")},ui.cwd=function(){return"/"},ui.chdir=function(e){throw new Error("process.chdir is not supported")},ui.umask=function(){return 0};const ki=!1,xi=!1,Ii="${JSCORE_VERSION}",Ci=function(e,t){if(!e)throw Ei(t)},Ei=function(e){return new Error("Firebase Database ("+Ii+") INTERNAL ASSERT FAILED: "+e)},Ti=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++i)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},Si={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const o=e[t],r=t+1<e.length,s=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=o>>2,u=(3&o)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;a||(d=64,r||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ti(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const r=e[n++];t[i++]=String.fromCharCode((31&o)<<6|63&r)}else if(o>239&&o<365){const r=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&o)<<12|(63&r)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==r||null==s||null==a)throw new Ni;const l=o<<2|r>>4;if(i.push(l),64!==s){const e=r<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class Ni extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ri=function(e){const t=Ti(e);return Si.encodeByteArray(t,!0)},Ai=function(e){return Ri(e).replace(/\./g,"")},Oi=function(e){try{return Si.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function Li(e){return Pi(void 0,e)}function Pi(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Pi(e[n],t[n]));return e}
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
const Di=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Mi=()=>{try{return Di()||(()=>{if(void 0===ci||void 0===ci.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Oi(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Ui=e=>{var t,n;return null===(n=null===(t=Mi())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Bi=e=>{const t=Ui(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Fi=()=>{var e;return null===(e=Mi())||void 0===e?void 0:e.config},zi=e=>{var t;return null===(t=Mi())||void 0===t?void 0:t[`_${e}`]};
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
class ji{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function Wi(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ai(JSON.stringify({alg:"none",type:"JWT"})),Ai(JSON.stringify(r)),""].join(".")}
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
 */function qi(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function $i(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qi())}function Hi(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Vi(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Xi(){const e=qi();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ki(){return!0===ki||!0===xi}function Gi(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Ji extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ji.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],r=o?function(e,t){return e.replace(Qi,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(o,n):"Error",s=`${this.serviceName}: ${r} (${i}).`;return new Ji(i,s,n)}}const Qi=/\{\$([^}]+)}/g;
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
 */function Zi(e){return JSON.parse(e)}function eo(e){return JSON.stringify(e)}
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
 */const to=function(e){let t={},n={},i={},o="";try{const r=e.split(".");t=Zi(Oi(r[0])||""),n=Zi(Oi(r[1])||""),o=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:o}},no=function(e){const t=to(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},io=function(e){const t=to(e).claims;return"object"==typeof t&&!0===t.admin};
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
function oo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ro(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function so(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ao(e,t,n){const i={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=t.call(n,e[o],o,e));return i}function lo(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const n=e[o],r=t[o];if(co(n)&&co(r)){if(!lo(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function co(e){return null!==e&&"object"==typeof e}
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
function uo(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ho(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function fo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class po{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,o,r=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^s&(a^l),o=1518500249):(i=s^a^l,o=1859775393):e<60?(i=s&a|l&(s|a),o=2400959708):(i=s^a^l,o=3395469782);const t=(r<<5|r>>>27)+i+c+o+n[e]&4294967295;c=l,l=a,a=4294967295&(s<<30|s>>>2),s=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const o=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(o[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(o),r=0;break}}else for(;i<t;)if(o[r]=e[i],++r,++i,r===this.blockSize){this.compress_(o),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function mo(e,t){const n=new go(e,t);return n.subscribe.bind(n)}class go{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=yo),void 0===i.error&&(i.error=yo),void 0===i.complete&&(i.complete=yo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function yo(){}
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
 */function bo(e,t){return`${e} failed: ${t} argument `}
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
const vo=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const t=o-55296;i++,Ci(i<e.length,"Surrogate pair missing trail surrogate.");o=65536+(t<<10)+(e.charCodeAt(i)-56320)}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},_o=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function wo(e){return e&&e._delegate?e._delegate:e}class ko{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const xo="[DEFAULT]";
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
 */class Io{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ji;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:xo})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=xo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=xo){return this.instances.has(e)}getOptions(e=xo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(i,o);const r=this.instances.get(i);return r&&e(r,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===xo?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=xo){return this.component?this.component.multipleInstances?e:xo:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Co{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Io(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const Eo=[];var To,So;(So=To||(To={}))[So.DEBUG=0]="DEBUG",So[So.VERBOSE=1]="VERBOSE",So[So.INFO=2]="INFO",So[So.WARN=3]="WARN",So[So.ERROR=4]="ERROR",So[So.SILENT=5]="SILENT";const No={debug:To.DEBUG,verbose:To.VERBOSE,info:To.INFO,warn:To.WARN,error:To.ERROR,silent:To.SILENT},Ro=To.INFO,Ao={[To.DEBUG]:"log",[To.VERBOSE]:"log",[To.INFO]:"info",[To.WARN]:"warn",[To.ERROR]:"error"},Oo=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),o=Ao[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${i}]  ${e.name}:`,...n)};class Lo{constructor(e){this.name=e,this._logLevel=Ro,this._logHandler=Oo,this._userLogHandler=null,Eo.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in To))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?No[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,To.DEBUG,...e),this._logHandler(this,To.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,To.VERBOSE,...e),this._logHandler(this,To.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,To.INFO,...e),this._logHandler(this,To.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,To.WARN,...e),this._logHandler(this,To.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,To.ERROR,...e),this._logHandler(this,To.ERROR,...e)}}const Po=(e,t)=>t.some((t=>e instanceof t));let Do,Mo;const Uo=new WeakMap,Bo=new WeakMap,Fo=new WeakMap,zo=new WeakMap,jo=new WeakMap;let Wo={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Bo.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Fo.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ho(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function qo(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Mo||(Mo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Vo(this),t),Ho(Uo.get(this))}:function(...t){return Ho(e.apply(Vo(this),t))}:function(t,...n){const i=e.call(Vo(this),t,...n);return Fo.set(i,t.sort?t.sort():[t]),Ho(i)}}function $o(e){return"function"==typeof e?qo(e):(e instanceof IDBTransaction&&function(e){if(Bo.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",r),e.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",r),e.addEventListener("abort",r)}));Bo.set(e,t)}(e),Po(e,Do||(Do=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Wo):e)}function Ho(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",r)},o=()=>{t(Ho(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Uo.set(t,e)})).catch((()=>{})),jo.set(t,e),t}(e);if(zo.has(e))return zo.get(e);const t=$o(e);return t!==e&&(zo.set(e,t),jo.set(t,e)),t}const Vo=e=>jo.get(e);function Xo(e,t,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const s=indexedDB.open(e,t),a=Ho(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(Ho(s.result),e.oldVersion,e.newVersion,Ho(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),a}const Ko=["get","getKey","getAll","getAllKeys","count"],Go=["put","add","delete","clear"],Jo=new Map;function Yo(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Jo.get(t))return Jo.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=Go.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!Ko.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,o?"readwrite":"readonly");let s=r.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&r.done]))[0]};return Jo.set(t,r),r}Wo=(e=>({...e,get:(t,n,i)=>Yo(t,n)||e.get(t,n,i),has:(t,n)=>!!Yo(t,n)||e.has(t,n)}))(Wo);
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
class Qo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Zo="@firebase/app",er="0.9.7",tr=new Lo("@firebase/app"),nr="[DEFAULT]",ir={[Zo]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},or=new Map,rr=new Map;function sr(e,t){try{e.container.addComponent(t)}catch(n){tr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ar(e){const t=e.name;if(rr.has(t))return tr.debug(`There were multiple attempts to register component ${t}.`),!1;rr.set(t,e);for(const t of or.values())sr(t,e);return!0}function lr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const cr=new Yi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class ur{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ko("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}
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
 */const hr="9.19.1";function dr(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:nr,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw cr.create("bad-app-name",{appName:String(o)});if(n||(n=Fi()),!n)throw cr.create("no-options");const r=or.get(o);if(r){if(lo(n,r.options)&&lo(i,r.config))return r;throw cr.create("duplicate-app",{appName:o})}const s=new Co(o);for(const e of rr.values())s.addComponent(e);const a=new ur(n,i,s);return or.set(o,a),a}function fr(e=nr){const t=or.get(e);if(!t&&e===nr)return dr();if(!t)throw cr.create("no-app",{appName:e});return t}function pr(e,t,n){var i;let o=null!==(i=ir[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const r=o.match(/\s|\//),s=t.match(/\s|\//);if(r||s){const e=[`Unable to register library "${o}" with version "${t}":`];return r&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),r&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void tr.warn(e.join(" "))}ar(new ko(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
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
const mr="firebase-heartbeat-database",gr=1,yr="firebase-heartbeat-store";let br=null;function vr(){return br||(br=Xo(mr,gr,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(yr)}}).catch((e=>{throw cr.create("idb-open",{originalErrorMessage:e.message})}))),br}async function _r(e,t){try{const n=(await vr()).transaction(yr,"readwrite"),i=n.objectStore(yr);return await i.put(t,wr(e)),n.done}catch(e){if(e instanceof Ji)tr.warn(e.message);else{const t=cr.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});tr.warn(t.message)}}}function wr(e){return`${e.name}!${e.options.appId}`}
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
 */class kr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ir(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=xr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=xr(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Cr(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Cr(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Ai(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xr(){return(new Date).toISOString().substring(0,10)}class Ir{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Gi()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await vr()).transaction(yr).objectStore(yr).get(wr(e))}catch(e){if(e instanceof Ji)tr.warn(e.message);else{const t=cr.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});tr.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return _r(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return _r(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Cr(e){return Ai(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Er;Er="",ar(new ko("platform-logger",(e=>new Qo(e)),"PRIVATE")),ar(new ko("heartbeat",(e=>new kr(e)),"PRIVATE")),pr(Zo,er,Er),pr(Zo,er,"esm2017"),pr("fire-js","");
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
pr("firebase","9.19.1","app");const Tr="@firebase/database",Sr="0.14.4";
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
 */let Nr="";
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
class Rr{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),eo(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Zi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class Ar{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return oo(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const Or=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Rr(t)}}catch(e){}return new Ar},Lr=Or("localStorage"),Pr=Or("sessionStorage"),Dr=new Lo("@firebase/database"),Mr=function(){let e=1;return function(){return e++}}(),Ur=function(e){const t=vo(e),n=new po;n.update(t);const i=n.digest();return Si.encodeByteArray(i)},Br=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Br.apply(null,i):t+="object"==typeof i?eo(i):i,t+=" "}return t};let Fr=null,zr=!0;const jr=function(e,t){Ci(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Dr.logLevel=To.VERBOSE,Fr=Dr.log.bind(Dr),t&&Pr.set("logging_enabled",!0)):"function"==typeof e?Fr=e:(Fr=null,Pr.remove("logging_enabled"))},Wr=function(...e){if(!0===zr&&(zr=!1,null===Fr&&!0===Pr.get("logging_enabled")&&jr(!0)),Fr){const t=Br.apply(null,e);Fr(t)}},qr=function(e){return function(...t){Wr(e,...t)}},$r=function(...e){const t="FIREBASE INTERNAL ERROR: "+Br(...e);Dr.error(t)},Hr=function(...e){const t=`FIREBASE FATAL ERROR: ${Br(...e)}`;throw Dr.error(t),new Error(t)},Vr=function(...e){const t="FIREBASE WARNING: "+Br(...e);Dr.warn(t)},Xr=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Kr="[MIN_NAME]",Gr="[MAX_NAME]",Jr=function(e,t){if(e===t)return 0;if(e===Kr||t===Gr)return-1;if(t===Kr||e===Gr)return 1;{const n=os(e),i=os(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Yr=function(e,t){return e===t?0:e<t?-1:1},Qr=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+eo(t))},Zr=function(e){if("object"!=typeof e||null===e)return eo(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=eo(t[i]),n+=":",n+=Zr(e[t[i]]);return n+="}",n},es=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let o=0;o<n;o+=t)o+t>n?i.push(e.substring(o,n)):i.push(e.substring(o,o+t));return i};function ts(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const ns=function(e){Ci(!Xr(e),"Invalid JSON number");const t=1023;let n,i,o,r,s;0===e?(i=0,o=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,o=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,o=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(s=11;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(s=0;s<64;s+=8){let e=parseInt(l.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const is=new RegExp("^-?(0*)\\d{1,10}$"),os=function(e){if(is.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},rs=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Vr("Exception was thrown by user callback.",t),e}),Math.floor(0))}},ss=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class as{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Vr(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class ls{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Wr("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vr(e)}}class cs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cs.OWNER="owner";
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
const us="5",hs=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ds="ac",fs="websocket",ps="long_polling";
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
class ms{constructor(e,t,n,i,o=!1,r="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=r,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Lr.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Lr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function gs(e,t,n){let i;if(Ci("string"==typeof t,"typeof type must == string"),Ci("object"==typeof n,"typeof params must == object"),t===fs)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ps)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const o=[];return ts(n,((e,t)=>{o.push(e+"="+t)})),i+o.join("&")}
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
 */class ys{constructor(){this.counters_={}}incrementCounter(e,t=1){oo(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Li(this.counters_)}}
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
 */const bs={},vs={};function _s(e){const t=e.toString();return bs[t]||(bs[t]=new ys),bs[t]}
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
class ws{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&rs((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */const ks="start";class xs{constructor(e,t,n,i,o,r,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=o,this.transportSessionId=r,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qr(e),this.stats_=_s(t),this.urlFn=e=>(this.appCheckToken&&(e[ds]=this.appCheckToken),gs(t,ps,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ws(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Ki()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Is(((...e)=>{const[t,n,i,o,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ks)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ks]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=us,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[ds]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&hs.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xs.forceAllow_=!0}static forceDisallow(){xs.forceDisallow_=!0}static isAvailable(){return!Ki()&&(!!xs.forceAllow_||!(xs.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=eo(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ri(t),i=es(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Ki())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=eo(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Is{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Ki())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Mr(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Is.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Wr("frame writing exception"),e.stack&&Wr(e.stack),Wr(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Wr("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){Ki()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Wr("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
 */let Cs=null;"undefined"!=typeof MozWebSocket?Cs=MozWebSocket:"undefined"!=typeof WebSocket&&(Cs=WebSocket);class Es{constructor(e,t,n,i,o,r,s){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qr(this.connId),this.stats_=_s(t),this.connURL=Es.connectionURL_(t,r,s,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,o){const r={};return r.v=us,!Ki()&&"undefined"!=typeof location&&location.hostname&&hs.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r[ds]=i),o&&(r.p=o),gs(e,fs,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Lr.set("previous_websocket_failure",!0);try{let e;if(Ki()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${us}/${Nr}/${ci.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new Cs(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Es.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Cs&&!Es.forceDisallow_}static previouslyFailed(){return Lr.isInMemoryStorage||!0===Lr.get("previous_websocket_failure")}markConnectionHealthy(){Lr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Zi(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Ci(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=eo(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=es(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Es.responsesRequiredToBeHealthy=2,Es.healthyTimeout=3e4;
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
class Ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xs,Es]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Es&&Es.isAvailable();let n=t&&!Es.previouslyFailed();if(e.webSocketOnly&&(t||Vr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Es];else{const e=this.transports_=[];for(const t of Ts.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ts.globalTransportInitialized_=!1;class Ss{constructor(e,t,n,i,o,r,s,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=r,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qr("c:"+this.id+":"),this.transportManager_=new Ts(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ss((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Qr("t",e),n=Qr("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Qr("t",e),n=Qr("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Qr("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?$r("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$r("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),us!==n&&Vr("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ss((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ss((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Lr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class Ns{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class Rs{constructor(e){this.allowedEvents_=e,this.listeners_={},Ci(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Ci(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class As extends Rs{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||$i()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new As}getInitialEvent(e){return Ci("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */const Os=32,Ls=768;class Ps{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ds(){return new Ps("")}function Ms(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Us(e){return e.pieces_.length-e.pieceNum_}function Bs(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ps(e.pieces_,t)}function Fs(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function zs(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function js(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ps(t,0)}function Ws(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Ps)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Ps(n,0)}function qs(e){return e.pieceNum_>=e.pieces_.length}function $s(e,t){const n=Ms(e),i=Ms(t);if(null===n)return t;if(n===i)return $s(Bs(e),Bs(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Hs(e,t){const n=zs(e,0),i=zs(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=Jr(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function Vs(e,t){if(Us(e)!==Us(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Xs(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Us(e)>Us(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ks{constructor(e,t){this.errorPrefix_=t,this.parts_=zs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=_o(this.parts_[e]);Gs(this)}}function Gs(e){if(e.byteLength_>Ls)throw new Error(e.errorPrefix_+"has a key path longer than "+Ls+" bytes ("+e.byteLength_+").");if(e.parts_.length>Os)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Os+") or object contains a cycle "+Js(e))}function Js(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Ys extends Rs{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ys}getInitialEvent(e){return Ci("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */const Qs=1e3;class Zs extends Ns{constructor(e,t,n,i,o,r,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=Zs.nextPersistentConnectionId_++,this.log_=qr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qs,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ki())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ys.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&As.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,o={r:i,a:e,b:t};this.log_(eo(o)),Ci(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new ji,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const o=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+o),this.listens.has(r)||this.listens.set(r,new Map),Ci(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Ci(!this.listens.get(r).has(o),"listen() called twice for same path/queryId.");const s={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(o,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const o={p:n};e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(o=>{const r=o.d,s=o.s;Zs.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",o),"ok"!==s&&this.removeListen_(n,i),e.onComplete&&e.onComplete(s,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&oo(e,"w")){const n=ro(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Vr(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||io(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=no(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Ci(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const o={p:e};i&&(o.q=n,o.t=i),this.sendRequest("n",o)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const o={p:t,d:n};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,o){this.initConnection_();const r={p:t,d:n};void 0!==o&&(r.h=o),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+eo(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):$r("Unrecognized action received from server: "+eo(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Ci(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Qs),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Zs.nextConnectionId_++,o=this.lastSessionId;let r=!1,s=null;const a=function(){s?s.close():(r=!0,n())},l=function(e){Ci(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?Wr("getToken() completed but was canceled"):(Wr("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,s=new Ss(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Vr(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),o))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&Vr(e),a())}}}interrupt(e){Wr("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Wr("Resuming connection for reason: "+e),delete this.interruptReasons_[e],so(this.interruptReasons_)&&(this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Zr(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Ps(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Wr("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Wr("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Ki()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Nr.replace(/\./g,"-")]=1,$i()?e["framework.cordova"]=1:Vi()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=As.getInstance().currentlyOnline();return so(this.interruptReasons_)&&e}}Zs.nextPersistentConnectionId_=0,Zs.nextConnectionId_=0;
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
class ea{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ea(e,t)}}
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
 */class ta{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new ea(Kr,e),i=new ea(Kr,t);return 0!==this.compare(n,i)}minPost(){return ea.MIN}}
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
 */let na;class ia extends ta{static get __EMPTY_NODE(){return na}static set __EMPTY_NODE(e){na=e}compare(e,t){return Jr(e.name,t.name)}isDefinedOn(e){throw Ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ea.MIN}maxPost(){return new ea(Gr,na)}makePost(e,t){return Ci("string"==typeof e,"KeyIndex indexValue must always be a string."),new ea(e,na)}toString(){return".key"}}const oa=new ia;
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
 */class ra{constructor(e,t,n,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class sa{constructor(e,t,n,i,o){this.key=e,this.value=t,this.color=null!=n?n:sa.RED,this.left=null!=i?i:aa.EMPTY_NODE,this.right=null!=o?o:aa.EMPTY_NODE}copy(e,t,n,i,o){return new sa(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=o?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const o=n(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===o?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return aa.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return aa.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,sa.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,sa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}sa.RED=!0,sa.BLACK=!1;class aa{constructor(e,t=aa.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new aa(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,sa.BLACK,null,null))}remove(e){return new aa(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,sa.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ra(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ra(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ra(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ra(this.root_,null,this.comparator_,!0,e)}}
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
function la(e,t){return Jr(e.name,t.name)}function ca(e,t){return Jr(e,t)}
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
 */let ua;aa.EMPTY_NODE=new class{copy(e,t,n,i,o){return this}insert(e,t,n){return new sa(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ha=function(e){return"number"==typeof e?"number:"+ns(e):"string:"+e},da=function(e){if(e.isLeafNode()){const t=e.val();Ci("string"==typeof t||"number"==typeof t||"object"==typeof t&&oo(t,".sv"),"Priority must be a string or number.")}else Ci(e===ua||e.isEmpty(),"priority of unexpected type.");Ci(e===ua||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let fa,pa,ma;class ga{constructor(e,t=ga.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Ci(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),da(this.priorityNode_)}static set __childrenNodeConstructor(e){fa=e}static get __childrenNodeConstructor(){return fa}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ga(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ga.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return qs(e)?this:".priority"===Ms(e)?this.priorityNode_:ga.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ga.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Ms(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Ci(".priority"!==n||1===Us(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ga.__childrenNodeConstructor.EMPTY_NODE.updateChild(Bs(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ha(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?ns(this.value_):this.value_,this.lazyHash_=Ur(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ga.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ga.__childrenNodeConstructor?-1:(Ci(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ga.VALUE_TYPE_ORDER.indexOf(t),o=ga.VALUE_TYPE_ORDER.indexOf(n);return Ci(i>=0,"Unknown leaf type: "+t),Ci(o>=0,"Unknown leaf type: "+n),i===o?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}ga.VALUE_TYPE_ORDER=["object","boolean","number","string"];const ya=new class extends ta{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),o=n.compareTo(i);return 0===o?Jr(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ea.MIN}maxPost(){return new ea(Gr,new ga("[PRIORITY-POST]",ma))}makePost(e,t){const n=pa(e);return new ea(t,new ga("[PRIORITY-POST]",n))}toString(){return".priority"}},ba=Math.log(2);
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
 */class va{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ba,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _a=function(e,t,n,i){e.sort(t);const o=function(t,i){const r=i-t;let s,a;if(0===r)return null;if(1===r)return s=e[t],a=n?n(s):s,new sa(a,s.node,sa.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=o(t,l),u=o(l+1,i);return s=e[l],a=n?n(s):s,new sa(a,s.node,sa.BLACK,c,u)}},r=function(t){let i=null,r=null,s=e.length;const a=function(t,i){const r=s-t,a=s;s-=t;const c=o(r+1,a),u=e[r],h=n?n(u):u;l(new sa(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,sa.BLACK):(a(i,sa.BLACK),a(i,sa.RED))}return r}(new va(e.length));return new aa(i||t,r)};
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
 */let wa;const ka={};class xa{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Ci(ka&&ya,"ChildrenNode.ts has not been loaded"),wa=wa||new xa({".priority":ka},{".priority":ya}),wa}get(e){const t=ro(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof aa?t:null}hasIndex(e){return oo(this.indexSet_,e.toString())}addIndex(e,t){Ci(e!==oa,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const o=t.getIterator(ea.Wrap);let r,s=o.getNext();for(;s;)i=i||e.isDefinedOn(s.node),n.push(s),s=o.getNext();r=i?_a(n,e.getCompare()):ka;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new xa(c,l)}addToIndexes(e,t){const n=ao(this.indexes_,((n,i)=>{const o=ro(this.indexSet_,i);if(Ci(o,"Missing index implementation for "+i),n===ka){if(o.isDefinedOn(e.node)){const n=[],i=t.getIterator(ea.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),_a(n,o.getCompare())}return ka}{const i=t.get(e.name);let o=n;return i&&(o=o.remove(new ea(e.name,i))),o.insert(e,e.node)}}));return new xa(n,this.indexSet_)}removeFromIndexes(e,t){const n=ao(this.indexes_,(n=>{if(n===ka)return n;{const i=t.get(e.name);return i?n.remove(new ea(e.name,i)):n}}));return new xa(n,this.indexSet_)}}
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
 */let Ia;class Ca{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&da(this.priorityNode_),this.children_.isEmpty()&&Ci(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ia||(Ia=new Ca(new aa(ca),null,xa.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ia}updatePriority(e){return this.children_.isEmpty()?this:new Ca(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ia:t}}getChild(e){const t=Ms(e);return null===t?this:this.getImmediateChild(t).getChild(Bs(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Ci(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new ea(e,t);let i,o;t.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Ia:this.priorityNode_;return new Ca(i,r,o)}}updateChild(e,t){const n=Ms(e);if(null===n)return t;{Ci(".priority"!==Ms(e)||1===Us(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Bs(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,o=!0;if(this.forEachChild(ya,((r,s)=>{t[r]=s.val(e),n++,o&&Ca.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):o=!1})),!e&&o&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ha(this.getPriority().val())+":"),this.forEachChild(ya,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Ur(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new ea(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ea(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ea(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,ea.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,ea.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ea?-1:0}withIndex(e){if(e===oa||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ca(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===oa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ya),n=t.getIterator(ya);let i=e.getNext(),o=n.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=e.getNext(),o=n.getNext()}return null===i&&null===o}return!1}return!1}}resolveIndex_(e){return e===oa?null:this.indexMap_.get(e.toString())}}Ca.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ea=new class extends Ca{constructor(){super(new aa(ca),Ca.EMPTY_NODE,xa.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ca.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(ea,{MIN:{value:new ea(Kr,Ca.EMPTY_NODE)},MAX:{value:new ea(Gr,Ea)}}),ia.__EMPTY_NODE=Ca.EMPTY_NODE,ga.__childrenNodeConstructor=Ca,ua=Ea,function(e){ma=e}(Ea);
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
const Ta=!0;function Sa(e,t=null){if(null===e)return Ca.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Ci(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new ga(e,Sa(t))}if(e instanceof Array||!Ta){let n=Ca.EMPTY_NODE;return ts(e,((t,i)=>{if(oo(e,t)&&"."!==t.substring(0,1)){const e=Sa(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Sa(t))}{const n=[];let i=!1;if(ts(e,((e,t)=>{if("."!==e.substring(0,1)){const o=Sa(t);o.isEmpty()||(i=i||!o.getPriority().isEmpty(),n.push(new ea(e,o)))}})),0===n.length)return Ca.EMPTY_NODE;const o=_a(n,la,(e=>e.name),ca);if(i){const e=_a(n,ya.getCompare());return new Ca(o,Sa(t),new xa({".priority":e},{".priority":ya}))}return new Ca(o,Sa(t),xa.Default)}}!function(e){pa=e}(Sa);
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
class Na extends ta{constructor(e){super(),this.indexPath_=e,Ci(!qs(e)&&".priority"!==Ms(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),o=n.compareTo(i);return 0===o?Jr(e.name,t.name):o}makePost(e,t){const n=Sa(e),i=Ca.EMPTY_NODE.updateChild(this.indexPath_,n);return new ea(t,i)}maxPost(){const e=Ca.EMPTY_NODE.updateChild(this.indexPath_,Ea);return new ea(Gr,e)}toString(){return zs(this.indexPath_,0).join("/")}}
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
 */const Ra=new class extends ta{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Jr(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ea.MIN}maxPost(){return ea.MAX}makePost(e,t){const n=Sa(e);return new ea(t,n)}toString(){return".value"}};
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
 */function Aa(e){return{type:"value",snapshotNode:e}}function Oa(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function La(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Pa(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Da{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ya}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Ci(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Ci(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Kr}hasEnd(){return this.endSet_}getIndexEndValue(){return Ci(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Ci(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Ci(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ya}copy(){const e=new Da;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ma(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ya?n="$priority":e.index_===Ra?n="$value":e.index_===oa?n="$key":(Ci(e.index_ instanceof Na,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=eo(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=eo(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+eo(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=eo(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+eo(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ua(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==ya&&(t.i=e.index_.toString()),t}
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
 */class Ba extends Ns{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=qr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Ci(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const r=Ba.getListenId_(e,n),s={};this.listens_[r]=s;const a=Ma(e._queryParams);this.restRequest_(o+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(o,a,!1,n),ro(this.listens_,r)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ba.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ma(e._queryParams),n=e._path.toString(),i=new ji;return this.restRequest_(n+".json",t,((e,t)=>{let o=t;404===e&&(o=null,e=null),null===e?(this.onDataUpdate_(n,o,!1,null),i.resolve(o)):i.reject(new Error(o))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,o])=>{i&&i.accessToken&&(t.auth=i.accessToken),o&&o.token&&(t.ac=o.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+uo(t);this.log_("Sending REST request for "+r);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+r+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=Zi(s.responseText)}catch(e){Vr("Failed to parse JSON response for "+r+": "+s.responseText)}n(null,e)}else 401!==s.status&&404!==s.status&&Vr("Got unsuccessful REST response for "+r+" Status: "+s.status),n(s.status);n=null}},s.open("GET",r,!0),s.send()}))}}
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
 */class Fa{constructor(){this.rootNode_=Ca.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function za(){return{value:null,children:new Map}}function ja(e,t,n){if(qs(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Ms(t);e.children.has(i)||e.children.set(i,za());ja(e.children.get(i),t=Bs(t),n)}}function Wa(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{Wa(i,new Ps(t.toString()+"/"+e),n)}))}class qa{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ts(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */class $a{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qa(e);const n=1e4+2e4*Math.random();ss(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;ts(e,((e,i)=>{i>0&&oo(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),ss(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var Ha,Va;function Xa(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Va=Ha||(Ha={}))[Va.OVERWRITE=0]="OVERWRITE",Va[Va.MERGE=1]="MERGE",Va[Va.ACK_USER_WRITE=2]="ACK_USER_WRITE",Va[Va.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Ka{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ha.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(qs(this.path)){if(null!=this.affectedTree.value)return Ci(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ps(e));return new Ka(Ds(),t,this.revert)}}return Ci(Ms(this.path)===e,"operationForChild called for unrelated child."),new Ka(Bs(this.path),this.affectedTree,this.revert)}}
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
class Ga{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ha.OVERWRITE}operationForChild(e){return qs(this.path)?new Ga(this.source,Ds(),this.snap.getImmediateChild(e)):new Ga(this.source,Bs(this.path),this.snap)}}
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
 */class Ja{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ha.MERGE}operationForChild(e){if(qs(this.path)){const t=this.children.subtree(new Ps(e));return t.isEmpty()?null:t.value?new Ga(this.source,Ds(),t.value):new Ja(this.source,Ds(),t)}return Ci(Ms(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ja(this.source,Bs(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class Ya{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(qs(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ms(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */function Qa(e,t,n,i,o,r){const s=i.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Ei("Should only compare child_ events.");const i=new ea(t.childName,t.snapshotNode),o=new ea(n.childName,n.snapshotNode);return e.index_.compare(i,o)}
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
 */(e,t,n))),s.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);o.forEach((o=>{o.respondsTo(n.type)&&t.push(o.createEvent(i,e.query_))}))}))}function Za(e,t){return{eventCache:e,serverCache:t}}function el(e,t,n,i){return Za(new Ya(t,n,i),e.serverCache)}function tl(e,t,n,i){return Za(e.eventCache,new Ya(t,n,i))}function nl(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function il(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let ol;class rl{constructor(e,t=(()=>(ol||(ol=new aa(Yr)),ol))()){this.value=e,this.children=t}static fromObject(e){let t=new rl(null);return ts(e,((e,n)=>{t=t.set(new Ps(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Ds(),value:this.value};if(qs(e))return null;{const n=Ms(e),i=this.children.get(n);if(null!==i){const o=i.findRootMostMatchingPathAndValue(Bs(e),t);if(null!=o){return{path:Ws(new Ps(n),o.path),value:o.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(qs(e))return this;{const t=Ms(e),n=this.children.get(t);return null!==n?n.subtree(Bs(e)):new rl(null)}}set(e,t){if(qs(e))return new rl(t,this.children);{const n=Ms(e),i=(this.children.get(n)||new rl(null)).set(Bs(e),t),o=this.children.insert(n,i);return new rl(this.value,o)}}remove(e){if(qs(e))return this.children.isEmpty()?new rl(null):new rl(null,this.children);{const t=Ms(e),n=this.children.get(t);if(n){const i=n.remove(Bs(e));let o;return o=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&o.isEmpty()?new rl(null):new rl(this.value,o)}return this}}get(e){if(qs(e))return this.value;{const t=Ms(e),n=this.children.get(t);return n?n.get(Bs(e)):null}}setTree(e,t){if(qs(e))return t;{const n=Ms(e),i=(this.children.get(n)||new rl(null)).setTree(Bs(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new rl(this.value,o)}}fold(e){return this.fold_(Ds(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,o)=>{n[i]=o.fold_(Ws(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ds(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(qs(e))return null;{const i=Ms(e),o=this.children.get(i);return o?o.findOnPath_(Bs(e),Ws(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ds(),t)}foreachOnPath_(e,t,n){if(qs(e))return this;{this.value&&n(t,this.value);const i=Ms(e),o=this.children.get(i);return o?o.foreachOnPath_(Bs(e),Ws(t,i),n):new rl(null)}}foreach(e){this.foreach_(Ds(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Ws(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class sl{constructor(e){this.writeTree_=e}static empty(){return new sl(new rl(null))}}function al(e,t,n){if(qs(t))return new sl(new rl(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const o=i.path;let r=i.value;const s=$s(o,t);return r=r.updateChild(s,n),new sl(e.writeTree_.set(o,r))}{const i=new rl(n),o=e.writeTree_.setTree(t,i);return new sl(o)}}}function ll(e,t,n){let i=e;return ts(n,((e,n)=>{i=al(i,Ws(t,e),n)})),i}function cl(e,t){if(qs(t))return sl.empty();{const n=e.writeTree_.setTree(t,new rl(null));return new sl(n)}}function ul(e,t){return null!=hl(e,t)}function hl(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild($s(n.path,t)):null}function dl(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ya,((e,n)=>{t.push(new ea(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new ea(e,n.value))})),t}function fl(e,t){if(qs(t))return e;{const n=hl(e,t);return new sl(null!=n?new rl(n):e.writeTree_.subtree(t))}}function pl(e){return e.writeTree_.isEmpty()}function ml(e,t){return gl(Ds(),e.writeTree_,t)}function gl(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,o)=>{".priority"===t?(Ci(null!==o.value,"Priority writes must always be leaf nodes"),i=o.value):n=gl(Ws(e,t),o,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Ws(e,".priority"),i)),n}}
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
 */function yl(e,t){return Rl(t,e)}function bl(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Ci(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let o=i.visible,r=!1,s=e.allWrites.length-1;for(;o&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&vl(t,i.path)?o=!1:Xs(i.path,t.path)&&(r=!0)),s--}if(o){if(r)return function(e){e.visibleWrites=wl(e.allWrites,_l,Ds()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=cl(e.visibleWrites,i.path);else{ts(i.children,(t=>{e.visibleWrites=cl(e.visibleWrites,Ws(i.path,t))}))}return!0}return!1}function vl(e,t){if(e.snap)return Xs(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Xs(Ws(e.path,n),t))return!0;return!1}function _l(e){return e.visible}function wl(e,t,n){let i=sl.empty();for(let o=0;o<e.length;++o){const r=e[o];if(t(r)){const e=r.path;let t;if(r.snap)Xs(n,e)?(t=$s(n,e),i=al(i,t,r.snap)):Xs(e,n)&&(t=$s(e,n),i=al(i,Ds(),r.snap.getChild(t)));else{if(!r.children)throw Ei("WriteRecord should have .snap or .children");if(Xs(n,e))t=$s(n,e),i=ll(i,t,r.children);else if(Xs(e,n))if(t=$s(e,n),qs(t))i=ll(i,Ds(),r.children);else{const e=ro(r.children,Ms(t));if(e){const n=e.getChild(Bs(t));i=al(i,Ds(),n)}}}}}return i}function kl(e,t,n,i,o){if(i||o){const r=fl(e.visibleWrites,t);if(!o&&pl(r))return n;if(o||null!=n||ul(r,Ds())){const r=function(e){return(e.visible||o)&&(!i||!~i.indexOf(e.writeId))&&(Xs(e.path,t)||Xs(t,e.path))};return ml(wl(e.allWrites,r,t),n||Ca.EMPTY_NODE)}return null}{const i=hl(e.visibleWrites,t);if(null!=i)return i;{const i=fl(e.visibleWrites,t);if(pl(i))return n;if(null!=n||ul(i,Ds())){return ml(i,n||Ca.EMPTY_NODE)}return null}}}function xl(e,t,n,i){return kl(e.writeTree,e.treePath,t,n,i)}function Il(e,t){return function(e,t,n){let i=Ca.EMPTY_NODE;const o=hl(e.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(ya,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const o=fl(e.visibleWrites,t);return n.forEachChild(ya,((e,t)=>{const n=ml(fl(o,new Ps(e)),t);i=i.updateImmediateChild(e,n)})),dl(o).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return dl(fl(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Cl(e,t,n,i){return function(e,t,n,i,o){Ci(i||o,"Either existingEventSnap or existingServerSnap must exist");const r=Ws(t,n);if(ul(e.visibleWrites,r))return null;{const t=fl(e.visibleWrites,r);return pl(t)?o.getChild(n):ml(t,o.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function El(e,t){return function(e,t){return hl(e.visibleWrites,t)}(e.writeTree,Ws(e.treePath,t))}function Tl(e,t,n,i,o,r){return function(e,t,n,i,o,r,s){let a;const l=fl(e.visibleWrites,t),c=hl(l,Ds());if(null!=c)a=c;else{if(null==n)return[];a=ml(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=r?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let l=n.getNext();for(;l&&e.length<o;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,o,r)}function Sl(e,t,n){return function(e,t,n,i){const o=Ws(t,n),r=hl(e.visibleWrites,o);if(null!=r)return r;if(i.isCompleteForChild(n))return ml(fl(e.visibleWrites,o),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Nl(e,t){return Rl(Ws(e.treePath,t),e.writeTree)}function Rl(e,t){return{treePath:e,writeTree:t}}
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
 */class Al{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Ci("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Ci(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const o=i.type;if("child_added"===t&&"child_removed"===o)this.changeMap.set(n,Pa(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===o)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===o)this.changeMap.set(n,La(n,i.oldSnap));else if("child_changed"===t&&"child_added"===o)this.changeMap.set(n,Oa(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==o)throw Ei("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Pa(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const Ol=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Ll{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ya(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sl(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:il(this.viewCache_),o=Tl(this.writes_,i,t,1,n,e);return 0===o.length?null:o[0]}}
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
 */function Pl(e,t,n,i,o){const r=new Al;let s,a;if(n.type===Ha.OVERWRITE){const l=n;l.source.fromUser?s=Ul(e,t,l.path,l.snap,i,o,r):(Ci(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!qs(l.path),s=Ml(e,t,l.path,l.snap,i,o,a,r))}else if(n.type===Ha.MERGE){const l=n;l.source.fromUser?s=function(e,t,n,i,o,r,s){let a=t;return i.foreach(((i,l)=>{const c=Ws(n,i);Bl(t,Ms(c))&&(a=Ul(e,a,c,l,o,r,s))})),i.foreach(((i,l)=>{const c=Ws(n,i);Bl(t,Ms(c))||(a=Ul(e,a,c,l,o,r,s))})),a}(e,t,l.path,l.children,i,o,r):(Ci(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),s=zl(e,t,l.path,l.children,i,o,a,r))}else if(n.type===Ha.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,i,o,r){let s;if(null!=El(i,n))return t;{const a=new Ll(i,t,o),l=t.eventCache.getNode();let c;if(qs(n)||".priority"===Ms(n)){let n;if(t.serverCache.isFullyInitialized())n=xl(i,il(t));else{const e=t.serverCache.getNode();Ci(e instanceof Ca,"serverChildren would be complete if leaf node"),n=Il(i,e)}c=e.filter.updateFullNode(l,n,r)}else{const o=Ms(n);let u=Sl(i,o,t.serverCache);null==u&&t.serverCache.isCompleteForChild(o)&&(u=l.getImmediateChild(o)),c=null!=u?e.filter.updateChild(l,o,u,Bs(n),a,r):t.eventCache.getNode().hasChild(o)?e.filter.updateChild(l,o,Ca.EMPTY_NODE,Bs(n),a,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=xl(i,il(t)),s.isLeafNode()&&(c=e.filter.updateFullNode(c,s,r)))}return s=t.serverCache.isFullyInitialized()||null!=El(i,Ds()),el(t,c,s,e.filter.filtersNodes())}}
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
 */(e,t,a.path,i,o,r):function(e,t,n,i,o,r,s){if(null!=El(o,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(qs(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ml(e,t,n,l.getNode().getChild(n),o,r,a,s);if(qs(n)){let i=new rl(null);return l.getNode().forEachChild(oa,((e,t)=>{i=i.set(new Ps(e),t)})),zl(e,t,n,i,o,r,a,s)}return t}{let c=new rl(null);return i.foreach(((e,t)=>{const i=Ws(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),zl(e,t,n,c,o,r,a,s)}}(e,t,a.path,a.affectedTree,i,o,r)}else{if(n.type!==Ha.LISTEN_COMPLETE)throw Ei("Unknown operation type: "+n.type);s=function(e,t,n,i,o){const r=t.serverCache,s=tl(t,r.getNode(),r.isFullyInitialized()||qs(n),r.isFiltered());return Dl(e,s,n,i,Ol,o)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=nl(e);(n.length>0||!e.eventCache.isFullyInitialized()||o&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Aa(nl(t)))}}(t,s,l),{viewCache:s,changes:l}}function Dl(e,t,n,i,o,r){const s=t.eventCache;if(null!=El(i,n))return t;{let a,l;if(qs(n))if(Ci(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=il(t),o=Il(i,n instanceof Ca?n:Ca.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),o,r)}else{const n=xl(i,il(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=Ms(n);if(".priority"===c){Ci(1===Us(n),"Can't have a priority with additional path components");const o=s.getNode();l=t.serverCache.getNode();const r=Cl(i,n,o,l);a=null!=r?e.filter.updatePriority(o,r):s.getNode()}else{const u=Bs(n);let h;if(s.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Cl(i,n,s.getNode(),l);h=null!=e?s.getNode().getImmediateChild(c).updateChild(u,e):s.getNode().getImmediateChild(c)}else h=Sl(i,c,t.serverCache);a=null!=h?e.filter.updateChild(s.getNode(),c,h,u,o,r):s.getNode()}}return el(t,a,s.isFullyInitialized()||qs(n),e.filter.filtersNodes())}}function Ml(e,t,n,i,o,r,s,a){const l=t.serverCache;let c;const u=s?e.filter:e.filter.getIndexedFilter();if(qs(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Ms(n);if(!l.isCompleteForPath(n)&&Us(n)>1)return t;const o=Bs(n),r=l.getNode().getImmediateChild(e).updateChild(o,i);c=".priority"===e?u.updatePriority(l.getNode(),r):u.updateChild(l.getNode(),e,r,o,Ol,null)}const h=tl(t,c,l.isFullyInitialized()||qs(n),u.filtersNodes());return Dl(e,h,n,o,new Ll(o,h,r),a)}function Ul(e,t,n,i,o,r,s){const a=t.eventCache;let l,c;const u=new Ll(o,t,r);if(qs(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,s),l=el(t,c,!0,e.filter.filtersNodes());else{const o=Ms(n);if(".priority"===o)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=el(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=Bs(n),c=a.getNode().getImmediateChild(o);let h;if(qs(r))h=i;else{const e=u.getCompleteChild(o);h=null!=e?".priority"===Fs(r)&&e.getChild(js(r)).isEmpty()?e:e.updateChild(r,i):Ca.EMPTY_NODE}if(c.equals(h))l=t;else{l=el(t,e.filter.updateChild(a.getNode(),o,h,r,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Bl(e,t){return e.eventCache.isCompleteForChild(t)}function Fl(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function zl(e,t,n,i,o,r,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=qs(n)?i:new rl(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=Fl(0,t.serverCache.getNode().getImmediateChild(n),i);c=Ml(e,c,new Ps(n),l,o,r,s,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=Fl(0,t.serverCache.getNode().getImmediateChild(n),i);c=Ml(e,c,new Ps(n),l,o,r,s,a)}})),c}function jl(e,t){const n=il(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!qs(t)&&!n.getImmediateChild(Ms(t)).isEmpty())?n.getChild(t):null}function Wl(e,t,n,i){t.type===Ha.MERGE&&null!==t.source.queryId&&(Ci(il(e.viewCache_),"We should always have a full cache before handling merges"),Ci(nl(e.viewCache_),"Missing event cache, even though we have a server cache"));const o=e.viewCache_,r=Pl(e.processor_,o,t,n,i);var s,a;return s=e.processor_,a=r.viewCache,Ci(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),Ci(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),Ci(r.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,ql(e,r.changes,r.viewCache.eventCache.getNode(),null)}function ql(e,t,n,i){const o=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const o=[],r=[];return t.forEach((t=>{var n;
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
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Qa(e,o,"child_removed",t,i,n),Qa(e,o,"child_added",t,i,n),Qa(e,o,"child_moved",r,i,n),Qa(e,o,"child_changed",t,i,n),Qa(e,o,"value",t,i,n),o}(e.eventGenerator_,t,n,o)}
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
 */let $l,Hl;function Vl(e,t,n,i){const o=t.source.queryId;if(null!==o){const r=e.views.get(o);return Ci(null!=r,"SyncTree gave us an op for an invalid query."),Wl(r,t,n,i)}{let o=[];for(const r of e.views.values())o=o.concat(Wl(r,t,n,i));return o}}function Xl(e,t){let n=null;for(const i of e.views.values())n=n||jl(i,t);return n}class Kl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new rl(null),this.pendingWriteTree_={visibleWrites:sl.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gl(e,t,n,i,o){return function(e,t,n,i,o){Ci(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(e.visibleWrites=al(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,o),o?tc(e,new Ga({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Jl(e,t,n,i){!function(e,t,n,i){Ci(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=ll(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const o=rl.fromObject(n);return tc(e,new Ja({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,o))}function Yl(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(bl(e.pendingWriteTree_,t)){let t=new rl(null);return null!=i.snap?t=t.set(Ds(),!0):ts(i.children,(e=>{t=t.set(new Ps(e),!0)})),tc(e,new Ka(i.path,t,n))}return[]}function Ql(e,t,n){return tc(e,new Ga({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Zl(e,t,n,i){const o=oc(e,i);if(null!=o){const i=rc(o),r=i.path,s=i.queryId,a=$s(r,t);return sc(e,r,new Ga(Xa(s),a,n))}return[]}function ec(e,t,n){const i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Xl(n,$s(e,t));if(i)return i}));return kl(i,t,o,n,!0)}function tc(e,t){return nc(t,e.syncPointTree_,null,yl(e.pendingWriteTree_,Ds()))}function nc(e,t,n,i){if(qs(e.path))return ic(e,t,n,i);{const o=t.get(Ds());null==n&&null!=o&&(n=Xl(o,Ds()));let r=[];const s=Ms(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const e=n?n.getImmediateChild(s):null,t=Nl(i,s);r=r.concat(nc(a,l,e,t))}return o&&(r=r.concat(Vl(o,e,i,n))),r}}function ic(e,t,n,i){const o=t.get(Ds());null==n&&null!=o&&(n=Xl(o,Ds()));let r=[];return t.children.inorderTraversal(((t,o)=>{const s=n?n.getImmediateChild(t):null,a=Nl(i,t),l=e.operationForChild(t);l&&(r=r.concat(ic(l,o,s,a)))})),o&&(r=r.concat(Vl(o,e,i,n))),r}function oc(e,t){return e.tagToQueryMap.get(t)}function rc(e){const t=e.indexOf("$");return Ci(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ps(e.substr(0,t))}}function sc(e,t,n){const i=e.syncPointTree_.get(t);Ci(i,"Missing sync point for query tag that we're tracking");return Vl(i,n,yl(e.pendingWriteTree_,t),null)}
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
class ac{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ac(t)}node(){return this.node_}}class lc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ws(this.path_,e);return new lc(this.syncTree_,t)}node(){return ec(this.syncTree_,this.path_)}}const cc=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},uc=function(e,t,n){return e&&"object"==typeof e?(Ci(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?hc(e[".sv"],t,n):"object"==typeof e[".sv"]?dc(e[".sv"],t):void Ci(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},hc=function(e,t,n){if("timestamp"===e)return n.timestamp;Ci(!1,"Unexpected server value: "+e)},dc=function(e,t,n){e.hasOwnProperty("increment")||Ci(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Ci(!1,"Unexpected increment value: "+i);const o=t.node();if(Ci(null!=o,"Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const r=o.getValue();return"number"!=typeof r?i:r+i},fc=function(e,t,n,i){return mc(t,new lc(n,e),i)},pc=function(e,t,n){return mc(e,new ac(t),n)};function mc(e,t,n){const i=e.getPriority().val(),o=uc(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=uc(i.getValue(),t,n);return r!==i.getValue()||o!==i.getPriority().val()?new ga(r,Sa(o)):e}{const i=e;return r=i,o!==i.getPriority().val()&&(r=r.updatePriority(new ga(o))),i.forEachChild(ya,((e,i)=>{const o=mc(i,t.getImmediateChild(e),n);o!==i&&(r=r.updateImmediateChild(e,o))})),r}}
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
 */class gc{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function yc(e,t){let n=t instanceof Ps?t:new Ps(t),i=e,o=Ms(n);for(;null!==o;){const e=ro(i.node.children,o)||{children:{},childCount:0};i=new gc(o,i,e),n=Bs(n),o=Ms(n)}return i}function bc(e){return e.node.value}function vc(e,t){e.node.value=t,Ic(e)}function _c(e){return e.node.childCount>0}function wc(e,t){ts(e.node.children,((n,i)=>{t(new gc(n,e,i))}))}function kc(e,t,n,i){n&&!i&&t(e),wc(e,(e=>{kc(e,t,!0,i)})),n&&i&&t(e)}function xc(e){return new Ps(null===e.parent?e.name:xc(e.parent)+"/"+e.name)}function Ic(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===bc(e)&&!_c(e)}(n),o=oo(e.node.children,t);i&&o?(delete e.node.children[t],e.node.childCount--,Ic(e)):i||o||(e.node.children[t]=n.node,e.node.childCount++,Ic(e))}
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
 */(e.parent,e.name,e)}const Cc=/[\[\].#$\/\u0000-\u001F\u007F]/,Ec=/[\[\].#$\u0000-\u001F\u007F]/,Tc=10485760,Sc=function(e){return"string"==typeof e&&0!==e.length&&!Cc.test(e)},Nc=function(e){return"string"==typeof e&&0!==e.length&&!Ec.test(e)},Rc=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Xr(e)||e&&"object"==typeof e&&oo(e,".sv")},Ac=function(e,t,n,i){i&&void 0===t||Oc(bo(e,"value"),t,n)},Oc=function(e,t,n){const i=n instanceof Ps?new Ks(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Js(i));if("function"==typeof t)throw new Error(e+"contains a function "+Js(i)+" with contents = "+t.toString());if(Xr(t))throw new Error(e+"contains "+t.toString()+" "+Js(i));if("string"==typeof t&&t.length>3495253.3333333335&&_o(t)>Tc)throw new Error(e+"contains a string greater than "+Tc+" utf8 bytes "+Js(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,o=!1;if(ts(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(o=!0,!Sc(t)))throw new Error(e+" contains an invalid key ("+t+") "+Js(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=t,(s=i).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=_o(a),Gs(s),Oc(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=_o(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&o)throw new Error(e+' contains ".value" child '+Js(i)+" in addition to actual children.")}},Lc=function(e,t,n,i){if(i&&void 0===t)return;const o=bo(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const r=[];ts(t,((e,t)=>{const i=new Ps(e);if(Oc(o,t,Ws(n,i)),".priority"===Fs(i)&&!Rc(t))throw new Error(o+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const o=zs(i);for(let t=0;t<o.length;t++)if(".priority"===o[t]&&t===o.length-1);else if(!Sc(o[t]))throw new Error(e+"contains an invalid key ("+o[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Hs);let o=null;for(n=0;n<t.length;n++){if(i=t[n],null!==o&&Xs(o,i))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+i.toString());o=i}}(o,r)},Pc=function(e,t,n,i){if(!(i&&void 0===n||Nc(n)))throw new Error(bo(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Dc=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Pc(e,t,n,i)},Mc=function(e,t){if(".info"===Ms(t))throw new Error(e+" failed = Can't modify data under /.info/")},Uc=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Sc(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Nc(e)}(n))throw new Error(bo(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class Bc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fc(e,t){let n=null;for(let i=0;i<t.length;i++){const o=t[i],r=o.getPath();null===n||Vs(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(o)}n&&e.eventLists_.push(n)}function zc(e,t,n){Fc(e,n),jc(e,(e=>Xs(e,t)||Xs(t,e)))}function jc(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const o=e.eventLists_[i];if(o){t(o.path)?(Wc(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Wc(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Fr&&Wr("event: "+n.toString()),rs(i)}}}
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
 */const qc="repo_interrupt",$c=25;class Hc{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=za(),this.transactionQueueTree_=new gc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Vc(e,t,n){if(e.stats_=_s(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ba(e.repoInfo_,((t,n,i,o)=>{Gc(e,t,n,i,o)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Jc(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{eo(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Zs(e.repoInfo_,t,((t,n,i,o)=>{Gc(e,t,n,i,o)}),(t=>{Jc(e,t)}),(t=>{!function(e,t){ts(t,((t,n)=>{Yc(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return vs[n]||(vs[n]=t()),vs[n]}(e.repoInfo_,(()=>new $a(e.stats_,e.server_))),e.infoData_=new Fa,e.infoSyncTree_=new Kl({startListening:(t,n,i,o)=>{let r=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(r=Ql(e.infoSyncTree_,t._path,s),setTimeout((()=>{o("ok")}),0)),r},stopListening:()=>{}}),Yc(e,"connected",!1),e.serverSyncTree_=new Kl({startListening:(t,n,i,o)=>(e.server_.listen(t,i,n,((n,i)=>{const r=o(n,i);zc(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Xc(e){const t=e.infoData_.getNode(new Ps(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Kc(e){return cc({timestamp:Xc(e)})}function Gc(e,t,n,i,o){e.dataUpdateCount++;const r=new Ps(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(o)if(i){const t=ao(n,(e=>Sa(e)));s=function(e,t,n,i){const o=oc(e,i);if(o){const i=rc(o),r=i.path,s=i.queryId,a=$s(r,t),l=rl.fromObject(n);return sc(e,r,new Ja(Xa(s),a,l))}return[]}(e.serverSyncTree_,r,t,o)}else{const t=Sa(n);s=Zl(e.serverSyncTree_,r,t,o)}else if(i){const t=ao(n,(e=>Sa(e)));s=function(e,t,n){const i=rl.fromObject(n);return tc(e,new Ja({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=Sa(n);s=Ql(e.serverSyncTree_,r,t)}let a=r;s.length>0&&(a=ru(e,r)),zc(e.eventQueue_,a,s)}function Jc(e,t){Yc(e,"connected",t),!1===t&&function(e){tu(e,"onDisconnectEvents");const t=Kc(e),n=za();Wa(e.onDisconnect_,Ds(),((i,o)=>{const r=fc(i,o,e.serverSyncTree_,t);ja(n,i,r)}));let i=[];Wa(n,Ds(),((t,n)=>{i=i.concat(Ql(e.serverSyncTree_,t,n));const o=uu(e,t);ru(e,o)})),e.onDisconnect_=za(),zc(e.eventQueue_,Ds(),i)}(e)}function Yc(e,t,n){const i=new Ps("/.info/"+t),o=Sa(n);e.infoData_.updateSnapshot(i,o);const r=Ql(e.infoSyncTree_,i,o);zc(e.eventQueue_,i,r)}function Qc(e){return e.nextWriteId_++}function Zc(e,t,n,i,o){tu(e,"set",{path:t.toString(),value:n,priority:i});const r=Kc(e),s=Sa(n,i),a=ec(e.serverSyncTree_,t),l=pc(s,a,r),c=Qc(e),u=Gl(e.serverSyncTree_,t,l,c,!0);Fc(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,i)=>{const r="ok"===n;r||Vr("set at "+t+" failed: "+n);const s=Yl(e.serverSyncTree_,c,!r);zc(e.eventQueue_,t,s),nu(e,o,n,i)}));const h=uu(e,t);ru(e,h),zc(e.eventQueue_,h,[])}function eu(e){e.persistentConnection_&&e.persistentConnection_.interrupt(qc)}function tu(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Wr(n,...t)}function nu(e,t,n,i){t&&rs((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let o=e;i&&(o+=": "+i);const r=new Error(o);r.code=e,t(r)}}))}function iu(e,t,n){return ec(e.serverSyncTree_,t,n)||Ca.EMPTY_NODE}function ou(e,t=e.transactionQueueTree_){if(t||cu(e,t),bc(t)){const n=au(e,t);Ci(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),o=iu(e,t,i);let r=o;const s=o.hash();for(let e=0;e<n.length;e++){const i=n[e];Ci(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const o=$s(t,i.path);r=r.updateChild(o,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{tu(e,"transaction put response",{path:l.toString(),status:i});let o=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,o=o.concat(Yl(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();cu(e,yc(e.transactionQueueTree_,t)),ou(e,e.transactionQueueTree_),zc(e.eventQueue_,t,o);for(let e=0;e<i.length;e++)rs(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Vr("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}ru(e,t)}}),s)}(e,xc(t),n)}else _c(t)&&wc(t,(t=>{ou(e,t)}))}function ru(e,t){const n=su(e,t),i=xc(n);return function(e,t,n){if(0===t.length)return;const i=[];let o=[];const r=t.filter((e=>0===e.status)),s=r.map((e=>e.currentWriteId));for(let r=0;r<t.length;r++){const l=t[r],c=$s(n,l.path);let u,h=!1;if(Ci(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,o=o.concat(Yl(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=$c)h=!0,u="maxretry",o=o.concat(Yl(e.serverSyncTree_,l.currentWriteId,!0));else{const n=iu(e,l.path,s);l.currentInputSnapshot=n;const i=t[r].update(n.val());if(void 0!==i){Oc("transaction failed: Data returned ",i,l.path);let t=Sa(i);"object"==typeof i&&null!=i&&oo(i,".priority")||(t=t.updatePriority(n.getPriority()));const r=l.currentWriteId,a=Kc(e),c=pc(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Qc(e),s.splice(s.indexOf(r),1),o=o.concat(Gl(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),o=o.concat(Yl(e.serverSyncTree_,r,!0))}else h=!0,u="nodata",o=o.concat(Yl(e.serverSyncTree_,l.currentWriteId,!0))}zc(e.eventQueue_,n,o),o=[],h&&(t[r].status=2,a=t[r].unwatcher,setTimeout(a,Math.floor(0)),t[r].onComplete&&("nodata"===u?i.push((()=>t[r].onComplete(null,!1,t[r].currentInputSnapshot))):i.push((()=>t[r].onComplete(new Error(u),!1,null)))))}var a;cu(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)rs(i[e]);ou(e,e.transactionQueueTree_)}(e,au(e,n),i),i}function su(e,t){let n,i=e.transactionQueueTree_;for(n=Ms(t);null!==n&&void 0===bc(i);)i=yc(i,n),n=Ms(t=Bs(t));return i}function au(e,t){const n=[];return lu(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function lu(e,t,n){const i=bc(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);wc(t,(t=>{lu(e,t,n)}))}function cu(e,t){const n=bc(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,vc(t,n.length>0?n:void 0)}wc(t,(t=>{cu(e,t)}))}function uu(e,t){const n=xc(su(e,t)),i=yc(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{hu(e,t)})),hu(e,i),kc(i,(t=>{hu(e,t)})),n}function hu(e,t){const n=bc(t);if(n){const i=[];let o=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Ci(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(Ci(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),o=o.concat(Yl(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?vc(t,void 0):n.length=r+1,zc(e.eventQueue_,xc(t),o);for(let e=0;e<i.length;e++)rs(i[e])}}
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
 */const du=function(e,t){const n=fu(e),i=n.namespace;"firebase.com"===n.domain&&Hr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Vr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const o="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ms(n.host,n.secure,i,o,t,"",i!==n.subdomain),path:new Ps(n.pathString)}},fu=function(e){let t="",n="",i="",o="",r="",s=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(o=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Vr(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:s,scheme:a,pathString:o,namespace:r}},pu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
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
class mu{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return qs(this._path)?null:Fs(this._path)}get ref(){return new gu(this._repo,this._path)}get _queryIdentifier(){const e=Ua(this._queryParams),t=Zr(e);return"{}"===t?"default":t}get _queryObject(){return Ua(this._queryParams)}isEqual(e){if(!((e=wo(e))instanceof mu))return!1;const t=this._repo===e._repo,n=Vs(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class gu extends mu{constructor(e,t){super(e,t,new Da,!1)}get parent(){const e=js(this._path);return null===e?null:new gu(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}function yu(e,t){return(e=wo(e))._checkNotDeleted("ref"),void 0!==t?bu(e._root,t):e._root}function bu(e,t){return null===Ms((e=wo(e))._path)?Dc("child","path",t,!1):Pc("child","path",t,!1),new gu(e._repo,Ws(e._path,t))}function vu(e,t){e=wo(e),Mc("set",e._path),Ac("set",t,e._path,!1);const n=new ji;return Zc(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function _u(e,t){Lc("update",t,e._path,!1);const n=new ji;return function(e,t,n,i){tu(e,"update",{path:t.toString(),value:n});let o=!0;const r=Kc(e),s={};if(ts(n,((n,i)=>{o=!1,s[n]=fc(Ws(t,n),Sa(i),e.serverSyncTree_,r)})),o)Wr("update() called with empty data.  Don't do anything."),nu(0,i,"ok",void 0);else{const o=Qc(e),r=Jl(e.serverSyncTree_,t,s,o);Fc(e.eventQueue_,r),e.server_.merge(t.toString(),n,((n,r)=>{const s="ok"===n;s||Vr("update at "+t+" failed: "+n);const a=Yl(e.serverSyncTree_,o,!s),l=a.length>0?ru(e,t):t;zc(e.eventQueue_,l,a),nu(0,i,n,r)})),ts(n,(n=>{const i=uu(e,Ws(t,n));ru(e,i)})),zc(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}!function(e){Ci(!$l,"__referenceConstructor has already been defined"),$l=e}(gu),function(e){Ci(!Hl,"__referenceConstructor has already been defined"),Hl=e}(gu);
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
const wu="FIREBASE_DATABASE_EMULATOR_HOST",ku={};let xu=!1;function Iu(e,t,n,i,o){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||Hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Wr("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,l=du(r,o),c=l.repoInfo;void 0!==ci&&ci.env&&(a=ci.env[wu]),a?(s=!0,r=`http://${a}?ns=${c.namespace}`,l=du(r,o),c=l.repoInfo):s=!l.repoInfo.secure;const u=o&&s?new cs(cs.OWNER):new ls(e.name,e.options,t);Uc("Invalid Firebase Database URL",l),qs(l.path)||Hr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let o=ku[t.name];o||(o={},ku[t.name]=o);let r=o[e.toURLString()];r&&Hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Hc(e,xu,n,i),o[e.toURLString()]=r,r}(c,e,u,new as(e.name,n));return new Cu(h,e)}class Cu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Vc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gu(this._repo,Ds())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=ku[t];n&&n[e.key]===e||Hr(`Database ${t}(${e.repoInfo_}) has already been deleted.`),eu(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Hr("Cannot call "+e+" on a deleted database.")}}Zs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Zs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){Nr=hr,ar(new ko("database",((e,{instanceIdentifier:t})=>Iu(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),pr(Tr,Sr,e),pr(Tr,Sr,"esm2017")}
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
 */();function Eu(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n}Object.create;Object.create;function Tu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Su=Tu,Nu=new Yi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ru=new Lo("@firebase/auth");function Au(e,...t){Ru.logLevel<=To.ERROR&&Ru.error(`Auth (${hr}): ${e}`,...t)}
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
 */function Ou(e,...t){throw Du(e,...t)}function Lu(e,...t){return Du(e,...t)}function Pu(e,t,n){const i=Object.assign(Object.assign({},Su()),{[t]:n});return new Yi("auth","Firebase",i).create(t,{appName:e.name})}function Du(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Nu.create(e,...t)}function Mu(e,t,...n){if(!e)throw Du(t,...n)}function Uu(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Au(t),new Error(t)}function Bu(e,t){e||Uu(t)}
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
 */const Fu=new Map;function zu(e){Bu(e instanceof Function,"Expected a class definition");let t=Fu.get(e);return t?(Bu(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Fu.set(e,t),t)}
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
function ju(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Wu(){return"http:"===qu()||"https:"===qu()}function qu(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function $u(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Wu()||Hi()||"connection"in navigator))||navigator.onLine}
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
class Hu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bu(t>e,"Short delay should be less than long delay!"),this.isMobile=$i()||Vi()}get(){return $u()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Vu(e,t){Bu(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Xu{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Uu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Uu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Uu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Ku={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Gu=new Hu(3e4,6e4);
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
 */function Ju(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Yu(e,t,n,i,o={}){return Qu(e,o,(async()=>{let o={},r={};i&&("GET"===t?r=i:o={body:JSON.stringify(i)});const s=uo(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Xu.fetch()(eh(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},o))}))}async function Qu(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ku),t);try{const t=new th(e),o=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await o.json();if("needConfirmation"in r)throw nh(e,"account-exists-with-different-credential",r);if(o.ok&&!("errorMessage"in r))return r;{const t=o.ok?r.errorMessage:r.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw nh(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw nh(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw nh(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Pu(e,a,s);Ou(e,a)}}catch(t){if(t instanceof Ji)throw t;Ou(e,"network-request-failed",{message:String(t)})}}async function Zu(e,t,n,i,o={}){const r=await Yu(e,t,n,i,o);return"mfaPendingCredential"in r&&Ou(e,"multi-factor-auth-required",{_serverResponse:r}),r}function eh(e,t,n,i){const o=`${t}${n}?${i}`;return e.config.emulator?Vu(e.config,o):`${e.config.apiScheme}://${o}`}class th{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Lu(this.auth,"network-request-failed"))),Gu.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function nh(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=Lu(e,t,i);return o.customData._tokenResponse=n,o}
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
function ih(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function oh(e){return 1e3*Number(e)}function rh(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Au("JWT malformed, contained fewer than 3 sections"),null;try{const e=Oi(n);return e?JSON.parse(e):(Au("Failed to decode base64 JWT payload"),null)}catch(e){return Au("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function sh(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Ji&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ah{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class lh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ih(this.lastLoginAt),this.creationTime=ih(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function ch(e){var t;const n=e.auth,i=await e.getIdToken(),o=await sh(e,async function(e,t){return Yu(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Mu(null==o?void 0:o.users.length,n,"internal-error");const r=o.users[0];e._notifyReloadListener(r);const s=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=Eu(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=s,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new lh(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class uh{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Mu(e.idToken,"internal-error"),Mu(void 0!==e.idToken,"internal-error"),Mu(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=rh(e);return Mu(t,"internal-error"),Mu(void 0!==t.exp,"internal-error"),Mu(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Mu(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:o}=await
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
async function(e,t){const n=await Qu(e,{},(async()=>{const n=uo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,r=eh(e,i,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Xu.fetch()(r,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:o}=t,r=new uh;return n&&(Mu("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(Mu("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),o&&(Mu("number"==typeof o,"internal-error",{appName:e}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uh,this.toJSON())}_performRefresh(){return Uu("not implemented")}}
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
 */function hh(e,t){Mu("string"==typeof e||void 0===e,"internal-error",{appName:t})}class dh{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,o=Eu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ah(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new lh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await sh(this,this.stsTokenManager.getToken(this.auth,e));return Mu(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=wo(e),i=await n.getIdToken(t),o=rh(i);Mu(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const r="object"==typeof o.firebase?o.firebase:void 0,s=null==r?void 0:r.sign_in_provider;return{claims:o,token:i,authTime:ih(oh(o.auth_time)),issuedAtTime:ih(oh(o.iat)),expirationTime:ih(oh(o.exp)),signInProvider:s||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=wo(e);await ch(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Mu(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dh(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Mu(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ch(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sh(this,async function(e,t){return Yu(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,o,r,s,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:v,isAnonymous:_,providerData:w,stsTokenManager:k}=t;Mu(b&&k,e,"internal-error");const x=uh.fromJSON(this.name,k);Mu("string"==typeof b,e,"internal-error"),hh(u,e.name),hh(h,e.name),Mu("boolean"==typeof v,e,"internal-error"),Mu("boolean"==typeof _,e,"internal-error"),hh(d,e.name),hh(f,e.name),hh(p,e.name),hh(m,e.name),hh(g,e.name),hh(y,e.name);const I=new dh({uid:b,auth:e,email:h,emailVerified:v,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:x,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(I.providerData=w.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new uh;i.updateFromServerResponse(t);const o=new dh({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ch(o),o}}
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
 */class fh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fh.type="NONE";const ph=fh;
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
 */function mh(e,t,n){return`firebase:${e}:${t}:${n}`}class gh{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=mh(this.userKey,i.apiKey,o),this.fullPersistenceKey=mh("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dh._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new gh(zu(ph),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=i[0]||zu(ph);const r=mh(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(r);if(t){const i=dh._fromJSON(e,t);n!==o&&(s=i),o=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(r,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(r)}catch(e){}}))),new gh(o,e,n)):new gh(o,e,n)}}
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
 */function yh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xh(t))return"Blackberry";if(Ih(t))return"Webos";if(vh(t))return"Safari";if((t.includes("chrome/")||_h(t))&&!t.includes("edge/"))return"Chrome";if(kh(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function bh(e=qi()){return/firefox\//i.test(e)}function vh(e=qi()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _h(e=qi()){return/crios\//i.test(e)}function wh(e=qi()){return/iemobile/i.test(e)}function kh(e=qi()){return/android/i.test(e)}function xh(e=qi()){return/blackberry/i.test(e)}function Ih(e=qi()){return/webos/i.test(e)}function Ch(e=qi()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Eh(){return Xi()&&10===document.documentMode}function Th(e=qi()){return Ch(e)||kh(e)||Ih(e)||xh(e)||/windows phone/i.test(e)||wh(e)}
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
function Sh(e,t=[]){let n;switch(e){case"Browser":n=yh(qi());break;case"Worker":n=`${yh(qi())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${i}`}
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
 */class Nh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class Rh{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oh(this),this.idTokenSubscription=new Oh(this),this.beforeStateQueue=new Nh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zu(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await gh.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null==s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Mu(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ch(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?wo(e):null;return t&&Mu(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Mu(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(zu(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zu(e)||this._popupRedirectResolver;Mu(t,this,"argument-error"),this.redirectPersistenceManager=await gh.create(this,[zu(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const o="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return Mu(r,this,"internal-error"),r.then((()=>o(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Mu(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ah(e){return wo(e)}class Oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=mo((e=>this.observer=e))}get next(){return Mu(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Lh(e,t,n){const i=Ah(e);Mu(i._canInitEmulator,i,"emulator-config-failed"),Mu(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const o=!!(null==n?void 0:n.disableWarnings),r=Ph(t),{host:s,port:a}=function(e){const t=Ph(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const e=o[1];return{host:e,port:Dh(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Dh(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Ph(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Dh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Mh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Uu("not implemented")}_getIdTokenResponse(e){return Uu("not implemented")}_linkToIdToken(e,t){return Uu("not implemented")}_getReauthenticationResolver(e){return Uu("not implemented")}}
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
 */async function Uh(e,t){return Yu(e,"POST","/v1/accounts:update",t)}
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
class Bh extends Mh{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Bh(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Bh(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Zu(e,"POST","/v1/accounts:signInWithPassword",Ju(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return Zu(e,"POST","/v1/accounts:signInWithEmailLink",Ju(e,t))}(e,{email:this._email,oobCode:this._password});default:Ou(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Uh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Zu(e,"POST","/v1/accounts:signInWithEmailLink",Ju(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ou(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Fh(e,t){return Zu(e,"POST","/v1/accounts:signInWithIdp",Ju(e,t))}
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
 */class zh extends Mh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new zh(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ou("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,o=Eu(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new zh(n,i);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(e){return Fh(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fh(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fh(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=uo(t)}return e}}
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
 */const jh={USER_NOT_FOUND:"user-not-found"};
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
class Wh extends Mh{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Wh({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Wh({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Zu(e,"POST","/v1/accounts:signInWithPhoneNumber",Ju(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Zu(e,"POST","/v1/accounts:signInWithPhoneNumber",Ju(e,t));if(n.temporaryProof)throw nh(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Zu(e,"POST","/v1/accounts:signInWithPhoneNumber",Ju(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),jh)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}=e;return n||t||i||o?new Wh({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}
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
 */class qh{constructor(e){var t,n,i,o,r,s;const a=ho(fo(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Mu(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(o=a.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=ho(fo(e)).link,n=t?ho(fo(t)).deep_link_id:null,i=ho(fo(e)).deep_link_id;return(i?ho(fo(i)).link:null)||i||n||t||e}(e);try{return new qh(t)}catch(e){return null}}}
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
class $h{constructor(){this.providerId=$h.PROVIDER_ID}static credential(e,t){return Bh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=qh.parseLink(t);return Mu(n,"argument-error"),Bh._fromEmailAndCode(e,n.code,n.tenantId)}}$h.PROVIDER_ID="password",$h.EMAIL_PASSWORD_SIGN_IN_METHOD="password",$h.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Hh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Vh extends Hh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class Xh extends Vh{constructor(){super("facebook.com")}static credential(e){return zh._fromParams({providerId:Xh.PROVIDER_ID,signInMethod:Xh.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xh.credentialFromTaggedObject(e)}static credentialFromError(e){return Xh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xh.credential(e.oauthAccessToken)}catch(e){return null}}}Xh.FACEBOOK_SIGN_IN_METHOD="facebook.com",Xh.PROVIDER_ID="facebook.com";
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
class Kh extends Vh{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return zh._fromParams({providerId:Kh.PROVIDER_ID,signInMethod:Kh.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kh.credentialFromTaggedObject(e)}static credentialFromError(e){return Kh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Kh.credential(t,n)}catch(e){return null}}}Kh.GOOGLE_SIGN_IN_METHOD="google.com",Kh.PROVIDER_ID="google.com";
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
class Gh extends Vh{constructor(){super("github.com")}static credential(e){return zh._fromParams({providerId:Gh.PROVIDER_ID,signInMethod:Gh.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gh.credentialFromTaggedObject(e)}static credentialFromError(e){return Gh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Gh.credential(e.oauthAccessToken)}catch(e){return null}}}Gh.GITHUB_SIGN_IN_METHOD="github.com",Gh.PROVIDER_ID="github.com";
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
class Jh extends Vh{constructor(){super("twitter.com")}static credential(e,t){return zh._fromParams({providerId:Jh.PROVIDER_ID,signInMethod:Jh.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jh.credentialFromTaggedObject(e)}static credentialFromError(e){return Jh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Jh.credential(t,n)}catch(e){return null}}}
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
async function Yh(e,t){return Zu(e,"POST","/v1/accounts:signUp",Ju(e,t))}
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
 */Jh.TWITTER_SIGN_IN_METHOD="twitter.com",Jh.PROVIDER_ID="twitter.com";class Qh{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const o=await dh._fromIdTokenResponse(e,n,i),r=Zh(n);return new Qh({user:o,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Zh(n);return new Qh({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Zh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class ed extends Ji{constructor(e,t,n,i){var o;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ed.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new ed(e,t,n,i)}}function td(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ed._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function nd(e,t,n=!1){const i=await sh(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qh._forOperation(e,"link",i)}
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
async function id(e,t,n=!1){const{auth:i}=e,o="reauthenticate";try{const r=await sh(e,td(i,o,t,e),n);Mu(r.idToken,i,"internal-error");const s=rh(r.idToken);Mu(s,i,"internal-error");const{sub:a}=s;return Mu(e.uid===a,i,"user-mismatch"),Qh._forOperation(e,o,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ou(i,"user-mismatch"),e}}
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
 */async function od(e,t,n=!1){const i="signIn",o=await td(e,i,t),r=await Qh._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(r.user),r}async function rd(e,t){return od(Ah(e),t)}async function sd(e,t,n){const i=Ah(e),o=await Yh(i,{returnSecureToken:!0,email:t,password:n}),r=await Qh._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(r.user),r}
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
async function ad(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=wo(e),o={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},r=await sh(i,
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
async function(e,t){return Yu(e,"POST","/v1/accounts:update",t)}(i.auth,o));i.displayName=r.displayName||null,i.photoURL=r.photoUrl||null;const s=i.providerData.find((({providerId:e})=>"password"===e));s&&(s.displayName=i.displayName,s.photoURL=i.photoURL),await i._updateTokensIfNecessary(r)}new WeakMap;const ld="__sak";
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
 */class cd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ld,"1"),this.storage.removeItem(ld),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class ud extends cd{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=qi();return vh(e)||Ch(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Th(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);Eh()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ud.type="LOCAL";const hd=ud;
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
 */class dd extends cd{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dd.type="SESSION";const fd=dd;
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
class pd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new pd(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:o}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(r).map((async e=>e(t.origin,o))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function md(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */pd.receivers=[];class gd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,r;return new Promise(((s,a)=>{const l=md("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(c),clearTimeout(o),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
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
 */function yd(){return window}
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
function bd(){return void 0!==yd().WorkerGlobalScope&&"function"==typeof yd().importScripts}
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
const vd="firebaseLocalStorageDb",_d="firebaseLocalStorage",wd="fbase_key";class kd{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function xd(e,t){return e.transaction([_d],t?"readwrite":"readonly").objectStore(_d)}function Id(){const e=indexedDB.open(vd,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(_d,{keyPath:wd})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(_d)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(vd);return new kd(e).toPromise()}(),t(await Id()))}))}))}async function Cd(e,t,n){const i=xd(e,!0).put({[wd]:t,value:n});return new kd(i).toPromise()}function Ed(e,t){const n=xd(e,!0).delete(t);return new kd(n).toPromise()}class Td{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Id()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pd._getInstance(bd()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new gd(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Id();return await Cd(e,ld,"1"),await Ed(e,ld),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Cd(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=xd(e,!1).get(t),i=await new kd(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ed(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=xd(e,!1).getAll();return new kd(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:o}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Td.type="LOCAL";const Sd=Td;
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
 */function Nd(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var o,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Lu("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(o=document.getElementsByTagName("head"))||void 0===o?void 0:o[0])&&void 0!==r?r:document).appendChild(i)}))}function Rd(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Rd("rcb"),new Hu(3e4,6e4);
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
const Ad="recaptcha";async function Od(e,t,n){var i;const o=await n.verify();try{let r;if(Mu("string"==typeof o,e,"argument-error"),Mu(n.type===Ad,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){Mu("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return Yu(e,"POST","/v2/accounts/mfaEnrollment:start",Ju(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{Mu("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;Mu(n,e,"missing-multi-factor-info");const s=await function(e,t){return Yu(e,"POST","/v2/accounts/mfaSignIn:start",Ju(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Yu(e,"POST","/v1/accounts:sendVerificationCode",Ju(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
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
class Ld{constructor(e){this.providerId=Ld.PROVIDER_ID,this.auth=Ah(e)}verifyPhoneNumber(e,t){return Od(this.auth,e,wo(t))}static credential(e,t){return Wh._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ld.credentialFromTaggedObject(t)}static credentialFromError(e){return Ld.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Wh._fromTokenResponse(t,n):null}}
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
function Pd(e,t){return t?zu(t):(Mu(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ld.PROVIDER_ID="phone",Ld.PHONE_SIGN_IN_METHOD="phone";class Dd extends Mh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fh(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fh(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fh(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Md(e){return od(e.auth,new Dd(e),e.bypassAuthState)}function Ud(e){const{auth:t,user:n}=e;return Mu(n,t,"internal-error"),id(n,new Dd(e),e.bypassAuthState)}async function Bd(e){const{auth:t,user:n}=e;return Mu(n,t,"internal-error"),nd(n,new Dd(e),e.bypassAuthState)}
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
 */class Fd{constructor(e,t,n,i,o=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:o,error:r,type:s}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Md;case"linkViaPopup":case"linkViaRedirect":return Bd;case"reauthViaPopup":case"reauthViaRedirect":return Ud;default:Ou(this.auth,"internal-error")}}resolve(e){Bu(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bu(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const zd=new Hu(2e3,1e4);class jd extends Fd{constructor(e,t,n,i,o){super(e,t,i,o),this.provider=n,this.authWindow=null,this.pollId=null,jd.currentPopupAction&&jd.currentPopupAction.cancel(),jd.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Mu(e,this.auth,"internal-error"),e}async onExecution(){Bu(1===this.filter.length,"Popup operations only handle one event");const e=md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Lu(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Lu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jd.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Lu(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,zd.get())};e()}}jd.currentPopupAction=null;
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
const Wd="pendingRedirect",qd=new Map;class $d extends Fd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=qd.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Xd(t),i=Vd(e);if(!await i._isAvailable())return!1;const o="true"===await i._get(n);return await i._remove(n),o}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}qd.set(this.auth._key(),e)}return this.bypassAuthState||qd.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Hd(e,t){qd.set(e._key(),t)}function Vd(e){return zu(e._redirectPersistence)}function Xd(e){return mh(Wd,e.config.apiKey,e.name)}
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
 */async function Kd(e,t,n=!1){const i=Ah(e),o=Pd(i,t),r=new $d(i,o,n),s=await r.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}class Gd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yd(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yd(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Lu(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jd(e))}saveEventToCache(e){this.cachedEventUids.add(Jd(e)),this.lastProcessedEventTime=Date.now()}}function Jd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Yd({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Qd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zd=/^https?/;async function ef(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Yu(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(tf(e))return}catch(e){}Ou(e,"unauthorized-domain")}function tf(e){const t=ju(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===i}if(!Zd.test(n))return!1;if(Qd.test(e))return i===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */const nf=new Hu(3e4,6e4);function of(){const e=yd().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let rf=null;function sf(e){return rf=rf||function(e){return new Promise(((t,n)=>{var i,o,r;function s(){of(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{of(),n(Lu(e,"network-request-failed"))},timeout:nf.get()})}if(null===(o=null===(i=yd().gapi)||void 0===i?void 0:i.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=yd().gapi)||void 0===r?void 0:r.load)){const t=Rd("iframefcb");return yd()[t]=()=>{gapi.load?s():n(Lu(e,"network-request-failed"))},Nd(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw rf=null,e}))}(e),rf}
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
 */const af=new Hu(5e3,15e3),lf="__/auth/iframe",cf="emulator/auth/iframe",uf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function df(e){const t=e.config;Mu(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vu(t,cf):`https://${e.config.authDomain}/${lf}`,i={apiKey:t.apiKey,appName:e.name,v:hr},o=hf.get(e.config.apiHost);o&&(i.eid=o);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${uo(i).slice(1)}`}
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
const ff={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class pf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function mf(e,t,n,i=500,o=600){const r=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ff),{width:i.toString(),height:o.toString(),top:r,left:s}),c=qi().toLowerCase();n&&(a=_h(c)?"_blank":n),bh(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=qi()){var t;return Ch(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",a),new pf(null);const h=window.open(t||"",a,u);Mu(h,e,"popup-blocked");try{h.focus()}catch(e){}return new pf(h)}const gf="__/auth/handler",yf="emulator/auth/handler";function bf(e,t,n,i,o,r){Mu(e.config.authDomain,e,"auth-domain-config-required"),Mu(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:hr,eventId:o};if(t instanceof Hh){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",so(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))s[e]=t}if(t instanceof Vh){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Vu(e,yf):`https://${e.authDomain}/${gf}`}
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
 */(e)}?${uo(a).slice(1)}`}const vf="webStorageSupport";const _f=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fd,this._completeRedirectFn=Kd,this._overrideRedirectResult=Hd}async _openPopup(e,t,n,i){var o;Bu(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");return mf(e,bf(e,t,n,ju(),i),md())}async _openRedirect(e,t,n,i){var o;return await this._originValidation(e),o=bf(e,t,n,ju(),i),yd().location.href=o,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Bu(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await sf(e),n=yd().gapi;return Mu(n,e,"internal-error"),t.open({where:document.body,url:df(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uf,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const o=Lu(e,"network-request-failed"),r=yd().setTimeout((()=>{i(o)}),af.get());function s(){yd().clearTimeout(r),n(t)}t.ping(s).then(s,(()=>{i(o)}))}))))}(e),n=new Gd(e);return t.register("authEvent",(t=>{Mu(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vf,{type:vf},(n=>{var i;const o=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[vf];void 0!==o&&t(!!o),Ou(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ef(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Th()||vh()||Ch()}};var wf="@firebase/auth",kf="0.22.0";
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
class xf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Mu(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const If=zi("authIdTokenMaxAge")||300;let Cf=null;var Ef;Ef="Browser",ar(new ko("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:r}=n.options;return((e,n)=>{Mu(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),Mu(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:o,authDomain:r,clientPlatform:Ef,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sh(Ef)},s=new Rh(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(zu);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ar(new ko("auth-internal",(e=>(e=>new xf(e))(Ah(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),pr(wf,kf,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ef)),pr(wf,kf,"esm2017");var Tf,Sf,Nf={};Tf=void 0===t?"undefined"==typeof window?Nf:window:t,Sf=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,i,o,r,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},b="Show",v="Ask",_="Prompt",w={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",x="Hourglass",I="Circle",C="Arrows",E="Dots",T="Pulse",S="Custom",N="Notiflix",R={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},A="Standard",O="Hourglass",L="Circle",P="Arrows",D="Dots",M="Pulse",U={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},B=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+s)},F=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+s)},z=function(t){return t||(t="head"),null!==e.document[t]||(B('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},j=function(t,n){if(!z("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},W=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=t&&"[object Object]"===Object.prototype.toString.call(n[i])?W(e[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return e},q=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},J=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,Q=function(n,i,o,r){if(!z("body"))return!1;t||ce.Notify.init({});var s=W(!0,t,{});if("object"==typeof o&&!Array.isArray(o)||"object"==typeof r&&!Array.isArray(r)){var f={};"object"==typeof o?f=o:"object"==typeof r&&(f=r),t=W(!0,t,f)}var p=t[n.toLocaleLowerCase("en")];Y++,"string"!=typeof i&&(i="Notiflix "+n),t.plainText&&(i=q(i)),!t.plainText&&i.length>t.messageMaxLength&&(t=W(!0,t,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>t.messageMaxLength&&(i=i.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(d.wrapID)||e.document.createElement("div");if(m.id=d.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(d.overlayID)||e.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(d.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(d.wrapID)||e.document.body.appendChild(m);var y=e.document.createElement("div");y.id=t.ID+"-"+Y,y.className=t.className+" "+p.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof o?"nx-with-close-button":"")+" "+("function"==typeof o?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var b="";if(t.closeButton&&"function"!=typeof o&&(b='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?b:"");else{var v="";n===l?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=v+'<span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?b:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(t.closeButton?b:"");if("left-bottom"===t.position||"right-bottom"===t.position){var _=e.document.getElementById(d.wrapID);_.insertBefore(y,_.firstChild)}else e.document.getElementById(d.wrapID).appendChild(y);var w=e.document.getElementById(y.id);if(w){var k,x,I=function(){w.classList.add("nx-remove");var t=e.document.getElementById(d.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(k)},C=function(){if(w&&null!==w.parentNode&&w.parentNode.removeChild(w),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(d.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(x)};if(t.closeButton&&"function"!=typeof o&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var e=setTimeout((function(){C(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof o||t.clickToClose)&&w.addEventListener("click",(function(){"function"==typeof o&&o(),I();var e=setTimeout((function(){C(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof o){var E=function(){k=setTimeout((function(){I()}),t.timeout),x=setTimeout((function(){C()}),t.timeout+t.cssAnimationDuration)};E(),t.pauseOnHover&&(w.addEventListener("mouseenter",(function(){w.classList.add("nx-paused"),clearTimeout(k),clearTimeout(x)})),w.addEventListener("mouseleave",(function(){w.classList.remove("nx-paused"),E()})))}}if(t.showOnlyTheLastOne&&0<Y)for(var T,S=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Y+"])"),N=0;N<S.length;N++)null!==(T=S[N]).parentNode&&T.parentNode.removeChild(T);t=W(!0,t,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,i,o,r,s,l){if(!z("body"))return!1;n||ce.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=W(!0,n,{}),n=W(!0,n,u)}var h=n[t.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+t),"string"!=typeof o&&(t===f?o='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===p?o='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?o='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(o='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof r&&(r="Okay"),n.plainText&&(i=q(i),o=q(o),r=q(r)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",o='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',r="Okay"),o.length>n.messageMaxLength&&(i="Possible HTML Tags Error",o='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',r="Okay"),r.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",o='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',r="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),o.length>n.messageMaxLength&&(o=o.substring(0,n.messageMaxLength)+"..."),r.length>n.buttonMaxLength&&(r=r.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var b="",v=!0===n.backOverlayClickToClose;n.backOverlay&&(b='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(v?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var _="";if(t===f?_=function(e,t){return e||(e="110px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===p?_=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===m?_=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===g&&(_=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=b+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+_+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+o+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+r+"</a></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var w=function(){var t=e.document.getElementById(d.id);t.classList.add("nx-remove");var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(i)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),w()})),b&&v&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){w()}))}n=W(!0,n,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,o,r,s,l,c,u,h){if(!z("body"))return!1;i||ce.Confirm.init({});var d=W(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=W(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof o&&(o="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=q(n),o=q(o),s=q(s),l=q(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",o='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),o.length>i.messageMaxLength&&(n="Possible HTML Tags Error",o='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",o='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),o.length>i.messageMaxLength&&(o=o.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=e.document.createElement("div");f.id=w.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",b=null,k=void 0;if(t===v||t===_){b=r||"";var x=t===v||200<b.length?Math.ceil(1.5*b.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===_?'value="'+b+'"':"")+' maxlength="'+x+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+o+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!e.document.getElementById(f.id)){e.document.body.appendChild(f);var I=e.document.getElementById(f.id),C=e.document.getElementById("NXConfirmButtonOk"),E=e.document.getElementById("NXConfirmValidationInput");E&&(E.focus(),E.setSelectionRange(0,(E.value||"").length),E.addEventListener("keyup",(function(e){var n=e.target.value;t===v&&n!==b?(e.preventDefault(),E.classList.add("nx-validation-failure"),E.classList.remove("nx-validation-success")):(t===v&&(E.classList.remove("nx-validation-failure"),E.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&C.dispatchEvent(new Event("click")))}))),C.addEventListener("click",(function(e){if(t===v&&b&&E){if((E.value||"").toString()!==b)return E.focus(),E.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;E.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===_&&E&&(k=E.value||""),c(k)),I.classList.add("nx-remove");var n=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(t===_&&E&&(k=E.value||""),u(k)),I.classList.add("nx-remove");var e=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(e))}),i.cssAnimationDuration)}))}i=W(!0,i,d)},ie=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},oe=function(t,n,i,r,s){if(!z("body"))return!1;o||ce.Loading.init({});var l=W(!0,o,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),o=W(!0,o,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),r){var h="";0<(u=u.length>o.messageMaxLength?q(u).toString().substring(0,o.messageMaxLength)+"...":q(u).toString()).length&&(h='<p id="'+o.messageID+'" class="nx-loading-message" style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+u+"</p>"),o.cssAnimation||(o.cssAnimationDuration=0);var d="";if(t===k)d=$(o.svgSize,o.svgColor);else if(t===x)d=H(o.svgSize,o.svgColor);else if(t===I)d=V(o.svgSize,o.svgColor);else if(t===C)d=X(o.svgSize,o.svgColor);else if(t===E)d=K(o.svgSize,o.svgColor);else if(t===T)d=G(o.svgSize,o.svgColor);else if(t===S&&null!==o.customSvgCode&&null===o.customSvgUrl)d=o.customSvgCode||"";else if(t===S&&null!==o.customSvgUrl&&null===o.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+o.svgSize+'" height="'+o.svgSize+'" src="'+o.customSvgUrl+'" alt="Notiflix">';else{if(t===S&&(null===o.customSvgUrl||null===o.customSvgCode))return B('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(o.svgSize,"#f8f8f8","#32c682")}var f=parseInt((o.svgSize||"").replace(/[^0-9]/g,"")),p=e.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+o.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=e.document.createElement("div");y.id=R.ID,y.className=o.className+(o.cssAnimation?" nx-with-animation":"")+(o.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=o.zindex,y.style.background=o.backgroundColor,y.style.animationDuration=o.cssAnimationDuration+"ms",y.style.fontFamily='"'+o.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",o.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),o.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),o.cssAnimationDuration)}))}else if(e.document.getElementById(R.ID))var b=e.document.getElementById(R.ID),v=setTimeout((function(){b.classList.add("nx-remove");var e=setTimeout((function(){null!==b.parentNode&&(b.parentNode.removeChild(b),clearTimeout(e))}),o.cssAnimationDuration);clearTimeout(v)}),s);o=W(!0,o,l)},re=function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(R.ID);if(n)if(0<t.length){t=t.length>o.messageMaxLength?q(t).substring(0,o.messageMaxLength)+"...":q(t);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=t;else{var r=e.document.createElement("p");r.id=o.messageID,r.className="nx-loading-message nx-loading-message-new",r.style.color=o.messageColor,r.style.fontSize=o.messageFontSize,r.innerHTML=t,n.appendChild(r)}}else B("Where is the new message?")},se=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ae=0,le=function(t,n,i,o,s,l){var c;if(Array.isArray(i)){if(1>i.length)return B("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return B("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return B("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=e.document.querySelectorAll(i);if(1>u.length)return B('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}r||ce.Block.init({});var h=W(!0,r,{});if("object"==typeof o&&!Array.isArray(o)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof o?d=o:"object"==typeof s&&(d=s),r=W(!0,r,d)}var f="";"string"==typeof o&&0<o.length&&(f=o),r.cssAnimation||(r.cssAnimationDuration=0);var p=U.className;"string"==typeof r.className&&(p=r.className.trim());var m="number"==typeof r.querySelectorLimit?r.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(t){for(var b,v=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],_=0;_<g;_++)if(b=c[_]){if(-1<v.indexOf(b.tagName.toLocaleLowerCase("en")))break;var w=b.querySelectorAll("[id^="+U.ID+"]");if(1>w.length){var k="";n&&(k=n===O?H(r.svgSize,r.svgColor):n===L?V(r.svgSize,r.svgColor):n===P?X(r.svgSize,r.svgColor):n===D?K(r.svgSize,r.svgColor):n===M?G(r.svgSize,r.svgColor):$(r.svgSize,r.svgColor));var x='<span class="'+p+'-icon" style="width:'+r.svgSize+";height:"+r.svgSize+';">'+k+"</span>",I="";0<f.length&&(f=f.length>r.messageMaxLength?q(f).substring(0,r.messageMaxLength)+"...":q(f),I='<span style="font-size:'+r.messageFontSize+";color:"+r.messageColor+';" class="'+p+'-message">'+f+"</span>"),ae++;var C=e.document.createElement("div");C.id=U.ID+"-"+ae,C.className=p+(r.cssAnimation?" nx-with-animation":""),C.style.position=r.position,C.style.zIndex=r.zindex,C.style.background=r.backgroundColor,C.style.animationDuration=r.cssAnimationDuration+"ms",C.style.fontFamily='"'+r.fontFamily+'", '+a,C.style.display="flex",C.style.flexWrap="wrap",C.style.flexDirection="column",C.style.alignItems="center",C.style.justifyContent="center",r.rtl&&(C.setAttribute("dir","rtl"),C.classList.add("nx-rtl-on")),C.innerHTML=x+I;var E,T=e.getComputedStyle(b).getPropertyValue("position"),S="string"==typeof T?T.toLocaleLowerCase("en"):"relative",N=Math.round(1.25*parseInt(r.svgSize))+40,R="";N>(b.offsetHeight||0)&&(R="min-height:"+N+"px;"),E=b.getAttribute("id")?"#"+b.getAttribute("id"):b.classList[0]?"."+b.classList[0]:(b.tagName||"").toLocaleLowerCase("en");var A="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(S);if(j||0<R.length){if(!z("head"))return!1;j&&(A="position:relative!important;");var J='<style id="Style-'+U.ID+"-"+ae+'">'+E+"."+y+"{"+A+R+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var Q=Y.createContextualFragment(J);e.document.head.appendChild(Q),b.classList.add(y)}b.appendChild(C)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var i=t.getAttribute("id"),o=e.document.getElementById("Style-"+i);o&&null!==o.parentNode&&o.parentNode.removeChild(o),clearTimeout(n)}),r.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else F("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),r.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=c[t])&&(te(e),w=e.querySelectorAll("[id^="+U.ID+"]"),ee(w));clearTimeout(ne)}),l);r=W(!0,r,h)},ce={Notify:{init:function(e){t=W(!0,d,e),j(J,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=W(!0,t,e)):(B("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){Q(l,e,t,n)},failure:function(e,t,n){Q(c,e,t,n)},warning:function(e,t,n){Q(u,e,t,n)},info:function(e,t,n){Q(h,e,t,n)}},Report:{init:function(e){n=W(!0,y,e),j(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=W(!0,n,e)):(B("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,i,o){ee(f,e,t,n,i,o)},failure:function(e,t,n,i,o){ee(p,e,t,n,i,o)},warning:function(e,t,n,i,o){ee(m,e,t,n,i,o)},info:function(e,t,n,i,o){ee(g,e,t,n,i,o)}},Confirm:{init:function(e){i=W(!0,w,e),j(te,"NotiflixConfirmInternalCSS")},merge:function(e){return i?void(i=W(!0,i,e)):(B("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,i,o,r,s){ne(b,e,t,null,n,i,o,r,s)},ask:function(e,t,n,i,o,r,s,a){ne(v,e,t,n,i,o,r,s,a)},prompt:function(e,t,n,i,o,r,s,a){ne(_,e,t,n,i,o,r,s,a)}},Loading:{init:function(e){o=W(!0,R,e),j(ie,"NotiflixLoadingInternalCSS")},merge:function(e){return o?void(o=W(!0,o,e)):(B("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){oe(k,e,t,!0,0)},hourglass:function(e,t){oe(x,e,t,!0,0)},circle:function(e,t){oe(I,e,t,!0,0)},arrows:function(e,t){oe(C,e,t,!0,0)},dots:function(e,t){oe(E,e,t,!0,0)},pulse:function(e,t){oe(T,e,t,!0,0)},custom:function(e,t){oe(S,e,t,!0,0)},notiflix:function(e,t){oe(N,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),oe(null,null,null,!1,e)},change:function(e){re(e)}},Block:{init:function(e){r=W(!0,U,e),j(se,"NotiflixBlockInternalCSS")},merge:function(e){return r?void(r=W(!0,r,e)):(B('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){le(!0,A,e,t,n)},hourglass:function(e,t,n){le(!0,O,e,t,n)},circle:function(e,t,n){le(!0,L,e,t,n)},arrows:function(e,t,n){le(!0,P,e,t,n)},dots:function(e,t,n){le(!0,D,e,t,n)},pulse:function(e,t,n){le(!0,M,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),le(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?W(!0,e.Notiflix,{Notify:ce.Notify,Report:ce.Report,Confirm:ce.Confirm,Loading:ce.Loading,Block:ce.Block}):{Notify:ce.Notify,Report:ce.Report,Confirm:ce.Confirm,Loading:ce.Loading,Block:ce.Block}},"function"==typeof define&&define.amd?define([],(function(){return Sf(Tf)})):"object"==typeof Nf?Nf=Sf(Tf):Tf.Notiflix=Sf(Tf);const Rf=document.querySelector("[data-modal-auth-open]"),Af=document.querySelector(".user-authorized__btn"),Of=document.querySelector(".user-authorized__btn div"),Lf=document.querySelector(".user-authorized__btn img"),Pf=document.querySelector("[data-burgermodal-auth-open]"),Df=document.querySelector(".user-mob"),Mf=document.querySelector(".user-mob img"),Uf=document.querySelector("#logOut");function Bf(e,t){Rf.style.display="none",Pf.style.display="none",Af.style.display="flex",Df.style.display="flex",Uf.style.display="flex",e&&(Of.textContent=e),t&&(Lf.setAttribute("src",t),Mf.setAttribute("src",t))}const Ff=function(e=fr(),t){const n=lr(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=Bi("database");e&&function(e,t,n,i={}){e=wo(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Hr("Cannot call useEmulator() after instance has already been initialized.");const o=e._repoInternal;let r;if(o.repoInfo_.nodeAdmin)i.mockUserToken&&Hr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new cs(cs.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:Wi(i.mockUserToken,e.app.options.projectId);r=new cs(t)}!function(e,t,n,i){e.repoInfo_=new ms(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(o,t,n,r)}(n,...e)}return n}(dr({apiKey:"AIzaSyA-_OfsYzJ0IruGwuB0MjrKn8CM_GP4gaw",authDomain:"jssf-bookstore.firebaseapp.com",databaseURL:"https://jssf-bookstore-default-rtdb.firebaseio.com",projectId:"jssf-bookstore",storageBucket:"jssf-bookstore.appspot.com",messagingSenderId:"159533621369",appId:"1:159533621369:web:49b6ecc78de1b0dd90f4a8"})),zf=function(e=fr()){const t=lr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=lr(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(lo(n.getOptions(),null!=t?t:{}))return e;Ou(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:_f,persistence:[Sd,hd,fd]}),i=zi("authTokenSyncURL");if(i){const e=(o=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>If)return;const i=null==t?void 0:t.token;Cf!==i&&(Cf=i,await fetch(o,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){wo(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){wo(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var o;const r=Ui("auth");return r&&Lh(n,`http://${r}`),n}();let jf;submitBtn.addEventListener("click",(e=>{const t=document.getElementById("nameAuth").value,i=document.getElementById("signupMail").value,o=document.getElementById("signupPassword").value,r=form.querySelector('.auth_field[type="text"]');sd(zf,i,o).then((e=>{jf=e.user,vu(yu(Ff,"users/"+jf.uid),{nameAuth:t,mailAuth:i,userPassword:o}),n(Nf).Notify.success("user created!");const s=r.value;ad(jf,{displayName:s}),Bf("An"),document.getElementById("authModal").style.display="none",document.getElementById("mobileMenu").style.display="inline"})).catch((e=>{e.code;const t=e.message;n(Nf).Notify.success(t)}))})),submitBtnCopy.addEventListener("click",(e=>{const t=document.getElementById("signinMail").value,i=document.getElementById("signinPassword").value;var o,r,s;
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
 */(o=zf,r=t,s=i,rd(wo(o),$h.credential(r,s))).then((e=>{jf=e.user;const t=new Date;_u(yu(Ff,"users/"+jf.uid),{last_login:t}),n(Nf).Notify.success("User long in!"),Bf(jf.displayName),document.getElementById("authModal").style.display="none",document.getElementById("mobileMenu").style.display="inline"})).catch((e=>{e.code;const t=e.message;console.log(e),n(Nf).Notify.success(t)}))})),logOut.addEventListener("click",(e=>{var t;(t=zf,wo(t).signOut()).then((()=>{n(Nf).Notify.success("Sign-out successful"),Rf.style.display="flex",Pf.style.display="flex",Af.style.display="none",Df.style.display="none",Uf.style.display="none"})).catch((e=>{e.code;const t=e.message;n(Nf).Notify.success(t)}))}));const Wf=new Cn,qf=document.querySelector(".top-books"),$f=document.querySelector(".btn-up");$f.classList.add("is-hidden-up");let Hf="",Vf="";async function Xf(){try{const{data:e}=await Wf.fetchTopBooks();return e}catch(e){console.log(e),n(Nf).Notify.failure("Oops! Something went wrong... Please try again.")}}async function Kf(){try{Wf.category=Vf;const{data:e}=await Wf.fetchCategoryOfBooks();return e}catch(e){console.log(e),n(Nf).Notify.failure("Oops! Something went wrong... Please try again.")}}function Gf(){qf.previousElementSibling.scrollIntoView({behavior:"smooth"})}Tn(),(async()=>{const e=await Xf();if(window.screen.width<768)for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];Hf+=`<li>\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n                </div>\n          </div>\n      </li>\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}else if(window.screen.width>=768&&window.screen.width<1280)for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];Hf+=`\n<li>\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[1]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[1].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[1].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[1].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n          <li class="item-category-book js-book-modal" data-book-id="${i[2]._id}">\n           <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[2].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[2].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[2].author}</p>\n                  </div>\n              </div>\n           </div>\n          </li>\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}else for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];Hf+=`\n<li>\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n                <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n            </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[1]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[1].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[1].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[1].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[2]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[2].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[2].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[2].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[3]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[3].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[3].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[3].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[4]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[4].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[4].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[4].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}qf.innerHTML="",qf.insertAdjacentHTML("beforeend",Hf),qf.insertAdjacentHTML("beforebegin",'<h2 class="title-best-sellers">Best sellers <span class ="title-best-sellers-color">books</span></h2>')})(),Sn(),qf.addEventListener("click",(async function(e){try{if("BUTTON"===e.target.nodeName){Vf=e.target.closest("li").querySelector("h3").textContent.trim();const t=await Kf();let n="";t.forEach((({_id:e,book_image:t,title:i,author:o})=>{n+=`<li class="item-category-book js-book-modal" data-book-id="${e}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${t}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-category">\n                <div class="box-title">  \n                  <p class="title-book">${i}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${o}</p>\n                  </div>\n              </div>\n          </div>\n      </li>`})),qf.innerHTML="",qf.previousElementSibling.remove(),qf.insertAdjacentHTML("beforeend",n),qf.insertAdjacentHTML("beforebegin",`<h2 class="title-category">${Vf}</h2>`),Gf();const i=qf.previousElementSibling;!function(){if(i.classList.contains("title-category")){const e=i.textContent.trim(),t=e.split(" "),n=t[t.length-1];i.innerHTML=e.replace(n,`<span class="title-last-word-color">${n}</span>`)}}()}return}catch(e){console.log(e),n(Nf).Notify.failure("Oops! Something went wrong... Please try again.")}})),Tn(),Sn(),$f.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){window.scrollY>200?$f.classList.remove("is-hidden-up"):0==window.scrollY&&$f.classList.add("is-hidden-up")}));document.querySelector(".categories-list").addEventListener("click",(async function(e){if("LI"===e.target.nodeName)if(Vf=e.target.textContent.trim(),"All categories"!==Vf){const e=await Kf();let t="";e.forEach((({_id:e,book_image:n,title:i,author:o})=>{t+=`<li class="item-category-book js-book-modal" data-book-id="${e}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${n}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-category">\n                <div class="box-title">  \n                  <p class="title-book">${i}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${o}</p>\n                  </div>\n              </div>\n          </div>\n      </li>`})),qf.innerHTML="",qf.previousElementSibling.remove(),qf.insertAdjacentHTML("beforeend",t),qf.insertAdjacentHTML("beforebegin",`<h2 class="title-category">${Vf}</h2>`);const n=qf.previousElementSibling;!function(){if(n.classList.contains("title-category")){const e=n.textContent.trim(),t=e.split(" "),i=t[t.length-1];n.innerHTML=e.replace(i,`<span class="title-last-word-color">${i}</span>`)}}(),Gf()}else(async()=>{const e=await Xf();if(window.screen.width<768)for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];Hf+=`<li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}else if(window.screen.width>=768&&window.screen.width<1280)for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];Hf+=`\n<li>\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[1]._id}">\n          <div class="card-book">\n            <div class="img-card-book-best">\n            <img src="${i[1].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book">\n                <div class="box-title">  \n                  <p class="title-book">${i[1].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[1].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[2]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[2].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[2].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[2].author}</p>\n                  </div>\n              </div>\n          </div>\n            </li>\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}else for(let t=0;t<e.length;t+=1){const{list_name:n,books:i}=e[t];Hf+=`\n<li>\n    <h3 class="item-category">${n}</h3>\n        <ul class="box-category">\n      <li class="item-category-book js-book-modal" data-book-id="${i[0]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[0].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[0].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[0].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[1]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[1].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[1].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[1].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[2]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[2].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[2].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[2].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[3]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[3].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[3].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[3].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n            <li class="item-category-book js-book-modal" data-book-id="${i[4]._id}">\n          <div class="card-book">\n            <div class="img-card-book">\n            <img src="${i[4].book_image}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${i[4].title}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${i[4].author}</p>\n                  </div>\n              </div>\n          </div>\n      </li>\n\n    </ul>\n        <button type="button" aria-label="Show more" class="see-more">See more</button>\n   </li>`}qf.innerHTML="",qf.previousElementSibling.remove(),qf.insertAdjacentHTML("beforeend",Hf),qf.insertAdjacentHTML("beforebegin",'<h2 class="title-best-sellers">Best sellers <span class ="title-best-sellers-color">books</span></h2>')})();return})),Tn(),Sn();const Jf=document.querySelector("html");u(Jf);document.getElementById("burger-btn");const Yf=document.querySelector(".nav__link");(0,On.currentPageSwitcher)(Yf);document.querySelector(".user-authorized__btn").addEventListener("click",(()=>{document.querySelector(".user-log-out").classList.toggle("lo-open")})),Tn(),Rn.fetchCategoryList().then((e=>{Nn&&Nn.insertAdjacentHTML("beforeend",function(e){let t='<li class="category checked-category">All categories</li>';return e.map((e=>{t+=function(e){return`<li class="category">\n        ${e.trim()}\n      </li>`}(e.list_name)})),t}(e.data))})).catch((e=>{Nn&&Nn.insertAdjacentHTML("beforeend",function(e,t){return`<p class="category-error">${e}${t}</p>`}("Ooops! Something goes wrong... <br>We can`t download caregories. ",e))})),Sn(),Jf.addEventListener("click",(e=>{c(e,Jf),An(e)}));document.querySelector(".mobile-menu__icon").addEventListener("click",(function(e){const t=document.querySelector(".mobile-menu"),n=e.currentTarget.firstElementChild,i=n.getAttribute("href").split("#")[0];Ln=!Ln;const o=Ln?"close":"burger-menu";n.setAttribute("href",`${i}#${o}`),n.setAttribute("is-opened",Ln),t.classList.toggle("active")}));let Qf=window.innerWidth;addEventListener("resize",(()=>{(window.innerWidth>767&&Qf<768||window.innerWidth>1279&&Qf<1280||window.innerWidth<1280&&Qf>1279||window.innerWidth<768&&Qf>767)&&(Qf=window.innerWidth,location.reload())}));
//# sourceMappingURL=index.e71f9ed9.js.map
