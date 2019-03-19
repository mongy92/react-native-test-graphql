import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import AuthForm from '../components/AuthForm';


import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import {  signIn } from '../utils/user';

class Login extends Component {

    static navigationOptions = {
        title : "Login"
    }


    login = async ({email,password})=>{
        try{
            const token = await this.props.login({
                variables : { email, password }
            });

            signIn(token.data.signinUser.token)
            this.props.client.resetStore()
            console.log(token);
            
        }catch(e){
            console.log(e);
        }
    }
  render() {
    return (
      <View style={styles.container} >
        <AuthForm type={"Login"} onSubmit={this.login} />
        <Button color={"gray"} title={"Register"} onPress={ ()=>this.props.navigation.navigate("Register") } />
      </View>
    )
  }
}


const signinUser = gql`
    mutation signinUser($email:String!, $password : String!){
        signinUser(email:{ email : $email, password : $password }){
            token
        }
    }
`

export default graphql(signinUser,{name : "login"})(Login);


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    }
})