import { ClipPropTypes } from './commonPropTypes';

import { Button } from 'controls';

import { DateMessage } from './Commons';

import styles from './styles.module.css';

const ClipItem = ({ title, onListen, createdAt }) => (
  <div className={styles.ClipItem}>
    <p className={styles.ClipListItemTitle}>
      <strong>{title}</strong>
      <br />
      <DateMessage date={createdAt} />
    </p>

    <Button size="small" onClick={onListen}>
      Ver
    </Button>
  </div>
);

ClipItem.propTypes = ClipPropTypes;

export default ClipItem;
