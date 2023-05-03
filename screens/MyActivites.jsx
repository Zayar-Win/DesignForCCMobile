import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";

const MyActivites = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>MyActivites</Text>
      <MyActivites />
    </ScrollView>
  );
};

export default MyActivites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
