import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/main.js';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen name='Main' component={Main} />
    </Stack.Navigator>
  )
}