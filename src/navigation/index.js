
import React from "react"
import {
    createAppContainer,
    createStackNavigator
} from "react-navigation";
import Home from "../screens/Home";
import Post from "../screens/Post";


const StackNav = createStackNavigator({
    Home,
    Post
  }, {
      navigationOptions: {
        headerStyle: { backgroundColor: "#373142" },
        headerTitleStyle: { color: "#FFF" }
      }
    });
  
  const Navigation = createAppContainer(StackNav);

  export default Navigation;