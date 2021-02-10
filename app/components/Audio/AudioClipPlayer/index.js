import classnames from 'classnames';

import Audio from 'components/Audio';
import { MultiThumbSlidersAudio } from 'components';
import { ControlsContainer, MainControl } from 'components/Audio/Controls';

import styles from './styles.module.css';

const AudioClipPlayer = ({
  className,

  minClipDuration,

  currentTime,
  to,
  from,
  min,
  max,
  src,
  setRef,
  play,
  isPlaying,
  setCurrentTime,
  loading,
  updateFromValue,
  updateToValue,
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
    <div className={classnames(styles.AudioClipPlayer, className)}>
      <MultiThumbSlidersAudio
        min={min}
        max={max}
        from={from}
        to={to}
        currentTime={currentTime}
        handleChangeFrom={updateFromValue}
        handleChangeTo={updateToValue}
        minRange={minClipDuration}
        className={styles.MultiThumbSlidersAudio}
      />

      <ControlsContainer>
        <MainControl
          loading={loading}
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

export default AudioClipPlayer;
