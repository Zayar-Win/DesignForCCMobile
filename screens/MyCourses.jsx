import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import { ScrollView } from "react-native";
import CourseProgressCard from "../components/CourseProgressCard";
import { Animated } from "react-native";
import CertificateBlack from "../assets/CertificateBlack.svg";
import Left from "../assets/Left.svg";
import { useNavigation } from "@react-navigation/native";

const myCourses = [
  {
    percentage: 27,
    title: "React + Firebase",
    chapterCount: 2,
    lessonCount: 27,
    image: require("../assets/Courses-Thumbnail-17.png"),
  },
  {
    percentage: 82,
    title: "Web Deployment",
    chapterCount: 2,
    lessonCount: 27,
    image: require("../assets/WebsiteDeployment.png"),
  },
  {
    percentage: 100,
    title: "Vue + Firebase",
    chapterCount: 14,
    lessonCount: 113,
    image: require("../assets/Vue-Firebase.png"),
  },
];

const MyCourses = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState("All");
  const tabAnimation = useRef(
    new Animated.Value(0)
  ).current;

  const changeFilter = (e, type, position) => {
    setFilter(type);
    translateX = e.nativeEvent.pageX;
    Animated.timing(tabAnimation, {
      toValue: position,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView style={styles.container}>
      <SearchBar
        placeholder={"Search for your courses..."}
      />
      <View
        style={{
          marginTop: 16,
          backgroundColor: "#F5F5F5",
          borderRadius: 24,
          marginHorizontal: 20,
          padding: 8,
          paddingLeft: 35,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          gap: 3,
        }}
      >
        <Animated.View
          style={[
            {
              width: 125,
              height: 34,
              backgroundColor: "white",
              position: "absolute",
              left: 11,
              borderRadius: 16,
            },
            {
              transform: [
                {
                  translateX:
                    tabAnimation.interpolate({
                      inputRange: [0, 2, 3],
                      outputRange: [
                        125 * 0,
                        125 - 120 / 4.6, //90 + 13
                        125 * 2 - 120 / 4.6, // 90 * 2 + 50
                      ],
                    }),
                },
              ],
            },
          ]}
        ></Animated.View>
        <View
          style={{
            flexGrow: 1,
            paddingVertical: 7,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            color: "#656565",
          }}
        >
          <Pressable
            onPress={(e) =>
              changeFilter(e, "All", 0)
            }
          >
            <Text>All</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexGrow: 1,
            paddingVertical: 7,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            color: "#656565",
          }}
        >
          <Pressable
            onPress={(e) =>
              changeFilter(e, "Ongoing", 2)
            }
          >
            <Text>Ongoing</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexGrow: 1,
            paddingVertical: 7,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            color: "#656565",
          }}
        >
          <Pressable
            onPress={(e) =>
              changeFilter(e, "Completed", 3)
            }
          >
            <Text>Completed</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          marginVertical: 16,
        }}
      >
        {myCourses?.map((course, i) => (
          <CourseProgressCard
            key={i}
            percentage={course.percentage}
            title={course.title}
            chapterCount={course.chapterCount}
            lessonCount={course.lessonCount}
            image={course.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MyCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
