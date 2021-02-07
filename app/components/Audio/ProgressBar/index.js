import PropTypes from 'prop-types';

import Range from 'components/Range';
import {
  RangeLabelCurrentValue,
  RangeLabelMaxValue,
} from 'components/Audio/Commons/RangeLabels';

import styles from './styles.module.css';

const ProgressBar = ({ value, min = 0, max = 0, handleChange }) => {
  return (
    <div className={styles['ProgressBar']}>
      <Range
        value={value}
        min={min}
        max={max}
        onChange={({ target }) => handleChange(Number(target.value))}
      />

      <RangeLabelCurrentValue
        value={value}
        min={min}
        max={max}
        className={styles['ProgressBar-value']}
      />

      <RangeLabelMaxValue value={max} className={styles['ProgressBar-max']} />
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired, // In seconds
  max: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ProgressBar;
