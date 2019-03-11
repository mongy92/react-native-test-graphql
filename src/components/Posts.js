import React, { Component } from 'react'
import { Text, View, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { graphql } from 'react-apollo'
import gql from "graphql-tag";

class Posts extends Component {
  render() {
    const { loading, allPosts, navigation } = this.props;
    if (loading) return <ActivityIndicator size={"large"} />
    return (
      <View>
        <FlatList
          data={allPosts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) =>
            (
              <TouchableOpacity onPress={ ()=> navigation.navigate("Post",{ id : item.id }) } style={styles.post} >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
        />
      </View>
    )
  }
}


const postsQuery = gql`{
    allPosts{
      id,
      title
    }
  }`;


export default graphql(postsQuery, {
  props: ({ data }) => ({ ...data })
})(Posts);


const styles = StyleSheet.create({
  post: {
    height: 50,
    padding: 5,
    backgroundColor: "#ccc",
    justifyContent: "center",
    marginBottom: 5
  }
})