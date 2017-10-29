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
import { StackNavigator } from 'react-navigation';

export default class App extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
      return (
        <View>
          <Text>Chat with Lucy</Text>
        </View>
      );
    }
}