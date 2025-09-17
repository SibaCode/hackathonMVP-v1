import React, { useState } from "react";

export default function StepInstructions({ steps, currentStep, setCurrentStep, setStage }) {
  const [upload, setUpload] = useState(null);
  const [comment, setComment] = useState("");

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setUpload(null);
      setComment("");
    } else {
      setStage("complete");
    }
  };

  return (
    <div className="stage-container">
      <h2>Step {currentStep + 1} of {steps.length}</h2>
      <p>{steps[currentStep].text}</p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setUpload(URL.createObjectURL(e.target.files[0]))}
      />
      {upload && <img src={upload} alt="Step Upload" style={{ maxWidth: "100%", marginTop: "1rem", borderRadius: "10px" }} />}

      <textarea
        placeholder="Add a comment (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${((currentStep + 1)/steps.length)*100}%` }}></div>
      </div>

      <button onClick={handleNextStep} style={{ marginTop: "1rem" }}>
        {currentStep === steps.length - 1 ? "Finish Setup" : "Next Step"}
      </button>
    </div>
  );
}
