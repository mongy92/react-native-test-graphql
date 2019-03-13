
import React from "react"
import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";
import Home from "../screens/Home";
import Post from "../screens/Post";
import NewPost from "../screens/NewPost";
import Login from "../screens/Login";
import Register from "../screens/Register";


const AuthStack = createStackNavigator({
  Login,
  Register
})



const MainStack = createStackNavigator({
    Home,
    Post,
    NewPost
  }, {
      navigationOptions: {
        headerStyle: { backgroundColor: "#373142" },
        headerTitleStyle: { color: "#FFF" }
      }
    });


   const RootStack = createSwitchNavigator({
     Auth : AuthStack,
     Main : MainStack
   })
  
  const Navigation = createAppContainer(RootStack);

  export default Navigation;