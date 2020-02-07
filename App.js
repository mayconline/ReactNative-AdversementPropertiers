import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Routes from './src/Routes';
import store from './src/Store';


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#916dd5" />
      <Routes />
      </NavigationContainer>
    </Provider>
    
  );
}

export default App;
