import PropTypes from 'prop-types';

const SIZES = {
  small: {
    width: 30,
    height: 30,
  },
  normal: {
    width: 50,
    height: 50,
  },
  big: {
    width: 70,
    height: 70,
  },
};

const BaseIcon = ({ size, children, ...rest }) => {
  const { width, height } = SIZES[size] || {};

  return (
    <svg width={width} height={height} {...rest}>
      {children}
    </svg>
  );
};

BaseIcon.defaultProps = {
  size: 'normal',
};

BaseIcon.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'big']),
};

export default BaseIcon;
