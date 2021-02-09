import { ClipPropTypes } from './commonPropTypes';

import { Button } from 'controls';

import styles from './styles.module.css'

const ClipListItem = ({ title, onListen }) => (
  <div className={styles.ClipListItem}>
    <p className={styles.ClipListItemTitle}>{title}</p>

    <Button size="small" onClick={onListen}>
      Ver
    </Button>
  </div>
);

ClipListItem.propTypes = ClipPropTypes;

export default ClipListItem;
