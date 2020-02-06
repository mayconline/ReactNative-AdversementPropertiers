import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Adlist from '../../Components/AdList';
import api from '../../Services/Api';
import {Container} from './styled';

export default function Home({navigation}) {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function loadList() {
      const response = await api.get('/');
      setList(response.data);
    }
    loadList();
  }, []);

  function goDetails(obj) {
    return navigation.navigate('Details', obj);
  }

  return (
    <>
      <Container>
        <FlatList
          data={list}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Adlist item={item} navigation={goDetails} />}
        />
      </Container>
    </>
  );
}
