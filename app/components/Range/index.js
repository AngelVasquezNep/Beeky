import classnames from 'classnames';
import styles from './styles.module.css';

const Range = ({ className, ...rest }) => (
  <input
    className={classnames(styles.Range, className)}
    type="range"
    min="0"
    max="1"
    step={0.01}
    {...rest}
  />
);

export default Range;
