import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import PostForm from "../components/PostForm";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

class NewPost extends Component {

  state = {
    loading : false
  }

  onSubmit = ({title,body})=>{
    const {newPost , navigation} = this.props;
    this.setState({ loading : true });
    newPost({ variables : { title, body }})
    .then( ()=>{
      navigation.goBack();
    })
    .catch( (error)=>{
      this.setState({loading : false})
    });
  }
render() {
  return (
    <View>
      {
        this.state.loading ? (
          <ActivityIndicator size={"large"} />
        ):
        (
          <PostForm onSubmit={this.onSubmit} />
        )
      }
    </View>
  )
}
}


const newPost = gql`
  mutation newPost($title:String!,$body:String!){
    createPost(title : $title, body : $body){
      id
    }
  }
`


export default graphql(newPost,{
  name : "newPost",
  options : {
    refetchQueries : ['postsQuery']
  }
})(NewPost);