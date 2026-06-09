import { useState } from "react";

function Features() {
  const [msg, setMsg] = useState("");

  const data = {
    weather: {
      title: "🌦 Weather Intelligence",
      text: "This system analyzes real-time weather conditions like temperature, rainfall, and humidity. It helps farmers decide irrigation timing, fertilizer usage, and crop protection strategies. Weather fluctuations directly affect crop yield and disease formation."
    },

    water: {
      title: "💧 Water Optimization",
      text: "Water management is critical in agriculture. This feature suggests optimal irrigation schedules based on soil moisture and humidity. It reduces water wastage and improves crop health using smart irrigation techniques like drip irrigation."
    },

    health: {
      title: "💚 Farm Health Score",
      text: "Farm Health Score is calculated using environmental factors like humidity, temperature, rainfall, and soil condition. It gives farmers a quick understanding of crop safety and productivity level."
    },

    advisory: {
      title: "🧠 AI Advisory System",
      text: "This system provides smart farming suggestions based on data patterns. It recommends crop protection methods, fertilizer usage, and harvesting time to maximize yield and reduce risks."
    }
  };

  const show = (key) => setMsg(data[key]);

  return (
    <div className="page">

      <h1>🌾 Smart Farming Intelligence</h1>

      <div className="feature-grid">

        <div className="feature weather" onClick={() => show("weather")}>
          🌦 Weather Intelligence
        </div>

        <div className="feature water" onClick={() => show("water")}>
          💧 Water Optimization
        </div>

        <div className="feature health" onClick={() => show("health")}>
          💚 Farm Health Score
        </div>

        <div className="feature advisory" onClick={() => show("advisory")}>
          🧠 AI Advisory System
        </div>

      </div>

      {msg && (
        <div className="popup">
          <h2>{msg.title}</h2>
          <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
            {msg.text}
          </p>

          <button onClick={() => setMsg("")}>Close</button>
        </div>
      )}

    </div>
  );
}

export default Features;