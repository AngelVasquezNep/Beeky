import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useForm } from 'hooks';

import AudioClipPlayer from 'components/Audio/AudioClipPlayer';
import { Input, InputContainer, TextArea, Button } from 'controls';

import styles from './styles.module.css';

const INITIAL_FORM_VALUES = {
  title: '',
  description: '',
};

const AudioClip = ({
  className,
  to,
  from,
  onSaveClip,
  handleCancel,
  ...rest
}) => {
  const { formData, handleInputChange, handleSubmit } = useForm(
    INITIAL_FORM_VALUES,
    handleSaveClip,
  );

  function handleSaveClip(values) {
    if (onSaveClip) {
      onSaveClip({ ...values, from, to });
    }
  }

  const { title, description } = formData;

  return (
    <div className={classnames(styles.AudioClip, className)}>
      <form onSubmit={handleSubmit}>
        <InputContainer style="vertical">
          <Input
            label="Título"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
          <TextArea
            label="Descripción"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </InputContainer>

        <AudioClipPlayer
          {...rest}
          to={to}
          from={from}
          className={styles.AudioClipPlayer}
        />

        <Button
          status="warning"
          onClick={handleCancel}
          style={{ marginRight: '0.5rem' }}
        >
          Cancelar
        </Button>
        <Button type="submit" disabled={title === ''}>
          Guardar
        </Button>
      </form>
    </div>
  );
};

AudioClip.propTypes = {
  to: PropTypes.number.isRequired,
  from: PropTypes.number.isRequired,
  onSaveClip: PropTypes.func,
  handleCancel: PropTypes.func,
}

export default AudioClip;
