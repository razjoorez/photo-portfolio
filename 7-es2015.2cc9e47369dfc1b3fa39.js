/*! For license information please see 7-es2015.2cc9e47369dfc1b3fa39.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{G8AK:function(e,t,s){"use strict";s.r(t);var r=s("8Y7J");class n{}var o=s("pMnS"),a=s("SVse");class l{constructor(e){this.products=e,this.movies=[{title:"Zootopia",director:"Byron Howard, Rich Moore",cast:"Idris Elba, Ginnifer Goodwin, Jason Bateman",releaseDate:"March 4, 2016"},{title:"Batman v Superman: Dawn of Justice",director:"Zack Snyder",cast:"Ben Affleck, Henry Cavill, Amy Adams",releaseDate:"March 25, 2016"},{title:"Captain America: Civil War",director:"Anthony Russo, Joe Russo",cast:"Scarlett Johansson, Elizabeth Olsen, Chris Evans",releaseDate:"May 6, 2016"},{title:"X-Men: Apocalypse",director:"Bryan Singer",cast:"Jennifer Lawrence, Olivia Munn, Oscar Isaac",releaseDate:"May 27, 2016"}]}ngOnInit(){this.products.getProducts().subscribe(e=>{this.productData=e,console.log(this.productData)})}}var i=s("LRne"),u=s("HDdC"),h=s("bOdf"),c=s("pLZG"),d=s("lJxs");class p{}class y{}class m{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(e=>{const t=e.indexOf(":");if(t>0){const s=e.slice(0,t),r=s.toLowerCase(),n=e.slice(t+1).trim();this.maybeSetNormalizedName(s,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let s=e[t];const r=t.toLowerCase();"string"==typeof s&&(s=[s]),s.length>0&&(this.headers.set(r,s),this.maybeSetNormalizedName(t,r))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof m?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new m;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof m?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(e.name,t);const r=("a"===e.op?this.headers.get(t):void 0)||[];r.push(...s),this.headers.set(t,r);break;case"d":const n=e.value;if(n){let e=this.headers.get(t);if(!e)return;e=e.filter(e=>-1===n.indexOf(e)),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class b{encodeKey(e){return f(e)}encodeValue(e){return f(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}function f(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}class g{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new b,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const s=new Map;return e.length>0&&e.split("&").forEach(e=>{const r=e.indexOf("="),[n,o]=-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],a=s.get(n)||[];a.push(o),s.set(n,a)}),s}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const s=e.fromObject[t];this.map.set(t,Array.isArray(s)?s:[s])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(e=>t+"="+this.encoder.encodeValue(e)).join("&")}).join("&")}clone(e){const t=new g({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat([e]),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(e.value),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const s=t.indexOf(e.value);-1!==s&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}function w(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function v(e){return"undefined"!=typeof Blob&&e instanceof Blob}function T(e){return"undefined"!=typeof FormData&&e instanceof FormData}class E{constructor(e,t,s,r){let n;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,n=r):n=s,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.params&&(this.params=n.params)),this.headers||(this.headers=new m),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const s=t.indexOf("?");this.urlWithParams=t+(-1===s?"?":s<t.length-1?"&":"")+e}}else this.params=new g,this.urlWithParams=t}serializeBody(){return null===this.body?null:w(this.body)||v(this.body)||T(this.body)||"string"==typeof this.body?this.body:this.body instanceof g?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||T(this.body)?null:v(this.body)?this.body.type||null:w(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof g?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}clone(e={}){const t=e.method||this.method,s=e.url||this.url,r=e.responseType||this.responseType,n=void 0!==e.body?e.body:this.body,o=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let l=e.headers||this.headers,i=e.params||this.params;return void 0!==e.setHeaders&&(l=Object.keys(e.setHeaders).reduce((t,s)=>t.set(s,e.setHeaders[s]),l)),e.setParams&&(i=Object.keys(e.setParams).reduce((t,s)=>t.set(s,e.setParams[s]),i)),new E(t,s,n,{params:i,headers:l,reportProgress:a,responseType:r,withCredentials:o})}}const x=function(){var e={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return e[e.Sent]="Sent",e[e.UploadProgress]="UploadProgress",e[e.ResponseHeader]="ResponseHeader",e[e.DownloadProgress]="DownloadProgress",e[e.Response]="Response",e[e.User]="User",e}();class C{constructor(e,t=200,s="OK"){this.headers=e.headers||new m,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class O extends C{constructor(e={}){super(e),this.type=x.ResponseHeader}clone(e={}){return new O({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class R extends C{constructor(e={}){super(e),this.type=x.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new R({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class P extends C{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?"Http failure during parsing for "+(e.url||"(unknown url)"):`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function k(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}class S{constructor(e){this.handler=e}request(e,t,s={}){let r;if(e instanceof E)r=e;else{let n=void 0;n=s.headers instanceof m?s.headers:new m(s.headers);let o=void 0;s.params&&(o=s.params instanceof g?s.params:new g({fromObject:s.params})),r=new E(e,t,void 0!==s.body?s.body:null,{headers:n,params:o,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const n=Object(i.a)(r).pipe(Object(h.a)(e=>this.handler.handle(e)));if(e instanceof E||"events"===s.observe)return n;const o=n.pipe(Object(c.a)(e=>e instanceof R));switch(s.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return o.pipe(Object(d.a)(e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return o.pipe(Object(d.a)(e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return o.pipe(Object(d.a)(e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return o.pipe(Object(d.a)(e=>e.body))}case"response":return o;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new g).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,s={}){return this.request("PATCH",e,k(s,t))}post(e,t,s={}){return this.request("POST",e,k(s,t))}put(e,t,s={}){return this.request("PUT",e,k(s,t))}}class N{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const A=new r.o("HTTP_INTERCEPTORS");class j{intercept(e,t){return t.handle(e)}}const z=/^\)\]\}',?\n/;class D{}class L{constructor(){}build(){return new XMLHttpRequest}}class U{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new u.a(t=>{const s=this.xhrFactory.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((e,t)=>s.setRequestHeader(e,t.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&s.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();s.responseType="json"!==t?t:"text"}const r=e.serializeBody();let n=null;const o=()=>{if(null!==n)return n;const t=1223===s.status?204:s.status,r=s.statusText||"OK",o=new m(s.getAllResponseHeaders()),a=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(s)||e.url;return n=new O({headers:o,status:t,statusText:r,url:a}),n},a=()=>{let{headers:r,status:n,statusText:a,url:l}=o(),i=null;204!==n&&(i=void 0===s.response?s.responseText:s.response),0===n&&(n=i?200:0);let u=n>=200&&n<300;if("json"===e.responseType&&"string"==typeof i){const e=i;i=i.replace(z,"");try{i=""!==i?JSON.parse(i):null}catch(h){i=e,u&&(u=!1,i={error:h,text:i})}}u?(t.next(new R({body:i,headers:r,status:n,statusText:a,url:l||void 0})),t.complete()):t.error(new P({error:i,headers:r,status:n,statusText:a,url:l||void 0}))},l=e=>{const{url:r}=o(),n=new P({error:e,status:s.status||0,statusText:s.statusText||"Unknown Error",url:r||void 0});t.error(n)};let i=!1;const u=r=>{i||(t.next(o()),i=!0);let n={type:x.DownloadProgress,loaded:r.loaded};r.lengthComputable&&(n.total=r.total),"text"===e.responseType&&s.responseText&&(n.partialText=s.responseText),t.next(n)},h=e=>{let s={type:x.UploadProgress,loaded:e.loaded};e.lengthComputable&&(s.total=e.total),t.next(s)};return s.addEventListener("load",a),s.addEventListener("error",l),e.reportProgress&&(s.addEventListener("progress",u),null!==r&&s.upload&&s.upload.addEventListener("progress",h)),s.send(r),t.next({type:x.Sent}),()=>{s.removeEventListener("error",l),s.removeEventListener("load",a),e.reportProgress&&(s.removeEventListener("progress",u),null!==r&&s.upload&&s.upload.removeEventListener("progress",h)),s.abort()}})}}const H=new r.o("XSRF_COOKIE_NAME"),I=new r.o("XSRF_HEADER_NAME");class F{}class M{constructor(e,t,s){this.doc=e,this.platform=t,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(a.t)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}class J{constructor(e,t){this.tokenService=e,this.headerName=t}intercept(e,t){const s=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||s.startsWith("http://")||s.startsWith("https://"))return t.handle(e);const r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}class B{constructor(e,t){this.backend=e,this.injector=t,this.chain=null}handle(e){if(null===this.chain){const e=this.injector.get(A,[]);this.chain=e.reduceRight((e,t)=>new N(e,t),this.backend)}return this.chain.handle(e)}}class q{static disable(){return{ngModule:q,providers:[{provide:J,useClass:j}]}}static withOptions(e={}){return{ngModule:q,providers:[e.cookieName?{provide:H,useValue:e.cookieName}:[],e.headerName?{provide:I,useValue:e.headerName}:[]]}}}class K{}let _=(()=>{class e{constructor(e){this.http=e,this.REST_API_SERVER="http://localhost:3001/apis"}getProducts(){return this.http.get(this.REST_API_SERVER)}}return e.ngInjectableDef=r.Ib({factory:function(){return new e(r.Jb(S))},token:e,providedIn:"root"}),e})();var X=r.nb({encapsulation:0,styles:[[".image[_ngcontent-%COMP%]{min-width:100px;min-height:40px}"]],data:{}});function V(e){return r.Eb(0,[(e()(),r.pb(0,0,null,null,8,"div",[["class","row alert alert-secondary"]],null,null,null,null,null)),(e()(),r.pb(1,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(2,null,["",""])),(e()(),r.pb(3,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(4,null,["",""])),(e()(),r.pb(5,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(6,null,["",""])),(e()(),r.pb(7,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(8,null,["",""]))],null,(function(e,t){e(t,2,0,t.context.$implicit.id),e(t,4,0,t.context.$implicit.name),e(t,6,0,t.context.$implicit.description),e(t,8,0,t.context.$implicit.price)}))}function $(e){return r.Eb(0,[(e()(),r.pb(0,0,null,null,11,"div",[["class","content"]],null,null,null,null,null)),(e()(),r.pb(1,0,null,null,8,"div",[["class","row mt-4 alert alert-primary"]],null,null,null,null,null)),(e()(),r.pb(2,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(-1,null,["ID:"])),(e()(),r.pb(4,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(-1,null,["Name:"])),(e()(),r.pb(6,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(-1,null,["Description"])),(e()(),r.pb(8,0,null,null,1,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),r.Db(-1,null,["Price"])),(e()(),r.eb(16777216,null,null,1,null,V)),r.ob(11,278528,null,0,a.i,[r.M,r.J,r.q],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){e(t,11,0,t.component.productData)}),null)}function G(e){return r.Eb(0,[(e()(),r.pb(0,0,null,null,1,"app-products",[],null,null,null,$,X)),r.ob(1,114688,null,0,l,[_],null,null)],(function(e,t){e(t,1,0)}),null)}var W=r.lb("app-products",l,G,{},{},[]),Z=s("iInd");class Y{}s.d(t,"ProductsModuleNgFactory",(function(){return Q}));var Q=r.mb(n,[],(function(e){return r.xb([r.yb(512,r.j,r.X,[[8,[o.a,W]],[3,r.j],r.v]),r.yb(4608,a.k,a.j,[r.s,[2,a.s]]),r.yb(4608,F,M,[a.c,r.z,H]),r.yb(4608,J,J,[F,I]),r.yb(5120,A,(function(e){return[e]}),[J]),r.yb(4608,L,L,[]),r.yb(6144,D,null,[L]),r.yb(4608,U,U,[D]),r.yb(6144,y,null,[U]),r.yb(4608,p,B,[y,r.p]),r.yb(4608,S,S,[p]),r.yb(4608,_,_,[S]),r.yb(1073742336,a.b,a.b,[]),r.yb(1073742336,Z.m,Z.m,[[2,Z.r],[2,Z.k]]),r.yb(1073742336,Y,Y,[]),r.yb(1073742336,q,q,[]),r.yb(1073742336,K,K,[]),r.yb(1073742336,n,n,[]),r.yb(1024,Z.i,(function(){return[[{path:"",component:l}]]}),[]),r.yb(256,H,"XSRF-TOKEN",[]),r.yb(256,I,"X-XSRF-TOKEN",[])])}))}}]);