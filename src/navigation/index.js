
import React from "react";
import {ActivityIndicator} from "react-native";
import {
    createAppContainer,
    createStackNavigator
  } from "react-navigation";
import Home from "../screens/Home";
import Post from "../screens/Post";
import NewPost from "../screens/NewPost";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import {withApollo}  from "react-apollo";
const AuthStack = createStackNavigator({
  Login : withApollo(Login),
  Register : withApollo(Register)
})



const MainStack = createStackNavigator({
    Home : withApollo(Home),
    Post,
    NewPost
  }, {
      navigationOptions: {
        headerStyle: { backgroundColor: "#373142" },
        headerTitleStyle: { color: "#FFF" }
      }
    });


  
    
  
  const MainNav =  createAppContainer(MainStack);
  const AuthNav = createAppContainer(AuthStack);



  const userQuery = gql`
    query userQuery{
      user{
        id,
      email,
      posts(orderBy : createdAt_DESC){
        id,
        title
      }
      }
      
    }
  `


const Navigation = ({loading, user})=>{
  if(loading) return <ActivityIndicator/>;
  if(!user) return <AuthNav  />;
  return <MainNav screenProps={{user}} />
}

  export default graphql(userQuery,{
    props: ({ data }) => ({ ...data })
  })(Navigation);