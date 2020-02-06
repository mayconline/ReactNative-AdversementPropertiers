import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Routes from './src/Routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#916dd5" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
