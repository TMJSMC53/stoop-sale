import React, { useState, useEffect } from 'react';

const AudioComponent: React.FC = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const audioFile = new Audio('Hello Brooklyn (Ft Lil Wayne) - Jay Z.mp3');
    setAudio(audioFile);

    // Cleanup function to stop the audio when the component unmounts
    return () => {
      audioFile.pause();
      audioFile.currentTime = 0;
    };
  }, []);

  const playAudio = () => {
    if (audio) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      {!isPlaying ? (
        <button className="btn-play" onClick={playAudio}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24px"
            height="24px"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      ) : (
        <button className="btn-pause" onClick={stopAudio}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24px"
            height="24px"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AudioComponent;
