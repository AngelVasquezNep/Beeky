import { useState } from 'react';

import { dateFormat } from 'utils/date';

import { Button } from 'controls';

import { AudioPlayerContainer } from 'containers';
import { AudioPlayer } from 'components';
import { CloseIcon, EditIcon, TrashIcon } from 'components/Icons';

import ClipItem from './ClipItem';

import styles from './styles.module.css';

const ClipControls = ({ onClose }) => (
  <div className={styles.ClipControls}>
    <Button
      className={styles.ClipControlsButton}
      size="small"
      type="text"
      status="danger"
    >
      <TrashIcon color="danger" size="tiny" />
    </Button>
    <Button className={styles.ClipControlsButton} size="small" type="text">
      <EditIcon size="tiny" />
    </Button>
    <Button
      onClick={onClose}
      className={styles.ClipControlsButton}
      size="small"
      type="text"
    >
      <CloseIcon size="tiny" />
    </Button>
  </div>
);

const Title = ({ title }) => <h3>{title}</h3>;

const Description = ({ description }) =>
  description ? <p>{description}</p> : null;

const DateMessage = ({ date }) => <small>{dateFormat(date)}</small>;

const Clip = ({ id, createdAt, clip, cover, ...rest }) => {
  const [listen, setListen] = useState(false);

  if (listen) {
    return (
      <div className={styles.Clip}>
        <ClipControls onClose={() => setListen(false)} />

        <Title {...clip} />
        <Description {...clip} />
        <DateMessage date={createdAt} />

        <AudioPlayerContainer
          {...rest}
          initialValues={{
            from: clip.from,
            to: clip.to,
          }}
          AudioPlayerComponent={AudioPlayer}
        />
      </div>
    );
  }

  return <ClipItem title={clip.title} onListen={() => setListen(true)} />;
};

export default Clip;
