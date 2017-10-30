import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Dimensions,
  Alert
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Menu from './menu';
import Profile from './profile'

const Route = DrawerNavigator({
  Menu: { screen: Menu}
}, {
  contentComponent: props => <Profile {...props} />,
  contentOptions: {},
})

export default class Main extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <Route />
  }
}