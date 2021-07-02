/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { api } from '../../services/api';
import getError from '../../services/getError';

import { Container, Introduction, Form } from './styles';
import Header from '../../components/Header';
import Select from '../../components/Select';

export default function AddItem({ history }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState('');
  const [task, setTask] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [optionsEndHours, setOptionsEndHours] = useState([]);

  const hours = Array.from(Array(24).keys());

  const formatOptions = (options) => {
    const data = options.map((option) => ({
      id: option,
      title: option < 12 ? `${option}am` : `${option}pm`,
    }));

    return data;
  };

  const handleSubmit = async ({
    startHour: startAt,
    endHour: endAt,
    title: content,
  }) => {
    try {
      await api.post('/items', {
        task_id: task,
        start_at: startAt,
        end_at: endAt,
        content,
      });

      toast.success('Subitem cadastrado com sucesso!');
      history.goBack();
    } catch (err) {
      getError(err);
    }
  };

  useEffect(() => {
    const options = hours.filter((hour) => hour > startHour);

    setOptionsEndHours(formatOptions(options));
  }, [startHour]);

  useEffect(() => {
    async function getTasks() {
      const response = await api.get('/tasks');

      setTasks(response.data?.data);
    }

    getTasks();
  }, []);

  return (
    <Container>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Introduction>
        <div>
          <button type="button" onClick={() => history.goBack()}>
            <FiArrowLeft />
          </button>

          <h1>Adicionar Subitem</h1>
        </div>

        <span>Organize os seus planos para hoje</span>
      </Introduction>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ startHour, endHour, title, task });
        }}
      >
        <strong>Título</strong>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <div className="grid">
          <div>
            <strong>Início</strong>
            <Select
              name="start-hours"
              options={formatOptions(hours)}
              value={startHour}
              onChange={(e) => {
                setStartHour(e.target.value);
              }}
            />
          </div>

          <div>
            <strong>Fim</strong>
            <Select
              name="end-hours"
              options={optionsEndHours}
              value={endHour}
              onChange={(e) => {
                setEndHour(e.target.value);
              }}
            />
          </div>

          <div>
            <strong>Atividade</strong>
            <Select
              name="tasks"
              options={tasks}
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
          </div>
        </div>

        <button type="submit">Criar Subitem</button>
      </Form>
    </Container>
  );
}
