import {
  Pressable,
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
import { useTailwind } from "tailwind-rn";

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
  const tailwind = useTailwind();
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
    <ScrollView
      style={tailwind("flex-1 bg-white")}
    >
      <View style={tailwind("px-[20px]")}>
        <SearchBar
          placeholder={
            "Search for your courses..."
          }
        />
      </View>
      <View
        style={tailwind(
          "mt-[16px] bg-white-gray-soft rounded-[24px] mx-[20px] p-[8px] pl-[35px] flex-row flex-1 items-center justify-center"
        )}
      >
        <Animated.View
          style={[
            tailwind(
              "w-[125px] h-[34px] bg-white absolute left-[11px] rounded-[16px]"
            ),
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
        <Pressable
          onPress={(e) =>
            changeFilter(e, "All", 0)
          }
          style={tailwind(
            "grow py-[7px] rounded-[16px] items-center justify-center text-black-gray"
          )}
        >
          <View>
            <Text>All</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={(e) =>
            changeFilter(e, "Ongoing", 2)
          }
          style={tailwind(
            "grow py-[7px] rounded-[16px] items-center justify-center text-black-gray"
          )}
        >
          <View>
            <Text>Ongoing</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={(e) =>
            changeFilter(e, "Completed", 3)
          }
          style={tailwind(
            "grow py-[7px] rounded-[16px] items-center justify-center text-black-gray"
          )}
        >
          <View>
            <Text>Completed</Text>
          </View>
        </Pressable>
      </View>
      <View style={tailwind("my-[16px]")}>
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
