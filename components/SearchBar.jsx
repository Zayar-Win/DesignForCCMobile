import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.searchBarContainer}>
      <Ionicons
        name='search-sharp'
        size={30}
        color='#656565'
        style={{
          position: "absolute",
          left: 25,
        }}
      />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor='#656565'
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 100,
    marginHorizontal: 20,
  },
  searchInput: {
    fontSize: 16,
    marginLeft: 75,
    marginRight: 10,
  },
});
