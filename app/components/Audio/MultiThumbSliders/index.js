import { MultiThumbSliders } from 'components';

import { useState } from 'react';

import {
  RangeLabelCurrentValue,
  RangeLabelMaxValue,
  RangeLabelMinValue,
} from 'components/Audio/Commons/RangeLabels';

import styles from './styles.module.css';

const MultiThumbSlidersAudio = ({
  min,
  max,
  from,
  to,
  handleChange,
  ...rest
}) => {
  const [{ lowOffset, higtOffset }, setOffset] = useState({
    lowOffset: from,
    higtOffset: to,
  });

  function handleRangeChange({ from, to, ...rest }) {
    setOffset({ lowOffset: from, higtOffset: to });

    if (handleChange) {
      handleChange({ from, to, ...rest });
    }
  }

  return (
    <div className={styles.MultiThumbSlidersAudio}>
      <RangeLabelMinValue value={min} className={styles.label} />
      <RangeLabelMaxValue value={max} className={styles.label} />
      <RangeLabelCurrentValue
        value={lowOffset}
        min={min}
        max={max}
        className={styles.label}
      />
      <RangeLabelCurrentValue
        value={higtOffset}
        min={min}
        max={max}
        className={styles.label}
      />

      <MultiThumbSliders
        from={from}
        to={to}
        min={min}
        max={max}
        handleChange={handleRangeChange}
        {...rest}
      />
    </div>
  );
};

export default MultiThumbSlidersAudio;
