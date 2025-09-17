import React from "react";

export default function DeviceInfoForm({ setStage, deviceInfo, setDeviceInfo }) {
  return (
    <div className="stage-container">
      <h2>Device Information</h2>
      <input
        type="text"
        placeholder="Device Type"
        value={deviceInfo.type}
        onChange={e => setDeviceInfo({ ...deviceInfo, type: e.target.value })}
      />
      <input
        type="text"
        placeholder="Electricity available?"
        value={deviceInfo.electricity}
        onChange={e => setDeviceInfo({ ...deviceInfo, electricity: e.target.value })}
      />
      <input
        type="text"
        placeholder="Cables available?"
        value={deviceInfo.cables}
        onChange={e => setDeviceInfo({ ...deviceInfo, cables: e.target.value })}
      />
      <button onClick={() => setStage("liveCamera")}>Next</button>
    </div>
  );
}
