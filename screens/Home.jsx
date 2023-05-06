import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import CourseCard from "../components/CourseCard";
import { FlatList } from "react-native";
import BlogCard from "../components/BlogCard";
import CourseIllustration from "../assets/Illustration.svg";
import { useTailwind } from "tailwind-rn";
import SearchBar from "../components/SearchBar";

export const latestCourses = [
  {
    image: require("../assets/WebsiteDeployment.png"),
    title: "Website Deployment...",
    chapterCount: 5,
    lessonCount: 13,
    tags: [
      {
        name: "PHP",
        backgroundColor: "#6A1ADD",
      },
      {
        name: "Laravel",
        backgroundColor: "#EC272E",
      },
    ],
    fees: 30000,
  },
  {
    image: require("../assets/Courses-Thumbnail-17.png"),
    title: "React + Firebase combo...",
    chapterCount: 6,
    lessonCount: 27,
    tags: [
      {
        name: "PHP",
        backgroundColor: "#6A1ADD",
      },
      {
        name: "Laravel",
        backgroundColor: "#EC272E",
      },
    ],
    fees: 120000,
  },
  {
    image: require("../assets/Courses-Thumbnail-V2-10.png"),
    title: "PHP + Deep Dive Lar...",
    chapterCount: 11,
    lessonCount: 103,
    tags: [
      {
        name: "PHP",
        backgroundColor: "#6A1ADD",
      },
      {
        name: "Laravel",
        backgroundColor: "#EC272E",
      },
    ],
    fees: 70000,
  },
  {
    image: require("../assets/Php-framework-thinking.png"),
    title: "Php Framwork Think...",
    chapterCount: 3,
    lessonCount: 38,
    tags: [
      {
        name: "PHP",
        backgroundColor: "#6A1ADD",
      },
      {
        name: "Laravel",
        backgroundColor: "#EC272E",
      },
    ],
    fees: 30000,
  },
  {
    image: require("../assets/Vue-Firebase.png"),
    title: "JS + Vue + Firbase...",
    chapterCount: 14,
    lessonCount: 133,
    tags: [
      {
        name: "PHP",
        backgroundColor: "#6A1ADD",
      },
      {
        name: "Laravel",
        backgroundColor: "#EC272E",
      },
    ],
    fees: 70000,
  },
  {
    image: require("../assets/Javascript.png"),
    title: "Programming Basic with...",
    chapterCount: 9,
    lessonCount: 55,
    tags: [
      {
        name: "PHP",
        backgroundColor: "#6A1ADD",
      },
      {
        name: "Laravel",
        backgroundColor: "#EC272E",
      },
    ],
    fees: 0,
  },
];

export const latestBlogs = [
  {
    image: require("../assets/AtomicDesign.png"),
    title: "Designer တိုင်းသိသင့််တဲ့ Atom...",
    description:
      "Web Designer/ UI/UX Designer လုပ်ဖို့ ကြိုးစားနေ တဲ့သူတွေဖြစ်စေ ဒါမှမဟုတ် Design ပိုင်းကို တီးမိခေါက် မိ ရှိမိထားသင့်တဲ့ Web Developer ကြီးတို့ပဲဖြစ်စေ...",
    tags: [
      {
        name: "Knowledge Sharing",
        backgroundColor: "#0092EF",
      },
    ],
  },
  {
    image: require("../assets/AI.png"),
    title: "Designer တိုင်းသိသင့််တဲ့ Atom...",
    description:
      "Web Designer/ UI/UX Designer လုပ်ဖို့ ကြိုးစားနေ တဲ့သူတွေဖြစ်စေ ဒါမှမဟုတ် Design ပိုင်းကို တီးမိခေါက် မိ ရှိမိထားသင့်တဲ့ Web Developer ကြီးတို့ပဲဖြစ်စေ...",
    tags: [
      {
        name: "Knowledge Sharing",
        backgroundColor: "#0092EF",
      },
    ],
  },
  {
    image: require("../assets/AtomicDesign.png"),
    title: "Designer တိုင်းသိသင့််တဲ့ Atom...",
    description:
      "Web Designer/ UI/UX Designer လုပ်ဖို့ ကြိုးစားနေ တဲ့သူတွေဖြစ်စေ ဒါမှမဟုတ် Design ပိုင်းကို တီးမိခေါက် မိ ရှိမိထားသင့်တဲ့ Web Developer ကြီးတို့ပဲဖြစ်စေ...",
    tags: [
      {
        name: "Knowledge Sharing",
        backgroundColor: "#0092EF",
      },
    ],
  },
  {
    image: require("../assets/AI.png"),
    title: "Designer တိုင်းသိသင့််တဲ့ Atom...",
    description:
      "Web Designer/ UI/UX Designer လုပ်ဖို့ ကြိုးစားနေ တဲ့သူတွေဖြစ်စေ ဒါမှမဟုတ် Design ပိုင်းကို တီးမိခေါက် မိ ရှိမိထားသင့်တဲ့ Web Developer ကြီးတို့ပဲဖြစ်စေ...",
    tags: [
      {
        name: "Knowledge Sharing",
        backgroundColor: "#0092EF",
      },
    ],
  },
  {
    image: require("../assets/AtomicDesign.png"),
    title: "Designer တိုင်းသိသင့််တဲ့ Atom...",
    description:
      "Web Designer/ UI/UX Designer လုပ်ဖို့ ကြိုးစားနေ တဲ့သူတွေဖြစ်စေ ဒါမှမဟုတ် Design ပိုင်းကို တီးမိခေါက် မိ ရှိမိထားသင့်တဲ့ Web Developer ကြီးတို့ပဲဖြစ်စေ...",
    tags: [
      {
        name: "Knowledge Sharing",
        backgroundColor: "#0092EF",
      },
    ],
  },
  {
    image: require("../assets/AI.png"),
    title: "Designer တိုင်းသိသင့််တဲ့ Atom...",
    description:
      "Web Designer/ UI/UX Designer လုပ်ဖို့ ကြိုးစားနေ တဲ့သူတွေဖြစ်စေ ဒါမှမဟုတ် Design ပိုင်းကို တီးမိခေါက် မိ ရှိမိထားသင့်တဲ့ Web Developer ကြီးတို့ပဲဖြစ်စေ...",
    tags: [
      {
        name: "Knowledge Sharing",
        backgroundColor: "#0092EF",
      },
    ],
  },
];

export default function Home() {
  const tailwind = useTailwind();
  return (
    <ScrollView
      style={tailwind(
        "flex-1 bg-white px-[20px]"
      )}
    >
      <View>
        <View
          style={tailwind(
            "flex-row items-center justify-between pt-[21px]"
          )}
        >
          <View>
            <Text
              style={tailwind(
                "text-[20px] font-medium"
              )}
            >
              Hello!
              <Text
                style={tailwind(
                  "text-[22px] font-semibold"
                )}
              >
                {" "}
                Zayarwin
              </Text>
            </Text>
            <Text
              style={tailwind(
                "pt-[5px] text-[14px] text-[#656565] font-normal"
              )}
            >
              Welcome from creative Coder
            </Text>
          </View>
          <Image
            source={require("../assets/teacher-5.png")}
            style={tailwind(
              "w-[56px] h-[56px] rounded-full"
            )}
          />
        </View>
        <SearchBar
          placeholder={
            "What do you want to learn today?"
          }
          style={tailwind("mt-[34px]")}
        />
      </View>
      <View style={tailwind("mt-[57px]")}>
        <Text
          style={tailwind(
            "text-[16px] font-semibold mb-[25px]"
          )}
        >
          Categories
        </Text>
        <View
          style={[
            tailwind("flex-wrap flex-row"),
            { gap: 14 },
          ]}
        >
          <View style={tailwind("w-full")}>
            <LinearGradient
              colors={["#0092EF", "#0063A3"]}
              start={[0, 0.5]}
              end={[1, 0.5]}
              style={tailwind(
                "px-[20px] py-[16px] rounded-[10px]"
              )}
            >
              <Text
                style={tailwind(
                  "text-white text-[20px] font-semibold leading-[24px]"
                )}
              >
                Courses
              </Text>
              <Text
                style={tailwind(
                  "text-[12px] leading-[15px] font-normal text-white pt-[8px]"
                )}
              >
                View all Courses we Offer
              </Text>
            </LinearGradient>
            <CourseIllustration
              style={tailwind(
                "absolute w-[158px] right-[31px] -top-[66px]"
              )}
            />
          </View>
          <View style={tailwind("w-[48%]")}>
            <LinearGradient
              colors={["#0092EF", "#0063A3"]}
              start={[0, 0.5]}
              end={[1, 0.5]}
              style={tailwind(
                "px-[20px] py-[16px] rounded-[10px]"
              )}
            >
              <Text
                style={tailwind(
                  "text-white text-[20px] font-semibold leading-[40px]"
                )}
              >
                Blogs{"   "}
                <Text
                  style={tailwind("text-[35px]")}
                >
                  📚
                </Text>
              </Text>
              <Text
                style={tailwind(
                  "text-[12px] leading-[15px] font-normal text-white pt-[8px]"
                )}
              >
                Read 5 mins Blogs Daily
              </Text>
            </LinearGradient>
          </View>
          <View style={tailwind("w-[48%]")}>
            <LinearGradient
              colors={["#0092EF", "#0063A3"]}
              start={[0, 0.5]}
              end={[1, 0.5]}
              style={tailwind(
                "px-[20px] py-[16px] rounded-[10px]"
              )}
            >
              <Text
                style={tailwind(
                  "text-white text-[20px] font-semibold leading-[40px]"
                )}
              >
                Tricks{"   "}
                <Text
                  style={tailwind("text-[35px]")}
                >
                  🪄
                </Text>
              </Text>
              <Text
                style={tailwind(
                  "text-[12px] leading-[15px] font-normal text-white pt-[8px]"
                )}
              >
                Code smart with Tricks
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
      <View style={tailwind("mt-[40px]")}>
        <View
          style={tailwind(
            "flex-row items-center justify-between"
          )}
        >
          <Text
            style={tailwind(
              "text-[16px] leading-[19px] font-semibold"
            )}
          >
            Latest Courses
          </Text>
          <AntDesign
            name='right'
            color='#656565'
            size={20}
          />
        </View>
        <FlatList
          style={tailwind("mt-[25px]")}
          horizontal
          decelerationRate='fast'
          snapToAlignment='start'
          snapToInterval={180}
          data={latestCourses}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <CourseCard
                title={item.title}
                fee={item.fees}
                image={item.image}
                tags={item.tags}
                lessonCount={item.lessonCount}
                chapterCount={item.chapterCount}
              />
            );
          }}
        />
      </View>
      <View style={tailwind("my-[40px]")}>
        <View
          style={tailwind(
            "flex-row items-center justify-between"
          )}
        >
          <Text
            style={tailwind(
              "text-[16px] leading-[19px] font-semibold"
            )}
          >
            Latest Blogs
          </Text>
          <AntDesign
            name='right'
            color='#656565'
            size={20}
          />
        </View>
        <FlatList
          style={tailwind("mt-[25px]")}
          horizontal
          decelerationRate='fast'
          snapToAlignment='start'
          snapToInterval={202}
          data={latestBlogs}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <BlogCard
                title={item.title}
                description={item.description}
                image={item.image}
                tags={item.tags}
                created_at={
                  "Apr 10, 2023 7:21 AM"
                }
              />
            );
          }}
        />
      </View>
    </ScrollView>
  );
}
