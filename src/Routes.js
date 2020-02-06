import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './Pages/Home';
import Details from './Pages/Details';

export default function Routes(){

    return(
            
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
                headerTitleAlign:'center',
                headerTintColor:'#fafafa',
                headerStyle:{
                    backgroundColor:'#7159c1'
                }
            }}
            

        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Details' component={Details} />   
        </Stack.Navigator>
    )

}