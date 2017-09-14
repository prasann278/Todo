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

const BlueScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Blue</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#280be5',
    }

});

export default BlueScreen;