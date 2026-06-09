import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero-v2">

      <div className="hero-text">
        <h1>🌱 AgriSphere AI</h1>
        <p>Smart farming intelligence using AI, weather & crop analytics</p>

        <button onClick={() => navigate("/dashboard")}>
          Get Started
        </button>
      </div>

      {/* IMAGE SECTION */}
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
          alt="farm"
        />
      </div>

    </div>
  );
}

export default Home;