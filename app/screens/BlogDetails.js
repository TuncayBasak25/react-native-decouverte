import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

function BlogDetails({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Blog Details screen</Text>
      <Button title={"Home"} onPress={() => { navigation.navigate("Home") }}></Button>
      <Button title={"Blog"} onPress={() => { navigation.navigate("Blog") }}></Button>
    </View>
  );
}

export default BlogDetails;
