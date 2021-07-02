import React, { useState, useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { DropTarget } from 'react-dnd';
import { toast } from 'react-toastify';

import { Container } from './styles';
import Card from '../Card';
import Button from '../Button';

import { api } from '../../services/api';
import getError from '../../services/getError';

import HomeContext from '../../pages/Home/context';

function List({ data, index: taskIndex, connectDropTarget }) {
  const { handleDeleteTask } = useContext(HomeContext);
  const [isUpdate, setIsUpdate] = useState(false);
  const [task, setTask] = useState(data);
  const [title, setTitle] = useState(data.title);

  function handleCancelEdit() {
    setTitle(task.title);
    setIsUpdate(false);
  }

  async function handleEdit() {
    try {
      if (!isUpdate) {
        setIsUpdate(true);
        return;
      }

      await api.patch(`tasks/${data.id}`, { title });
      toast.success('Item atualizado com sucesso!');

      setTask({ ...task, title });
      setIsUpdate(false);
    } catch (err) {
      getError(err);
    }
  }

  return connectDropTarget(
    <div>
      <Container>
        <header>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={!isUpdate}
          />

          <div>
            {isUpdate ? (
              <button
                className="linkBtn"
                type="button"
                onClick={() => handleCancelEdit()}
              >
                Cancelar
              </button>
            ) : (
              <button
                className="linkBtn"
                type="button"
                onClick={() =>
                  handleDeleteTask(data.id, !(data.items.length > 0))
                }
              >
                <FaTrash /> Deletar
              </button>
            )}

            <Button
              type="button"
              onClick={() => handleEdit()}
              background={isUpdate ? '#22A451' : '#FEB016'}
              color={isUpdate ? '#fff' : '#1a1a1a'}
            >
              {isUpdate ? 'Salvar' : 'Editar'}
            </Button>
          </div>
        </header>

        <ul>
          {data.items.map((item, index) => (
            <Card
              key={item.id}
              index={index}
              taskIndex={taskIndex}
              data={item}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default DropTarget(
  (props) => props.accepts,
  {
    drop(props, monitor) {
      props.onDrop(monitor.getItem());
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  })
)(List);
