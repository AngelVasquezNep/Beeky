const Audio = ({
  src,
  setRef,
  play,
  controls,
  handleProgress,
  handleTimeUpdate,
  handleWaiting,
  handlePlaying,
  handleSeeking,
  handleSeeked,
  handleLoadedData,
  handleLoadedMetadata,
}) => {
  return (
    <audio
      src={src}
      play={play.toString()}
      ref={setRef}
      controls={controls}
      onLoadedMetadata={({ target }) =>
        handleLoadedMetadata({ duration: target.duration })
      }
      onSeeking={handleSeeking}
      onSeeked={handleSeeked}
      onLoadedData={handleLoadedData}
      onWaiting={handleWaiting}
      onPlaying={handlePlaying}
      onTimeUpdate={({ target }) =>
        handleTimeUpdate(Number(target.currentTime))
      }
      onProgress={({ target }) => handleProgress(target.buffered)}
    />
  );
};

Audio.defaultProps = {
  play: false,
  duration: 0, // In seconds
};

export default Audio;
