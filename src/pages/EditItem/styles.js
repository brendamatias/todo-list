import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 100px;

  @media only screen and (max-width: 640px) {
    padding: 50px 20px;
  }
`;

export const Menu = styled.div`
  margin-bottom: 40px;
  color: #080809;
  position: relative;

  ul {
    display: ${(props) => (props.open ? 'block' : 'none')};
    font-size: 13px;
    font-weight: bold;
    padding: 20px 20px;
    background: #f5f5f5;
    width: 200px;
    border-radius: 8px;
    margin-top: 5px;
    position: absolute;

    li {
      cursor: pointer;
    }

    li:not(:last-child) {
      margin-bottom: 15px;
      position: relative;
    }
  }
`;

export const Introduction = styled.div`
  h1 {
    font-size: 24px;
    color: #162b39;
  }

  span {
    font-weight: 600;
    color: #7e8a92;
  }

  div {
    display: flex;
    align-items: center;

    button {
      color: #162b39;

      svg {
        margin-right: 10px;
        font-size: 18px;
      }
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;

  strong {
    display: block;
  }

  input,
  select {
    background: #f5f5f5;
    padding: 10px 20px;
    border-radius: 8px;
    border: 0;
    color: #7d7d7d;
    margin: 10px 20px 20px 0;
    width: 100%;
    font-size: 13px;
  }

  .select {
    position: relative;

    select {
      -webkit-appearance: none;
      cursor: pointer;
      font-family: inherit;
      transition: all 150ms ease;
    }

    svg {
      position: absolute;
      right: 20px;
      top: calc(50% - 12px);
      color: #9098a9;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5471f1;
    border: 0;
    border-radius: 8px;
    padding: 10px 0;
    width: 100%;
    color: #f5f5f5;
    font-weight: 600;
    font-size: 16px;
    margin-top: 30px;
  }

  @media only screen and (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;
