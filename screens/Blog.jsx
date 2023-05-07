import { Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import { FlatList } from "react-native";
import FilterTag from "../components/FilterTag";
import CourseHorizontalCard from "../components/CourseHorizontalCard";
import Pagination from "../components/Pagination";
import BlogHorizontalCard from "../components/BlogHorizontalCard";
import { latestBlogs as blogs } from "./Home";
import { useTailwind } from "tailwind-rn";
import SearchBar from "../components/SearchBar";

const Blog = () => {
  const tailwind = useTailwind();
  return (
    <ScrollView
      style={tailwind("flex-1 bg-white")}
    >
      <View style={tailwind("px-[20px]")}>
        <SearchBar
          placeholder={"Search For Courses"}
        />
      </View>
      <View
        style={tailwind(
          "mt-[16px] flex-row flex-1"
        )}
      >
        <View
          style={tailwind(
            "grow items-center justify-center py-[12px] border-[1px] border-white-gray-soft"
          )}
        >
          <Text
            style={tailwind(
              "text-[14px] font-medium leading-[17px]"
            )}
          >
            Blogs
          </Text>
        </View>
        <View
          style={tailwind(
            "grow items-center justify-center py-[12px] border-[1px] border-white-gray-soft"
          )}
        >
          <Text
            style={tailwind(
              "text-[14px] font-medium leading-[17px]"
            )}
          >
            Tricks
          </Text>
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment='end'
        style={tailwind("mt-[24px]")}
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
                  ? tailwind("ml-[20px]")
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
      <View style={tailwind("mt-[24px]")}>
        {blogs.map((blog, i) => (
          <BlogHorizontalCard
            key={i}
            image={blog.image}
            tags={blog.tags}
            title={blog.title}
          />
        ))}
      </View>
      <Pagination />
    </ScrollView>
  );
};

export default Blog;
