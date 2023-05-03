import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import CourseCard from "../components/CourseCard";
import { FlatList } from "react-native";
import BlogCard from "../components/BlogCard";
import CourseIllustration from "../assets/Illustration.svg";

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
    fees: "30,000",
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
    fees: "120,000",
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
    fees: "70,000",
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
    fees: "30,000",
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
    fees: "70,000",
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
    fees: "40,000",
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
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 21,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 24,
                fontWeight: 500,
              }}
            >
              Hello!
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 22,
                }}
              >
                {" "}
                Zayarwin
              </Text>
            </Text>
            <Text
              style={{
                paddingTop: 5,
                fontSize: 12,
                lineHeight: 15,
                color: "#656565",
                fontWeight: 400,
              }}
            >
              Welcome from creative Coder
            </Text>
          </View>
          <Image
            source={require("../assets/teacher-5.png")}
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
            }}
          />
        </View>
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
            placeholder='What do you want to learn today?'
            placeholderTextColor='#656565'
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 19,
            fontWeight: 600,
            marginBottom: 25,
          }}
        >
          Categories
        </Text>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 14,
          }}
        >
          <View
            style={{
              width: "100%",
            }}
          >
            <LinearGradient
              colors={["#0092EF", "#0063A3"]}
              start={[0, 0.5]}
              end={[1, 0.5]}
              style={[styles.card]}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: 24,
                }}
              >
                Courses
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 15,
                  fontWeight: 400,
                  color: "white",
                  paddingTop: 8,
                }}
              >
                View all Courses we Offer
              </Text>
            </LinearGradient>
            <CourseIllustration
              style={{
                position: "absolute",
                width: 158,
                right: 31,
                top: -66,
              }}
            />
          </View>
          <View style={{ width: "48%" }}>
            <LinearGradient
              colors={["#0092EF", "#0063A3"]}
              start={[0, 0.5]}
              end={[1, 0.5]}
              style={[styles.card]}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: 40,
                }}
              >
                Blogs{"   "}
                <Text
                  style={{
                    fontSize: 35,
                  }}
                >
                  📚
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 15,
                  fontWeight: 400,
                  color: "white",
                  paddingTop: 8,
                }}
              >
                Read 5 mins Blogs Daily
              </Text>
            </LinearGradient>
          </View>
          <View style={{ width: "48%" }}>
            <LinearGradient
              colors={["#0092EF", "#0063A3"]}
              start={[0, 0.5]}
              end={[1, 0.5]}
              style={[styles.card]}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: 40,
                }}
              >
                Tricks{"   "}
                <Text
                  style={{
                    fontSize: 35,
                  }}
                >
                  🪄
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 15,
                  fontWeight: 400,
                  color: "white",
                  paddingTop: 8,
                }}
              >
                Code smart with Tricks
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 19,
              fontWeight: 600,
            }}
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
          style={{ marginTop: 25 }}
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
      <View style={{ marginVertical: 40 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 19,
              fontWeight: 600,
            }}
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
          style={{ marginTop: 25 }}
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

const styles = StyleSheet.create({
  searchBarContainer: {
    marginVertical: 34,
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 100,
  },
  searchInput: {
    fontSize: 16,
    marginLeft: 75,
    marginRight: 10,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
  },
});
