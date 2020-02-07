import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Adlist from '../../Components/AdList';
import MessageError from '../../Components/MessageError';
import Loading from '../../Components/Loading';
import { loadList } from '../../Store/FetchActions';
import { Container} from './styled';


export default function Home({navigation}) {

  const {data, loading, error} = useSelector(state => state.list)
  const dispatch = useDispatch();

  
  useEffect(()=>{
    dispatch( loadList() );
  },[dispatch])


  function goDetails(obj) {
    return navigation.navigate('Details', obj);
  }

  return (
    <>
    
      <Container>
        {error && <MessageError/>}
        {loading && <Loading />}
       <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Adlist item={item} navigation={goDetails} />}
        />
      </Container>
    </>
  );
}
