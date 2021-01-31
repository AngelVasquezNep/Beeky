import { AudioPlayerContainer } from 'containers';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <AudioPlayerContainer src="./audio.mp3" />
    </div>
  );
}

export default Home;
