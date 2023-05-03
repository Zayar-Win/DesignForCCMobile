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
import CourseHorizontalCard from "../components/CourseHorizontalCard";
import FilterTag from "../components/FilterTag";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const Courses = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar
        placeholder={"Search for coursers..."}
      />
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
            All
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
            Free
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
            Paid
          </Text>
        </View>
      </View>
      <FlatList
        horizontal
        snapToAlignment='end'
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 24,
        }}
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
              tag={item}
              style={
                index === 0
                  ? { marginLeft: 20 }
                  : {}
              }
              isActive={
                index === 0 ? true : false
              }
            />
          );
        }}
      />
      <View style={{ marginTop: 24 }}>
        {[1, 2, 3, 4, 5].map((item, i) => (
          <CourseHorizontalCard
            fee={"30,000"}
            image={require("../assets/hero.png")}
            tags={[
              {
                name: "PHP",
                backgroundColor: "#6A1ADD",
              },
              {
                name: "Laravel",
                backgroundColor: "#EC272E",
              },
            ]}
            lessonCount={13}
            chapterCount={5}
          />
        ))}
      </View>
      <Pagination />
    </ScrollView>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
