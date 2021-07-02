import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  select {
    -webkit-appearance: none;
    cursor: pointer;
    font-family: inherit;
    transition: all 150ms ease;
    background: #f5f5f5;
    padding: 10px 20px;
    border-radius: 8px;
    border: 0;
    color: #7d7d7d;
    margin: 10px 20px 20px 0;
    width: 100%;
    font-size: 13px;
  }

  svg {
    position: absolute;
    right: 20px;
    top: calc(50% - 12px);
    color: #9098a9;
    cursor: pointer;
  }
`;
