import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedede;
    position: relative;

    .linkBtn {
      color: #939393;
      font-size: 13px;
      font-weight: bold;
      transition: 0.2s linear color;
      margin-right: 15px;

      &:hover {
        color: ${darken(0.1, '#939393')};
      }
    }

    input {
      background: none;
      border: 0;
      padding: 10px;
    }

    input:not(:disabled) {
      background: #dedede;
      border-radius: 4px;
    }

    input,
    strong {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
      color: #1a1a1a;
    }

    span {
      color: #8d8d8d;
      font-size: 11px;
      font-weight: 600;
    }

    .svg {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-right: 20px;
      background: #5471f1;
      color: #f5f5f5;
      height: 100%;
      padding: 4px;
      font-size: 9px;
      border-radius: 4px;
    }
  }

  @media only screen and (max-width: 640px) {
    .linkBtn {
      margin-left: 10px;
    }
  }
`;
