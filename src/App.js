
import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import Navigation from "./navigation";
import client from "./graphql/client";




export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <Navigation />
      </ApolloProvider>
    )
  }
}





