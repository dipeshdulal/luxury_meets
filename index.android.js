/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Root from './custom/root.android.js';

export default class luxury_meets extends Component {
  render() {
    return (
	      <Root />
    );
  }
}

AppRegistry.registerComponent('luxury_meets', () => luxury_meets);
