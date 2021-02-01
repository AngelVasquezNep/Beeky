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
      onLoadedMetadata={handleLoadedMetadata}
      onSeeking={handleSeeking}
      onSeeked={handleSeeked}
      onLoadedData={handleLoadedData}
      onWaiting={handleWaiting}
      onPlaying={handlePlaying}
      onTimeUpdate={handleTimeUpdate}
      onProgress={handleProgress}
    />
  );
};

Audio.defaultProps = {
  play: false,
  duration: 0, // In seconds
};

export default Audio;
