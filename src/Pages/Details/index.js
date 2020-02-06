import React from 'react';
import AdDetails from '../../Components/AdDetails';
import {Container} from './styled';

export default function Details({route}) {
  return (
    <>
      <Container>
        <AdDetails item={route.params} />
      </Container>
    </>
  );
}
