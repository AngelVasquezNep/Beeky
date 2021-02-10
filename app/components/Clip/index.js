import { useState } from 'react';

import { dateFormat } from 'utils/date';

import { Button } from 'controls';

import { AudioPlayerContainer } from 'containers';
import { AudioPlayer, AudioClip } from 'components';
import { CloseIcon, EditIcon, TrashIcon } from 'components/Icons';

import ClipItem from './ClipItem';

import styles from './styles.module.css';
import { AudioClipPropTypes } from './commonPropTypes';

const CLIP_VIEWS = {
  EDIT: 'EDIT',
  LISTEN: 'LISTEN',
  ITEM: 'ITEM',
};

const ClipControls = ({ onClose, onEdit, onDelete }) => (
  <div className={styles.ClipControls}>
    <Button
      size="small"
      type="text"
      status="danger"
      onClick={onDelete}
      className={styles.ClipControlsButton}
    >
      <TrashIcon color="danger" size="tiny" />
    </Button>
    <Button
      size="small"
      type="text"
      onClick={onEdit}
      className={styles.ClipControlsButton}
    >
      <EditIcon size="tiny" />
    </Button>
    <Button
      size="small"
      type="text"
      onClick={onClose}
      className={styles.ClipControlsButton}
    >
      <CloseIcon size="tiny" />
    </Button>
  </div>
);

const Title = ({ title }) => <h3>{title}</h3>;

const Description = ({ description }) =>
  description ? <p>{description}</p> : null;

const DateMessage = ({ date }) => <small>{dateFormat(date)}</small>;

const Clip = ({
  id,
  bookId,
  bookTitle,
  createdAt,
  clip,
  src,
  handleUpdateClip,
  handleDeleteClip,
}) => {
  const [currentView, setCurrentView] = useState(CLIP_VIEWS.ITEM);

  const { title, description, from, to } = clip;

  if (currentView === CLIP_VIEWS.EDIT) {
    return (
      <AudioPlayerContainer
        src={src}
        initialValues={{ min: 0, from, to, max: 'auto' }}
        AudioPlayerComponent={AudioClip}
        audioClipinitialValues={{ title, description }}
        handleCancel={() => setCurrentView(CLIP_VIEWS.LISTEN)}
        onSaveClip={(clip) => {
          handleUpdateClip({
            id,
            src,
            bookId,
            bookTitle,
            clip,
          });

          setCurrentView(CLIP_VIEWS.LISTEN);
        }}
      />
    );
  }

  if (currentView === CLIP_VIEWS.LISTEN) {
    return (
      <div className={styles.Clip}>
        <ClipControls
          onClose={() => setCurrentView(CLIP_VIEWS.ITEM)}
          onEdit={() => setCurrentView(CLIP_VIEWS.EDIT)}
          onDelete={() => {
            handleDeleteClip(id);
          }}
        />

        <Title {...clip} />
        <Description {...clip} />
        <DateMessage date={createdAt} />

        <AudioPlayerContainer
          src={src}
          initialValues={{
            from: clip.from,
            to: clip.to,
          }}
          AudioPlayerComponent={AudioPlayer}
        />
      </div>
    );
  }

  if (currentView === CLIP_VIEWS.ITEM) {
    return (
      <ClipItem {...clip} onListen={() => setCurrentView(CLIP_VIEWS.LISTEN)} />
    );
  }

  return null;
};

Clip.propTypes = AudioClipPropTypes;

export default Clip;
