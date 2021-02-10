import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import {
  getLastMinute,
  calculateInialValues,
  mergeAudioInfo,
  isEnded,
  calculareAudioBuffered,
  getRightCurrentTime,
} from './utils';

const INITIAL_PLAYER_STATE = {
  duration: 0,
  currentTime: 0,
  playbackRate: 1,
  volume: 0.5,
  muted: false,
};

const PlayerContainer = ({ initialValues, AudioPlayerComponent, ...rest }) => {
  const audioRef = useRef(null);
  const [audio, setAudio] = useState(null);
  const [audioInfo, setAudioInfo] = useState(() =>
    calculateInialValues({
      ...INITIAL_PLAYER_STATE,
      ...initialValues,
    }),
  );
  const [audioBuffered, setAudioBuffered] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    /* See the Readme.md */
    const currentTime = initialValues?.from ?? audio.currentTime ?? 0;
    setAudioCurrentTime(currentTime);

    setAudio(audio);
    setLoading(false);

    updateAudioInfo({
      currentTime,
      duration: audio.duration ?? 0,
      max:
        initialValues?.max === 'auto'
          ? audio.duration ?? 0
          : initialValues?.max ?? initialValues.to ?? audio.duration ?? 0,
      to: getLastMinute(initialValues.to, audio.duration),
    });
  }, [audioRef]);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        setAudioCurrentTime(audioInfo.currentTime);
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
      mergeAudioInfo({
        duration: duration ?? 0,
        max:
          initialValues?.max === 'auto'
            ? audio.duration ?? 0
            : initialValues?.max ?? initialValues.to ?? audio.duration ?? 0,
        to: getLastMinute(initialValues.to, duration),
      }),
    );
  };

  const handleProgress = (buffered) => {
    // TODO create a buffer progress bar
    const audioBuffered = calculareAudioBuffered(buffered);
    setAudioBuffered(audioBuffered);
  };

  const handleTimeUpdate = (currentTime) => {
    if (isEnded({ ...audioInfo, currentTime })) {
      setIsPlaying(false);
      setAudioCurrentTime(audioInfo.from);
      updateAudioInfo({ currentTime: audioInfo.from });
    } else {
      // Don't set here currentTime at audio reference to prevent
      // wrong behavior
      updateAudioInfo({ currentTime });
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

  const setAudioCurrentTime = (currentTime) => {
    if (audio) {
      audio.currentTime = currentTime;
    }
  };

  const handleSetCurrentTime = (currentTime) => {
    const rightCurrentTime = getRightCurrentTime(audioInfo, currentTime);

    setAudioCurrentTime(rightCurrentTime);
    updateAudioInfo({ currentTime: rightCurrentTime });
  };

  const updateFromValue = (from) => {
    setAudioCurrentTime(from);
    updateAudioInfo({ from, currentTime: from });
  };

  const updateToValue = (to) => {
    updateAudioInfo({ to });
  };

  const AudioPlayer = AudioPlayerComponent;

  return (
    <AudioPlayer
      {...rest}
      {...audioInfo}
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
      updateFromValue={updateFromValue}
      updateToValue={updateToValue}
    />
  );
};

PlayerContainer.defaultProps = {
  initialValues: {},
};

PlayerContainer.propTypes = {
  initialValues: PropTypes.shape({
    from: PropTypes.number, // Minute from the audio should begin
    to: PropTypes.number, // The last minute tha the audio should plays
    currentTime: PropTypes.number, // Which minute should starts to play
    playbackRate: PropTypes.number,
    volume: PropTypes.number, // From 0 to 1
    muted: PropTypes.bool,
  }),
};

export default PlayerContainer;
