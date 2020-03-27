import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

import Causes from './pages/Causes';
import Details from './pages/Details';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Causes" component={Causes} />
        <AppStack.Screen name="Details" component={Details} />
      </AppStack.Navigator>
      
    </NavigationContainer>
  );
}