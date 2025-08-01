import React, { useState } from "react";
import "../components/Chatbot.css"; // Optional CSS for styling

const getBotReply = (msg) => {
  msg = msg.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi"))
    return "Hi there! How can I assist you with your health today?";

  if (msg.includes("order"))
    return "🧾 You can track your orders on the 'Order History' page.";

  if (msg.includes("prescription"))
    return "📄 Please upload your doctor's prescription on the scanner page.";

  if (msg.includes("fever"))
    return "🌡️ Take Paracetamol (Dolo 650 or Crocin) every 6–8 hrs. Rest and stay hydrated.";

  if (msg.includes("headache"))
    return "🤕 For headaches, use Paracetamol or Saridon. Rest in a quiet place.";

  if (msg.includes("body pain") || msg.includes("muscle pain"))
    return "💪 Use Combiflam or Volini gel. Warm baths and rest help too.";

  if (msg.includes("cold") || msg.includes("cough"))
    return "🤧 Try Benadryl, Cetzine, and steam inhalation. Stay warm.";

  if (msg.includes("stomach") || msg.includes("digestion"))
    return "🍽️ Use Digene, Eno. Eat curd, bananas, and rice. Stay hydrated.";

  if (msg.includes("diarrhea"))
    return "🚽 Try Norflox TZ, ORS, and light meals. Avoid dairy for a while.";

  if (msg.includes("vomiting"))
    return "🤢 Take Emeset (Ondansetron 4mg) and sip water slowly.";

  if (msg.includes("disease") || msg.includes("current disease"))
    return "🦠 Current diseases: Dengue, Flu, Eye Flu. Use repellents, masks, and rest.";

  if (msg.includes("common disease"))
    return "📋 Common diseases: Cold, Fever, Headache, Flu, Stomach issues.";

  if (msg.includes("covid"))
    return "😷 For COVID: Isolate, take Paracetamol, rest, and consult a doctor.";

  if (msg.includes("diet") || msg.includes("diet plan"))
    return "🥗 Diet Plan:\n- Breakfast: Oats, Fruits\n- Lunch: Rice, Dal, Veggies\n- Dinner: Soup, Salad\n- Snacks: Nuts";

  if (msg.includes("task") || msg.includes("daily routine"))
    return "✅ Daily Routine:\n1. 30-min walk\n2. 8 glasses water\n3. No junk food\n4. 7+ hours sleep\n5. 10 min meditation";

  return "🤖 I'm here to help! Ask me about any symptom, medicine, or health advice.";
};

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const botMessage = { text: getBotReply(input), sender: "bot" };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="chatbot-container">
      <h2>🩺 Health Assistant</h2>
      <div className="chatbox">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={clearChat}>clear Chat</button>
      </div>
    </div>
  );
}

export default ChatBot;
