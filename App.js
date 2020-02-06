import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/Routes';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


function App(){
  return (
      <NavigationContainer>
        <StatusBar barStyle='light-content' backgroundColor="#7159" />
        <Routes />
      </NavigationContainer>
  );
}


export default App;
