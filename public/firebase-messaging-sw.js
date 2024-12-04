// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = { 
  apiKey: "AIzaSyCINiR7LLI9tXUIDLHDkZtAt-6JASHTDN8",  // Replace with your actual API key
  authDomain: "fir-notification-5c1b1.firebaseapp.com",  // Replace with your actual authDomain
  projectId: "fir-notification-5c1b1",  // Ensure this value is correct
  storageBucket: "fir-notification-5c1b1.appspot.com",  // Replace with your storage bucket
  messagingSenderId: "358086721980",  // Replace with your actual sender ID
  appId: "1:358086721980:web:a52d2bba99b555de246bb9",  // Replace with your app ID
  measurementId: "G-7CGS4C7F74"  // Replace with y
  
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();
const MessageNotification = '';
module.exports = MessageNotification ;
localStorage.setItem(MessageNotification)

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ",
    payload)
  MessageNotification(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});


console.log(MessageNotification)