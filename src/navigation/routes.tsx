import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ContextScreen from '../screens/Context';
import HomeScreen from '../screens/Home';
import ReduxScreen from '../screens/Redux';

const Stack = createNativeStackNavigator();

const Routes = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Redux"
        component={ReduxScreen}
        options={{ title: 'Redux' }}
      />
      <Stack.Screen
        name="Context"
        component={ContextScreen}
        options={{ title: 'Context' }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
