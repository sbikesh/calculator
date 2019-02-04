/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View styles={styles.result} />
        <View styles={styles.calculation} />
        <View styles={styles.buttons}>
          <View styles={styles.numbers} />
          <View styles={styles.operations}> </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 1,
    backgroundColor: 'red'
  },
  buttons: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  numbers: {
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black'
  }
});
