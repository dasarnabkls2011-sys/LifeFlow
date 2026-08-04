import { useRef, useState } from "react";

import rain from "../assets/sounds/rain.mp3";
import forest from "../assets/sounds/forest.mp3";
import ocean from "../assets/sounds/ocean.mp3";
import cafe from "../assets/sounds/cafe.mp3";

const sounds = [
  { name: "Rain", icon: "🌧", file: rain },
  { name: "Forest", icon: "🌲", file: forest },
  { name: "Ocean", icon: "🌊", file: ocean },
  { name: "Cafe", icon: "☕", file: cafe },
];

function AmbientSounds() {

  const audioRef = useRef(null);

  const [current, setCurrent] = useState(null);

  function playSound(sound) {

    if (current === sound.name) {

      audioRef.current.pause();

      setCurrent(null);

      return;

    }

    if (audioRef.current) {

      audioRef.current.pause();

    }

    const audio = new Audio(sound.file);

    audio.loop = true;

    audio.volume = 0.5;

    audio.play();

    audioRef.current = audio;

    setCurrent(sound.name);

  }

  return (

    <div className="ambient-sounds">

      <h2>🎵 Ambient Sounds</h2>

      <div className="sound-grid">

        {sounds.map((sound) => (

          <button
            key={sound.name}
            className={current === sound.name ? "active-sound" : ""}
            onClick={() => playSound(sound)}
          >

            {sound.icon} {sound.name}

          </button>

        ))}

      </div>

    </div>

  );

}

export default AmbientSounds;