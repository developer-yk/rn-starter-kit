import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Start from '../../presentation/views';
const Stack = createNativeStackNavigator();

function MyStack() {
  const user=useSelector(state=>state.user);
  const roles = user.role;
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Start" component={Start} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default MyStack