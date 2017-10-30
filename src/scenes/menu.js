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

import External from './menuScenes/external';
import Classmate from './menuScenes/classmate';
import Feedback from './menuScenes/feedback';
import Register from './menuScenes/register';
import Support from './menuScenes/support';
import Transcript from './menuScenes/transcript';

class menuManagement extends Component {
    static navigationOptions = {
        header: null
    };
    
    state = {
      icons: [
        {
          title: "Classmate's list",   
          img: require('../imgs/classmate.png'),
          screen: 'classmateScreen'
        },
        {
          title: 'Register courses',   
          img: require('../imgs/register.png'),
          screen: 'registerScreen'
        },
        {
          title: 'External links',
          img: require('../imgs/external.png'),
          screen: 'externalScreen',
        },
        {
          title: 'Support',
          img: require('../imgs/support.png'),
          screen: 'supportScreen',
        },
        {
          title: 'Feedback',
          img: require('../imgs/feedback.png'),
          screen: 'feedbackScreen',
        },
        {
          title: 'Academic transcript',
          img: require('../imgs/transcript.png'),
          screen: 'transcriptScreen'
        }
      ],
      text: '',
      iconsReference: []
    }

    componentDidMount() {
      this.setState({iconsReference: this.state.icons});
    }

    search(text) {
      this.setState({text: text});
      let iconArr = this.state.icons;
  
      for (var i = 0; i < iconArr.length; i++) {
        if (text === iconArr[i].title) {
          this.setState({icons: [ iconArr[i] ] });
        }
      }
  
      if (!text) {
        // Reset searching state
        this.setState({icons: this.state.iconsReference});
      }
    }

    render() {
      const { navigate } = this.props.navigation;
      // render icons
      let icons = this.state.icons.map((val, key) => {
        var nextScreen =  val.screen;
        return  <View key={key} style={styles.imageWrap}>
                  <TouchableOpacity onPress={() => navigate(nextScreen)}>
                    <View style={styles.iconContainer}>
                      <Image source={val.img} style={styles.icon}/>
                    </View>
                    <Text style={styles.iconTitle}> {val.title} </Text>
                  </TouchableOpacity>
                </View>
      })
      return (
        <View style={styles.container}>
          <View style={styles.redHeader}/>
          <View style={styles.yellowHeader}/>
          <TextInput style={styles.textInput} placeholder="Searching..." 
                 underlineColorAndroid="transparent"
                 onChangeText= {(text) => this.search(text)} value={this.state.text}/>
          <ScrollView>
            <View style={styles.content}>
                <View style={styles.iconGrid}>
                  {icons}
                </View>
              </View>
          </ScrollView>
        </View>
      );
    }
}

const RootMenu = StackNavigator({
  menuScreen: { screen: menuManagement },
  classmateScreen: { screen: Classmate },
  registerScreen: { screen: Register },
  externalScreen: { screen: External },
  supportScreen: { screen: Support },
  feedbackScreen: { screen: Feedback},
  transcripScreen: { screen: Transcript},
})

export default class Menu extends Component {
  render() {
    return (
      <RootMenu />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  redHeader: {
    backgroundColor: '#E11818',
    height: 30
  },
  yellowHeader: {
    marginTop: 2,
    height: 15,
    backgroundColor: '#FFD600',
    marginBottom: 20
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#FF7070',
    textAlign: 'center',
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 10
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#E11818',
    borderColor: '#FFD600',
    borderRadius: (Dimensions.get('window').width / 3),
    borderWidth: 5,
    justifyContent: 'center',
    height: (Dimensions.get('window').width / 3),
    width: (Dimensions.get('window').width / 3),
  },
  icon: {
    tintColor: '#fff',
    height: (Dimensions.get('window').width / 4),
    width: (Dimensions.get('window').width / 4),
  },
  iconTitle: {
    textAlign: 'center'
  },
  imageWrap: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: (Dimensions.get('window').width / 2) - 10,
    height: (Dimensions.get('window').width / 2) - 10
  },
  iconGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});

