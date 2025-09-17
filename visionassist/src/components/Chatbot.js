import React, { useState } from "react";

const responses = {
  "how do i connect my router": "Step 1: Connect power cable → Step 2: Connect ethernet cable → Step 3: Turn on device",
  "my wifi isn't working": "Try rebooting your router and check the cables.",
  "how do i upgrade my plan": "You can upgrade via your provider app or website."
};

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!input) return;
    const answer = responses[input.toLowerCase()] || "Sorry, I don't understand.";
    setMessages([...messages, { user: input, bot: answer }]);
    setInput("");
  };

  return (
    <div className="chatbot">
      <h3>Chatbot</h3>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx}>
            <b>You:</b> {msg.user} <br />
            <b>Bot:</b> {msg.bot}
            <hr />
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
