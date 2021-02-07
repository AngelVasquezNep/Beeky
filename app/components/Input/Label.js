import classnames from 'classnames';

import styles from './styles.module.css';

const Label = ({ label, id, className }) =>
  label ? (
    <label for={id} className={classnames(styles.label, className)}>
      {label}
    </label>
  ) : null;

export default Label;
