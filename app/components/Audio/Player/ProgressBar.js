import Range from 'components/Range';

import styles from './styles.module.css';

const ProgressBar = ({ value, max, handleChange }) => {
  return (
    <div className={styles['ProgressBar']}>
      <Range
        value={value}
        max={max}
        onChange={({ target }) => handleChange(Number(target.value))}
      />
    </div>
  );
};

export default ProgressBar;
