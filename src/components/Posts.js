import React, { Component } from 'react'
import { Text, View, ActivityIndicator, FlatList } from 'react-native'
import { List, ListItem, Body, Right, Icon } from "native-base";


class Posts extends Component {
  render() {
    const { loading, posts, navigation } = this.props;
    if (loading) return <ActivityIndicator size={"large"} />
    return (
      <View style={{ flex: 1 }} >
        <List>
          <FlatList
            data={posts}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) =>
              (
                <ListItem onPress={() => navigation.navigate("Post", { id: item.id, title: item.title })} >
                  <Body>
                  <Text>{item.title}</Text>
                  </Body>
                  <Right>
                    <Icon name={"arrow-forward"} />
                  </Right>
                </ListItem>
              )}
          />
        </List>
      </View>
    )
  }
}





export default Posts