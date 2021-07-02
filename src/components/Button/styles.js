import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  background: ${(props) => (props.background ? props.background : '#5471f1')};
  border: 0;
  border-radius: 8px;
  padding: 10px 30px;
  color: ${(props) => (props.color ? props.color : '#f5f5f5')};
  font-size: 13px;
  transition: 0.2s linear background;
  font-weight: bold;

  &:hover {
    background: ${(props) =>
      darken(0.1, props.background ? props.background : '#5471f1')};
  }
`;
