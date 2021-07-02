import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import Button from '../../../components/Button';

export default function ModalNewTask({
  modalOpen,
  setModalOpen,
  handleSubmit,
}) {
  const [title, setTitle] = useState('');

  return (
    <Container modalOpen={modalOpen}>
      <div>
        <div className="header">
          <h1>Adicionar Item</h1>
        </div>

        <div className="content">
          <strong>Título</strong>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <div className="buttons">
            <Button
              type="button"
              onClick={() => setModalOpen(false)}
              background="#E2222F"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              onClick={() => {
                handleSubmit({ title });
              }}
            >
              Adicionar
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

ModalNewTask.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
