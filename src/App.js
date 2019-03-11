
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Home from "./components/Home";
import Post from "./components/Post";



const end_point = "https://api.graph.cool/simple/v1/cjt0yzpv51lx301752eumwhz1";
const httpLink = new HttpLink({ uri: end_point });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


const StackNav = createStackNavigator({
  Home,
  Post
}, {
    navigationOptions: {
      headerStyle: { backgroundColor: "#373142" },
      headerTitleStyle: { color: "#FFF" }
    }
  });


const Navigation = createAppContainer(StackNav);


export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <Navigation />
      </ApolloProvider>
    )
  }
}





