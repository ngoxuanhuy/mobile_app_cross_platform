import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Support extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.redHeader}/>
                <View style={styles.yellowHeader}/>
            <Text style={{textAlign: 'center'}}> Support Page </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 1
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
})