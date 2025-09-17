import React, { useState } from "react";

export default function DeviceQuestions({ setDeviceInfo, nextStage }) {
  const [electricity, setElectricity] = useState("");
  const [cables, setCables] = useState("");

  const handleNext = () => {
    if (!electricity || !cables) {
      alert("Please answer all questions.");
      return;
    }
    setDeviceInfo({ electricity, cables });
    nextStage();
  };

  return (
    <div className="stage-container">
      <h2>Device Readiness</h2>

      <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
        <p>Do you have electricity available?</p>
        <label>
          <input
            type="radio"
            name="electricity"
            value="yes"
            checked={electricity === "yes"}
            onChange={(e) => setElectricity(e.target.value)}
          />
          Yes
        </label>
        <label style={{ marginLeft: "1.5rem" }}>
          <input
            type="radio"
            name="electricity"
            value="no"
            checked={electricity === "no"}
            onChange={(e) => setElectricity(e.target.value)}
          />
          No
        </label>
      </div>

      <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
        <p>Do you have all cables/extensions needed?</p>
        <label>
          <input
            type="radio"
            name="cables"
            value="yes"
            checked={cables === "yes"}
            onChange={(e) => setCables(e.target.value)}
          />
          Yes
        </label>
        <label style={{ marginLeft: "1.5rem" }}>
          <input
            type="radio"
            name="cables"
            value="no"
            checked={cables === "no"}
            onChange={(e) => setCables(e.target.value)}
          />
          No
        </label>
      </div>

      <button onClick={handleNext}>Next</button>
    </div>
  );
}
