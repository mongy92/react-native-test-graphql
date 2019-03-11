import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PostForm from "../components/PostForm";
export default class NewPost extends Component {


  onSubmit = ({title,body})=>{
    console.log(title,body)
  }
render() {
  return (
    <View>
      <PostForm onSubmit={this.onSubmit} />
    </View>
  )
}
}
