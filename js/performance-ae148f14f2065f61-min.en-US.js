"use strict";(self.webpackChunkextract_css=self.webpackChunkextract_css||[]).push([["25368"],{126457:function(I,S){Object.defineProperty(S,"__esModule",{value:!0}),S.default=void 0;var C;(function(l){l.MAIN_CONTENT=1,l.CONTENT_COLLECTION=1,l.PAGE=2,l.SPLASH_PAGE=3,l.CONTENT_ITEM=50,l.NOT_FOUND=100,l.ERROR=101,l.SEARCH=102,l.LOCK_SCREEN=103,l.POPUP_OVERLAY=104,l.PROTECTED_CONTENT=105,l.MEMBER_AREA_ACCESS_DENIED=106,l.PAYWALL=107,l.SHOW_CART=200,l.CHECKOUT=201,l.ORDER_CONFIRMED=202,l.DONATE=203,l.CONTRIBUTION_CONFIRMED=204,l.COMMERCE_CART_V2=205,l.SUBSCRIPTION_CONFIRMED=206,l.ORDER_RECEIVED=207,l.MEMBERSHIP_CONFIRMED=208,l.REVIEWS_REQUEST=209,l.DIGITAL_PRODUCT_COMPOSER_PREVIEW=210,l.ORDER_STATUS=211,l.NEWSLETTER_UNSUBSCRIBE=300,l.COMMERCE_EMAIL_PREVIEW=301,l.SSO_PAGE=400})(C||(C={}));var A=C;S.default=A,I.exports=S.default},880499:function(I,S,C){var A;A={value:!0};var l=C(605297),m=V(C(126457)),U=C(542833);function R(d,f,w){return f in d?Object.defineProperty(d,f,{value:w,enumerable:!0,configurable:!0,writable:!0}):d[f]=w,d}function V(d){return d&&d.__esModule?d:{default:d}}function Q(d){for(var f=1;f<arguments.length;f++){var w=arguments[f]!=null?arguments[f]:{},H=Object.keys(w);typeof Object.getOwnPropertySymbols=="function"&&(H=H.concat(Object.getOwnPropertySymbols(w).filter(function(N){return Object.getOwnPropertyDescriptor(w,N).enumerable}))),H.forEach(function(N){R(d,N,w[N])})}return d}var X={"commerce-cart":1,"v7-user-sites":1,"v7_1-user-sites":1},g=window.Static&&window.Static.SQUARESPACE_CONTEXT,b=window.top!==window,K=!!g&&Object.keys(g).length>0,J=Object.freeze({[m.default.COMMERCE_CART_V2]:"commerce-cart"});function L(){return{releaseVariant:"default",inFrame:b,templateId:g.templateId||"",impersonatedSession:!!g.impersonatedSession,pageType:typeof g.pageType=="number"?g.pageType:-1}}function B(){var d=g.website,f=d===void 0?{}:d;return{authenticUrl:f.authenticUrl||"",cloneable:!!f.cloneable,developerMode:!!f.developerMode,isHstsEnabled:!!f.isHstsEnabled,language:f.language||"",timeZone:f.timeZone||"",websiteId:f.id||"",websiteType:f.websiteType||-1}}function W(){var d=g.collection,f=d===void 0?{}:d;return{collectionType:f.type||-1}}function h(){var d=document.querySelectorAll('link[rel=preconnect][href*="typekit"]').length>0,f=document.querySelectorAll('script[src*="typekit"][async]').length>0;return{statsig_flag_async_typekit_enabled:d?f:void 0}}function F(){return g.hasOwnProperty("templateVersion")?g.templateVersion.replace(".","_"):null}function P(d){var f,w=(f=X[d])!==null&&f!==void 0?f:0;return Math.random()<=w}function T(d){var f=J[g.pageType],w={appName:f||"v".concat(d,"-user-sites"),context:Q({},L(),B(),W(),h()),captureException:(H,N)=>{(0,U.withScope)(ne=>{ne.setTag("product_area","rum-collector"),N!==void 0&&ne.setExtra("extras",N),(0,U.captureException)(H)})}};return P(w.appName)&&(w.serviceURL="https://performance.squarespace.com/api/v1/records"),w}function y(){if(K&&g.env==="PRODUCTION"){var d=F();if(d!==null){var f=T(d);(0,l.init)(f)}}}y()},542833:function(I,S){Object.defineProperty(S,"__esModule",{value:!0});function C(P,T){for(var y in T)Object.defineProperty(P,y,{enumerable:!0,get:T[y]})}C(S,{addBreadcrumb:function(){return K},captureEvent:function(){return B},captureException:function(){return L},captureMessage:function(){return J},configureScope:function(){return W},getCurrentScope:function(){return F},isSentryConnected:function(){return V},withScope:function(){return h}});var A,l=()=>{},m=P=>function(T){for(var y=arguments.length,d=new Array(y>1?y-1:0),f=1;f<y;f++)d[f-1]=arguments[f];return console.log("[Sentry][".concat(P,"] ").concat(T),...d),"some-error-identifier"},U=!1,R=P=>{var T=P.category,y=P.message;console.log("[Sentry][addBreadcrumb] (".concat(T,") ").concat(y))},V=!1;function Q(){return new Proxy({},{get:()=>l})}var X=function(){for(var T=arguments.length,y=new Array(T),d=0;d<T;d++)y[d]=arguments[d];var f=y.length===2?y[1]:y[0],w=Q();return f(w)},g,b=(g=(A=window)===null||A===void 0?void 0:A.SQUARESPACE_SENTRY)!==null&&g!==void 0?g:{addBreadcrumb:U?R:l,captureMessage:m("captureMessage"),captureException:m("captureException"),captureEvent:m("captureEvent"),getCurrentScope:Q,configureScope:l,withScope:X},K=b.addBreadcrumb,J=b.captureMessage,L=b.captureException,B=b.captureEvent,W=b.configureScope,h=b.withScope,F=b.getCurrentScope;window.SQUARESPACE_SENTRY?V=!0:console.warn("SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.")},605297:function(I){function S(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C(t){if(Array.isArray(t))return t}function A(t){if(Array.isArray(t))return S(t)}function l(t,e,n,r,a,i,o){try{var u=t[i](o),s=u.value}catch(c){n(c);return}u.done?e(s):Promise.resolve(s).then(r,a)}function m(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function o(s){l(i,r,a,o,u,"next",s)}function u(s){l(i,r,a,o,u,"throw",s)}o(void 0)})}}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R(t,e){return e!=null&&typeof Symbol!="undefined"&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):t instanceof e}function V(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Q(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,u;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(s){i=!0,u=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw u}}return r}}function X(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){U(t,a,n[a])})}return t}function K(t,e){if(t==null)return{};var n=J(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function J(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function L(t,e){return C(t)||Q(t,e)||W(t,e)||X()}function B(t){return A(t)||V(t)||W(t)||g()}function W(t,e){if(t){if(typeof t=="string")return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(t,e)}}function h(t,e){var n,r,a,i,o={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function u(c){return function(v){return s([c,v])}}function s(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=c[0]&2?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){o=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(c[0]===6&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=e.call(t,o)}catch(v){c=[6,v],r=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var F=Object.defineProperty,P=Object.getOwnPropertyDescriptor,T=Object.getOwnPropertyNames,y=Object.prototype.hasOwnProperty,d=function(t,e){return function(){return t&&(e=(0,t[T(t)[0]])(t=0)),e}},f=function(t,e){for(var n in e)F(t,n,{get:e[n],enumerable:!0})},w=function(t,e,n,r){if(e&&typeof e=="object"||typeof e=="function"){var a=!0,i=!1,o=void 0;try{for(var u=function(){var v=c.value;!y.call(t,v)&&v!==n&&F(t,v,{get:function(){return e[v]},enumerable:!(r=P(e,v))||r.enumerable})},s=T(e)[Symbol.iterator](),c;!(a=(c=s.next()).done);a=!0)u()}catch(v){i=!0,o=v}finally{try{!a&&s.return!=null&&s.return()}finally{if(i)throw o}}}return t},H=function(t){return w(F({},"__esModule",{value:!0}),t)},N,ne=d({"../../node_modules/.pnpm/nanoid@5.0.1/node_modules/nanoid/url-alphabet/index.js":function(){"use strict";N="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"}}),Re={};f(Re,{customAlphabet:function(){return Me},customRandom:function(){return ve},nanoid:function(){return Ie},random:function(){return le},urlAlphabet:function(){return N}});var le,ve,Me,Ie,Wt=d({"../../node_modules/.pnpm/nanoid@5.0.1/node_modules/nanoid/index.browser.js":function(){"use strict";ne(),le=function(t){return crypto.getRandomValues(new Uint8Array(t))},ve=function(t,e,n){var r=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*r*e/t.length);return function(){for(var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e,o="";;)for(var u=n(a),s=a;s--;)if(o+=t[u[s]&r]||"",o.length===i)return o}},Me=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:21;return ve(t,e,le)},Ie=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce(function(e,n){return n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e},"")}}}),xe={};f(xe,{RUM_PREFIX:function(){return G},default:function(){return cr},getA11yData:function(){return Pt},getCumulativeLayoutShift:function(){return St},getDomainLookup:function(){return Fe},getFirstContentfulPaint:function(){return bt},getFirstInputDelay:function(){return Tt},getInteractionToNextPaint:function(){return Ct},getLargestContentfulPaint:function(){return At},getNavigationTimingType:function(){return He},getPerformanceMetrics:function(){return Ce},getServerTiming:function(){return qe},getTcpConnection:function(){return je},getTlsNegotiation:function(){return Ve},init:function(){return Ft},mark:function(){return Qn},measure:function(){return Wn},trackEventsV2Factory:function(){return or},trackLoadPerformance:function(){return ur},trackSqspImages:function(){return Mt}}),I.exports=H(xe);var De={};f(De,{getCumulativeLayoutShift:function(){return St},getDomainLookup:function(){return Fe},getFirstContentfulPaint:function(){return bt},getFirstInputDelay:function(){return Tt},getInteractionToNextPaint:function(){return Ct},getLargestContentfulPaint:function(){return At},getNavigationTimingType:function(){return He},getServerTiming:function(){return qe},getTcpConnection:function(){return je},getTlsNegotiation:function(){return Ve}});var Yt="/api/1/performance/records",zt="load",re="visibilitychange",Gt=["Tab","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","End","Home","PageDown","PageUp"," ","Enter"],Xt="SS_MID",Kt="SS_ANALYTICS_ID",Jt=3e4,Zt=/(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i,pe=200,$t="4.13.1",me=function(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return new Promise(function(a,i){try{t.apply(void 0,[function(o){a(o)}].concat(B(n)))}catch(o){i(o)}})}},ke=function(t){return me(setTimeout)(t)},Ue=function(){return me(function(t){var e=function(n){(n.type==="pagehide"||document.visibilityState==="hidden")&&(t(n),removeEventListener("visibilitychange",e,!0),removeEventListener("pagehide",e,!0))};window.addEventListener("visibilitychange",e,!0),window.addEventListener("pagehide",e,!0)})()},en=function(t){document.readyState==="complete"?window.setTimeout(t,0):window.addEventListener("pageshow",t,{once:!0})},tn=function(){return me(en)},nn=function(){var t={entryType:"navigation",startTime:0},e=performance.timing;for(var n in e)if(n!=="navigationStart"&&n!=="toJSON"){var r=Math.max(e[n]-e.navigationStart,0);t[n]=r}return t},ge=function(){var t=m(function(){var e,n;return h(this,function(r){switch(r.label){case 0:return[4,tn()];case 1:return r.sent(),e=L(window.performance.getEntriesByType("navigation"),1),n=e[0],[2,n!=null?n:nn()]}})});return function(){return t.apply(this,arguments)}}(),q=function(){var t=m(function(e){var n,r;return h(this,function(a){switch(a.label){case 0:return[4,ge()];case 1:return n=a.sent(),r=n[e],typeof r!="number"||r<0||r>2147483647?[2]:[2,Math.round(r)]}})});return function(n){return t.apply(this,arguments)}}(),rn=function(){var t=m(function(){var e;return h(this,function(n){switch(n.label){case 0:return[4,ge()];case 1:return e=n.sent(),[2,e.serverTiming]}})});return function(){return t.apply(this,arguments)}}(),Be=function(){var t=m(function(e){var n,r;return h(this,function(a){switch(a.label){case 0:return[4,ge()];case 1:return n=a.sent(),r=n[e],typeof r!="string"?[2]:[2,r]}})});return function(n){return t.apply(this,arguments)}}(),he=function(t,e){if(typeof t=="number"&&typeof e=="number"&&t>=e)return t-e},Fe=function(t){return Promise.all([q("domainLookupEnd"),q("domainLookupStart")]).then(function(e){var n=L(e,2),r=n[0],a=n[1];t({domainLookup:he(r,a)})})},He=function(t){return Be("type").then(function(e){t({navigationTimingType:e})})},qe=function(t){return rn().then(function(e){t({serverTiming:JSON.stringify(e)})})},je=function(t){return Promise.all([q("connectEnd"),q("connectStart")]).then(function(e){var n=L(e,2),r=n[0],a=n[1];t({tcpConnection:he(r,a)})})},Ve=function(t){return Promise.all([q("connectEnd"),q("secureConnectionStart")]).then(function(e){var n=L(e,2),r=n[0],a=n[1];t({tlsNegotiation:he(r,a)})})},x,Z,Qe,ae,ye,We=-1,$=function(e){addEventListener("pageshow",function(n){n.persisted&&(We=n.timeStamp,e(n))},!0)},Ye=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},ze=function(){var e=Ye();return e&&e.activationStart||0},D=function(e,n){var r=Ye(),a="navigate";return We>=0?a="back-forward-cache":r&&(document.prerendering||ze()>0?a="prerender":document.wasDiscarded?a="restore":r.type&&(a=r.type.replace(/_/g,"-"))),{name:e,value:n===void 0?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:a}},ee=function(e,n,r){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var a=new PerformanceObserver(function(i){Promise.resolve().then(function(){n(i.getEntries())})});return a.observe(Object.assign({type:e,buffered:!0},r||{})),a}}catch(i){}},k=function(e,n,r,a){var i,o;return function(u){n.value>=0&&(u||a)&&((o=n.value-(i||0))||i===void 0)&&(i=n.value,n.delta=o,n.rating=function(s,c){return s>c[1]?"poor":s>c[0]?"needs-improvement":"good"}(n.value,r),e(n))}},Ge=function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})},we=function(e){var n=function(a){a.type!=="pagehide"&&document.visibilityState!=="hidden"||e(a)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Xe=function(e){var n=!1;return function(r){n||(e(r),n=!0)}},Y=-1,Ke=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},ie=function(e){document.visibilityState==="hidden"&&Y>-1&&(Y=e.type==="visibilitychange"?e.timeStamp:0,an())},Je=function(){addEventListener("visibilitychange",ie,!0),addEventListener("prerenderingchange",ie,!0)},an=function(){removeEventListener("visibilitychange",ie,!0),removeEventListener("prerenderingchange",ie,!0)},Ze=function(){return Y<0&&(Y=Ke(),Je(),$(function(){setTimeout(function(){Y=Ke(),Je()},0)})),{get firstHiddenTime(){return Y}}},_e=function(e){document.prerendering?addEventListener("prerenderingchange",function(){return e()},!0):e()},$e=[1800,3e3],et=function(e,n){n=n||{},_e(function(){var r,a=Ze(),i=D("FCP"),o=ee("paint",function(u){u.forEach(function(s){s.name==="first-contentful-paint"&&(o.disconnect(),s.startTime<a.firstHiddenTime&&(i.value=Math.max(s.startTime-ze(),0),i.entries.push(s),r(!0)))})});o&&(r=k(e,i,$e,n.reportAllChanges),$(function(u){i=D("FCP"),r=k(e,i,$e,n.reportAllChanges),Ge(function(){i.value=performance.now()-u.timeStamp,r(!0)})}))})},tt=[.1,.25],on=function(e,n){n=n||{},et(Xe(function(){var r,a=D("CLS",0),i=0,o=[],u=function(v){v.forEach(function(p){if(!p.hadRecentInput){var _=o[0],E=o[o.length-1];i&&p.startTime-E.startTime<1e3&&p.startTime-_.startTime<5e3?(i+=p.value,o.push(p)):(i=p.value,o=[p])}}),i>a.value&&(a.value=i,a.entries=o,r())},s=ee("layout-shift",u);s&&(r=k(e,a,tt,n.reportAllChanges),we(function(){u(s.takeRecords()),r(!0)}),$(function(){i=0,a=D("CLS",0),r=k(e,a,tt,n.reportAllChanges),Ge(function(){return r()})}),setTimeout(r,0))}))},te={passive:!0,capture:!0},un=new Date,nt=function(e,n){x||(x=n,Z=e,Qe=new Date,at(removeEventListener),rt())},rt=function(){if(Z>=0&&Z<Qe-un){var e={entryType:"first-input",name:x.type,target:x.target,cancelable:x.cancelable,startTime:x.timeStamp,processingStart:x.timeStamp+Z};ae.forEach(function(n){n(e)}),ae=[]}},cn=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;e.type=="pointerdown"?function(r,a){var i=function(){nt(r,a),u()},o=function(){u()},u=function(){removeEventListener("pointerup",i,te),removeEventListener("pointercancel",o,te)};addEventListener("pointerup",i,te),addEventListener("pointercancel",o,te)}(n,e):nt(n,e)}},at=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(n){return e(n,cn,te)})},it=[100,300],sn=function(e,n){n=n||{},_e(function(){var r,a=Ze(),i=D("FID"),o=function(v){v.startTime<a.firstHiddenTime&&(i.value=v.processingStart-v.startTime,i.entries.push(v),r(!0))},u=function(v){v.forEach(o)},s=ee("first-input",u);r=k(e,i,it,n.reportAllChanges),s&&we(Xe(function(){u(s.takeRecords()),s.disconnect()})),s&&$(function(){var c;i=D("FID"),r=k(e,i,it,n.reportAllChanges),ae=[],Z=-1,x=null,at(addEventListener),c=o,ae.push(c),rt()})})},ot=0,Ee=1/0,oe=0,fn=function(e){e.forEach(function(n){n.interactionId&&(Ee=Math.min(Ee,n.interactionId),oe=Math.max(oe,n.interactionId),ot=oe?(oe-Ee)/7+1:0)})},ut=function(){return ye?ot:performance.interactionCount||0},dn=function(){"interactionCount"in performance||ye||(ye=ee("event",fn,{type:"event",buffered:!0,durationThreshold:0}))},ct=[200,500],st=0,ft=function(){return ut()-st},O=[],Se={},dt=function(e){var n=O[O.length-1],r=Se[e.interactionId];if(r||O.length<10||e.duration>n.latency){if(r)r.entries.push(e),r.latency=Math.max(r.latency,e.duration);else{var a={id:e.interactionId,latency:e.duration,entries:[e]};Se[a.id]=a,O.push(a)}O.sort(function(i,o){return o.latency-i.latency}),O.splice(10).forEach(function(i){delete Se[i.id]})}},ln=function(e,n){n=n||{},_e(function(){var r;dn();var a,i=D("INP"),o=function(c){c.forEach(function(_){_.interactionId&&dt(_),_.entryType==="first-input"&&!O.some(function(E){return E.entries.some(function(M){return _.duration===M.duration&&_.startTime===M.startTime})})&&dt(_)});var v,p=(v=Math.min(O.length-1,Math.floor(ft()/50)),O[v]);p&&p.latency!==i.value&&(i.value=p.latency,i.entries=p.entries,a())},u=ee("event",o,{durationThreshold:(r=n.durationThreshold)!==null&&r!==void 0?r:40});a=k(e,i,ct,n.reportAllChanges),u&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&u.observe({type:"first-input",buffered:!0}),we(function(){o(u.takeRecords()),i.value<0&&ft()>0&&(i.value=0,i.entries=[]),a(!0)}),$(function(){O=[],st=ut(),i=D("INP"),a=k(e,i,ct,n.reportAllChanges)}))})},be=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},vn=function(e){var n=e.nodeName;return e.nodeType===1?n.toLowerCase():n.toUpperCase().replace(/^#/,"")},pn=function(e,n){var r="";try{for(;e&&e.nodeType!==9;){var a=e,i=a.id?"#"+a.id:vn(a)+(a.classList&&a.classList.value&&a.classList.value.trim()&&a.classList.value.trim().length?"."+a.classList.value.trim().replace(/\s+/g,"."):"");if(r.length+i.length>(n||100)-1)return r||i;if(r=r?i+">"+r:i,a.id)break;e=a.parentNode}}catch(o){}return r},lt=-1,mn=function(){return lt},vt=function(e){addEventListener("pageshow",function(n){n.persisted&&(lt=n.timeStamp,e(n))},!0)},pt=function(){var e=be();return e&&e.activationStart||0},mt=function(e,n){var r=be(),a="navigate";return mn()>=0?a="back-forward-cache":r&&(document.prerendering||pt()>0?a="prerender":document.wasDiscarded?a="restore":r.type&&(a=r.type.replace(/_/g,"-"))),{name:e,value:n===void 0?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:a}},gn=function(e,n,r){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var a=new PerformanceObserver(function(i){Promise.resolve().then(function(){n(i.getEntries())})});return a.observe(Object.assign({type:e,buffered:!0},r||{})),a}}catch(i){}},gt=function(e,n,r,a){var i,o;return function(u){n.value>=0&&(u||a)&&((o=n.value-(i||0))||i===void 0)&&(i=n.value,n.delta=o,n.rating=function(s,c){return s>c[1]?"poor":s>c[0]?"needs-improvement":"good"}(n.value,r),e(n))}},hn=function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})},yn=function(e){var n=function(a){a.type!=="pagehide"&&document.visibilityState!=="hidden"||e(a)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},wn=function(e){var n=!1;return function(r){n||(e(r),n=!0)}},z=-1,ht=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},ue=function(e){document.visibilityState==="hidden"&&z>-1&&(z=e.type==="visibilitychange"?e.timeStamp:0,_n())},yt=function(){addEventListener("visibilitychange",ue,!0),addEventListener("prerenderingchange",ue,!0)},_n=function(){removeEventListener("visibilitychange",ue,!0),removeEventListener("prerenderingchange",ue,!0)},En=function(){return z<0&&(z=ht(),yt(),vt(function(){setTimeout(function(){z=ht(),yt()},0)})),{get firstHiddenTime(){return z}}},Sn=function(e){document.prerendering?addEventListener("prerenderingchange",function(){return e()},!0):e()},fr=null,wt=[2500,4e3],Te={},bn=function(e,n){(function(r,a){a=a||{},Sn(function(){var i,o=En(),u=mt("LCP"),s=function(_){var E=_[_.length-1];E&&E.startTime<o.firstHiddenTime&&(u.value=Math.max(E.startTime-pt(),0),u.entries=[E],i())},c=gn("largest-contentful-paint",s);if(c){i=gt(r,u,wt,a.reportAllChanges);var v=wn(function(){Te[u.id]||(s(c.takeRecords()),c.disconnect(),Te[u.id]=!0,i(!0))});["keydown","click"].forEach(function(p){addEventListener(p,function(){return setTimeout(v,0)},!0)}),yn(v),vt(function(p){u=mt("LCP"),i=gt(r,u,wt,a.reportAllChanges),hn(function(){u.value=performance.now()-p.timeStamp,Te[u.id]=!0,i(!0)})})}})})(function(r){(function(a){if(a.entries.length){var i=be();if(i){var o=i.activationStart||0,u=a.entries[a.entries.length-1],s=u.url&&performance.getEntriesByType("resource").filter(function(M){return M.name===u.url})[0],c=Math.max(0,i.responseStart-o),v=Math.max(c,s?(s.requestStart||s.startTime)-o:0),p=Math.max(v,s?s.responseEnd-o:0),_=Math.max(p,u?u.startTime-o:0),E={element:pn(u.element),timeToFirstByte:c,resourceLoadDelay:v-c,resourceLoadTime:p-v,elementRenderDelay:_-p,navigationEntry:i,lcpEntry:u};return u.url&&(E.url=u.url),s&&(E.lcpResourceEntry=s),void(a.attribution=E)}}a.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:a.value}})(r),e(r)},n)},Tn=function(t){var e=t.getAttribute("elementtiming");if(e!==null)return e;var n=t.tagName;if(n==="IMG"){var r=t.getAttribute("data-loader");if(r!==null)return"unknown-image-component-".concat(r);var a=t.getAttribute("data-src")!==null;if(a)return"unknown-imageloader"}return"unknown-".concat(n)},_t=function(t){var e,n="";n+=t.tagName;var r=t,a=-1;do r=r.previousElementSibling,a+=1;while(r!==null);n+="["+a+"]";var i=(e=t.classList.value)===null||e===void 0?void 0:e.trim().replace(/\s+/g,".");return i&&(n+="."+i),n},Et=function(t){return t.substring(0,pe-3)+"..."},Cn=function(t){var e=_t(t);if(e.length>pe)return Et(e);for(var n=t.parentElement;n!==null&&n.tagName!=="BODY";){var r="<"+_t(n);if(e+=r,e.length>pe)return Et(e);n=n.parentElement}return e},An=function(t){var e,n=(e=t.attribution.lcpEntry)===null||e===void 0?void 0:e.element;return{largestContentfulPaint:Math.round(t.value),lcpElementName:n?Tn(n):void 0,lcpElementPath:n?Cn(n):void 0,lcpElementRenderDelay:Math.round(t.attribution.elementRenderDelay),lcpResourceLoadDelay:Math.round(t.attribution.resourceLoadDelay),lcpResourceLoadTime:Math.round(t.attribution.resourceLoadTime),lcpTtfb:Math.round(t.attribution.timeToFirstByte)}},St=function(t){on(function(e){t({cumulativeLayoutShift:e.value})},{reportAllChanges:!0})},bt=function(t){et(function(e){t({firstContentfulPaint:Math.round(e.value)})})},Tt=function(t){sn(function(e){t({firstInputDelay:Math.round(e.value)})})},Ct=function(t){ln(function(e){t({interactionToNextPaint:Math.round(e.value)})})},At=function(t){bn(function(e){t(An(e))})},Ln=["connectEnd","connectStart","decodedBodySize","domComplete","domContentLoadedEventEnd","domContentLoadedEventStart","domInteractive","encodedBodySize","fetchStart","loadEventEnd","loadEventStart","redirectCount","redirectEnd","redirectStart","responseStart","responseEnd","responseStatus","secureConnectionStart","transferSize","unloadEventEnd","unloadEventStart","workerStart"],Pn=["initiatorType","nextHopProtocol"],Lt=function(t,e){return function(){var n=m(function(r){var a,i,o,u,s;return h(this,function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),a=[{},r],[4,t(r)];case 1:return e.apply(void 0,[U.apply(void 0,a.concat([c.sent()]))]),[3,3];case 2:return i=c.sent(),(s=window)===null||s===void 0||(u=s.SQUARESPACE_SENTRY)===null||u===void 0||(o=u.captureException)===null||o===void 0||o.call(u,i),[3,3];case 3:return[2]}})});return function(r){return n.apply(this,arguments)}}()};function Ce(t){Object.values(De).forEach(function(){var e=m(function(n){var r,a,i,o;return h(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),[4,n(t)];case 1:return u.sent(),[3,3];case 2:return r=u.sent(),(o=window)===null||o===void 0||(i=o.SQUARESPACE_SENTRY)===null||i===void 0||(a=i.captureException)===null||a===void 0||a.call(i,r),[3,3];case 3:return[2]}})});return function(n){return e.apply(this,arguments)}}()),Ln.forEach(Lt(q,t)),Pn.forEach(Lt(Be,t))}var Nn=["more","less","custom"],On=function(){var t;return(t=Nn.find(function(e){return window.matchMedia("prefers-contrast: ".concat(e)).matches}))!==null&&t!==void 0?t:"no-preference"},Pt=function(){var t;return{forceColors:window.matchMedia("(forced-colors: active)").matches,networkInformationType:(t=navigator.connection)===null||t===void 0?void 0:t.type,prefersContrast:On(),prefersReducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches,primaryInputHasHover:window.matchMedia("(hover: hover)").matches,keyboardUsage:!1}},Rn=function(t){var e=Pt(),n=function(){t(e,"a11y")},r=function(i){var o;["INPUT","TEXTAREA"].includes((o=i.target)===null||o===void 0?void 0:o.tagName)||!Gt.includes(i.key)||(e.keyboardUsage=!0,document.removeEventListener("keydown",r))};document.addEventListener("keydown",r);var a=function(){document.visibilityState==="hidden"&&(n(),document.removeEventListener("keydown",r),document.removeEventListener(re,a))};document.addEventListener(re,a)};function Nt(t){var e=new RegExp("(^| )".concat(t,"=([^;]+)")),n=document.cookie.match(e);return n?n[2]:""}function Mn(){return!!(window.PerformanceMeasure&&window.PerformanceMark)}function Ot(){if(!Object.prototype.hasOwnProperty.call(window,"PerformanceObserver"))return!1;try{var t=new window.PerformanceObserver(function(){return null});t.observe({entryTypes:["mark"]}),t.disconnect()}catch(e){return!1}return!0}function Rt(){var t;return typeof((t=window.navigator)===null||t===void 0?void 0:t.sendBeacon)=="function"&&!Zt.test(window.navigator.userAgent)}var ce=function(t){var e=Number(t);return Number.isNaN(e)?void 0:e};function In(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e,n,r,a,i,o,u;return{context:t,analyticsId:Nt(Kt),marketingId:Nt(Xt),memberId:(r=window.Static)===null||r===void 0||(n=r.SQUARESPACE_CONTEXT)===null||n===void 0||(e=n.authenticatedAccount)===null||e===void 0?void 0:e.id,version:$t,downlink:ce((a=navigator.connection)===null||a===void 0?void 0:a.downlink),effectiveType:(i=navigator.connection)===null||i===void 0?void 0:i.effectiveType,rtt:ce((o=navigator.connection)===null||o===void 0?void 0:o.rtt),saveData:Number(((u=navigator.connection)===null||u===void 0?void 0:u.saveData)||0),deliveryType:Rt()?"beacon":"xhr",devicePixelRatio:window.devicePixelRatio,screenHeight:window.screen.height,screenWidth:window.screen.width,viewportHeight:window.innerHeight,viewportWidth:window.innerWidth,deviceMemory:ce(navigator.deviceMemory),hardwareConcurrency:ce(navigator.hardwareConcurrency),hash:window.location.hash||"",hostname:window.location.hostname||"",pathname:window.location.pathname||"/"}}var xn=function(){var t=m(function(e){var n,r;return h(this,function(a){switch(a.label){case 0:return n=In(e),r={},Ce(function(i){Object.assign(r,i)}),[4,Promise.race([ke(6e4),Ue()])];case 1:return a.sent(),[2,b({},n,r)]}})});return function(n){return t.apply(this,arguments)}}(),Dn=function(){var t=m(function(e,n){var r;return h(this,function(a){switch(a.label){case 0:return[4,xn(n)];case 1:return r=a.sent(),e(r,"page_speed"),[2]}})});return function(n,r){return t.apply(this,arguments)}}(),kn=["media-www.sqspcdn.com","images.squarespace-cdn.com","static1.squarespace.com"],Un=function(t){return kn.some(function(e){return t.includes(e)})},Bn=function(t){return t.hasAttribute("data-loader")?2:t.hasAttribute("data-src")?1:0},Fn=function(t,e){if(t.hasAttribute("data-image-resolution")){var n;return Number((n=t.getAttribute("data-image-resolution"))===null||n===void 0?void 0:n.replace("w",""))}var r=e.indexOf("format=");return r!==-1?Number(e.slice(r+7).replace(/w.*/,"")):NaN},Hn=function(t,e,n){if(n===1&&R(t,HTMLImageElement)&&t.naturalHeight===0){var r=document.querySelector('div[style*="'.concat(e,'"]'));if(r)return r}return t},qn=function(t){if(R(t,HTMLImageElement)){var e=t.naturalHeight,n=t.naturalWidth,r=t.width,a=t.height;return{naturalHeight:e,naturalWidth:n,width:r,height:a}}var i=t.getBoundingClientRect(),o=Math.floor(i.width),u=Math.floor(i.height);return{naturalHeight:u,naturalWidth:o}},jn=function(){var t=m(function(e,n){var r,a,i,o,u,s,c,v,p,_,E,M,qt,Pe,jt,Ne,fe,Vt;return h(this,function(dr){r=Fn(n,e.name),a=Bn(n),i=n.getAttribute("data-loader"),o=n.getAttribute("elementtiming"),u=e.toJSON(),s=u.serverTiming,c=u.workerTiming,v=K(u,["serverTiming","workerTiming"]),p=!0,_=!1,E=void 0;try{for(M=Object.entries(v)[Symbol.iterator]();!(p=(qt=M.next()).done);p=!0)Pe=L(qt.value,2),jt=Pe[0],Ne=Pe[1],typeof Ne=="number"&&(v[jt]=Math.floor(Ne))}catch(Oe){_=!0,E=Oe}finally{try{!p&&M.return!=null&&M.return()}finally{if(_)throw E}}return fe=Hn(n,e.name,a),Vt=qn(fe),[2,new Promise(function(Oe){var Qt=new IntersectionObserver(function(sr){sr.forEach(function(de){if(de.target===fe)return Qt.disconnect(),Oe(b({visibleOnLoad:de.isIntersecting,observationTime:Math.floor(de.time),intersectionRatio:de.intersectionRatio,squarespaceSize:r,imageType:a,imageLoaderType:i,elementTiming:o},Vt,v))})});Qt.observe(fe)})]})});return function(n,r){return t.apply(this,arguments)}}(),Vn=function(){var t=m(function(e){var n,r,a,i,o;return h(this,function(u){switch(u.label){case 0:return n=e.resource,r=e.deliverMetrics,!(R(n,PerformanceResourceTiming)&&n.initiatorType==="img")||!Un(n.name)?[2]:(a=n.name.replace(/\?.*/,""),i=Array.from(document.querySelectorAll('img[src="'.concat(n.name,'"], img[data-src*="').concat(a,'"], img[srcset*="').concat(n.name,'"]'))),document.querySelectorAll('picture > source[srcset*="'.concat(n.name,'"]')).forEach(function(s){var c=s.parentElement;c!==null&&i.push(c.lastElementChild)}),i.length!==1?[2]:[4,jn(n,i[0])]);case 1:return o=u.sent(),r(o,"image"),[2]}})});return function(n){return t.apply(this,arguments)}}(),Mt=function(){var t=m(function(e){var n,r;return h(this,function(a){return Ot()?(n=function(i){return Vn({resource:i,deliverMetrics:e})},performance.getEntriesByType("resource").forEach(n),r=new PerformanceObserver(function(i){i.getEntries().forEach(n)}),r.observe({entryTypes:["resource"]}),[2]):[2]})});return function(n){return t.apply(this,arguments)}}(),j,Ae=function(t){var e=t.spanName,n=t.tracer,r=t.startTime,a=t.spanAttributes,i=a===void 0?{}:a;j===void 0&&(j=new Map);var o=n.startSpan(e,{startTime:r});o.setAttributes(i),j.set(e,o)},It=function(t){var e=t.spanName,n=t.spanAttributes,r=n===void 0?{}:n,a=t.updateName;if(!(j===void 0||!j.has(e))){var i=j.get(e);i.setAttributes(r),a!==void 0&&i.updateName(a),i.end(),j.delete(e)}},G="rum-",xt=function(t){var e,n;typeof((n=window)===null||n===void 0||(e=n.SQUARESPACE_SENTRY)===null||e===void 0?void 0:e.captureException)=="function"?window.SQUARESPACE_SENTRY.captureException(t):console.warn("@sqs/rum-collector: user timing exception: ".concat(t))};function Qn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{if(!Dt())return;var n=G+t;window.performance.clearMarks(n);var r=window.performance.mark(n,{detail:e.detail,startTime:e.startTime});if(e.tracer!==void 0){var a=L(window.performance.getEntriesByName(n,"mark").slice(-1),1),i=a[0];Ae({spanName:n,tracer:e.tracer,startTime:i.startTime,spanAttributes:e.spanAttributes})}return r}catch(o){xt(o)}}function Wn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{requireStart:!1};try{if(!(Dt()&&Yn()))return;var n=G+t,r={detail:e.detail,duration:e.duration};if(e.start===void 0?window.performance.getEntriesByName(n,"mark").length>0&&(r.start=n):typeof e.start=="string"?r.start=G+e.start:r.start=e.start,r.end=typeof e.end=="string"?G+e.end:e.end,e.requireStart&&typeof r.start!="string")return;if(e.tracer!==void 0){var a=b({measureName:n},e.spanAttributes);if(typeof r.start=="number")Ae({spanName:n,tracer:e.tracer,startTime:r.start}),It({spanName:n,spanAttributes:a});else{var i;if(window.performance.getEntriesByName((i=r.start)!==null&&i!==void 0?i:n,"mark").length===0){var o;Ae({spanName:(o=r.start)!==null&&o!==void 0?o:n,tracer:e.tracer,startTime:0})}var u;It({spanName:(u=r.start)!==null&&u!==void 0?u:n,spanAttributes:a,updateName:r.start!==n?n:void 0})}}Gn(n,r);var s=zn(n);return s}catch(c){xt(c)}}function Yn(){return"performance"in window&&"getEntries"in window.performance&&"getEntriesByType"in window.performance&&"getEntriesByName"in window.performance}function Dt(){return"mark"in window.performance&&"measure"in window.performance}function zn(t){var e=window.performance.getEntriesByName(t,"measure");return e[e.length-1]}function Gn(t,e){try{window.performance.measure(t,e)}catch(a){var n=typeof e.start=="string"?e.start:t,r=typeof e.end=="string"?e.end:void 0;try{window.performance.measure(t,n,r)}catch(i){if(!R(i,DOMException))throw i;try{window.performance.measure(t,"navigationStart")}catch(o){if(!R(o,DOMException))throw o;window.performance.measure(t)}}}}function Xn(t){return typeof t=="string"&&t.substring(0,4)===G}var kt=new Set,Kn=function(t){if(Mn()){var e=function(r){var a=r.map(function(i){return i.entryType==="measure"?{duration:Math.floor(i.duration),detail:i.detail||null,startTime:Math.floor(i.startTime),name:i.name}:{}});a.forEach(function(i){if(!(i.name&&!Xn(i.name))){var o="".concat(i.name,"|").concat(i.duration);kt.has(o)||(t(i,"user"),kt.add(o))}})};if(e(window.performance.getEntriesByType("measure")),Ot()){var n=new window.PerformanceObserver(function(r){return e(r.getEntries())});n.observe({entryTypes:["measure"]})}else document.addEventListener(re,function(){document.visibilityState==="hidden"&&e(window.performance.getEntriesByType("measure"))})}},Ut,se=[],Jn=function(t){se.push(t)};function Zn(t,e){if(!(Rt()&&navigator.sendBeacon(t,e))){var n=new XMLHttpRequest;n.open("POST",t,!0),n.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),n.send(e)}}function Bt(t){if(se.length){var e=JSON.stringify(se);Zn(t,e),se=[]}}function $n(t){window.addEventListener(zt,function(){Ut=window.setTimeout(function(){return Bt(t)},Jt)}),document.addEventListener(re,function(){document.visibilityState==="hidden"&&(window.clearTimeout(Ut),Bt(t))})}function er(t){Jn(b({raw:!0},t))}var tr=function(t,e){return function(n,r){var a={app:t,data:n,event:r,pageLoadId:e,ts:Date.now()};er(a)}},nr=function(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t&&t.apply(void 0,B(n))}},rr=function(t){var e={appName:t.appName||"",context:t.context||{},enabled:typeof t.enabled=="boolean"?t.enabled:!0,serviceURL:t.serviceURL||Yt,captureException:nr(t.captureException)};return e};function Ft(t){return Le.apply(this,arguments)}function Le(){return Le=m(function(t){var e,n,r;return h(this,function(a){switch(a.label){case 0:return e=rr(t),e.enabled?[4,Promise.resolve().then(function(){return Wt(),Re})]:[2];case 1:n=a.sent().nanoid();try{r=tr(e.appName,n),Dn(r,e.context),Kn(r),Mt(r),Rn(r),$n(e.serviceURL)}catch(i){e.captureException(i,{pageLoadId:n,parsedOptions:e})}return[2]}})}),Le.apply(this,arguments)}var ar={action:"load",actor:"user",event_owner_team:"web_performance",event_source:"web",object_type:"website"},ir=function(){var t=/^qa\d+.sqsp.net/g,e=/^stage.sqsp.net/g,n=/(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g,r=window.location.hostname.substr(window.location.hostname.indexOf(".")+1);return e.test(r)||t.test(r)?"staging":n.test(r)?"dev":"prod"},or=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ir();return new t({customSchemaName:"Performance",sourceEnvironment:e},ar)},Ht=Object.freeze({cumulativeLayoutShift:"cumulative_layout_shift",decodedBodySize:"decoded_body_size_bytes",domContentLoadedEventEnd:"dom_content_loaded_event_end_ms",domContentLoadedEventStart:"dom_content_loaded_event_start_ms",domainLookup:"domain_lookup_ms",encodedBodySize:"encoded_body_size_bytes",firstContentfulPaint:"first_contentful_paint_ms",firstInputDelay:"first_input_delay_ms",interactionToNextPaint:"interaction_to_next_paint_ms",largestContentfulPaint:"largest_contentful_paint_ms",loadEventEnd:"load_event_end_ms",loadEventStart:"load_event_start_ms",responseStart:"response_start_ms",tcpConnection:"tcp_connection_ms",tlsNegotiation:"tls_negotiation_ms"}),ur=function(){var t=m(function(e){var n;return h(this,function(r){switch(r.label){case 0:return n={},Ce(function(a){Object.entries(a).forEach(function(i){var o=L(i,2),u=o[0],s=o[1];Object.prototype.hasOwnProperty.call(Ht,u)&&(n[Ht[u]]=s)})}),[4,Promise.race([ke(6e4),Ue()])];case 1:return r.sent(),e(n),[2]}})});return function(n){return t.apply(this,arguments)}}();function cr(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return console.warn("@sqs/rum-collector default export is deprecated. Use named export `init` instead."),Ft.apply(void 0,B(e))}}},function(I){var S=function(A){return I(I.s=A)},C=S("880499")}]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/f9ace9d94108061a/performance-ae148f14f2065f61-min.en-US.js.map