/* eslint-disable react/prop-types */
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../../services/api';
import getError from '../../services/getError';

import { Container, Introduction } from './styles';

import Header from '../../components/Header';
import ModalConfirmation from './ModalConfirmation';
import Board from '../../components/Board';
import ModalNewTask from './ModalNewTask';

import HomeContext from './context';

export default function Home({ match }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalConfirmationOpen, setModalConfirmationOpen] = useState(false);
  const [modalAddTaskOpen, setModalAddTaskOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentItem, setCurrentItem] = useState('');

  const id = useMemo(
    () => ({
      value: match.params.id,
    }),
    [match.params.id]
  );

  async function getTasks() {
    const response = await api.get('/tasks');

    setTasks(response.data?.data);
  }

  const handleUpdateFinishedStatus = async (itemId, finished) => {
    try {
      await api.patch(`items/${itemId}/status`, {
        finished,
      });

      toast.success('Item atualizado com sucesso!');

      const currentItems = tasks.map((task) => {
        const items = task.items.map((item) => {
          if (item.id === itemId) {
            return { ...item, finished };
          }

          return item;
        });

        return { ...task, items };
      });

      setTasks(currentItems);
    } catch (err) {
      getError(err);
    }
  };

  const handleUpdateTaskId = async (itemId, task_id) => {
    try {
      await api.patch(`items/${itemId}`, {
        task_id,
      });

      toast.success('Item atualizado com sucesso!');
    } catch (err) {
      getError(err);
    }
  };

  const handleDeleteTask = async (taskId, deleteItem) => {
    try {
      setCurrentItem(taskId);
      setModalConfirmationOpen(!deleteItem);

      if (!deleteItem) {
        return;
      }

      await api.delete(`tasks/${taskId}`);
      toast.success('Item deletado com sucesso!');

      await getTasks();
    } catch (err) {
      getError(err);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await api.delete(`items/${itemId}`);
      toast.success('Subitem deletado com sucesso!');

      await getTasks();
    } catch (err) {
      getError(err);
    }
  };

  const handleAddTask = async ({ title }) => {
    try {
      await api.post('tasks', { title });
      toast.success('Item cadastrado com sucesso!');

      setModalAddTaskOpen(false);
      await getTasks();
    } catch (err) {
      getError(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, [id]);

  return (
    <>
      <Container>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Introduction>
          <div>
            <h1>Quais são seus planos?</h1>
            <span>Organize os seus planos para hoje</span>
          </div>

          <div className="buttons">
            <div>
              <Link to="/add-item" className="navlink">
                Add Subitem
              </Link>
            </div>
          </div>
        </Introduction>

        <HomeContext.Provider
          value={{
            tasks,
            handleDeleteTask,
            handleUpdateFinishedStatus,
            handleDeleteItem,
            handleUpdateTaskId,
            handleAddTask,
          }}
        >
          <Board
            tasks={tasks}
            setTasks={setTasks}
            accepts={['CARD']}
            setModalAddTaskOpen={setModalAddTaskOpen}
          />
        </HomeContext.Provider>
      </Container>

      <ModalConfirmation
        modalOpen={modalConfirmationOpen}
        setModalOpen={setModalConfirmationOpen}
        deleteItem={() => handleDeleteTask(currentItem, true)}
      />

      <ModalNewTask
        modalOpen={modalAddTaskOpen}
        setModalOpen={setModalAddTaskOpen}
        handleSubmit={handleAddTask}
      />
    </>
  );
}
