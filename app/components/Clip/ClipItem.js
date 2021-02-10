import { ClipPropTypes } from './commonPropTypes';

import { Button } from 'controls';

import styles from './styles.module.css'

const ClipItem = ({ title, onListen }) => (
  <div className={styles.ClipItem}>
    <p className={styles.ClipListItemTitle}>{title}</p>

    <Button size="small" onClick={onListen}>
      Ver
    </Button>
  </div>
);

ClipItem.propTypes = ClipPropTypes;

export default ClipItem;
