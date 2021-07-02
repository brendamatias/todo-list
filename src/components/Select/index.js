/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { FiChevronDown } from 'react-icons/fi';
import { Container } from './styles';

export default function Select({ name, options, ...rest }) {
  return (
    <Container>
      <select name={name} {...rest}>
        <option>Selecione uma opção</option>

        {options.length > 0 &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
          ))}
      </select>

      <FiChevronDown size={16} />
    </Container>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
