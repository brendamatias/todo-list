import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import history from './services/history';
import Routes from './routes';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </DndProvider>
  );
}

export default App;
