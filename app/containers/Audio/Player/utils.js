export const calculateInialValues = (initialValues) => {
  const { volume, muted } = initialValues;

  return {
    to: 0,
    from: 0,
    ...initialValues,
    lastVolume: volume,
    volume: muted ? 0 : volume,
    muted: volume === 0 ? true : muted,
  };
};

export const getLastMinute = (lastMinute, duration) => {
  if (!duration) {
    return 0;
  }

  if (lastMinute >= duration || !lastMinute) {
    return duration;
  }

  return lastMinute;
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
 * @param {Object} audioInfo
 */
export const isEnded = (audioInfo) => {
  const { to, currentTime } = audioInfo;

  return currentTime >= to;
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

/**
 * getRightCurrentTime
 * @param {Object} audioInfo 
 * @param {Number} newCurrentTime 
 */
export const getRightCurrentTime = (audioInfo, newCurrentTime) => {
  const { from, to, currentTime } = audioInfo;

  if (newCurrentTime > currentTime) {
    return newCurrentTime > to ? to : newCurrentTime;
  }

  return newCurrentTime < from ? from : newCurrentTime;
};
