import React from 'react';
import {Container, Error} from './styled';

export default function messageError() {
  return (
    <Container>
      <Error>There was an error importing the data</Error>
    </Container>
  );
}
