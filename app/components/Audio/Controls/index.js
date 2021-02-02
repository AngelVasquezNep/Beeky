import classnames from 'classnames';
import {
  PlayIcon,
  PauseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  VolumeIcon,
  MuteIcon,
} from 'components/Icons';
import Range from 'components/Range';

import styles from './styles.module.css';

const TogglePlay = ({ onTogglePlay, isPlaying }) => (
  <button
    className={classnames(
      styles.Control,
      styles.ControlButton,
      styles.TogglePlay,
    )}
    onClick={onTogglePlay}
  >
    {isPlaying ? <PauseIcon /> : <PlayIcon />}{' '}
  </button>
);

const speedOptions = [
  { label: '0.75x', value: 0.75 },
  { label: '1x', value: 1 },
  { label: '1.25x', value: 1.25 },
  { label: '1.5x', value: 1.5 },
  { label: '1.75x', value: 1.75 },
  { label: '2x', value: 2 },
];

const PlaybackRate = ({ playbackRate, handlePlaybackRageChanges }) => (
  <select
    className={styles.PlaybackRate}
    value={playbackRate}
    onChange={({ target }) => handlePlaybackRageChanges(Number(target.value))}
  >
    {speedOptions.map(({ label, value }) => (
      <option key={label} value={value}>
        {label}
      </option>
    ))}
  </select>
);

const Volume = ({ volume, muted, handleToggleMute, handleVolumeChanges }) => (
  <div className={styles.Volume}>
    <button
      className={classnames(
        styles.Control,
        styles.ControlButton,
        styles.TogglePlay,
      )}
      onClick={handleToggleMute}
    >
      {muted ? (
        <MuteIcon size="tiny" color="danger" />
      ) : (
        <VolumeIcon size="tiny" />
      )}
    </button>

    <Range
      min="0"
      max="1"
      step={0.1}
      value={volume}
      onChange={({ target }) => handleVolumeChanges(Number(target.value))}
      className={styles.VolumeRange}
    />
  </div>
);

const ChangeCurrentTimeButton = ({ offset, currentTime, setCurrentTime }) => {
  const ArrowIcon = offset > 0 ? ArrowRightIcon : ArrowLeftIcon;

  return (
    <button
      className={classnames(styles.Control, styles.ControlButton)}
      onClick={() => setCurrentTime(parseInt(currentTime) + offset)}
    >
      <ArrowIcon size="tiny" />
    </button>
  );
};

const Controls = ({
  muted,
  isPlaying,
  onTogglePlay,
  playbackRate,
  handlePlaybackRageChanges,
  volume,
  handleToggleMute,
  currentTime,
  setCurrentTime,
  handleVolumeChanges,
}) => (
  <div className={styles.Controls}>
    <Volume
      muted={muted}
      volume={volume}
      handleToggleMute={handleToggleMute}
      handleVolumeChanges={handleVolumeChanges}
    />

    <ChangeCurrentTimeButton
      offset={-10}
      currentTime={currentTime}
      setCurrentTime={setCurrentTime}
    />
    <TogglePlay isPlaying={isPlaying} onTogglePlay={onTogglePlay} />

    <ChangeCurrentTimeButton
      offset={10}
      currentTime={currentTime}
      setCurrentTime={setCurrentTime}
    />

    <PlaybackRate
      playbackRate={playbackRate}
      handlePlaybackRageChanges={handlePlaybackRageChanges}
    />
  </div>
);

export default Controls;
