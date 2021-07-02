/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
