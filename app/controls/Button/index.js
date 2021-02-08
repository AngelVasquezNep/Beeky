import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';

const Button = ({ children, status, size, className, disabled, ...rest }) => {
  const statusClass = {
    [styles.normalStatus]: status === 'normal',
    [styles.warningStatus]: status === 'warning',
    [styles.dangerStatus]: status === 'danger',
  };

  const sizeClass = {
    [styles.normalSize]: size === 'normal',
    [styles.smallSize]: size === 'small',
    [styles.bigSize]: size === 'big',
  };

  return (
    <button
      type="button"
      {...rest}
      disabled={disabled}
      className={classnames(styles.Button, className, statusClass, sizeClass, {
        [styles.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'normal',
  status: 'normal',
};

Button.propTypes = {
  status: PropTypes.oneOf(['normal', 'warning', 'danger']),
  size: PropTypes.oneOf(['normal', 'small', 'big']),
};

export default Button;
