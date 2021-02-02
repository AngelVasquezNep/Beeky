import classnames from 'classnames';
import styles from './styles.module.css';

const Loading = ({ loading, className }) => {
  if (loading) {
    return (
      <div className={classnames(styles.Loading, className)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return null;
};

export const CoverLoading = ({ loading }) => (
  <div
    className={
      classnames(styles.CoverLoading,
      {
        [styles.CoverLoadingActive]: loading,
      })
    }
  >
    <Loading loading={loading} />
  </div>
);

export default Loading;
