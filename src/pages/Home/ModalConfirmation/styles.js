import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.modalOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fefefe;
    margin: 25% auto;
    padding: 40px;
    width: 55%;
    border-radius: 8px;

    div {
      display: flex;
      grid-gap: 15px;
    }

    h1 {
      font-size: 24px;
      color: #162b39;
      margin-top: 10px;
    }

    h3 {
      font-size: 14px;
      font-weight: 500;
      margin: 10px 0 20px 0;
      text-align: center;
      color: #8d8d8d;
    }
  }

  @media only screen and (max-width: 640px) {
    > div {
      width: 90%;
      padding: 20px;
    }
  }
`;
