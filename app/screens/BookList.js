import React, { Component, useEffect, useState } from 'react';
import { Button, View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

function BookList({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://tuncay-basak-library.herokuapp.com/fetch')
      .then((response) => response.json())
      .then((json) => { setData(json) })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("BookDetails", { book: item })}>
              <View
                style={{ flex: 1, justifyContent: "center", padding: 5, margin: 30, flexDirection: "row", backgroundColor: "cyan", borderWidth: 5, borderColor: "grey" }}
                onPress={() => console.log(item.title)}
              >
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      <Text>Blog screen</Text>
      <Button title={"Home"} onPress={() => { navigation.navigate("Home") }}></Button>
    </View>
  );
}


export default BookList;
