import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Classmate extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.redHeader}/>
                <View style={styles.yellowHeader}/>
            <Text style={{textAlign: 'center'}}> Classmate Page </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      redHeader: {
        backgroundColor: '#E11818',
        flex: 0.2
      },
      yellowHeader: {
        marginTop: 2,
        flex: 0.05,
        backgroundColor: '#FFD600',
        marginBottom: 20
      },
})