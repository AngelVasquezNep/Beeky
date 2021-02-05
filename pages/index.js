import { AudioPlayerContainer } from 'containers';
import { AudioPlayer, AudioClip } from 'components';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <AudioPlayerContainer
        title="Cien años de soledad"
        src="http://listen.vo.llnwd.net/g3/prvw/3/2/6/0/4/2270840623.mp3"
        cover="https://horcrux1.beek.io/caWKfzkoF0sNwmWPqRNBSO1lMqk=/264x394/smart/store/507ea783cdc56e18967b431ad8ad3b140a58e0456810f9c9ce8ed188354d"
        AudioPlayerComponent={AudioPlayer}
      />
      <AudioPlayerContainer
        src="http://listen.vo.llnwd.net/g3/prvw/3/2/6/0/4/2270840623.mp3"
        AudioPlayerComponent={AudioClip}
        initialValues={{
          from: 10,
          to: 21,
          muted: true,
        }}
      />
    </div>
  );
}

export default Home;
