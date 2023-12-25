import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

type TScreensType = PropsWithChildren;

export const TScreens = ({ children }: TScreensType) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
