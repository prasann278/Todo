/**
 * Created by prasanndubey on 11/09/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,KeyboardAvoidingView
} from 'react-native';

import Note from './Note';

export default class GrayScreen extends Component {

    state = {
            noteArray: [ {'data':'testdate','notes': 'testnote 1'} ],
            noteText: ' ',
             }

    render() {
            let notes = this.state.noteArray.map((val, key) => {
                return <Note key={key} keyval={key} val={val} deleteMethod={ () => this.deleteNote(key) }/>
        });
        return (
                <View style={styles.container}>

                    <ScrollView style={styles.scrollContainer}>
                        {notes}
                    </ScrollView>
                    <KeyboardAvoidingView behavior="padding" >
                    <View style={{justifyContent: 'center', alignItems: 'center', zIndex: 10}}>

                        <TouchableOpacity onPress={this.addNote.bind(this)}style={styles.addButton}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>

                    </View>

                    <TextInput style={styles.textInput}
                               onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText}
                               placeholder='- Here You G0....' placeholderTextColor="black" underlineColor='transparent'>
                    </TextInput>
                    </KeyboardAvoidingView>
                </View>
        );
    }
        addNote(){

                if(this.state.noteText){
                    var d = new Date();
                    this.state.noteArray.push({'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),'note':this.state.noteText});
                    this.setState({ noteArray:this.state.noteArray})
                    this.setState({ noteText :'' });
                }
        }

        deleteNote(key){
                    this.state.noteArray.splice(key,1);
                    this.setState({noteArray:this.state.noteArray});
        }
        }
            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: '#81e2ba',
                },
                welcome: {
                    fontSize: 20,
                    textAlign: 'center',
                    margin: 10,
                    color: '#ffffff',
                },
                button:{
                    textAlign:'center',
                    paddingHorizontal:80,
                    paddingVertical:8,
                    color:'#ffffff',
                    borderWidth:1,
                    borderRadius:20
                },
                textInput: {
                    color:'#000000',
                    paddingTop:46,
                    backgroundColor:'white',
                    borderTopWidth:1,
                    paddingBottom:70
                },
                scrollContainer:{
                    flex:1,
                    marginBottom:100,
                },
                addButton:{
                    backgroundColor:"#f90202",
                    width:50,
                    height:50,
                    borderRadius:50,
                    borderColor:'#ccc',
                    justifyContent: 'center',
                    marginBottom: -25,
                },
                addButtonText:{
                    alignSelf:'center',
                    color:"#fff"
                },
            });