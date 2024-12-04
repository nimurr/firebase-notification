import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import logo from "./logo.svg";
import "./App.css";
// import MessageNotification from "../public/firebase-messaging-sw";

function App() {


  // console.log(MessageNotification)

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BBootNIW54IBRESHBFkv5NRL2gFr3V068R3w_lDQup3_jcJ-qYhkG1VkewR9mUNEYMHMbR-6KxEhK1otgWiB96g",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Firebase Notification</h2>
      </header>
    </div>
  );
}

export default App;
