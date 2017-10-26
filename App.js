/**
 * StyleSheetDemo
 * https://github.com/guangqiang-liu
 * @guangqiang：qq交流群：620792950
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native'

import {StyleSheet} from './StyleSheet'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}></View>
        <Text style={styles.textStyle}>iOS、Android样式适配组件讲解</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    _height: 300,
    _width: 300,
    _backgroundColor: 'orange',
    _borderRadius: 150
  },
  textStyle: {
    color: 'green',
    _color: 'blue',
    fontSize: 15,
    _fontSize: 25,
    _backgroundColor: 'red',
    marginTop: 10,
    _marginTop: 100
  }
})
