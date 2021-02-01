import { useEffect, useRef, useState } from 'react';

import { AudioPlayer } from 'components';

const INITIAL_PLAYER_STATE = {
  duration: 0,
  currentTime: 0,
  playbackRate: 1,
  volume: 0.5,
  lastVolume: 0.5,
  muted: false,
};

const mergeAudioInfo = (newInfo) => (currentAudioInfo) => ({
  ...currentAudioInfo,
  ...newInfo,
});

const isEnded = (audio) => {
  const { duration, currentTime } = audio;

  return currentTime >= duration;
};

/**
 * calculareAudioBuffered
 * @param {TimeRanges} - Use like: audio.buffered
 */
const calculareAudioBuffered = (audioBuffered) =>
  Array.from(audioBuffered, (_, i) => ({
    start: audioBuffered.start(i),
    end: audioBuffered.end(i),
  }));

const PlayerContainer = ({ src }) => {
  const audioRef = useRef(null);
  const [audio, setAudio] = useState(null);
  const [audioInfo, setAudioInfo] = useState(INITIAL_PLAYER_STATE);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    setAudio(audio);
    setLoading(false);

    updateAudioInfo({
      duration: audio.duration || 0,
    });
  }, [audioRef]);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        setLoading(false);
        audio.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audio) {
      audio.volume = audioInfo.volume;
      audio.currentTime = audioInfo.currentTime;
      audio.playbackRate = audioInfo.playbackRate;
    }
  }, [audioInfo.volume, audioInfo.currentTime, audioInfo.playbackRate]);

  const updateAudioInfo = (newInfo) => setAudioInfo(mergeAudioInfo(newInfo));

  const handleLoadedMetadata = ({ target }) => {
    setLoading(false);
    setAudioInfo(mergeAudioInfo({ duration: target.duration }));
  };

  const handleProgress = ({ target }) => {
    // TODO create a buffer progress bar
    const buffered = calculareAudioBuffered(target.buffered);
    console.log({ buffered });
  };

  const handleTimeUpdate = (currentTime) => {
    updateAudioInfo({ currentTime });

    if (isEnded(audio)) {
      setIsPlaying(false);
      updateAudioInfo({ currentTime: 0 });
    }
  };

  const handlePlaybackRageChanges = (playbackRate) =>
    updateAudioInfo({ playbackRate });

  const handleVolumeChanges = (volume) => {
    const lastVolume = volume === 0 ? audioInfo.lastVolume : volume;

    updateAudioInfo({ volume, lastVolume, muted: volume === 0 });
  };

  const handleToggleMute = () => {
    const volume = audioInfo.muted ? audioInfo.lastVolume : 0;

    updateAudioInfo({ volume, muted: !audioInfo.muted });
  };

  const handleSetCurrentTime = (currentTime) =>
    updateAudioInfo({ currentTime });

  return (
    <AudioPlayer
      {...audioInfo}
      src={src}
      loading={loading}
      isPlaying={isPlaying}
      play={isPlaying}
      setRef={audioRef}
      handleLoadedMetadata={handleLoadedMetadata}
      onTogglePlay={() => setIsPlaying((isPlaying) => !isPlaying)}
      handleSeeking={() => setLoading(true)}
      handleSeeked={() => setLoading(false)}
      handleLoadedData={() => setLoading(false)}
      handleWaiting={() => setLoading(true)}
      handlePlaying={() => setLoading(false)}
      handleTimeUpdate={handleTimeUpdate}
      handleProgress={handleProgress}
      handlePlaybackRageChanges={handlePlaybackRageChanges}
      handleVolumeChanges={handleVolumeChanges}
      handleToggleMute={handleToggleMute}
      setCurrentTime={handleSetCurrentTime}
    />
  );
};

export default PlayerContainer;
