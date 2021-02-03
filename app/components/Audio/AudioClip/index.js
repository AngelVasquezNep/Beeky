import Audio from 'components/Audio';
import { ControlsContainer, MainControl } from 'components/Audio/Controls';
import ProgressBar from 'components/Audio/ProgressBar';

import styles from './styles.module.css';

const AudioClip = ({
  currentTime,
  duration,
  minDuration,
  src,
  setRef,
  play,
  isPlaying,
  setCurrentTime,
  handleProgress,
  onTogglePlay,
  handleTimeUpdate,
  handleWaiting,
  handlePlaying,
  handleSeeking,
  handleSeeked,
  handleLoadedData,
  handleLoadedMetadata,
}) => {
  return (
    <div className={styles.AudioClip}>
      <ProgressBar
        min={minDuration}
        value={currentTime}
        max={duration}
        handleChange={setCurrentTime}
      />

      <ControlsContainer>
        <MainControl
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          isPlaying={isPlaying}
          onTogglePlay={onTogglePlay}
        />
      </ControlsContainer>

      <Audio
        play={play.toString()}
        setRef={setRef}
        controls={false}
        src={src}
        handleProgress={handleProgress}
        handleSeeking={handleSeeking}
        handleSeeked={handleSeeked}
        handleLoadedData={handleLoadedData}
        handleWaiting={handleWaiting}
        handlePlaying={handlePlaying}
        handleLoadedMetadata={handleLoadedMetadata}
        handleTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
};

AudioClip.defaultProps = {
  title: 'Title',
};

export default AudioClip;
