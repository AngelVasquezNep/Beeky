import { useState } from 'react';

import uuid from 'app/utils/uuid';

import PlayerApp from 'app/layouts/PlayerApp';

import styles from '../styles/Home.module.css';

function Home() {
  const [clips, setClips] = useState([]);

  function saveClip(clip) {
    const createdAt = new Date().getTime();

    setClips((clips) => [
      ...clips,
      {
        id: uuid(),
        ...clip,
        createdAt,
        updatedAt: createdAt,
      },
    ]);
  }

  function handleUpdateClip(clip) {
    setClips((clips) =>
      clips.map((c) =>
        c.id === clip.id
          ? { ...c, ...clip, updatedAt: new Date().getTime() }
          : c,
      ),
    );
  }

  function handleDeleteClip(clipId) {
    setClips((clips) => clips.filter((clip) => clip.id !== clipId));
  }

  return (
    <div className={styles.container}>
      <PlayerApp
        clips={clips}
        saveClip={saveClip}
        handleUpdateClip={handleUpdateClip}
        handleDeleteClip={handleDeleteClip}
        bookId="123"
        minClipDuration={30}
        title="Cien años de soledad"
        src="https://samples.findawayworld.com/363461/363461_sample.mp3"
        cover="https://horcrux1.beek.io/caWKfzkoF0sNwmWPqRNBSO1lMqk=/264x394/smart/store/507ea783cdc56e18967b431ad8ad3b140a58e0456810f9c9ce8ed188354d"
      />
    </div>
  );
}

export default Home;
