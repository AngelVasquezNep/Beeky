import Audio from 'components/Audio';
import { MultiThumbSlidersAudio } from 'components'
import { ControlsContainer, MainControl } from 'components/Audio/Controls';

import styles from './styles.module.css';

const AudioClip = ({
  currentTime,
  to,
  from,
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
      <MultiThumbSlidersAudio
        min={from}
        max={to}
        from={from}
        to={to}
        handleChange={({ from }) => {
          setCurrentTime(from)
        }}
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
