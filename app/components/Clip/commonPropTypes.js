import PropTypes from 'prop-types';

export const ClipPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
};

export const AudioClipPropTypes = {
  src: PropTypes.string.isRequired,
  bookId: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  bookTitle: PropTypes.string.isRequired,

  clip: PropTypes.shape(ClipPropTypes),
};
