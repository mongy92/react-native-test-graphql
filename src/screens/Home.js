import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import Posts from "../components/Posts";
import { Icon, Fab } from "native-base";
import { signOut } from "../utils/user";

class Home extends Component {

    static navigationOptions = {
        title: "Home"
    }

    addNewPost = () => {
        this.props.navigation.navigate("NewPost")
    }

    render() {
        const { navigation, screenProps } = this.props;
        console.log(this.props)
        return (
            <View style={styles.container} >
                <Posts navigation={navigation} posts={screenProps.user.posts} />
                <Fab style={styles.newPost} onPress={this.addNewPost}  >
                    <Icon name={"add"} />
                </Fab>
                <Button title={"Logout"} onPress={() => {
                        signOut();
                        this.props.client.resetStore()
                    }} />
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    newPost: {
        backgroundColor: "orange",
    },
    newPostText: {
        fontWeight: "bold",
        color: "#FFF",
        fontSize: 20
    }
})