/**
 * StyleSheetDemo
 * 作者Git：https://github.com/guangqiang-liu
 * 技术交流群：620792950
 * 作者QQ：1126756952
 * @guangqiang
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  Platform
} from 'react-native'

// import {StyleSheet} from 'react-native'

import {StyleSheet} from './StyleSheet'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>iOS、Android样式适配组件讲解</Text>
        <View style={styles.box}>
          <Text>iOS平台是正方形，Android平台是圆形</Text>
        </View>
        <Text style={{marginTop: 20}}>使用Platform判断平台</Text>
        <View style={styles.platform}>
          <Text>这时使用原始的Platform判断</Text>
        </View>
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
    _height: 200,
    width: 100,
    _width: 200,
    backgroundColor: 'red',
    _backgroundColor: 'orange',
    _borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: 'green',
    _color: 'blue',
    fontSize: 15,
    _fontSize: 25,
    _backgroundColor: 'red',
    marginBottom: 10,
    _marginBottom: 100
  },
  platform: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: Platform.OS === 'ios' ? 120 : 100,
    height: Platform.OS === 'ios' ? 120 : 100,
    borderRadius: Platform.OS === 'ios' ? 60 : 30,
    backgroundColor: Platform.OS === 'ios' ? 'red' : 'green'
  }
})