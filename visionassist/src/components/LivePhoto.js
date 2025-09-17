import React, { useRef, useState } from "react";

export default function LivePhoto({ nextStage }) {
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
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    setPhoto(canvas.toDataURL("image/png"));
  };

  return (
    <div className="stage-container">
      <h2>Show Your Device</h2>
      {!photo ? (
        <>
          <video ref={videoRef} autoPlay></video>
          <div className="camera-buttons">
            <button onClick={startCamera}>Start Camera</button>
            <button onClick={takePhoto}>Capture Photo</button>
          </div>
        </>
      ) : (
        <>
          <img src={photo} alt="Device" style={{ maxWidth: "100%", borderRadius: "10px" }} />
          <button onClick={nextStage}>Proceed to Instructions</button>
        </>
      )}
    </div>
  );
}
