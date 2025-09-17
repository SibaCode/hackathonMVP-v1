import React, { useRef, useState } from "react";

export default function LiveVideo({ nextStage }) {
  const videoRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const chunks = [];

  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;

    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setVideoURL(URL.createObjectURL(blob));
    };
    setMediaRecorder(recorder);
  };

  const startRecording = () => {
    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  return (
    <div className="stage-container">
      <h2>Troubleshoot Issue</h2>
      <video ref={videoRef} autoPlay muted style={{ width: "100%", borderRadius: "10px" }}></video>

      {!videoURL && (
        <div style={{ marginTop: "1rem" }}>
          <button onClick={startVideo}>Start Video Stream</button>
          {!recording ? (
            <button onClick={startRecording}>Record</button>
          ) : (
            <button onClick={stopRecording}>Stop</button>
          )}
        </div>
      )}

      {videoURL && (
        <>
          <video src={videoURL} controls style={{ width: "100%", marginTop: "1rem", borderRadius: "10px" }}></video>
          <button onClick={nextStage} style={{ marginTop: "1rem" }}>Proceed to Steps</button>
        </>
      )}
    </div>
  );
}

