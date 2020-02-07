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

export default function adList({navigation, item}) {
  return (
    <>
      <Advertisement>
        <Header>
          <Title>{item.title}</Title>
          <Value>$ {item.value}.00</Value>
        </Header>
        <Photo source={{uri: item.image}} />
        <Button
          onPress={() => {
            navigation(item);
          }}>
          <TextButton>Click for Details</TextButton>
        </Button>
      </Advertisement>
    </>
  );
}
