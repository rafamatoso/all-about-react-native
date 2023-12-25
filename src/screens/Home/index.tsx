import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { TScreens } from '../../design-system';

const HomeScreen = ({ navigation }: any) => (
  <TScreens title="HomeScreen Component">
    <View style={styles.container}>
      <Button
        title="Go to Redux Screen"
        onPress={() => navigation.navigate('Redux')}
      />

      <Button
        title="Go to Context Screen"
        onPress={() => navigation.navigate('Context')}
      />
    </View>
  </TScreens>
);

const styles = StyleSheet.create({
  container: {
    gap: 15,
    alignItems: 'center',
  },
});

export default HomeScreen;
