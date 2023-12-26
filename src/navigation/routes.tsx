import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GlobalProvider from '../context/loading';
import ContextScreen from '../screens/Context';
import HomeScreen from '../screens/Home';
import ReduxScreen from '../screens/Redux';
import SuspenseScreen from '../screens/Suspense';

const Stack = createNativeStackNavigator();

const Routes = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home', headerShown: false }}
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

      <Stack.Screen
        name="Suspense"
        component={SuspenseScreen}
        options={{ title: 'Suspense' }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
