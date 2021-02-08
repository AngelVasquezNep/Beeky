import { Fragment } from 'react';
import classnames from 'classnames';

import Label from './Label';

import styles from './styles.module.css';

const TextArea = ({ id, label, name, className, ...rest }) => {
  const customId = id || `${label}-${name}`;

  return (
    <Fragment>
      <Label id={customId} label={label} className={className} />

      <textarea
        id={customId}
        name={name}
        className={classnames(styles.input, styles.TextArea, className)}
        {...rest}
      />
    </Fragment>
  );
};

export default TextArea;
