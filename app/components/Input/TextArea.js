import { Fragment } from 'react';
import classnames from 'classnames';

import Label from './Label';

import styles from './styles.module.css';

const TextArea = ({ id, label, className, ...rest }) => (
  <Fragment>
    <Label id={id} label={label} className={className} />

    <textarea
      id={id}
      className={classnames(styles.input, styles.TextArea, className)}
      {...rest}
    />
  </Fragment>
);

export default TextArea;
