export const calculateInialValues = (initialValues) => {
  const { volume, muted } = initialValues;

  return {
    ...initialValues,
    lastVolume: volume,
    muted: volume === 0 ? true : muted,
  };
};

/**
 * mergeAudioInfo
 * A function to use into hook setter function
 * @param {Object} newInfo
 */
export const mergeAudioInfo = (newInfo) => (currentAudioInfo) => ({
  ...currentAudioInfo,
  ...newInfo,
});

/**
 * isEnded - To know if the audio is ended
 * @param {Object} audio
 */
export const isEnded = (audio) => {
  const { duration, currentTime } = audio;

  return currentTime >= duration;
};

/**
 * calculareAudioBuffered
 * @param {TimeRanges} - Use like: audio.buffered
 */
export const calculareAudioBuffered = (audioBuffered) =>
  Array.from(audioBuffered, (_, i) => ({
    start: audioBuffered.start(i),
    end: audioBuffered.end(i),
  }));
