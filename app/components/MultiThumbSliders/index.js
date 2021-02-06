import { useState } from 'react';

import { calculateNextHigtValues, calculateNextLowValues } from './utils';

import styles from './styles.module.scss';

const MultiThumbSliders = ({
  min = 0,
  max = 50,
  minRange = 0,
}) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(30);

  function handleChangeA(a) {
    const values = calculateNextLowValues({ a, b, minRange, max });

    setA(values.a);
    setB(values.b);
  }

  function handleChangeB(b) {
    const values = calculateNextHigtValues({ a, b, minRange, min });

    setA(values.a);
    setB(values.b);
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

export default MultiThumbSliders;
