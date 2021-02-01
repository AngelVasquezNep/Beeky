import styles from './styles.module.css';

const Range = (props) => (
  <input
    className={styles.Range}
    type="range"
    min="0"
    max="1"
    step={0.1}
    {...props}
  />
);

export default Range;
