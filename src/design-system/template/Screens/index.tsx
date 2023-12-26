import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Loading } from '../..';

type TScreensType = PropsWithChildren & { title: string; loading?: boolean };

export const TScreens = ({
  children,
  title,
  loading = false,
}: TScreensType) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Text style={styles.title}>{title}</Text>
          {children}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    gap: 15,
    backgroundColor: '#fff',
    shadowColor: 'black',
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
