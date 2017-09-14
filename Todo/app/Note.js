/**
 * Created by prasanndubey on 13/09/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity,ScrollView,TextInput
} from 'react-native';

const Note = ({keyval,key,val,deleteMethod}) => {

    return (
        <View key={keyval} style={styles.note}>
            <Text style={styles.noteText}>{val.date}</Text>
            <Text style={styles.noteText}>{val.note}</Text>

            <TouchableOpacity onPress={deleteMethod} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>Del</Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    note:{
        position: 'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:1,
        borderBottomColor:'#ededed'
    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:'#E91E63'
    },
    noteDelete:{
        position: 'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2980b9',
        padding:10,
        top:10,
        bottom:10,
        right:10
    },
    noteDeleteText:{
        color:'white',
    },

});

export default Note;
