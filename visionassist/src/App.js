import React, { useState } from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import IssueSelection from "./components/IssueSelection";
import LivePhoto from "./components/LivePhoto";
import LiveVideo from "./components/LiveVideo";
import StepInstructions from "./components/StepInstructions";
import CompletionPage from "./components/CompletionPage";

function App() {
  const [stage, setStage] = useState("welcome");
  const [issueType, setIssueType] = useState(null); 
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { text: "Connect the power cable to your device." },
    { text: "Connect the main cable to the port labeled 'WAN'." },
    { text: "Turn on the device and wait for the lights to stabilize." }
  ];

  return (
    <div className="app-container">
      {stage === "welcome" && <WelcomePage startSetup={() => setStage("issue")} />}
      {stage === "issue" && (
        <IssueSelection
          setIssueType={setIssueType}
          proceed={(type) => {
            setIssueType(type);
            setStage(type === "firstTime" ? "livePhoto" : "liveVideo");
          }}
        />
      )}
      {stage === "livePhoto" && <LivePhoto nextStage={() => setStage("steps")} />}
      {stage === "liveVideo" && <LiveVideo nextStage={() => setStage("steps")} />}
      {stage === "steps" && (
        <StepInstructions
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setStage={setStage}
        />
      )}
      {stage === "complete" && <CompletionPage />}
    </div>
  );
}

export default App;
