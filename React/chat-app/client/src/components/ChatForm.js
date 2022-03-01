import { useState } from "react";
import styles from "./styles.module.css";

function ChatForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  }

  return (
    <div className={styles.chatform}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

export default ChatForm;
