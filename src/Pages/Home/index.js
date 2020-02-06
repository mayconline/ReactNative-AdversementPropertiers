import React from 'react';
import {SafeAreaView} from 'react-native';
import {Container, Advertisement, Header, Title, Photo, Value, Button} from './styled';


export default function Home({ navigation }){

    return(
        <>
        <SafeAreaView>
            <Container>
                <Advertisement>
                    <Header>
                        <Title>Home Page</Title>
                    </Header>
                    <Photo />
                    <Value>R$ 30.000</Value>
                </Advertisement>
                
                <Button 
                    title='Go Details'
                    onPress={()=> navigation.navigate('Details')}
                />
            </Container>
        </SafeAreaView>
        </>
    )
  
}