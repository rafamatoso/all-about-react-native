import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonCustomized as Button, TScreens } from '../../design-system';

const HomeScreen = ({ navigation }: any) => {
  const handleCustomButtonPress = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <TScreens title="HomeScreen Component">
      <View style={styles.container}>
        <Button
          title="Go to Redux Screen"
          onPress={() => handleCustomButtonPress('Redux')}
        />

        <Button
          title="Go to Context Screen"
          onPress={() => navigation.navigate('Context')}
        />

        <Button
          title="Go to Suspense Screen"
          onPress={() => navigation.navigate('Suspense')}
        />
      </View>
    </TScreens>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    alignItems: 'center',
  },
});

export default HomeScreen;
