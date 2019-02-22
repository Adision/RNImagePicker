/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

export default class app extends Component {
    constructor(props){
        super(props);
    }

    openImageClick(){
        alert("12121212")
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.openImageClick}>
                    <View style={styles.buttonViewStyle}>
                        <Text style={styles.openButtonStyle}>
                            打开相册
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonViewStyle:{
        backgroundColor:'orange',
        margin:5
    },
    openButtonStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

