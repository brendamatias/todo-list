import React from 'react';
import { DropTarget } from 'react-dnd';
import { FaPlus } from 'react-icons/fa';
import { Header } from './styles';

function HeaderBoard({ connectDropTarget, setModalAddTaskOpen }) {
  return connectDropTarget(
    <div>
      <button onClick={() => setModalAddTaskOpen(true)} type="button">
        <Header>
          <div>
            <strong>
              <FaPlus />
              Criar um novo item
            </strong>
            <p>Clique ou mova subitems aqui para criar um novo item</p>
          </div>
        </Header>
      </button>
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
)(HeaderBoard);
