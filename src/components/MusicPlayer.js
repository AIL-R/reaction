import { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  useEffect(() => {
    const bgm = new Howl({
      src: ['/reaction/static/media/bgm.mp3'],
      loop: true,
      volume: 0.3
    });

    return () => bgm.unload();
  }, []);

  const togglePlay = () => {
    setPlaying(!playing);
    Howler.volume(volume);
    playing ? Howler.stop() : Howler.play();
  };

  return (
    <div className="music-controls">
      <button onClick={togglePlay}>
        {playing ? <FaPause /> : <FaPlay />}
      </button>
      <div className="volume-control">
        <FaVolumeUp />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;