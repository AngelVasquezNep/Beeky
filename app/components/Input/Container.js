import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';

const InputContainer = ({ children, style }) => {
  return (
    <div
      className={classnames(styles.InputContainer, styles[style])}
    >
      {children}
    </div>
  );
};

InputContainer.propTypes = {
  style: PropTypes.oneOf(['vertical', 'horizontal']),
};

export default InputContainer;
