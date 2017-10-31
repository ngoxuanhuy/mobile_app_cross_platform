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
  Alert,
  ScrollView
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
            <ScrollView>
              <View style={styles.content}>
                <View style={styles.subContent}> 
                  <Text style={styles.infoTitle}> ID: </Text>
                  <Text style={styles.info}> 20146333 </Text>
                </View>
                <View style={styles.subContent}>
                  <Text style={styles.infoTitle}> DOB: </Text>
                  <Text style={styles.info}> 11.02.1996 </Text>
                </View>
                <View style={styles.subContent}> 
                  <Text style={styles.infoTitle}> Class: </Text> 
                  <Text style={styles.info}> CN-CNTT-2-K59 </Text>
                </View>
                <View style={styles.subContent}>
                  <Text style={styles.infoTitle}> Status: </Text>
                  <Text style={styles.info}> Learning </Text>
                </View>
                <View style={styles.subContent}>
                  <Text style={styles.infoTitle}> Graduation expected: </Text>
                  <Text style={styles.info}> 2018 </Text>
                </View>
                <View style={styles.subContent}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={{fontWeight: 'bold', color: '#000'}}> Update </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={{fontWeight: 'bold', color:'#000'}}> Log out </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      backgroundColor: '#E11818',
    },
    subContent: {
      backgroundColor: '#fff',
      marginBottom: 2,
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
    },
    button: {
      flex: 0.5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    profile: {
      height: 150,
      backgroundColor: '#E11818',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 5,
      borderBottomColor: '#FFD600',
    },
    infoTitle: {
      paddingLeft: 2,
      color: '#000',
      width: 80,
      fontWeight: "bold"
    },
    info: {
      color: '#000',
      paddingLeft: 2,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 4,
      borderColor: '#FFFF00',
    },
    name: {
      fontSize: 20,
      fontWeight: '500',
      color: '#fff'
    } 
  });