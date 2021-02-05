import { useState } from 'react';
import styles from './styles.module.scss';

const MultiThumbSliders = ({ min = 0, max = 50, minRange = 0 }) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(30);

  function handleChangeA(a) {
    if (a + minRange >= max) {
      setA(max - minRange);
      setB(max);
      return;
    }

    if (b - a <= minRange) {
      setA(a);
      setB(a + minRange);
      return;
    }

    setA(a);
  }

  function handleChangeB(b) {
    if (b - minRange <= min) {
      setB(min + minRange);
      setA(min);
      return;
    }

    if (b - a <= minRange) {
      setB(b);
      setA(b - minRange);
      return;
    }

    setB(b);
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
