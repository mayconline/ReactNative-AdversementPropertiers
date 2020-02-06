import React from 'react';
import {
  Advertisement,
  Button,
  Header,
  Photo,
  TextButton,
  Title,
  Value,
} from './styled';

export default function Details({navigation, item}) {
  return (
    <>
      <Advertisement>
        <Header>
          <Title>{item.title}</Title>
          <Value>$ {item.value}</Value>
        </Header>
        <Photo source={{uri: item.image}} />
        <Button>
          <TextButton>Click for Details</TextButton>
        </Button>
      </Advertisement>
    </>
  );
}
