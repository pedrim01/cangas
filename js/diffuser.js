!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=46)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(28))},function(t,e){t.exports={conversations:{domain:"conversations.app-us1.com"},diffuser:{domain:"prism.app-us1.com"},tracking:{domain:"trackcmp.net"},webpersonalization:{domain:"wp-ui.app-us1.com"},cdnDomain:"diffuser-cdn.app-us1.com"}},function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(11),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},function(t,e,n){var r=n(9),o=Function.prototype,i=o.call,c=r&&o.bind.bind(i,i);t.exports=r?c:function(t){return function(){return i.apply(t,arguments)}}},function(t,e,n){var r=n(4),o=n(11),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},function(t,e,n){t.exports=n(17)},function(t,e,n){var r=n(5),o=n(23),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},function(t,e,n){var r=n(3);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},function(t,e){t.exports=function(t){return null==t}},function(t,e){var n="object"==typeof document&&document.all,r=void 0===n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:r}},function(t,e,n){var r=n(9),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},function(t,e,n){var r=n(14),o=n(4),i=n(33),c=n(15),u=Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,u(t))}},function(t,e,n){var r=n(0),o=n(4),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},function(t,e,n){var r=n(16);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(34),o=n(3);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},function(t,e,n){var r=n(18);t.exports=r},function(t,e,n){var r=n(19);t.exports=r},function(t,e,n){var r=n(20);t.exports=r},function(t,e,n){n(21)},function(t,e,n){var r=n(2),o=n(22).EXISTS,i=n(5),c=n(25).f,u=Function.prototype,a=i(u.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=i(s.exec);r&&!o&&c(u,"name",{configurable:!0,get:function(){try{return f(s,a(this))[1]}catch(t){return""}}})},function(t,e,n){var r=n(2),o=n(8),i=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,s=u&&(!r||r&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:s}},function(t,e,n){var r=n(24),o=Object;t.exports=function(t){return o(r(t))}},function(t,e,n){var r=n(10),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},function(t,e,n){var r=n(2),o=n(26),i=n(29),c=n(30),u=n(31),a=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=r?i?function(t,e,n){if(c(t),e=u(e),c(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=f(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return s(t,e,n)}:s:function(t,e,n){if(c(t),e=u(e),c(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(2),o=n(3),i=n(27);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(6),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(2),o=n(3);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},function(t,e,n){var r=n(6),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},function(t,e,n){var r=n(32),o=n(13);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},function(t,e,n){var r=n(12),o=n(6),i=n(13),c=n(36),u=n(39),a=n(40),s=TypeError,f=a("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,a=c(t,f);if(a){if(void 0===e&&(e="default"),n=r(a,t,e),!o(n)||i(n))return n;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},function(t,e,n){var r=n(5);t.exports=r({}.isPrototypeOf)},function(t,e,n){var r,o,i=n(0),c=n(35),u=i.process,a=i.Deno,s=u&&u.versions||a&&a.version,f=s&&s.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},function(t,e,n){var r=n(14);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(37),o=n(10);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},function(t,e,n){var r=n(4),o=n(38),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},function(t,e){var n=String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},function(t,e,n){var r=n(12),o=n(4),i=n(6),c=TypeError;t.exports=function(t,e){var n,u;if("string"===e&&o(n=t.toString)&&!i(u=r(n,t)))return u;if(o(n=t.valueOf)&&!i(u=r(n,t)))return u;if("string"!==e&&o(n=t.toString)&&!i(u=r(n,t)))return u;throw c("Can't convert object to primitive value")}},function(t,e,n){var r=n(0),o=n(41),i=n(8),c=n(45),u=n(16),a=n(15),s=o("wks"),f=r.Symbol,l=f&&f.for,p=a?f:f&&f.withoutSetter||c;t.exports=function(t){if(!i(s,t)||!u&&"string"!=typeof s[t]){var e="Symbol."+t;u&&i(f,t)?s[t]=f[t]:s[t]=a&&l?l(e):p(e)}return s[t]}},function(t,e,n){var r=n(42),o=n(43);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(44),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(5),o=0,i=Math.random(),c=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},function(t,e,n){"use strict";n.r(e),n(7);var r={loadScript:function(t,e){var n=document.querySelector("head"),r=document.createElement("script"),o=!1;r.type="text/javascript",r.charset="utf-8",r.src=t,r.async=!0,e&&(r.onload=r.onreadystatechange=function(){o||this.readyState&&"complete"!==this.readyState||(o=!0,e())}),n.appendChild(r)},buildQueryParams:function(t){return Object.keys(t).filter((function(e){return t[e]})).map((function(e){return e+"="+encodeURIComponent(t[e])})).join("&")},getQueryParam:function(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))},getLocation:function(){return this.removeVgoParam(window.location.href)},getPathname:function(){return this.removeVgoParam(window.location.pathname+window.location.search+window.location.hash)},removeVgoParam:function(t){var e="";return t.split("#").length>1&&(e="#".concat(t.split("#").pop())),(t=t.replace(e,"")).replace(/vgo_ee=[^\&]+&?/,"").replace(/[?&]$/,"")+e},getReferrer:function(){return document.referrer},async:function(t,e){setTimeout(t,e)}},o=n(1),i=n.n(o);function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._visitor=e,this._settings=n||{}}return function(t,e,n){e&&c(t.prototype,e),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1})}(t,[{key:"settings",get:function(){return this._settings}},{key:"visitor",get:function(){return this._visitor}},{key:"domain",get:function(){var t=this.constructor.name.toLowerCase();return i.a[t].domain}},{key:"connect",value:function(){}},{key:"update",value:function(){}}]),t}();function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=l(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}}).apply(this,arguments)}function l(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}function p(t,e){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=_(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}}).apply(this,arguments)}function _(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}function g(t,e){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function O(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=x(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}}).apply(this,arguments)}function x(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}function E(t,e){return(E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function T(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var G={conversations:function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(n,t);var e=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}(n);function n(t,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(o=e.call(this,t,r))._updateQueue=[],o}return function(t,e,n){e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1})}(n,[{key:"connect",value:function(){var t=this;f(v(n.prototype),"connect",this).call(this);var e="https://".concat(i.a.cdnDomain,"/conversations/").concat("","widget.js");r.async((function(){r.loadScript(e,(function(){window.conversationsGlobalObject.accountId=t._visitor.accountId,window.conversationsGlobalObject.visitorId=t._visitor.id,t.visitor.email&&(window.conversationsGlobalObject.email=t._visitor.email),r.async((function(){return window.conversationsGlobalObject.connect()}),1),t._processUpdateQueue()}))}),this.settings.delay?1e3*+this.settings.delay:1)}},{key:"_queueUpdate",value:function(t){this._updateQueue.push(t)}},{key:"_processUpdateQueue",value:function(){var t=this;this._updateQueue.forEach((function(e){return t.update(e)}))}},{key:"update",value:function(t){window.conversationsGlobalObject?window.conversationsGlobalObject.update(t):this._queueUpdate(t)}}]),n}(u),tracking:function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(n,t);var e=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=j(t);if(e){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}(n);function n(){return b(this,n),e.apply(this,arguments)}return function(t,e,n){e&&w(t.prototype,e),n&&w(t,n),Object.defineProperty(t,"prototype",{writable:!1})}(n,[{key:"connect",value:function(){var t;m(j(n.prototype),"connect",this).call(this);var e=(h(t={},"trackid",this.visitor.accountId),h(t,"prismid",this.visitor.id),h(t,"url",this.visitor.url),t);this.visitor.email&&(e.email=this.visitor.email);var o=r.buildQueryParams(e),i="https://".concat(this.domain,"/t_prism_sitemessages.php?").concat(o);r.loadScript(i)}}]),n}(u),wp:function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(n,t);var e=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=R(t);if(e){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}(n);function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=e.call(this,t))._updateQueue=[],r}return function(t,e,n){e&&k(t.prototype,e),n&&k(t,n),Object.defineProperty(t,"prototype",{writable:!1})}(n,[{key:"connect",value:function(){var t=this;P(R(n.prototype),"connect",this).call(this);var e="https://".concat(this.domain,"/wp-controller.js");r.loadScript(e,(function(){window.wpGlobalObject&&(window.wpGlobalObject.accountId=t.visitor.accountId,window.wpGlobalObject.visitorId=t.visitor.id,window.wpGlobalObject.url=t.visitor.url,t.visitor.email&&(window.wpGlobalObject.email=t.visitor.email),window.wpGlobalObject.connect(),t._processUpdateQueue())}))}},{key:"_queueUpdate",value:function(t){this._updateQueue.push(t)}},{key:"_processUpdateQueue",value:function(){var t=this;this._updateQueue.forEach((function(e){return t.update(e)}))}},{key:"update",value:function(t){window.wpGlobalObject?window.wpGlobalObject.update(t):this._queueUpdate(t)}}]),n}(u)};function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var D=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=null,this._accountId=e,this._email=null,this._referrer=r.getReferrer(),this._url=r.getLocation(),this._hasWhitelistedServices=!1,this._whitelistedServices=[],this._addedServices=[],this._processedServices={},this._trackByDefault=!1}return function(t,e,n){e&&I(t.prototype,e),n&&I(t,n),Object.defineProperty(t,"prototype",{writable:!1})}(t,[{key:"id",get:function(){return this._id},set:function(t){this._id=t}},{key:"email",get:function(){return this._email},set:function(t){this._email=t}},{key:"referrer",get:function(){return this._referrer},set:function(t){this._referrer=t}},{key:"accountId",get:function(){return this._accountId}},{key:"url",get:function(){return this._url},set:function(t){this._url=t}},{key:"trackByDefault",get:function(){return this._trackByDefault},set:function(t){var e=t;switch(t){case"true":e=!0;break;case"false":e=!1}this._trackByDefault=e}},{key:"whitelistedServices",get:function(){return this._whitelistedServices},set:function(t){this._whitelistedServices=t}},{key:"addedServices",get:function(){return this._addedServices}},{key:"processedServices",get:function(){return this._processedServices}},{key:"hasWhitelistedServices",get:function(){return this._hasWhitelistedServices},set:function(t){this._hasWhitelistedServices=!!t}},{key:"hasProcessedService",value:function(t){return void 0!==this.processedServices[t]}},{key:"registerProcessedService",value:function(t,e){this.processedServices[t]=e}},{key:"setWhitelistedServices",value:function(t){var e=this;this.hasWhitelistedServices=!0,t&&("string"==typeof t&&(t=t.split(",")),t.forEach((function(t){void 0!==G[t]&&-1===e.whitelistedServices.indexOf(t)&&e.whitelistedServices.push(t)})))}},{key:"updateUrl",value:function(t){this.url=t||r.getLocation()}}]),t}();function A(t){return"".concat("prism_").concat(t)}function Q(){return new Date((new Date).getTime()+2592e6)}function U(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=A(t),o=Q(),i="."+window.location.hostname.split(".").slice(-2-n).join(".");if(document.cookie="".concat(r,"=").concat(e,";domain=").concat(i,";path=/;expires=").concat(o.toUTCString()),t){var c=C(t);if(!c&&n<10)return U(t,e,n+1)}}function C(t){if(!t)throw"No account id";return document.cookie.split("; ").reduce((function(t,e){var n=e.split("=");return t[n[0]]=n[1],t}),{})[A(t)]||""}function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var B=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.visitorGlobalObjectAlias=e,this._visitors={},this._accountId=null,this._settings={},this.initialized=!1,this.updateQueue=[],void 0===window[e])throw"Embed code is not configured";this._hasProcessedSingleton={conversations:!1},this._queue=window[e].q}return function(t,e,n){e&&V(t.prototype,e),n&&V(t,n),Object.defineProperty(t,"prototype",{writable:!1})}(t,[{key:"settings",get:function(){return this._settings},set:function(t){this._settings=t}},{key:"accountId",get:function(){return this._accountId}},{key:"visitorGlobalObjectAlias",get:function(){return this._visitorGlobalObjectAlias},set:function(t){this._visitorGlobalObjectAlias=t}},{key:"queue",get:function(){return this._queue},set:function(t){this._queue=t}},{key:"domain",get:function(){var t=this.constructor.name.toLowerCase();return i.a[t].domain}},{key:"setVisitorId",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this._getVisitor(e);n.id=t,U(e,t)}},{key:"setEmail",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this._getVisitor(e);n.email=t}},{key:"setWhitelistedServices",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this._getVisitor(e);n.setWhitelistedServices(t)}},{key:"connect",value:function(){this._processQueue(),this._replaceVisitorGlobalObject()}},{key:"_getVisitor",value:function(t){if(!t&&!this._accountId)throw"Account id is not set";return this._visitors[t||this._accountId]}},{key:"_processQueue",value:function(){var t=this;this.queue.forEach((function(e){t._processJob.apply(t,e)}))}},{key:"_replaceVisitorGlobalObject",value:function(){window[this.visitorGlobalObjectAlias]=this._processJob.bind(this)}},{key:"_getMethodNameFromJobName",value:function(t){return t=t.charAt(0).toUpperCase()+t.slice(1),"".concat("_execute").concat(t)}},{key:"_processJob",value:function(){var t=Array.prototype.slice.call(arguments),e=t.shift(),n=this._getMethodNameFromJobName(e);if(void 0===this[n])throw"Invalid method";this[n].apply(this,t)}},{key:"_getServicesToProcess",value:function(t){return t.addedServices.length?t.addedServices:t.hasWhitelistedServices?t.whitelistedServices:Object.keys(G)}},{key:"_connectToNewService",value:function(t,e){if(void 0!==this._hasProcessedSingleton[e]){if(this._hasProcessedSingleton[e])return;this._hasProcessedSingleton[e]=!0}var n=new G[e](t,this.settings[e]);t.registerProcessedService(e,n),n.connect()}},{key:"_setInitialized",value:function(){this.initialized=!0,this._processUpdateQueue()}},{key:"_processServices",value:function(t){var e=this;if(!t||!t.id)return this._setInitialized(),!1;this._getServicesToProcess(t).forEach((function(n){t.hasProcessedService(n)||e._connectToNewService(t,n)})),this._setInitialized()}},{key:"_executeSetAccount",value:function(t){this._visitors[t]||(this._visitors[t]=new D(t)),this._accountId=t}},{key:"_executeSetTrackByDefault",value:function(t){this._getVisitor().trackByDefault=t}},{key:"_executeSetEmail",value:function(t){this._getVisitor().email=t}},{key:"_executeAddService",value:function(t){var e=this._getVisitor();void 0!==G[t]&&-1===e.addedServices.indexOf(t)&&e.addedServices.push(t)}},{key:"_executeProcess",value:function(t){var e=this,n=this._getVisitor();!1===n.trackByDefault&&"allowTracking"!==t||r.async((function(){e._makeRequestToDiffuser(n,e._processServices.bind(e,n))}),1)}},{key:"_makeRequestToDiffuser",value:function(t,e){var n,o=(q(n={},"a",t.accountId),q(n,"e",t.email),q(n,"ee",r.getQueryParam("vgo_ee")),q(n,"u",t.url),q(n,"r",t.referrer),q(n,"t",C(t.accountId)),n);this._removeQueryParam();var i=r.buildQueryParams(o),c="https://".concat(this.domain,"?").concat(i);r.loadScript(c,e)}},{key:"_queueUpdate",value:function(t){this.updateQueue.push(t)}},{key:"_processUpdateQueue",value:function(){var t=this;this.updateQueue.forEach((function(e){return t._executeUpdate(e)})),this.updateQueue=[]}},{key:"_executeUpdate",value:function(t){var e=this;t||this.initialized?Object.values(this._visitors).map((function(n){return e._updateVisitor(n,t)})):this._queueUpdate(r.getLocation())}},{key:"_updateVisitor",value:function(t,e){var n=this;t.whitelistedServices=[],t.updateUrl(e);var r=t.processedServices;this._makeRequestToDiffuser(t,(function(){if(!t||!t.id)return n._setInitialized(),!1;var e=n._getServicesToProcess(t),o=Object.keys(r);e.concat(o.filter((function(t){return e.indexOf(t)<0}))).forEach((function(i){if(-1===o.indexOf(i))n._connectToNewService(t,i);else{var c=-1!==e.indexOf(i);r[i].update(c)}}))}))}},{key:"_removeQueryParam",value:function(){-1!==window.location.href.indexOf("vgo_ee")&&window.history.replaceState(window.history.state,document.title,r.getPathname())}},{key:"_executeSettings",value:function(t){this.settings=t}}]),t}();!window.prismGlobalObjectAlias&&window.visitorGlobalObjectAlias&&(window.prismGlobalObjectAlias=window.visitorGlobalObjectAlias),window.prismGlobalObjectAlias&&!window.visitorGlobalObjectAlias&&(window.visitorGlobalObjectAlias=window.prismGlobalObjectAlias),window.pgo&&(window[window.visitorGlobalObjectAlias]=window.pgo),window.visitorGlobalObject||(window.visitorGlobalObject=new B(window.visitorGlobalObjectAlias),window.visitorGlobalObject.connect())}]);