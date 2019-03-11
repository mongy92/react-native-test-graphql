import React, { Component } from "react";
import { View,StyleSheet,Text ,TouchableHighlight } from "react-native";
import Posts from "../components/Posts";


class Home extends Component {
    
    static navigationOptions = {
        title : "Home"
    }

    addNewPost = ()=>{
        this.props.navigation.navigate("NewPost")
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container} >
                <Posts navigation={navigation} />
                <TouchableHighlight onPress={this.addNewPost} activeOpacity={0.6} style={styles.newPost} >
                    <Text  style={styles.newPostText}>+</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between"
    },
    newPost:{
        padding:20,
        width:60,
        height:60,
        position:"absolute",
        bottom:30,
        right:30,
        borderRadius:30,
        backgroundColor:"orange",
        alignItems:"center",
        justifyContent:"center"
        
    },
    newPostText:{
        fontWeight:"bold",
        color:"#FFF",
        fontSize:20
    }
})