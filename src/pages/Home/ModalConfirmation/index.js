import React from 'react';
import PropTypes from 'prop-types';
import { FiAlertCircle } from 'react-icons/fi';
import { Container } from './styles';

import Button from '../../../components/Button';

export default function ModalConfirmation({
  modalOpen,
  setModalOpen,
  deleteItem,
}) {
  return (
    <Container modalOpen={modalOpen}>
      <div>
        <FiAlertCircle size={70} color="#F8CF86" />
        <h1>Tem certeza?</h1>
        <h3>
          Existem itens atrelados a essa task. Se eliminar não voltará a ver o
          conteúdo!
        </h3>

        <div>
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
              deleteItem();
            }}
          >
            Sim, desejo apagar!
          </Button>
        </div>
      </div>
    </Container>
  );
}

ModalConfirmation.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
