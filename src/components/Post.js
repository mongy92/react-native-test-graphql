import React, { Component } from "react";
import { View, Text } from "react-native";


class Post extends Component {

    static navigationOptions = {
        title : "Home"
    }

    render() {
        return (
            <View >
                <Text >Welcome to React Native!</Text>
            </View>
        );
    }
}

export default Post;