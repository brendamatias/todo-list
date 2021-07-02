import React, { useState } from 'react';
import { Container } from './styles';

import Header from '../../components/Header';

export default function AddTask() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <h1>Sobre</h1>

      <p>
        Essa aplicação é utilizada para organizar as atividades de acordo com o
        seu status e assim guiar o usuário a se planejar de acordo com suas
        pendências
      </p>
    </Container>
  );
}
