
import React from "react"
import {
    createAppContainer,
    createStackNavigator
} from "react-navigation";
import Home from "../screens/Home";
import Post from "../screens/Post";
import NewPost from "../screens/NewPost";


const StackNav = createStackNavigator({
    Home,
    Post,
    NewPost
  }, {
      navigationOptions: {
        headerStyle: { backgroundColor: "#373142" },
        headerTitleStyle: { color: "#FFF" }
      }
    });
  
  const Navigation = createAppContainer(StackNav);

  export default Navigation;