import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import DrawerNav from './DrawerNav';
import SearchComponent from '../Screen/SearchComponent';
import NewTweet from '../Screen/NewTweet';
import NewMessage from '../Screen/NewMessage';

const Stack = createNativeStackNavigator();
const MainNavigation=()=> {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='main' component={DrawerNav} />
        <Stack.Screen name='searchStack' component={SearchComponent}/>
        <Stack.Screen name='newTweet' component={NewTweet} />
        <Stack.Screen name='newMessage' component={NewMessage} />
    </Stack.Navigator>
  )
}

export default MainNavigation