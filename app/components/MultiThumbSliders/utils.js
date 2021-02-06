export const calculateNextLowValues = ({ a, b, minRange, max }) => {
  if (a + minRange >= max) {
    return {
      a: max - minRange,
      b: max,
    };
  }

  if (b - a <= minRange) {
    return {
      a,
      b: a + minRange,
    };
  }

  return { a, b };
};

export const calculateNextHigtValues = ({ a, b, minRange, min }) => {
  if (b - minRange <= min) {
    return {
      a: min,
      b: min + minRange,
    };
  }

  if (b - a <= minRange) {
    return {
      b,
      a: b - minRange,
    };
  }

  return {
    b,
    a,
  };
};
