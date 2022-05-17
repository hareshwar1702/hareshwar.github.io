"use strict";(self.webpackChunkiot_station=self.webpackChunkiot_station||[]).push([[186],{1186:function(t,e,n){n.r(e),n.d(e,{startInputShims:function(){return y}});var r=n(5861),o=n(7757),i=n.n(o),a=n(3743),u=n(1811),c=new WeakMap,s=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;c.has(t)!==n&&(n?l(t,e,r):f(t,e))},d=function(t){return t===t.getRootNode().activeElement},l=function(t,e,n){var r=e.parentNode,o=e.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),c.set(t,o);var i="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d(".concat(i,"px,").concat(n,"px,0) scale(0)")},f=function(t,e){var n=c.get(t);n&&(c.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""},v=function(t,e,n){if(!n||!e)return function(){};var r=function(n){d(e)&&s(t,e,n)},o=function(){return s(t,e,!1)},i=function(){return r(!0)},a=function(){return r(!1)};return(0,u.a)(n,"ionScrollStart",i),(0,u.a)(n,"ionScrollEnd",a),e.addEventListener("blur",o),function(){(0,u.b)(n,"ionScrollStart",i),(0,u.b)(n,"ionScrollEnd",a),e.addEventListener("ionBlur",o)}},p="input, textarea, [no-blur], [contenteditable]",m=function(t,e,n){var r=t.closest("ion-item,[ion-item]")||t;return h(r.getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight)},h=function(t,e,n,r){var o=t.top,i=t.bottom,a=e.top,u=a+15,c=.75*Math.min(e.bottom,r-n)-i,s=u-o,d=Math.round(c<0?-c:s>0?-s:0),l=Math.min(d,o-a),f=Math.abs(l)/.3;return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(o-u)}},w=function(t,e,n,r,o){var i,a=function(t){i=(0,u.q)(t)},c=function(a){if(i){var c=(0,u.q)(a);g(6,i,c)||d(e)||(a.stopPropagation(),b(t,e,n,r,o))}};return t.addEventListener("touchstart",a,!0),t.addEventListener("touchend",c,!0),function(){t.removeEventListener("touchstart",a,!0),t.removeEventListener("touchend",c,!0)}},b=function(){var t=(0,r.Z)(i().mark((function t(e,n,o,c,d){var l,f,v,p,h,w;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o||c){t.next=2;break}return t.abrupt("return");case 2:if(l=m(e,o||c,d),!(o&&Math.abs(l.scrollAmount)<4)){t.next=6;break}return n.focus(),t.abrupt("return");case 6:if(s(e,n,!0,l.inputSafeY),n.focus(),(0,u.r)((function(){return e.click()})),"undefined"===typeof window){t.next=22;break}if(v=function(){var t=(0,r.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",p),window.removeEventListener("ionKeyboardDidShow",v),!o){t.next=6;break}return t.next=6,(0,a.b)(o,0,l.scrollAmount,l.scrollDuration);case 6:s(e,n,!1,l.inputSafeY),n.focus();case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function t(){window.removeEventListener("ionKeyboardDidShow",t),window.addEventListener("ionKeyboardDidShow",v)},!o){t.next=21;break}return t.next=15,(0,a.g)(o);case 15:if(h=t.sent,w=h.scrollHeight-h.clientHeight,!(l.scrollAmount>w-h.scrollTop)){t.next=21;break}return"password"===n.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",p)):window.addEventListener("ionKeyboardDidShow",v),f=setTimeout(v,1e3),t.abrupt("return");case 21:v();case 22:case"end":return t.stop()}}),t)})));return function(e,n,r,o,i){return t.apply(this,arguments)}}(),g=function(t,e,n){if(e&&n){var r=e.x-n.x,o=e.y-n.y;return r*r+o*o>t*t}return!1},E=function(t,e){var n,r;if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)&&"ION-SEARCHBAR"!==(null===(r=null===(n=t.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.tagName)){var o=(0,a.a)(t);if(null!==o){var i=o.$ionPaddingTimer;i&&clearTimeout(i),e>0?o.style.setProperty("--keyboard-offset","".concat(e,"px")):o.$ionPaddingTimer=setTimeout((function(){o.style.setProperty("--keyboard-offset","0px")}),120)}}},y=function(t){var e=document,n=t.getNumber("keyboardHeight",290),o=t.getBoolean("scrollAssist",!0),c=t.getBoolean("hideCaretOnScroll",!0),s=t.getBoolean("inputBlurring",!0),d=t.getBoolean("scrollPadding",!0),l=Array.from(e.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,m=new WeakMap,h=function(){var t=(0,r.Z)(i().mark((function t(e){var r,s,d,l,p,h;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return(0,u.c)(e,t)}));case 2:if(r=e.shadowRoot||e,s=r.querySelector("input")||r.querySelector("textarea"),d=(0,a.a)(e),l=d?null:e.closest("ion-footer"),s){t.next=8;break}return t.abrupt("return");case 8:d&&c&&!f.has(e)&&(p=v(e,s,d),f.set(e,p)),(d||l)&&o&&!m.has(e)&&(h=w(e,s,d,l,n),m.set(e,h));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();s&&function(){var t=!0,e=!1,n=document,r=function(){e=!0},o=function(){t=!0},i=function(r){if(e)e=!1;else{var o=n.activeElement;if(o&&!o.matches(p)){var i=r.target;i!==o&&(i.matches(p)||i.closest(p)||(t=!1,setTimeout((function(){t||o.blur()}),50)))}}};(0,u.a)(n,"ionScrollStart",r),n.addEventListener("focusin",o,!0),n.addEventListener("touchend",i,!1)}(),d&&function(t){var e=document,n=function(e){E(e.target,t)},r=function(t){E(t.target,0)};e.addEventListener("focusin",n),e.addEventListener("focusout",r)}(n);for(var b=0,g=l;b<g.length;b++){var y=g[b];h(y)}e.addEventListener("ionInputDidLoad",(function(t){h(t.detail)})),e.addEventListener("ionInputDidUnload",(function(t){!function(t){if(c){var e=f.get(t);e&&e(),f.delete(t)}if(o){var n=m.get(t);n&&n(),m.delete(t)}}(t.detail)}))}}}]);
//# sourceMappingURL=186.90039784.chunk.js.map