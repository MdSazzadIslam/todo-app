import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const List = ({item, deleteTodo}) => {
  return (
    <TouchableOpacity onPress={() => deleteTodo(item.id)}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default List;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    backgroundColor: 'blue',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 5,
  },
  btn: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 30,
    color: '#fff',
    backgroundColor: 'tomato',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 5,
    width: 50,
  },
});
