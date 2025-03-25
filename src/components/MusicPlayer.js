import { useState, useEffect, useRef } from 'react';
import { Howler } from 'howler';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showGuide, setShowGuide] = useState(true);
  const soundRef = useRef(null);

  // 初始化音频
  useEffect(() => {
    soundRef.current = new Howl({
      src: [`${process.env.PUBLIC_URL}/static/media/bgm.mp3`],
      loop: true,
      volume: volume,
      onplayerror: () => {
        setShowGuide(true);
      }
    });

    // 首次交互处理
    const handleFirstInteraction = () => {
      if (!playing) {
        soundRef.current.play();
        setPlaying(true);
        setShowGuide(false);
      }
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      soundRef.current.unload();
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  // 音量同步
  useEffect(() => {
    Howler.volume(volume);
  }, [volume]);

  const togglePlay = () => {
    setPlaying(!playing);
    if (!playing) {
      soundRef.current.play();
    } else {
      soundRef.current.pause();
    }
  };

  return (
    <div className="music-controls">
      {/* 播放引导提示 */}
      {showGuide && (
        <div className="play-guide animate__animated animate__pulse">
          点击此处启用背景音乐
        </div>
      )}

      <button onClick={togglePlay} aria-label="播放/暂停">
        {playing ? <FaPause /> : <FaPlay />}
      </button>
      
      <div className="volume-control">
        {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          aria-label="音量控制"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;