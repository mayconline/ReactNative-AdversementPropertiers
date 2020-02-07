import React from 'react';
import {Advertisement, Header, Photo, Title, Value} from './styled';

export default function adDetails({item}) {
  return (
    <>
      <Advertisement>
        <Header>
          <Title>{item.title}</Title>
          <Value>$ {item.value}.00</Value>
        </Header>
        <Photo source={{uri: item.image}} />
      </Advertisement>
    </>
  );
}
