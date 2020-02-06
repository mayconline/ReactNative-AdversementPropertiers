import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

export default function Details({ navigation }){

    return(
        <>
        <SafeAreaView>
            <View>
                <Text>Details Page</Text>
                <Button 
                    title='Come Back'
                    onPress={()=> navigation.goBack()}
                />
            </View>
        </SafeAreaView>
        </>
    )
  
}