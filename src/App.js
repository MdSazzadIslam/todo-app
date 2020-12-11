import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Header from './components/Header';
import Add from './components/Add';
import List from './components/List';

const App = () => {
  const [records, setRecords] = useState([
    {name: 'JavaScript', id: '1'},
    {name: 'Node JS', id: '2'},
    {name: 'Electron', id: '3'},
    {name: 'Python', id: '4'},
    {name: 'Java', id: '5'},
    {name: 'C++', id: '6'},
  ]);

  const deleteTodo = (id) => {
    setRecords((preRecords) => {
      return preRecords.filter((record) => record.id != id);
    });
  };

  const addTodo = (name) => {
    if (name == '') {
      Alert.alert('Warning', 'Enter your favourite programming language name');
      return;
    } else {
      setRecords((preRecords) => {
        return [{name: name, id: Math.random().toString()}, ...preRecords];
      });
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <Add addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={records}
              renderItem={({item}) => (
                <List item={item} deleteTodo={deleteTodo} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
