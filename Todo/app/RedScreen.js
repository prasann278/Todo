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

const RedScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Red</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f90202',
    }
});
export default RedScreen;
