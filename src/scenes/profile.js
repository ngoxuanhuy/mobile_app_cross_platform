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

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.profile}>
              <Image source={require('../imgs/default_avatar.png')} style={styles.avatar} />
                <Text style={styles.name}>Ngo Xuan Huy</Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    profile: {
      height: 150,
      backgroundColor: '#D50000',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 4,
      borderColor: '#FFFF00',
      marginBottom: 5,
    },
    name: {
      fontSize: 18,
      fontWeight: '500',
      color: '#fff'
    } 
  });