import { formatDuration } from 'utils/date'

const Player = ({
  duration,
  src,
  setRef,
  play,
  isPlaying,
  onTogglePlay,
  handleOnLoadedMetadata,
}) => {
  return (
    <div>
      <p>Duration: {formatDuration(duration)}</p>
      <button onClick={onTogglePlay}>{isPlaying ? 'Pause' : 'Play'} </button>
      <audio
        play={play.toString()}
        ref={setRef}
        controls={false}
        src={src}
        onLoadedMetadata={handleOnLoadedMetadata}
      />
    </div>
  );
};

Player.defaultProps = {
  play: false,
  duration: 0, // In seconds
}

export default Player;
