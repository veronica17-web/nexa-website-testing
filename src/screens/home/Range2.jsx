import React, { useRef } from "react";

const Range2 = () => {
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  const playVideoReverse = () => {
    const video = videoRef.current;

    video.currentTime = video.duration; // Set current time to the end
    video.play();

    const step = 0.1; // Adjust the step value for smoother reverse playback

    intervalRef.current = setInterval(() => {
      if (video.currentTime > 0) {
        video.currentTime -= step;
      } else {
        clearInterval(intervalRef.current);
        video.playbackRate = 1; // Reset playback rate after reverse playback
      }
    }, 100);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <video
          ref={videoRef}
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Invicto_final.webm"
          muted
          className="w-1/2"
        ></video>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={playVideoReverse}
        >
          Play Reverse
        </button>
      </div>
    </div>
  );
};

export default Range2;
