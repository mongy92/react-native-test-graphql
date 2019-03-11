import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PostForm from "../components/PostForm";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

class NewPost extends Component {


  onSubmit = ({title,body})=>{
    console.log(title,body)
    this.props.newPost({
      variables : { title, body }
    })
    .then( ()=>{} )
    .catch( (error)=> console.log(error) );
  }
render() {
  return (
    <View>
      <PostForm onSubmit={this.onSubmit} />
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
  name : "newPost"
})(NewPost);