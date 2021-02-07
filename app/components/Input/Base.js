import { Fragment } from 'react';
import classnames from 'classnames';

import Label from './Label'

import styles from './styles.module.css';

const Input = ({ id, label, className, ...rest }) => {
  return (
    <Fragment>
      <Label label={label} id={id} className={className} />

      <input
        id={id}
        {...rest}
        className={classnames(styles.input, className)}
      />
    </Fragment>
  );
};

export default Input;
