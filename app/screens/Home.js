import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home screen</Text>
      <Button title={"Blog"} onPress={() => { navigation.navigate("Blog") }}></Button>
      <Button title={"Blog details"} onPress={() => { navigation.navigate("BlogDetails") }}></Button>
    </View>
  );
}

export default Home;
