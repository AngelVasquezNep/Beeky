import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AudioClipPropTypes } from './commonPropTypes';

import Clip from 'components/Clip';

import styles from './styles.module.css';

const ClipList = ({ clips, handleUpdateClip, handleDeleteClip, minClipDuration }) => (
  <Fragment>
    <h1>Clips</h1>
    <div className={styles.ClipList}>
      {clips.map((clip) => (
        <Clip
          {...clip}
          key={clip.id}
          minClipDuration={minClipDuration}
          handleUpdateClip={handleUpdateClip}
          handleDeleteClip={handleDeleteClip}
        />
      ))}
      {clips.length === 0 && <p>Sin clips</p>}
    </div>
  </Fragment>
);

ClipList.propTypes = {
  clips: PropTypes.arrayOf(PropTypes.shape(AudioClipPropTypes)),
};

export default ClipList;
