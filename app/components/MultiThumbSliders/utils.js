export const calculateNextLowValues = ({ from, to, minRange, max }) => {
  if (from + minRange >= max) {
    return {
      from: max - minRange,
      to: max,
    };
  }

  if (to - from <= minRange) {
    return {
      from,
      to: from + minRange,
    };
  }

  return { from, to };
};

export const calculateNextHigtValues = ({ from, to, minRange, min }) => {
  if (to - minRange <= min) {
    return {
      from: min,
      to: min + minRange,
    };
  }

  if (to - from <= minRange) {
    return {
      to,
      from: to - minRange,
    };
  }

  return {
    to,
    from,
  };
};
