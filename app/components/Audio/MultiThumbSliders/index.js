import { MultiThumbSliders } from 'components';

import {
  RangeCurrentValue,
  RangeLabelCurrentValue,
  RangeLabelMaxValue,
  RangeLabelMinValue,
} from 'components/Audio/Commons/RangeLabels';

import styles from './styles.module.css';

const MultiThumbSlidersAudio = ({ currentTime, min, max, from, to, ...rest }) => {
  return (
    <div className={styles.MultiThumbSlidersAudio}>
      <RangeLabelMinValue value={min} className={styles.label} />
      <RangeLabelMaxValue value={max} className={styles.label} />
      <RangeCurrentValue
        min={min}
        max={max}
        value={currentTime}
        className={styles.RangeCurrentValue}
      />
      <RangeLabelCurrentValue
        value={from}
        min={min}
        max={max}
        className={styles.label}
      />
      <RangeLabelCurrentValue
        value={to}
        min={min}
        max={max}
        className={styles.HigtOffset}
      />

      <MultiThumbSliders from={from} to={to} min={min} max={max} {...rest} />
    </div>
  );
};

export default MultiThumbSlidersAudio;
