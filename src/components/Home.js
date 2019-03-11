import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Posts from "./Posts";


class Home extends Component {
    
    static navigationOptions = {
        title : "Home"
    }

    render() {
        return (
            <View style={{flex:1}} >
                <Button title={"GO TO POST"} onPress={ ()=> this.props.navigation.navigate("Post") } />
                <Posts />
            </View>
        );
    }
}

export default Home;