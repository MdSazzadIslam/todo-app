import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo</Text>
    </View>
  );
};

export default memo(header);

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'blue',
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'arial',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
