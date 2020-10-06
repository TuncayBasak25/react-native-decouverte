import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home screen</Text>
        <Button title={"Blog"} onPress={() => {  }}></Button>
      </View>
    );
  }
}

export default Home;
