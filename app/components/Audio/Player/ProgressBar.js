import PropTypes from 'prop-types';
import { formatDuration, toHHMMSS } from 'utils/date';

import Range from 'components/Range';

import styles from './styles.module.css';

const getOffset = ({ value, max }) => `${(value / max) * 100 - value * 0.5}%`;

const ProgressBar = ({ value, max, handleChange }) => {
  return (
    <div className={styles['ProgressBar']}>
      <Range
        value={value}
        max={max}
        onChange={({ target }) => handleChange(Number(target.value))}
        onMouseOver={({ target }) => console.log({ target })}
      />

      <span
        style={{ left: getOffset({ value, max }) }}
        className={styles['ProgressBar-value']}
      >
        {toHHMMSS(value)}
      </span>

      <span
        className={styles['ProgressBar-max']}
      >
        {toHHMMSS(max)}
      </span>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ProgressBar;
