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

  input {
    background: #f5f5f5;
    padding: 10px 20px;
    border-radius: 8px;
    border: 0;
    color: #7d7d7d;
    margin: 10px 20px 20px 0;
    width: 100%;
    font-size: 13px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fefefe;
    margin: 25% auto;
    width: 55%;
    border-radius: 8px;

    .header {
      background: #f5f5f5;
      width: 100%;
      padding: 15px 40px;
      border-radius: 8px 8px 0 0;

      h1 {
        font-size: 24px;
        color: #162b39;
        margin-top: 10px;
      }
    }

    .content {
      padding: 20px 40px;
      width: 100%;
    }

    .buttons {
      display: flex;
      justify-content: center;
      grid-gap: 15px;
      background-color: #fefefe;
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 640px) {
    > div {
      width: 90%;

      .header {
        padding: 15px 20px;
      }

      .content {
        padding: 20px 20px;
      }
    }
  }
`;
