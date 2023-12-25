import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GlobalProvider from '../context/loading';
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
      <Stack.Screen name="Context" options={{ title: 'Context' }}>
        {() => (
          <GlobalProvider>
            <ContextScreen />
          </GlobalProvider>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Routes;
