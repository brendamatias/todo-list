import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5471f1;
  padding: 20px 0;
  border-radius: 8px;
  width: 300px;
  margin-top: 20px;
  text-align: center;

  strong {
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
    }
  }

  p {
    color: #dedede;
    width: 200px;
    margin-top: 5px;
    font-size: 13px;
    font-weight: 600;
  }
`;
