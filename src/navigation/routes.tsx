import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

const Routes = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
