import React, { Component } from 'react';
import { Text, WebView } from 'react-native';
import { StackNavigation } from 'react-navigation';

export default class ExternalWeb extends Component {
    // Nav options can be defined as a function of the screen's props:
    state = {
        url: ''
    };

    static navigationOptions = ({ navigation }) => ({
        header: null,
    });

    render() {
        const { param } = this.props.navigation.state;
        return (
            <WebView
                source={{uri: `${param.url}`}} 
            />
        )
    }
}