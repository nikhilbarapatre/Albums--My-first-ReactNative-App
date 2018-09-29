//Import a library to create a component

import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
//Create a component
const App = () => {
  return (
    <View>
      <Header headerText={"Albums"} />
      <AlbumList />
    </View>
  );
};

//Now render the component
AppRegistry.registerComponent("albums", () => App);
