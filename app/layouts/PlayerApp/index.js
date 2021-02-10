import { Fragment, useState } from 'react';

import { AudioPlayerContainer } from 'containers';
import { AudioPlayer, AudioClip } from 'components';
import { Button } from 'controls';

import ClipList from 'components/Clip/ClipList';
import { AudioBookmarkIcon, BookmarkIcon } from 'components/Icons';

import styles from './styles.module.css';

const VIEWS = {
  AUDIO_PLAYER: 'AUDIO_PLAYER',
  AUIDO_CLIP: 'AUIDO_CLIP',
  AUIDO_CLIP_LIST: 'AUIDO_CLIP_LIST',
};

const AudioPlayerSection = ({ title, src, cover, setCurrentView }) => (
  <div className={styles.AudioPlayerSection}>
    <Button
      type="text"
      className={styles.BookmarkButton}
      onClick={() => setCurrentView(VIEWS.AUIDO_CLIP_LIST)}
    >
      <BookmarkIcon size="small" />
    </Button>
    <AudioPlayerContainer
      title={title}
      src={src}
      cover={cover}
      AudioPlayerComponent={AudioPlayer}
    />
    <Button
      type="text"
      className={styles.AudioBookmarkButton}
      onClick={() => setCurrentView(VIEWS.AUIDO_CLIP)}
    >
      <AudioBookmarkIcon size="small" />
    </Button>
  </div>
);

const AudioClipSection = ({
  src,
  title,
  bookId,
  setCurrentView,
  onSaveClip,
  minClipDuration,
}) => (
  <Fragment>
    <h2>Audio nota</h2>
    <AudioPlayerContainer
      src={src}
      minClipDuration={minClipDuration}
      AudioPlayerComponent={AudioClip}
      handleCancel={() => setCurrentView(VIEWS.AUDIO_PLAYER)}
      onSaveClip={(clip) => {
        onSaveClip({
          src,
          bookId,
          bookTitle: title,
          clip,
        });
      }}
    />
  </Fragment>
);

const AudioClipListSection = ({
  clips,
  setCurrentView,
  handleUpdateClip,
  handleDeleteClip,
  minClipDuration={minClipDuration}
}) => {
  return (
    <section className={styles.AudioClipListSection}>
      <ClipList
        clips={clips}
        minClipDuration={minClipDuration}
        handleUpdateClip={handleUpdateClip}
        handleDeleteClip={handleDeleteClip}
      />

      <br />
      <Button
        size="small"
        status="warning"
        className={styles.CancelButton}
        onClick={() => setCurrentView(VIEWS.AUDIO_PLAYER)}
      >
        Cerrar
      </Button>
    </section>
  );
};

function PlayerApp({
  bookId,
  src,
  title,
  cover,
  clips,
  saveClip,
  minClipDuration,
  handleUpdateClip,
  handleDeleteClip,
}) {
  const [currentView, setCurrentView] = useState(VIEWS.AUDIO_PLAYER);

  return (
    <section className={styles.PlayerApp}>
      {currentView === VIEWS.AUDIO_PLAYER && (
        <AudioPlayerSection
          title={title}
          src={src}
          cover={cover}
          setCurrentView={setCurrentView}
        />
      )}

      {currentView === VIEWS.AUIDO_CLIP && (
        <AudioClipSection
          src={src}
          title={title}
          bookId={bookId}
          minClipDuration={minClipDuration}
          setCurrentView={setCurrentView}
          onSaveClip={(clip) => {
            saveClip(clip);
            setCurrentView(VIEWS.AUDIO_PLAYER);
          }}
        />
      )}

      {currentView === VIEWS.AUIDO_CLIP_LIST && (
        <AudioClipListSection
          clips={clips}
          minClipDuration={minClipDuration}
          setCurrentView={setCurrentView}
          handleUpdateClip={handleUpdateClip}
          handleDeleteClip={handleDeleteClip}
        />
      )}
    </section>
  );
}

export default PlayerApp;
