import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import gql from "graphql-tag";
import { graphql } from 'react-apollo'


class Post extends Component {

    static navigationOptions = {
        title: "Home"
    }

    render() {
        const { navigation, loading, Post } = this.props;
        
        if(loading) return <ActivityIndicator size="large" />;
        return (
            <View >
                <Text >{Post.id}</Text>
                <Text >{Post.title}</Text>
            </View>
        );
    }
}


const postQuery = gql`
    query Post($id: ID!) {
  Post(id: $id) {
    id
    title
  }
}`;




export default graphql(postQuery, {
    props: ({ data }) => ({ ...data }),
    options: ({ navigation }) => ({
        variables: {
            id: navigation.getParam('id', null)
        }
    })
})(Post);