// importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.10/firebase-messaging.js");

firebase.initializeApp({
	apiKey: "AIzaSyCq6cGmEMVvlOmtoULPQInjs8uxIqrpozg",
	authDomain: "thrive-push-f32e3.firebaseapp.com",
	projectId: "thrive-push-f32e3",
	storageBucket: "thrive-push-f32e3.appspot.com",
	messagingSenderId: "224749645363",
	appId: "1:224749645363:web:6475e155779ebd492b3d46"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification();
    });
  return promiseChain;
});

self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
});