import React, { useContext } from 'react';
import produce from 'immer';
import PropTypes from 'prop-types';

import { Container } from './styles';
import List from '../List';
import HomeContext from '../../pages/Home/context';
import getError from '../../services/getError';
import HeaderBoard from '../HeaderBoard';

export default function Board({ tasks, setTasks, setModalAddTaskOpen }) {
  const { handleUpdateTaskId, handleAddTask, handleDeleteItem } =
    useContext(HomeContext);

  async function handleDrop(index, item) {
    try {
      if (item.task_id !== tasks[index].id) {
        await handleUpdateTaskId(item.id, tasks[index].id);
      }

      setTasks(
        produce(tasks, (draft) => {
          const dragged = draft[item.taskIndex].items[item.index];

          dragged.task_id = tasks[index].id;
          draft[item.taskIndex].items.splice(item.index, 1);
          draft[index].items.push(dragged);
        })
      );
    } catch (err) {
      getError(err);
    }
  }

  async function handleNewItem(item) {
    try {
      await handleAddTask({ title: item.content });
      await handleDeleteItem(item.id);
    } catch (err) {
      getError(err);
    }
  }

  return (
    <>
      <HeaderBoard
        accepts={['CARD']}
        onDrop={(item) => handleNewItem(item)}
        setModalAddTaskOpen={setModalAddTaskOpen}
      />
      <Container>
        <h4>Atividades</h4>

        <div>
          {tasks.map((task, index) => (
            <List
              key={task.id}
              accepts={['CARD']}
              onDrop={(item) => handleDrop(index, item)}
              index={index}
              data={task}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

Board.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTasks: PropTypes.func.isRequired,
  setModalAddTaskOpen: PropTypes.func.isRequired,
};
