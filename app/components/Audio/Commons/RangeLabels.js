import classnames from 'classnames';

import { toHHMMSS } from 'app/utils/date';
import { getOffset } from 'components/utils';

import styles from './RangeLabels.module.css';

export const RangeLabelCurrentValue = ({ value, min, max, className }) => (
  <span
    style={{ ...getOffset({ value, max, min }) }}
    className={classnames(styles.RangeLabelCurrentValue, className)}
  >
    {toHHMMSS(value)}
  </span>
);

export const RangeLabelMaxValue = ({ value, className }) => (
  <span className={classnames(styles.RangeLabelMaxValue, className)}>
    {toHHMMSS(value)}
  </span>
);

export const RangeLabelMinValue = ({ value, className }) => (
  <span className={classnames(styles.RangeLabelMinValue, className)}>
    {toHHMMSS(value)}
  </span>
);

export const RangeCurrentValue = ({ value, min, max, className }) => (
  <span
    style={{ left: `${((value - min) / (max - min)) * 100}%` }}
    className={classnames(styles.RangeCurrentValue, className)}
  />
);
