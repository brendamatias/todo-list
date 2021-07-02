import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 100px;

  @media only screen and (max-width: 640px) {
    padding: 50px 20px;
  }

  h1 {
    font-size: 24px;
    color: #162b39;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    color: #7e8a92;
    max-width: 500px;
    margin-top: 15px;
  }
`;
