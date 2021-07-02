import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    font-weight: bold;
    cursor: pointer;
    border: 0;
    background: none;
    padding: 0;
    margin: 0;
  }

  img {
    -webkit-user-draggit: none
  }
`;
