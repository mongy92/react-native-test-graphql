import React, { Component } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import {Form, Input, Label, Item} from "native-base";

export default class PostForm extends Component {

    state = {
        title : "",
        body : ""
    }


    submitPost = ()=>{
        this.props.onSubmit({
            title : this.state.title,
            body : this.state.body
        })
    }

  render() {
    return (
      <Form>
        <Item floatingLabel >
          <Label>Title</Label>
          <Input 
           onChangeText={ title=>this.setState({title}) }
           value={this.state.title} 
          />
        </Item>

        <Item floatingLabel >
          <Label>Body</Label>
          <Input 
            multiline
            style={styles.body}
            onChangeText={ body=>this.setState({body}) }
            value={this.state.body} 
          />
        </Item>
        <Button title={"Save Post"} onPress={this.submitPost} />
      </Form>
    )
  }
}


const styles = StyleSheet.create({
  body:{
    height : 200,
    textAlignVertical:"top"
  }
})