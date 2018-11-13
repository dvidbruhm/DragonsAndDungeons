import React from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View, TextInput} from 'react-native';
import {tcpServer, tcpClient} from './../TCPCommunication.js'


export class ServerEnterPortScreen extends React.Component {

  constructor(props) {
    super(props);        
    this.state = { serverPort: '12345'};
}

_onPressServerButton() {
  //Alert.alert("Start server!");
  console.log("hello");

  //Example server setup
  tcppServer = new tcpServer(parseInt(this.state.serverPort), function(connection){
    Alert.alert("we got something")
  }, function(data) {
      Alert.alert(""  + data);
  },
  function(error) {
    Alert.alert("Got an error");
});
  // TODO: start server and go to DM page
}

render() {
  return (
    <View style={styles.container}>
            <Text style = {styles.textLabel}>Enter a connection code for your game, then share it with your players:</Text>
            <TextInput 
                style = {styles.textBox}
                onChangeText={(serverPort) => this.setState({serverPort})}
                value={this.state.serverPort}/>
            <View style={styles.buttonContainer}>
                <TouchableHighlight 
                    onPress={this._onPressServerButton()} 
                    underlayColor="white" 
                    style={styles.button}>
                    <Text style={styles.buttonText}>Host</Text>
                </TouchableHighlight>
            </View>
            
                
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white'
  },
  textLabel:{
      height: 50,
      fontSize: 18,
  },
  textBox: {
      color: 'grey',
      fontSize: 18,
      height: 50    
  },
  buttonText: {
      color: 'white',
      fontSize: 20
  },
  buttonContainer: {
      alignItems: 'flex-end'
  },
  button: {
      backgroundColor: 'grey',
      width: 100
  }
  });