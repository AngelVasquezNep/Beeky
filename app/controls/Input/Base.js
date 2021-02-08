import { Fragment } from 'react';
import classnames from 'classnames';

import Label from './Label'

import styles from './styles.module.css';

const Input = ({ id, label, name, className, ...rest }) => {
  const customId = id || `${label}-${name}`

  return (
    <Fragment>
      <Label label={label} id={customId} className={className} />

      <input
        id={customId}
        {...rest}
        name={name}
        className={classnames(styles.input, className)}
      />
    </Fragment>
  );
};

export default Input;
