import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const Add = ({addTodo}) => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter your favourite programming language name"
        onChangeText={(text) => setName(text)}
      />
      <Button onPress={() => addTodo(name)} title="Add"></Button>
    </View>
  );
};

export default Add;
const styles = StyleSheet.create({
  input: {
    fontFamily: 'arial',
    fontSize: 13,
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
  },
});
