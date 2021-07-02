import styled, { css } from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 2px dashed transparent;

  .button svg {
    color: #1a1a1a;
    font-size: 14px;
    transition: 0.1s linear color;
    margin-left: 20px;

    &:hover {
      color: #5471f1;
    }
  }

  > div {
    display: flex;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedede;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: transparent;
      cursor: grabbing;

      .button,
      > div {
        opacity: 0;
      }
    `}
`;

export const ButtonStatus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
  margin-right: 20px;
  background: ${(props) => (props.finished ? '#5471f1' : '#ddd')};
  padding: 4px;
  border-radius: 4px;

  svg {
    color: #f5f5f5;
    font-size: 9px;
    display: ${(props) => (props.finished ? 'block' : 'none')};
  }
`;
