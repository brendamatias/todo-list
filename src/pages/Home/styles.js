import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 60px 100px;

  @media only screen and (max-width: 640px) {
    padding: 50px 20px;
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    color: #162b39;
  }

  span {
    font-weight: 600;
    color: #7e8a92;
  }

  .buttons {
    display: flex;
    grid-gap: 10px;

    .navlink {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #5471f1;
      border: 0;
      border-radius: 8px;
      padding: 10px 30px;
      color: #f5f5f5;
      font-weight: bold;
      font-size: 13px;
      transition: 0.2s linear background;

      &:hover {
        background: ${darken(0.1, '#5471f1')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .buttons {
      margin-top: 10px;
    }
  }
`;
