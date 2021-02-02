import PropTypes from 'prop-types';
import { COLORS } from 'app/theme';

const SIZES = {
  tiny: {
    width: 20,
    height: 20,
  },
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

const BaseIcon = ({ size, color, children, ...rest }) => {
  const { width, height } = SIZES[size] || {};
  const fillColor = COLORS[color]

  return (
    <svg width={width} height={height} fill={fillColor} {...rest}>
      {children}
    </svg>
  );
};

BaseIcon.defaultProps = {
  size: 'normal',
  color: 'primary'
};

BaseIcon.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'big']),
};

export default BaseIcon;
