import React, { Component, useEffect, useState } from 'react';
import { Button, View, Text, FlatList, ActivityIndicator } from 'react-native';

function Blog({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://tuncay-basak-library.herokuapp.com/fetch')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log("test");


  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View
              style={{ flex: 1, justifyContent: "center", padding: 5, margin: 30, flexDirection: "row", backgroundColor: "cyan", borderWidth: 5, borderColor: "grey" }}
              onPress={() => console.log(item.title)}
            >
              <Text>{item.title}</Text>
            </View>
          )}
        />
      )}
      <Text>Blog screen</Text>
      <Button title={"Home"} onPress={() => { navigation.navigate("Home") }}></Button>
    </View>
  );
}

async function getBooks()
{
  try
  {
    let response;

    const data = await fetch('https://tuncay-basak-library.herokuapp.com/fetch')
    .then(data => data.json())
    .then(result => response = result)
    .catch(e => console.log(e));

    return response;
  }
  catch (e) {
    console.log(e);
  }
}

export default Blog;
