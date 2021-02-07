import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { calculateNextHigtValues, calculateNextLowValues } from './utils';

import styles from './styles.module.scss';

const MultiThumbSliders = ({
  min,
  max,
  from,
  to,
  minRange,
  handleChange,
  handleChangeFrom,
  handleChangeTo,
}) => {
  function handleChangeA(from) {
    if (handleChange) {
      handleChange(calculateNextLowValues({ from, to, minRange, max }));
    }

    if (handleChangeFrom) {
      handleChangeFrom(from);
    }
  }

  function handleChangeB(to) {
    if (handleChange) {
      handleChange(calculateNextHigtValues({ from, to, minRange, min }));
    }

    if (handleChangeTo) {
      handleChangeTo(to);
    }
  }

  return (
    <div className={styles.MultiThumbSliders}>
      <div className={styles.ProgressBar}></div>
      <div className={styles['wrap']} role="group" aria-labelledby="multi-lbl">
        <input
          value={from}
          type="range"
          min={min}
          max={max}
          step={0.01}
          onChange={({ target }) => handleChangeA(Number(target.value))}
        />

        <input
          value={to}
          type="range"
          min={min}
          max={max}
          step={0.01}
          onChange={({ target }) => handleChangeB(Number(target.value))}
        />
      </div>
    </div>
  );
};

MultiThumbSliders.defaultProps = {
  min: 0,
  max: 50,
  from: 0,
  to: 25,
  minRange: 0,
};

MultiThumbSliders.propTypes = {
  min: PropTypes.number, // Min range value
  max: PropTypes.number, // Max range value
  from: PropTypes.number, // Where low value is started
  to: PropTypes.number, // Where higt value is started
  minRange: PropTypes.number, // Min space between from and to value
  handleChange: PropTypes.func, // ({ from, to }) => {}
  handleChangeFrom: PropTypes.func,
  handleChangeTo: PropTypes.func,
};

export default MultiThumbSliders;
