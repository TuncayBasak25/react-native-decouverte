import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function BookDetails({ navigation, route }) {
  const {book} = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#C5CBD3"}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', margin: 20, color: "#0A2463"}}>{ book.title.toUpperCase() }</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
          <Text style={{ fontSize: 20, margin: 20}}><Text style={{ color: "#BB342F" }}>Category:</Text> { book.category.toUpperCase() }</Text>
          <Text style={{ fontSize: 20, margin: 20}}><Text style={{ color: "#BB342F" }}>Reference:</Text> { book.reference.toUpperCase() }</Text>
          <Text style={{ fontSize: 20, margin: 20}}><Text style={{ color: "#BB342F" }}>Writting date:</Text> { book.writtingDate.toUpperCase() }</Text>
          <Text style={{ fontSize: 20, margin: 20}}><Text style={{ color: "#BB342F" }}>Edition date:</Text> { book.editionDate.toUpperCase() }</Text>
        </View>
      </View>

      <View style={{ position: 'absolute', bottom: 0, width: "100%"}}>
        <Button style={{ alignSelf: 'center'}} title={"Home"} onPress={() => { navigation.navigate("Home") }}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

})

export default BookDetails;
