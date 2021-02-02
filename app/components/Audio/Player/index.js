/**
 * Design idea is from
 * https://dribbble.com/shots/6840653-Concept-of-Audiobook
 */

import Audio from 'components/Audio';
import Controls from 'components/Audio/Controls';
import ProgressBar from 'components/Audio/ProgressBar';

import { CoverLoading } from 'components/Loading';

import styles from './styles.module.css';

const Cover = ({ cover, title, loading, ...rest }) => {
  if (cover) {
    return (
      <div className={styles.Cover}>
        <CoverLoading loading={loading} />

        <img
          className={styles.CoverImage}
          width={250}
          height={400}
          src={cover}
          alt={title}
          {...rest}
        />
      </div>
    );
  }

  return null;
};

const Title = ({ title }) => <h2 className={styles.Title}>{title}</h2>;

const Player = ({
  cover,
  title,
  currentTime,
  duration,
  loading,
  src,
  setRef,
  play,
  isPlaying,
  playbackRate,
  handlePlaybackRageChanges,
  volume,
  handleVolumeChanges,
  muted,
  setCurrentTime,
  handleToggleMute,
  handleProgress,
  onTogglePlay,
  handleTimeUpdate,
  handleWaiting,
  handlePlaying,
  handleSeeking,
  handleSeeked,
  handleLoadedData,
  handleLoadedMetadata,
}) => {
  return (
    <div className={styles.Player}>
      <Cover loading={loading} cover={cover} title={title} />

      <Title title={title} />

      <ProgressBar
        value={currentTime}
        max={duration}
        handleChange={setCurrentTime}
      />

      <Controls
        muted={muted}
        volume={volume}
        isPlaying={isPlaying}
        onTogglePlay={onTogglePlay}
        playbackRate={playbackRate}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        handleToggleMute={handleToggleMute}
        handleVolumeChanges={handleVolumeChanges}
        handlePlaybackRageChanges={handlePlaybackRageChanges}
      />

      <Audio
        play={play.toString()}
        setRef={setRef}
        controls={false}
        src={src}
        handleProgress={handleProgress}
        handleSeeking={handleSeeking}
        handleSeeked={handleSeeked}
        handleLoadedData={handleLoadedData}
        handleWaiting={handleWaiting}
        handlePlaying={handlePlaying}
        handleLoadedMetadata={handleLoadedMetadata}
        handleTimeUpdate={({ target }) =>
          handleTimeUpdate(Number(target.currentTime))
        }
      />
    </div>
  );
};

Player.defaultProps = {
  title: 'Title',
};

export default Player;
