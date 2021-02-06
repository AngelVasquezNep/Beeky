import { useState } from 'react';
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
}) => {
  const [a, setA] = useState(from);
  const [b, setB] = useState(to);

  function handleChangeA(a) {
    const values = calculateNextLowValues({ a, b, minRange, max });

    setA(values.a);
    setB(values.b);
    handleChange({ from: values.a, to: values.b });
  }

  function handleChangeB(b) {
    const values = calculateNextHigtValues({ a, b, minRange, min });

    setA(values.a);
    setB(values.b);
    handleChange({ from: values.a, to: values.b });
  }

  return (
    <div className={styles.MultiThumbSliders}>
      <div className={styles.ProgressBar}></div>
      <div className={styles['wrap']} role="group" aria-labelledby="multi-lbl">
        <input
          value={a}
          type="range"
          min={min}
          max={max}
          onChange={({ target }) => handleChangeA(Number(target.value))}
        />

        <input
          value={b}
          type="range"
          min={min}
          max={max}
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
  handleChange: () => {},
}

MultiThumbSliders.propTypes = {
  min: PropTypes.number, // Min range value
  max: PropTypes.number, // Max range value
  from: PropTypes.number, // Where low value is started
  to: PropTypes.number, // Where higt value is started
  minRange: PropTypes.number, // Min space between from and to value
  handleChange: PropTypes.func, // ({ from, to }) => {}
};

export default MultiThumbSliders;
