function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var s=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,s=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){s=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(s)throw a}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/*! For license information please see 7-es2015.2cc9e47369dfc1b3fa39.js.LICENSE.txt */(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{G8AK:function(e,t,n){"use strict";n.r(t);var r=n("8Y7J"),s=function e(){_classCallCheck(this,e)},a=n("pMnS"),o=n("SVse"),i=function(){function e(t){_classCallCheck(this,e),this.products=t,this.movies=[{title:"Zootopia",director:"Byron Howard, Rich Moore",cast:"Idris Elba, Ginnifer Goodwin, Jason Bateman",releaseDate:"March 4, 2016"},{title:"Batman v Superman: Dawn of Justice",director:"Zack Snyder",cast:"Ben Affleck, Henry Cavill, Amy Adams",releaseDate:"March 25, 2016"},{title:"Captain America: Civil War",director:"Anthony Russo, Joe Russo",cast:"Scarlett Johansson, Elizabeth Olsen, Chris Evans",releaseDate:"May 6, 2016"},{title:"X-Men: Apocalypse",director:"Bryan Singer",cast:"Jennifer Lawrence, Olivia Munn, Oscar Isaac",releaseDate:"May 27, 2016"}]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.products.getProducts().subscribe((function(t){e.productData=t,console.log(e.productData)}))}}]),e}(),l=n("LRne"),u=n("HDdC"),c=n("bOdf"),h=n("pLZG"),d=n("lJxs"),p=function e(){_classCallCheck(this,e)},f=function e(){_classCallCheck(this,e)},y=function(){function e(t){var n=this;_classCallCheck(this,e),this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?function(){n.headers=new Map,t.split("\n").forEach((function(e){var t=e.indexOf(":");if(t>0){var r=e.slice(0,t),s=r.toLowerCase(),a=e.slice(t+1).trim();n.maybeSetNormalizedName(r,s),n.headers.has(s)?n.headers.get(s).push(a):n.headers.set(s,[a])}}))}:function(){n.headers=new Map,Object.keys(t).forEach((function(e){var r=t[e],s=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(n.headers.set(s,r),n.maybeSetNormalizedName(e,s))}))}:this.headers=new Map}return _createClass(e,[{key:"has",value:function(e){return this.init(),this.headers.has(e.toLowerCase())}},{key:"get",value:function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}},{key:"keys",value:function(){return this.init(),Array.from(this.normalizedNames.values())}},{key:"getAll",value:function(e){return this.init(),this.headers.get(e.toLowerCase())||null}},{key:"append",value:function(e,t){return this.clone({name:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({name:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({name:e,value:t,op:"d"})}},{key:"maybeSetNormalizedName",value:function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}},{key:"init",value:function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach((function(e){return t.applyUpdate(e)})),this.lazyUpdate=null))}},{key:"copyFrom",value:function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach((function(n){t.headers.set(n,e.headers.get(n)),t.normalizedNames.set(n,e.normalizedNames.get(n))}))}},{key:"clone",value:function(t){var n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}},{key:"applyUpdate",value:function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);var r=("a"===e.op?this.headers.get(t):void 0)||[];r.push.apply(r,_toConsumableArray(n)),this.headers.set(t,r);break;case"d":var s=e.value;if(s){var a=this.headers.get(t);if(!a)return;0===(a=a.filter((function(e){return-1===s.indexOf(e)}))).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}else this.headers.delete(t),this.normalizedNames.delete(t)}}},{key:"forEach",value:function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach((function(n){return e(t.normalizedNames.get(n),t.headers.get(n))}))}}]),e}(),v=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"encodeKey",value:function(e){return b(e)}},{key:"encodeValue",value:function(e){return b(e)}},{key:"decodeKey",value:function(e){return decodeURIComponent(e)}},{key:"decodeValue",value:function(e){return decodeURIComponent(e)}}]),e}();function b(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var m=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(_classCallCheck(this,e),this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new v,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){var n=new Map;return e.length>0&&e.split("&").forEach((function(e){var r=e.indexOf("="),s=_slicedToArray(-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],2),a=s[0],o=s[1],i=n.get(a)||[];i.push(o),n.set(a,i)})),n}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach((function(e){var r=n.fromObject[e];t.map.set(e,Array.isArray(r)?r:[r])}))):this.map=null}return _createClass(e,[{key:"has",value:function(e){return this.init(),this.map.has(e)}},{key:"get",value:function(e){this.init();var t=this.map.get(e);return t?t[0]:null}},{key:"getAll",value:function(e){return this.init(),this.map.get(e)||null}},{key:"keys",value:function(){return this.init(),Array.from(this.map.keys())}},{key:"append",value:function(e,t){return this.clone({param:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({param:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({param:e,value:t,op:"d"})}},{key:"toString",value:function(){var e=this;return this.init(),this.keys().map((function(t){var n=e.encoder.encodeKey(t);return e.map.get(t).map((function(t){return n+"="+e.encoder.encodeValue(t)})).join("&")})).join("&")}},{key:"clone",value:function(t){var n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([t]),n}},{key:"init",value:function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach((function(t){return e.map.set(t,e.cloneFrom.map.get(t))})),this.updates.forEach((function(t){switch(t.op){case"a":case"s":var n=("a"===t.op?e.map.get(t.param):void 0)||[];n.push(t.value),e.map.set(t.param,n);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var r=e.map.get(t.param)||[],s=r.indexOf(t.value);-1!==s&&r.splice(s,1),r.length>0?e.map.set(t.param,r):e.map.delete(t.param)}})),this.cloneFrom=this.updates=null)}}]),e}();function g(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function C(e){return"undefined"!=typeof Blob&&e instanceof Blob}function k(e){return"undefined"!=typeof FormData&&e instanceof FormData}var _=function(){function e(t,n,r,s){var a;if(_classCallCheck(this,e),this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,a=s):a=r,a&&(this.reportProgress=!!a.reportProgress,this.withCredentials=!!a.withCredentials,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.params&&(this.params=a.params)),this.headers||(this.headers=new y),this.params){var o=this.params.toString();if(0===o.length)this.urlWithParams=n;else{var i=n.indexOf("?");this.urlWithParams=n+(-1===i?"?":i<n.length-1?"&":"")+o}}else this.params=new m,this.urlWithParams=n}return _createClass(e,[{key:"serializeBody",value:function(){return null===this.body?null:g(this.body)||C(this.body)||k(this.body)||"string"==typeof this.body?this.body:this.body instanceof m?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}},{key:"detectContentTypeHeader",value:function(){return null===this.body||k(this.body)?null:C(this.body)?this.body.type||null:g(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof m?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}},{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.method||this.method,r=t.url||this.url,s=t.responseType||this.responseType,a=void 0!==t.body?t.body:this.body,o=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,i=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,l=t.headers||this.headers,u=t.params||this.params;return void 0!==t.setHeaders&&(l=Object.keys(t.setHeaders).reduce((function(e,n){return e.set(n,t.setHeaders[n])}),l)),t.setParams&&(u=Object.keys(t.setParams).reduce((function(e,n){return e.set(n,t.setParams[n])}),u)),new e(n,r,a,{params:u,headers:l,reportProgress:i,responseType:s,withCredentials:o})}}]),e}(),w=function(){var e={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return e[e.Sent]="Sent",e[e.UploadProgress]="UploadProgress",e[e.ResponseHeader]="ResponseHeader",e[e.DownloadProgress]="DownloadProgress",e[e.Response]="Response",e[e.User]="User",e}(),T=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"OK";_classCallCheck(this,e),this.headers=t.headers||new y,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300},O=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,n),(e=t.call(this,r)).type=w.ResponseHeader,e}return _createClass(n,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new n({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),n}(T),E=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,n),(e=t.call(this,r)).type=w.Response,e.body=void 0!==r.body?r.body:null,e}return _createClass(n,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new n({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),n}(T),A=function(e){_inherits(n,e);var t=_createSuper(n);function n(e){var r;return _classCallCheck(this,n),(r=t.call(this,e,0,"Unknown Error")).name="HttpErrorResponse",r.ok=!1,r.message=r.status>=200&&r.status<300?"Http failure during parsing for "+(e.url||"(unknown url)"):"Http failure response for ".concat(e.url||"(unknown url)",": ").concat(e.status," ").concat(e.statusText),r.error=e.error||null,r}return n}(T);function P(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var S,R=function(){function e(t){_classCallCheck(this,e),this.handler=t}return _createClass(e,[{key:"request",value:function(e,t){var n,r=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof _)n=e;else{var a=void 0;a=s.headers instanceof y?s.headers:new y(s.headers);var o=void 0;s.params&&(o=s.params instanceof m?s.params:new m({fromObject:s.params})),n=new _(e,t,void 0!==s.body?s.body:null,{headers:a,params:o,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}var i=Object(l.a)(n).pipe(Object(c.a)((function(e){return r.handler.handle(e)})));if(e instanceof _||"events"===s.observe)return i;var u=i.pipe(Object(h.a)((function(e){return e instanceof E})));switch(s.observe||"body"){case"body":switch(n.responseType){case"arraybuffer":return u.pipe(Object(d.a)((function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body})));case"blob":return u.pipe(Object(d.a)((function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body})));case"text":return u.pipe(Object(d.a)((function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body})));case"json":default:return u.pipe(Object(d.a)((function(e){return e.body})))}case"response":return u;default:throw new Error("Unreachable: unhandled observe type ".concat(s.observe,"}"))}}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("DELETE",e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("GET",e,t)}},{key:"head",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("HEAD",e,t)}},{key:"jsonp",value:function(e,t){return this.request("JSONP",e,{params:(new m).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}},{key:"options",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("OPTIONS",e,t)}},{key:"patch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PATCH",e,P(n,t))}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("POST",e,P(n,t))}},{key:"put",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PUT",e,P(n,t))}}]),e}(),x=function(){function e(t,n){_classCallCheck(this,e),this.next=t,this.interceptor=n}return _createClass(e,[{key:"handle",value:function(e){return this.interceptor.intercept(e,this.next)}}]),e}(),j=new r.o("HTTP_INTERCEPTORS"),N=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"intercept",value:function(e,t){return t.handle(e)}}]),e}(),I=/^\)\]\}',?\n/,z=function e(){_classCallCheck(this,e)},D=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"build",value:function(){return new XMLHttpRequest}}]),e}(),L=function(){function e(t){_classCallCheck(this,e),this.xhrFactory=t}return _createClass(e,[{key:"handle",value:function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new u.a((function(n){var r=t.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach((function(e,t){return r.setRequestHeader(e,t.join(","))})),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var s=e.detectContentTypeHeader();null!==s&&r.setRequestHeader("Content-Type",s)}if(e.responseType){var a=e.responseType.toLowerCase();r.responseType="json"!==a?a:"text"}var o=e.serializeBody(),i=null,l=function(){if(null!==i)return i;var t=1223===r.status?204:r.status,n=r.statusText||"OK",s=new y(r.getAllResponseHeaders()),a=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||e.url;return i=new O({headers:s,status:t,statusText:n,url:a})},u=function(){var t=l(),s=t.headers,a=t.status,o=t.statusText,i=t.url,u=null;204!==a&&(u=void 0===r.response?r.responseText:r.response),0===a&&(a=u?200:0);var c=a>=200&&a<300;if("json"===e.responseType&&"string"==typeof u){var h=u;u=u.replace(I,"");try{u=""!==u?JSON.parse(u):null}catch(d){u=h,c&&(c=!1,u={error:d,text:u})}}c?(n.next(new E({body:u,headers:s,status:a,statusText:o,url:i||void 0})),n.complete()):n.error(new A({error:u,headers:s,status:a,statusText:o,url:i||void 0}))},c=function(e){var t=l().url,s=new A({error:e,status:r.status||0,statusText:r.statusText||"Unknown Error",url:t||void 0});n.error(s)},h=!1,d=function(t){h||(n.next(l()),h=!0);var s={type:w.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(s.total=t.total),"text"===e.responseType&&r.responseText&&(s.partialText=r.responseText),n.next(s)},p=function(e){var t={type:w.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),n.next(t)};return r.addEventListener("load",u),r.addEventListener("error",c),e.reportProgress&&(r.addEventListener("progress",d),null!==o&&r.upload&&r.upload.addEventListener("progress",p)),r.send(o),n.next({type:w.Sent}),function(){r.removeEventListener("error",c),r.removeEventListener("load",u),e.reportProgress&&(r.removeEventListener("progress",d),null!==o&&r.upload&&r.upload.removeEventListener("progress",p)),r.abort()}}))}}]),e}(),H=new r.o("XSRF_COOKIE_NAME"),U=new r.o("XSRF_HEADER_NAME"),M=function e(){_classCallCheck(this,e)},F=function(){function e(t,n,r){_classCallCheck(this,e),this.doc=t,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return _createClass(e,[{key:"getToken",value:function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(o.t)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}]),e}(),J=function(){function e(t,n){_classCallCheck(this,e),this.tokenService=t,this.headerName=n}return _createClass(e,[{key:"intercept",value:function(e,t){var n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);var r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}]),e}(),B=function(){function e(t,n){_classCallCheck(this,e),this.backend=t,this.injector=n,this.chain=null}return _createClass(e,[{key:"handle",value:function(e){if(null===this.chain){var t=this.injector.get(j,[]);this.chain=t.reduceRight((function(e,t){return new x(e,t)}),this.backend)}return this.chain.handle(e)}}]),e}(),q=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"disable",value:function(){return{ngModule:e,providers:[{provide:J,useClass:N}]}}},{key:"withOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:e,providers:[t.cookieName?{provide:H,useValue:t.cookieName}:[],t.headerName?{provide:U,useValue:t.headerName}:[]]}}}]),e}(),K=function e(){_classCallCheck(this,e)},W=((S=function(){function e(t){_classCallCheck(this,e),this.http=t,this.REST_API_SERVER="http://localhost:3001/apis"}return _createClass(e,[{key:"getProducts",value:function(){return this.http.get(this.REST_API_SERVER)}}]),e}()).ngInjectableDef=r.Ib({factory:function(){return new S(r.Jb(R))},token:S,providedIn:"root"}),S),X=r.nb({encapsulation:0,styles:[[".image[_ngcontent-%COMP%]{min-width:100px;min-height:40px}"]],data:{}});function V(e){return r.Eb(0,[(e()(),r.pb(0,0,null,null,8,"div",[["class","row alert alert-secondary"]],null,null,null,null,null)),(e()(),r.pb(1,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(2,null,["",""])),(e()(),r.pb(3,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(4,null,["",""])),(e()(),r.pb(5,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(6,null,["",""])),(e()(),r.pb(7,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(8,null,["",""]))],null,(function(e,t){e(t,2,0,t.context.$implicit.id),e(t,4,0,t.context.$implicit.name),e(t,6,0,t.context.$implicit.description),e(t,8,0,t.context.$implicit.price)}))}function G(e){return r.Eb(0,[(e()(),r.pb(0,0,null,null,11,"div",[["class","content"]],null,null,null,null,null)),(e()(),r.pb(1,0,null,null,8,"div",[["class","row mt-4 alert alert-primary"]],null,null,null,null,null)),(e()(),r.pb(2,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(-1,null,["ID:"])),(e()(),r.pb(4,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(-1,null,["Name:"])),(e()(),r.pb(6,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(-1,null,["Description"])),(e()(),r.pb(8,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(-1,null,["Price"])),(e()(),r.eb(16777216,null,null,1,null,V)),r.ob(11,278528,null,0,o.i,[r.M,r.J,r.q],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){e(t,11,0,t.component.productData)}),null)}var $=r.lb("app-products",i,(function(e){return r.Eb(0,[(e()(),r.pb(0,0,null,null,1,"app-products",[],null,null,null,G,X)),r.ob(1,114688,null,0,i,[W],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]),Z=n("iInd"),Y=function e(){_classCallCheck(this,e)};n.d(t,"ProductsModuleNgFactory",(function(){return Q}));var Q=r.mb(s,[],(function(e){return r.xb([r.yb(512,r.j,r.X,[[8,[a.a,$]],[3,r.j],r.v]),r.yb(4608,o.k,o.j,[r.s,[2,o.s]]),r.yb(4608,M,F,[o.c,r.z,H]),r.yb(4608,J,J,[M,U]),r.yb(5120,j,(function(e){return[e]}),[J]),r.yb(4608,D,D,[]),r.yb(6144,z,null,[D]),r.yb(4608,L,L,[z]),r.yb(6144,f,null,[L]),r.yb(4608,p,B,[f,r.p]),r.yb(4608,R,R,[p]),r.yb(4608,W,W,[R]),r.yb(1073742336,o.b,o.b,[]),r.yb(1073742336,Z.m,Z.m,[[2,Z.r],[2,Z.k]]),r.yb(1073742336,Y,Y,[]),r.yb(1073742336,q,q,[]),r.yb(1073742336,K,K,[]),r.yb(1073742336,s,s,[]),r.yb(1024,Z.i,(function(){return[[{path:"",component:i}]]}),[]),r.yb(256,H,"XSRF-TOKEN",[]),r.yb(256,U,"X-XSRF-TOKEN",[])])}))}}]);