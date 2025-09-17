import React from "react";

export default function WelcomePage({ startSetup }) {
  return (
    <div className="stage-container">
      <h1>VisionAssist</h1>
      <p>Welcome! VisionAssist helps you set up your devices easily and safely.</p>
      <p>Follow the steps and use live photo/video guidance to ensure proper setup.</p>
      <button className="start-btn" onClick={startSetup}>Start Setup</button>
    </div>
  );
}
