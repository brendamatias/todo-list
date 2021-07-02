import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;

  h4 {
    font-size: 16px;
    color: #080809;
    margin-bottom: 14px;
  }

  strong {
    display: block;
    color: #1a1a1a;
    margin-bottom: 4px;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, auto));
    grid-gap: 30px;

    @media only screen and (max-width: 640px) {
      grid-template-columns: 1fr;
    }

    > div {
      background: #f5f5f5;
      padding: 30px;
      border-radius: 8px;
    }
  }
`;
