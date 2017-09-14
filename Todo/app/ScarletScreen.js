/**
 * Created by prasanndubey on 11/09/17.
 */
import React, { Component } from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity,KeyboardAvoidingView,Image,ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
const ScarletScreen = () => {
    return (
        <View style={styles.container1}>
            <KeyboardAvoidingView behavior="padding" style={styles.container1}>
                <View style={styles.logocontainer}>
                    <Image
                        style={styles.logo}
                        source={require('../images/nba.png')}/>
                </View>
            <TextInput
                placeholder="username or email"
                placeholderTextColor="white"
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={() => this.passwordInput.focus()}
                style={styles.input}
            />
            <TextInput
                placeholder="password"
                placeholderTextColor="white"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input)=> this.passwordInput = input}
            />

            <TouchableOpacity style={styles.welcome}
                              onPress={() => Actions.gray()} >
                <Text style={styles.button} >LOGIN</Text>
            </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({

    container1:{
        flex:1,
        backgroundColor :'#000000',
        justifyContent:'center',
        padding:20
    },
    container: {
        flex: 1,
        width:800,
        justifyContent: 'center',
        padding:20,
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    button:{
        textAlign:'center',
        paddingVertical:10,
        color:'red',
    },
    input: {
        backgroundColor: 'rgba(255,225,255,0.7)',
        marginBottom: 20,
    },
    logocontainer:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf: 'center'
    },
    logo:{
        width:200,
        height:100
    },
});
export default ScarletScreen;