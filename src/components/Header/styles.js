import styled from 'styled-components';

export const Menu = styled.div`
  margin-bottom: 40px;
  position: relative;

  ul {
    display: ${(props) => (props.open ? 'block' : 'none')};

    a {
      font-size: 13px;
      font-weight: bold;
      color: #080809;
      transition: 0.2s linear all;

      &:hover {
        color: #5471f1;
      }
    }

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

  @media only screen and (max-width: 640px) {
    margin-bottom: 20px;
  }
`;
