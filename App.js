import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import ItemList from './ItemList';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      data: []
    }
  }

  save = () => {
    const { text, data } = this.state;
    const newData = [...data, { text }];
    this.setState({ data: newData, text: '' });
  }

  render() {
    const { text ,data} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.header_title}>To-Do Application</Text>
        </View>

        <View style={[{ backgroundColor: '#ccc', padding: 10, flexDirection: 'row' }]}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={(text) => this.setState({ text })}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.save}>
            <Text style={styles.header_title}>Ekle</Text>
          </TouchableOpacity>
        </View>
        <View>
          {
            data.map((item)=>{
              return <ItemList name={item.text} />
            })
          }
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: { backgroundColor: 'blue', padding: 5 },
  header_title: { color: 'white', fontSize: 25, fontWeight: '500', textAlign: 'center' },
  input: { backgroundColor: 'white', padding: 10, flex: 1 },
  button: { backgroundColor: 'black', borderRadius: 5, padding: 10 }
});
