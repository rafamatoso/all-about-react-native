import React from 'react';
import { ActivityIndicator } from 'react-native';

type LoadingType = { color?: 'black' | string; size?: number };

export const Loading = ({ color = 'black', size = 28 }: LoadingType) => {
  return <ActivityIndicator color={color} size={size} />;
};
