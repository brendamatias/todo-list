/* eslint-disable no-console */
import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { toast } from 'react-toastify';

import { FaCheck, FaTrash, FaEdit } from 'react-icons/fa';
import { Container, ButtonStatus } from './styles';
import HomeContext from '../../pages/Home/context';

export default function Card({ data, index, taskIndex }) {
  const ref = useRef();
  const { handleUpdateFinishedStatus, handleDeleteItem } =
    useContext(HomeContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: { ...data, index, taskIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedTaskIndex = item.taskIndex;
      const targetTaskIndex = taskIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedTaskIndex === targetTaskIndex
      ) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (
        (draggedIndex < targetIndex && draggedTop < targetCenter) ||
        (draggedIndex > targetIndex && draggedTop > targetCenter)
      ) {
        return;
      }

      if (draggedTaskIndex === targetTaskIndex) {
        toast.error('Subitem já atrelado ao item');
        item.index = index;
        item.taskIndex = targetTaskIndex;
      }
    },
  });

  dragRef(dropRef(ref));

  const formatDate = (hours) => {
    const now = new Date();
    now.setHours(hours);

    return format(now, "hhaaaaa'm'");
  };

  return (
    <Container ref={ref} isDragging={isDragging}>
      {data.id && (
        <>
          <div>
            <ButtonStatus
              finished={data.finished}
              onClick={() =>
                handleUpdateFinishedStatus(data.id, !data.finished)
              }
            >
              <FaCheck />
            </ButtonStatus>

            <div>
              <strong>{data.content}</strong>
              <span>
                {formatDate(data.start_at)} - {formatDate(data.end_at)}
              </span>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => handleDeleteItem(data.id)}
              className="button"
            >
              <FaTrash />
            </button>

            <Link className="button" to={`/edit-item/${data.id}`}>
              <FaEdit />
            </Link>
          </div>
        </>
      )}
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  taskIndex: PropTypes.number.isRequired,
};
