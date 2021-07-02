import React from 'react';
import PropTypes from 'prop-types';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Menu } from './styles';

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <Menu open={menuOpen}>
      <nav>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </Menu>
  );
}

Header.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
