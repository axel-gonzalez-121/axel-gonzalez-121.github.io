(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,n,t){},25:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var o=t(3),i=t.n(o),c=t(10),r=t.n(c),a=(t(21),t(15)),s=t(13);s.a.initializeApp({apiKey:"AIzaSyCq6cGmEMVvlOmtoULPQInjs8uxIqrpozg",authDomain:"thrive-push-f32e3.firebaseapp.com",projectId:"thrive-push-f32e3",storageBucket:"thrive-push-f32e3.appspot.com",messagingSenderId:"224749645363",appId:"1:224749645363:web:6475e155779ebd492b3d46"});var l=s.a,d=(t(25),t(8));var u=function(){var e=Object(o.useState)(null),n=Object(a.a)(e,2),t=n[0],i=n[1];return Object(o.useEffect)((function(){}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("p",{children:"Token:"}),Object(d.jsx)("p",{children:t}),Object(d.jsxs)("p",{children:["Push Notifications ",Object(d.jsx)("code",{children:"test"})]}),Object(d.jsxs)("p",{children:["PWA Updates ",Object(d.jsx)("code",{children:"test"})]}),Object(d.jsx)("h3",{children:"LALALAL TEST "}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){var e=l.messaging();Notification.requestPermission().then((function(){return e.getToken()})).then((function(e){console.log("Token de registro: ",e),i(e)})).catch((function(e){console.log("Error",e)}))},children:"Enable notifications"})]})})},h=t(16),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then((function(e){e.update(),setInterval((function(){e.update(),console.debug("Checked for update...")}),3e5),e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),h.a.info("Update available! To update, close all windows and reopen.",{toastId:"appUpdateAvailable",onClick:function(){return window.close()},autoClose:!1}),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),o(e),i(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):f(n,e)}))}}(),g()}},[[27,1,2]]]);
//# sourceMappingURL=main.8b43e8a0.chunk.js.map