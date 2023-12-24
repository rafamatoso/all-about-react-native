import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './routes';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default AppNavigator;
