import React from 'react';
import {Container, Error} from './styled';

export default function messageError() {
  return (
    <Container>
      <Error>Houve um Erro ao Importar os Dados</Error>
    </Container>
  );
}
