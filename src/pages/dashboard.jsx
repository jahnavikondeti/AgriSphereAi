<div className="dashboard-banner">

  <img
    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
    alt="farm dashboard"
  />

  <div className="banner-text">
    🌾 Real-Time Farm Intelligence System  
    <p>Analyze crop health using AI + weather data</p>
  </div>

</div>
import { useState } from "react";

function Dashboard() {
  const [crop, setCrop] = useState("");
  const [season, setSeason] = useState("");
  const [acres, setAcres] = useState("");
  const [soil, setSoil] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [rainfall, setRainfall] = useState("");

  const [result, setResult] = useState(null);

  const validCrops = ["rice", "wheat", "cotton", "maize", "sugarcane"];

  const predict = () => {
    if (!crop || !temp || !humidity || !rainfall) {
      alert("Please fill all required fields");
      return;
    }

    if (!validCrops.includes(crop.toLowerCase())) {
      alert("Invalid crop. Use Rice, Wheat, Cotton, Maize, Sugarcane");
      return;
    }

    let score = 0;

    if (temp > 35) score += 30;
    if (humidity > 80) score += 25;
    if (rainfall > 20) score += 20;
    if (soil === "Clay") score += 10;
    if (season === "Kharif") score += 10;

    let risk = "Low 🟢";
    let message = "Good farming conditions";

    if (score >= 60) {
      risk = "High 🔴";
      message = "High risk detected! Use pest control + irrigation management.";
    } else if (score >= 35) {
      risk = "Medium 🟠";
      message = "Monitor crops regularly and adjust irrigation.";
    }

    setResult({ score, risk, message });
  };

  return (
    <div className="page">

      <h1>📊 Smart Farming Dashboard</h1>

      <div className="form">

        <select onChange={(e) => setCrop(e.target.value)}>
          <option>Select Crop</option>
          <option>Rice</option>
          <option>Wheat</option>
          <option>Cotton</option>
          <option>Maize</option>
          <option>Sugarcane</option>
        </select>

        <select onChange={(e) => setSeason(e.target.value)}>
          <option>Select Season</option>
          <option>Kharif</option>
          <option>Rabi</option>
          <option>Summer</option>
        </select>

        <input placeholder="Acres" onChange={(e) => setAcres(e.target.value)} />
        <input placeholder="Soil Type (Clay/Sandy/Loam)" onChange={(e) => setSoil(e.target.value)} />
        <input placeholder="Temperature °C" onChange={(e) => setTemp(e.target.value)} />
        <input placeholder="Humidity %" onChange={(e) => setHumidity(e.target.value)} />
        <input placeholder="Rainfall mm" onChange={(e) => setRainfall(e.target.value)} />

        <button onClick={predict}>Run AI Prediction</button>

      </div>

      {result && (
        <div className="dashboard">

          <div className="card">🌾 Crop: {crop}</div>
          <div className="card">🌱 Season: {season}</div>
          <div className="card">📏 Acres: {acres}</div>
          <div className="card">🌍 Soil: {soil}</div>
          <div className="card">📊 Score: {result.score}/100</div>
          <div className="card">⚠ Risk: {result.risk}</div>

        </div>
      )}

      {result && (
        <div className="prediction">
          🤖 AI Suggestion: {result.message}
        </div>
      )}

    </div>
  );
}

export default Dashboard;