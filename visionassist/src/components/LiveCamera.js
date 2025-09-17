import React, { useRef, useState } from "react";

export default function LiveCamera({ nextStage }) {
  const videoRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      alert("Camera access denied or not available.");
    }
  };

  const takePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0);
    const imgData = canvas.toDataURL("image/png");
    setPhoto(imgData);
  };

  return (
    <div className="stage-container">
      <h2>Show Your Device</h2>
      {!photo ? (
        <>
          <video ref={videoRef} autoPlay></video>
          <div className="camera-buttons">
            <button onClick={startCamera}>Start Camera</button>
            <button onClick={takePhoto}>Capture</button>
          </div>
        </>
      ) : (
        <>
          <img src={photo} alt="Captured device" />
          <button onClick={nextStage}>Proceed to Steps</button>
        </>
      )}
    </div>
  );
}
