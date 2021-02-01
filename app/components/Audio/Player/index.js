import Audio from 'components/Audio';
import ProgressBar from './ProgressBar'

import styles from './styles.module.css';

// https://dribbble.com/shots/6840653-Concept-of-Audiobook

const Player = ({
  cover,
  title,
  currentTime,
  duration,
  loading,
  src,
  setRef,
  play,
  isPlaying,
  playbackRate,
  handlePlaybackRageChanges,
  volume,
  handleVolumeChanges,
  muted,
  setCurrentTime,
  handleToggleMute,
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
    <div className={styles.Player}>
      {cover && <img src={cover} alt={title} />}

      <p>{title}</p>

      <ProgressBar
        value={currentTime}
        max={duration}
        handleChange={setCurrentTime}
      />

      <button onClick={onTogglePlay}>{isPlaying ? 'Pause' : 'Play'} </button>

      <div>
        <input
          type="range"
          min="0.5"
          max="2"
          step={0.1}
          value={playbackRate}
          onChange={({ target }) =>
            handlePlaybackRageChanges(Number(target.value))
          }
        />
        {playbackRate}x
      </div>

      <div>
        <input
          type="range"
          min="0"
          max="1"
          step={0.1}
          value={volume}
          onChange={({ target }) => handleVolumeChanges(Number(target.value))}
        />
        {volume} vol{' '}
        <button onClick={handleToggleMute}>
          {muted ? '+ Sound' : '- Mute'}
        </button>
      </div>

      <div>
        <button onClick={() => setCurrentTime(parseInt(currentTime) - 10)}>
          -10
        </button>
        <button onClick={() => setCurrentTime(parseInt(currentTime) + 10)}>
          +10
        </button>
      </div>

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
        handleTimeUpdate={({ target }) =>
          handleTimeUpdate(Number(target.currentTime))
        }
      />
    </div>
  );
};

Player.defaultProps = {
  title: 'Title',
};

export default Player;
