(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,n,t){},24:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var o=t(9),i=t.n(o),c=t(14),r=t.n(c),a=(t(20),t(15)),s=t(12);s.a.initializeApp({apiKey:"AIzaSyCq6cGmEMVvlOmtoULPQInjs8uxIqrpozg",authDomain:"thrive-push-f32e3.firebaseapp.com",projectId:"thrive-push-f32e3",storageBucket:"thrive-push-f32e3.appspot.com",messagingSenderId:"224749645363",appId:"1:224749645363:web:6475e155779ebd492b3d46"});var l=s.a,d=t.p+"static/media/logo.103b5fa1.svg",u=(t(24),t(7));var h=function(){var e=Object(o.useState)(null),n=Object(a.a)(e,2),t=n[0],i=n[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(u.jsx)("p",{children:"Token:"}),Object(u.jsx)("p",{children:t}),Object(u.jsxs)("p",{children:["Push Notifications ",Object(u.jsx)("code",{children:"tested"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){var e=l.messaging();Notification.requestPermission().then((function(){return e.getToken()})).then((function(e){console.log("Token de registro: ",e),i(e)})).catch((function(e){console.log("Error",e)}))},children:"Enable notifications"})]})})},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),o(e),i(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):f(n,e)}))}}(),g()}},[[26,1,2]]]);
//# sourceMappingURL=main.d712b9bf.chunk.js.map