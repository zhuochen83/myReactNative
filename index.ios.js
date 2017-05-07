/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/components/app';

export default class myReactNative extends Component {
  render() {
    return (
      <App>
      </App>
    );
  }
}

AppRegistry.registerComponent('myReactNative', () => myReactNative);
