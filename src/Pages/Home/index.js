import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Adlist from '../../Components/AdList';
import api from '../../Services/Api';

export default function Home({navigation}) {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function loadList() {
      const response = await api.get('/');
      setList(response.data);
    }
    loadList();
  }, []);

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={list}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Adlist item={item} />}
        />
      </SafeAreaView>
    </>
  );
}
