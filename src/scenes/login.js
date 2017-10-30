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

import App from './main';

class LoginApp extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    user: '',
    pass: ''
  };
  // When username field is changed
  onChangeUser = (user) => {
    this.setState({user});
  };
  // When password field is changed
  onChangePassword = (pass) => {
    this.setState({pass});
  };
  // Logging-in function
  loggingIn = async () => {
    var username = 'ngoxuanhuy';
    var password = '123456';
    try {
      const { navigate } = this.props.navigation;
      if (username == this.state.user && password == this.state.pass) {
        //Alert.alert("Right", "Perfect");
        navigate('MainScreen');
      } else {
        Alert.alert("Invalid password or username", "Please try again");
        this.setState(() => {
          return {user: ''}
        });
        this.setState(() => {
          return {pass: ''}
        });
      }
    } catch (error) {
      alert(error);
    }
  }

  render () {
    const {user, pass} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.redHeader}/>
        <View style={styles.yellowHeader}/>
        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 30}}>
          <Image source={require('../imgs/logo.png')} style={styles.logo}/>
        </View>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput underlineColorAndroid="transparent" style={styles.input}
                        placeholder="username"
                        value={user}
                        onChangeText={this.onChangeUser}/>
            <TextInput secureTextEntry={true} underlineColorAndroid="transparent" style={styles.input}
                        placeholder="password"
                        value={pass}
                        onChangeText={this.onChangePassword}/>
          </View>
          <TouchableOpacity style={styles.buttonContainer} underlayColor="blue" onPress={this.loggingIn}>
              <Text style={styles.buttonText}> LOGIN </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}



const Route = StackNavigator({
  LoginScreen: { screen: LoginApp },
  MainScreen: { screen: App}, 
});


export default class Login extends Component {
  render () {
    return <Route/>
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  redHeader: {
    backgroundColor: '#E11818',
    height: 30,
  },
  yellowHeader: {
    marginTop: 2,
    height: 15,
    backgroundColor: '#FFD600',
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 150,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center'
  },
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)'
  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    padding: 20,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

