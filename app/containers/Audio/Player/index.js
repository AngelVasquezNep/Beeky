import { useEffect, useRef, useState } from 'react';

const INITIAL_PLAYER_STATE = {
  minDuration: 0,
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

const PlayerContainer = ({
  src,
  cover,
  title,
  initialValues,
  AudioPlayerComponent,
}) => {
  const audioRef = useRef(null);
  const [audio, setAudio] = useState(null);
  const [audioInfo, setAudioInfo] = useState({
    ...INITIAL_PLAYER_STATE,
    ...initialValues,
  });
  const [audioBuffered, setAudioBuffered] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    audio.currentTime = initialValues?.currentTime ?? audio.currentTime ?? 0;

    setAudio(audio);
    setLoading(false);

    updateAudioInfo({
      duration: initialValues?.duration ?? audio.duration ?? 0,
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
      audio.playbackRate = audioInfo.playbackRate;
    }
  }, [audio, audioInfo.volume, audioInfo.playbackRate]);

  const updateAudioInfo = (newInfo) => setAudioInfo(mergeAudioInfo(newInfo));

  const handleLoadedMetadata = ({ duration }) => {
    setLoading(false);
    setAudioInfo(
      mergeAudioInfo({ duration: initialValues?.duration ?? duration }),
    );
  };

  const handleProgress = (buffered) => {
    // TODO create a buffer progress bar
    const audioBuffered = calculareAudioBuffered(buffered);
    setAudioBuffered(audioBuffered);
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

  const handleSetCurrentTime = (currentTime) => {
    audio.currentTime = currentTime;
    updateAudioInfo({ currentTime });
  };

  const AudioPlayer = AudioPlayerComponent;

  return (
    <AudioPlayer
      {...audioInfo}
      src={src}
      cover={cover}
      title={title}
      loading={loading}
      isPlaying={isPlaying}
      play={isPlaying}
      setRef={audioRef}
      audioBuffered={audioBuffered}
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

PlayerContainer.defaultProps = {
  initialValues: {},
};

export default PlayerContainer;
