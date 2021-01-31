import { useEffect, useRef, useState } from 'react';

import { AudioPlayer } from 'components';

const INITIAL_PLAYER_STATE = {
  duration: 0,
};

const mergeAudioInfo = (newInfo) => (currentAudioInfo) => ({
  ...currentAudioInfo,
  ...newInfo,
});

const PlayerContainer = ({ src }) => {
  const audioRef = useRef(null);
  const [audio, setAudio] = useState(null);
  const [audioInfo, setAudioInfo] = useState(INITIAL_PLAYER_STATE);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    setAudio(audio);

    setAudioInfo(
      mergeAudioInfo({
        duration: audio.duration,
      }),
    );
  }, [audioRef]);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);

  const updateDuration = ({ target }) =>
    setAudioInfo(mergeAudioInfo({ duration: target.duration }));

  return (
    <AudioPlayer
      {...audioInfo}
      src={src}
      isPlaying={isPlaying}
      play={isPlaying}
      setRef={audioRef}
      handleOnLoadedMetadata={updateDuration}
      onTogglePlay={() => setIsPlaying((isPlaying) => !isPlaying)}
    />
  );
};

export default PlayerContainer;
