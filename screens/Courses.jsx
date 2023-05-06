import { Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import { FlatList } from "react-native";
import CourseHorizontalCard from "../components/CourseHorizontalCard";
import FilterTag from "../components/FilterTag";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { latestCourses as courses } from "./Home";
import { useTailwind } from "tailwind-rn";

const Courses = () => {
  const tailwind = useTailwind();
  return (
    <ScrollView
      style={tailwind("flex-1 bg-white")}
    >
      <View style={tailwind("px-[20px]")}>
        <SearchBar
          placeholder={"Search for coursers..."}
        />
      </View>
      <View
        style={tailwind(
          "pt-[16px] flex-row flex-1"
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
            All
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
            Free
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
            Paid
          </Text>
        </View>
      </View>
      <FlatList
        horizontal
        snapToAlignment='end'
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        style={tailwind("mt-[24px]")}
        data={[
          "All",
          "Javascript",
          "PHP",
          "Laravel",
          "Python",
          "Node",
        ]}
        keyExtractor={(_, i) => `tag-${i}`}
        renderItem={({ item, index }) => {
          return (
            <FilterTag
              tag={item}
              style={
                index === 0
                  ? tailwind("ml-[20px]")
                  : {}
              }
              isActive={
                index === 0 ? true : false
              }
            />
          );
        }}
      />
      <View style={tailwind("mt-[24px]")}>
        {courses?.map((course, i) => (
          <CourseHorizontalCard
            key={i}
            fee={course.fees}
            image={course.image}
            title={course.title}
            tags={course.tags}
            lessonCount={course.lessonCount}
            chapterCount={course.chapterCount}
          />
        ))}
      </View>
      <Pagination />
    </ScrollView>
  );
};

export default Courses;
