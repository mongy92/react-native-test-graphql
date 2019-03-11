import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Posts from "./Posts";


class Home extends Component {
    
    static navigationOptions = {
        title : "Home"
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex:1}} >
                <Posts navigation={navigation} />
            </View>
        );
    }
}

export default Home;