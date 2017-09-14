/**
 * Created by prasanndubey on 13/09/17.
 */
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity
} from 'react-native';

const YellowScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Yellow</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4e842',
    }

});

export default YellowScreen;