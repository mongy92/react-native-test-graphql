import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import AuthForm from '../components/AuthForm';

class Register extends Component {

    static navigationOptions = {
        title : "Register"
    }
    onSubmit = ()=>{

    }
  render() {
    return (
      <View style={styles.container} >
        <AuthForm type={"Register"} onSubmit={this.onSubmit} />
        <Button color={"gray"} title={"Login"} onPress={ ()=>this.props.navigation.navigate("Login") } />
      </View>
    )
  }
}



export default Register;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    }
})