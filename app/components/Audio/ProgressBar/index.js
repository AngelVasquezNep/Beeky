import PropTypes from 'prop-types';
import { toHHMMSS } from 'utils/date';

import Range from 'components/Range';

import styles from './styles.module.css';

const getOffset = ({ value, min = 0, max }) =>
  `${((value - min) / (max - min)) * 100}%`;

const ProgressBar = ({ value, min = 0, max, handleChange }) => {
  return (
    <div className={styles['ProgressBar']}>
      <Range
        value={value}
        min={min}
        max={max}
        onChange={({ target }) => handleChange(Number(target.value))}
      />

      <span
        style={{ left: getOffset({ value, max, min }) }}
        className={styles['ProgressBar-value']}
      >
        {toHHMMSS(value)}
      </span>

      <span className={styles['ProgressBar-max']}>{toHHMMSS(max)}</span>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ProgressBar;
