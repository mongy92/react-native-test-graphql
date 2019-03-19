import React, { Component } from 'react'
import {  View, StyleSheet, Button } from 'react-native'
import AuthForm from '../components/AuthForm';
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag';
import { signIn } from '../utils/user';


class Register extends Component {

    static navigationOptions = {
        title : "Register"
    }
    register = async ({email,password})=>{
        try{
            const user = await this.props.register({
                variables : { email , password }
            });
            const token = await this.props.login({
                variables : { email, password }
            });
            signIn(token.data.signinUser.token)
            this.props.client.resetStore()
        }catch(e){
            console.log(e);
        }
    }
  render() {
    return (
      <View style={styles.container} >
        <AuthForm type={"Register"} onSubmit={this.register} />
        <Button color={"gray"} title={"Login"} onPress={ ()=>this.props.navigation.navigate("Login") } />
      </View>
    )
  }
}


const createUser = gql`
    mutation createUser($email : String!, $password : String!){
        createUser(
            authProvider: { email: { email : $email, password : $password } }
        ){
            id
        }
    }

`;

const signinUser = gql`
    mutation signinUser($email:String!, $password : String!){
        signinUser(email:{ email : $email, password : $password }){
            token
        }
    }
`



export default compose(
    graphql(createUser,{name : "register"}),
    graphql(signinUser,{name : "login"}),

)(Register);
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    }
})