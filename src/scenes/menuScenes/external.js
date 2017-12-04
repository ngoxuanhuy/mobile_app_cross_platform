import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    WebView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ExternalWeb from '../../components/externalWeb';

const logo60 = require('../../imgs/logo60.png');
var w = Dimensions.get('window').width;

class ListOfWebsite extends Component {
    state = {
        listOfWebsites: [
            {
                vn_title: 'Đào tạo đại học',
                en_title: 'University Training',
                url: 'https://ctt-daotao.hust.edu.vn/'
            },
            {
                vn_title: 'Công tác sinh viên',
                en_title: 'Student Portal',
                url: 'http://ctsv.hust.edu.vn/'
            },
            {
                vn_title: 'Viện CNTT và TT',
                en_title: 'Soict',
                url: 'https://soict.hust.edu.vn/'
            },
            {
                vn_title: 'Hợp tác quốc tế',
                en_title: 'International Coorperation',
                url: 'http://htqt.hust.edu.vn/'
            }
        ]
    }

    render() {
        const { navigate } = this.props.navigation;
        // Create render view for each element in the list of webistes
        let websites = this.state.listOfWebsites.map((val, key) => {
            return  <TouchableOpacity key={key} onPress={() => navigate('externalWeb', {url: val.url})}>  
                        <View style={styles.row}>
                        {/* when an element is clicked, navigate to the equivalent webstie */}
                        
                            <View style={styles.iconContainer}>
                            <Image source={logo60} style={styles.icon}/>
                            </View>
                            <View style={styles.title}>
                                <Text style={styles.vn_title}>{val.vn_title}</Text>
                                <Text style={styles.en_title}>{val.en_title}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
        })
        return (
            <View style={styles.container}>
                <View style={styles.redHeader}/>
                <View style={styles.yellowHeader}/>
                <View style={styles.titleHeaderBox}>
                    <Text style={styles.titleHeader}> EXTERNAL WEBSITES </Text>
                </View>
                <View>
                    {websites}
                </View>
            </View>
        )
    }
}

const Nav = StackNavigator({
    listOfWebsite: {
        screen: ListOfWebsite,
        navigationOptions: {
            header: null,
        }
    },
    externalWeb: { 
        screen: ExternalWeb,
        navigationOptions: {
            header: null,
        }
    }
});

export default class External extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <Nav />
        );
    };
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
    titleHeaderBox: {
        borderColor: '#FFD600',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    titleHeader: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    row: {
        height: w / 3.5,
        borderColor: '#FFD600',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingLeft: 5,
        flexWrap: 'wrap'
    },
    iconContainer: {
        alignItems: 'center',
        borderColor: '#FFD600',
        borderRadius: w/4,
        borderWidth: 3,
        height: w / 4,
        width: w / 4,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    icon: {
        height: w / 7,
        width: w / 5.25,
    },
    title: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    vn_title: {
        fontWeight: 'bold',     
        fontSize: 16,
        marginBottom: 5,
        flexWrap: "wrap",
    },
    en_title: {
        fontSize: 14
    }
})