import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';

const Button = ({
  children,
  status,
  size,
  type,
  className,
  disabled,
  htmlType,
  ...rest
}) => {
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

  const styleClass = {
    [styles.normalStyle]: type === 'normal',
    [styles.textStyle]: type === 'text',
  };

  return (
    <button
      {...rest}
      type={htmlType}
      disabled={disabled}
      className={classnames(
        styles.Button,
        className,
        statusClass,
        sizeClass,
        styleClass,
        {
          [styles.disabled]: disabled,
        },
      )}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'normal',
  status: 'normal',
  htmlType: 'button'
};

Button.propTypes = {
  htmlType: PropTypes.oneOf(['button', 'submit']),
  status: PropTypes.oneOf(['normal', 'warning', 'danger']),
  size: PropTypes.oneOf(['normal', 'small', 'big']),
  type: PropTypes.oneOf(['normal', 'text']),
};

export default Button;
