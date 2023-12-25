import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type TScreensType = PropsWithChildren & { title: string };

export const TScreens = ({ children, title }: TScreensType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    gap: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
