import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

type LoadingType = {
  title: string;
  color?: 'black' | string;
  onPress: Function;
};

export const ButtonCustomized = ({
  title,
  color = 'black',
  onPress,
}: LoadingType) => {
  const [textColor, setTextColor] = useState<'black' | 'white'>('white');

  const handlePress = () => {
    onPress?.();
  };

  return (
    <TouchableHighlight
      onPress={handlePress}
      style={[styles.container, { backgroundColor: color }]}
      underlayColor={'#aaa'}
      onShowUnderlay={() => {
        setTextColor('black');
      }}
      onHideUnderlay={() => {
        setTextColor('white');
      }}>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: 'black',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
