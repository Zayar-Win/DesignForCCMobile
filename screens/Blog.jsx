import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import { FlatList } from "react-native";
import FilterTag from "../components/FilterTag";
import CourseHorizontalCard from "../components/CourseHorizontalCard";
import Pagination from "../components/Pagination";
import BlogHorizontalCard from "../components/BlogHorizontalCard";

const Blog = () => {
  return (
    <ScrollView style={styles.container}>
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
          placeholder='Search For Courses'
          placeholderTextColor='#656565'
        />
      </View>
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          flex: 1,
        }}
      >
        <View
          style={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            borderWidth: 1,
            borderColor: "#F5F5F5",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 17,
            }}
          >
            Blogs
          </Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            borderWidth: 1,
            borderColor: "#F5F5F5",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 17,
            }}
          >
            Tricks
          </Text>
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment='end'
        style={{
          marginTop: 24,
        }}
        decelerationRate={"fast"}
        data={[
          "All",
          "Javascript",
          "PHP",
          "Laravel",
          "Python",
          "Node",
        ]}
        renderItem={({ item, index }) => {
          return (
            <FilterTag
              style={
                index === 0
                  ? { marginLeft: 20 }
                  : {}
              }
              tag={item}
              isActive={
                index === 0 ? true : false
              }
            />
          );
        }}
      />
      <View style={{ marginTop: 24 }}>
        {[1, 2, 3, 4, 5].map((item, i) => (
          <BlogHorizontalCard
            image={require("../assets/hero.png")}
            tags={[
              {
                name: "Knowledge Sharing",
                backgroundColor: "#0092EF",
              },
            ]}
            title={
              "AI လေ့လာလိုသူများအတွက် Resources များ"
            }
          />
        ))}
      </View>
      <Pagination />
    </ScrollView>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
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
