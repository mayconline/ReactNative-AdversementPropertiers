import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Details from './Pages/Details';
import Home from './Pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fafafa',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
