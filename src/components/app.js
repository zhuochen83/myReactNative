/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.city}>Auckland</Text>
          <TextInput style={styles.search}></TextInput>
        </View>
        <View style={styles.news}>
          <Text>Promotion</Text>
        </View>
        <View style={styles.listing}>
          <Text>Current Listing</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  news: {
    margin: 10,
    color: 'red',
  },
  listing: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
