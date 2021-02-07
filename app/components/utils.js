/**
 * getOffset
 * To get offset percentage  of some range component
 * @param {Object} params
 * @param {Number} params.value
 * @param {Number} params.min
 * @param {Number} params.max
 * @returns {Object} { left: Number || 'initial', right: Number || 'initial' }
 */
export const getOffset = ({ value, min = 0, max = 0 }) => {
  if (value <= 0) {
    return {
      left: 0,
      right: 'initial',
    };
  }

  const percentage = ((value - min) / (max - min)) * 100

  if ((value - min) <= (max - min) / 2) {
    return {
      right: 'initial',
      left: `${percentage}%`,
    };
  }

  return {
    left: 'initial',
    right: `${100 - percentage}%`,
  };
};
