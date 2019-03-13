import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import AuthForm from '../components/AuthForm';

class Login extends Component {

    static navigationOptions = {
        title : "Login"
    }


    onSubmit = ()=>{

    }
  render() {
    return (
      <View style={styles.container} >
        <AuthForm type={"Login"} onSubmit={this.onSubmit} />
        <Button color={"gray"} title={"Register"} onPress={ ()=>this.props.navigation.navigate("Register") } />
      </View>
    )
  }
}

export default Login;


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    }
})