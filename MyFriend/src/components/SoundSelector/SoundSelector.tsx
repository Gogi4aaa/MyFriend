import { useState } from "react";

const SoundSelector = ({ soundFiles }: { soundFiles: string[] }) => {
  const [selectedSound, setSelectedSound] = useState<string | null>(null);

  const playSound = (soundFile: string) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const selectSound = (soundFile: string) => {
    setSelectedSound(soundFile);
    playSound(soundFile);
  };

  return (
    <>
      {soundFiles.map((sound, index) => (
        <button
          key={index}
          className={`sound-option ${selectedSound === sound ? "selected" : ""}`}
          onClick={() => selectSound(sound)}
        >
          Sound {index + 1}
        </button>
      ))}
      </>
  );
};

export default SoundSelector;
