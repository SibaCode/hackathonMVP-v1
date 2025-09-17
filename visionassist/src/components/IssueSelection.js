import React, { useState } from "react";

export default function IssueSelection({ proceed }) {
  const [selectedIssue, setSelectedIssue] = useState(""); // local state

  return (
    <div className="stage-container">
      <h2>Select Your Issue</h2>
      <p>Choose your situation:</p>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="issue"
            value="firstTime"
            checked={selectedIssue === "firstTime"}
            onChange={(e) => setSelectedIssue(e.target.value)}
          />
          First-time setup (I don’t know where to plug/connect)
        </label>

        <label>
          <input
            type="radio"
            name="issue"
            value="troubleshoot"
            checked={selectedIssue === "troubleshoot"}
            onChange={(e) => setSelectedIssue(e.target.value)}
          />
          Already connected but not working
        </label>
      </div>

      <button
        onClick={() => {
          if (selectedIssue) proceed(selectedIssue);
          else alert("Please select an issue type before continuing.");
        }}
        style={{ marginTop: "1.5rem" }}
      >
        Continue
      </button>
    </div>
  );
}
