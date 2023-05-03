import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Certificate from "../components/Certificate";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import Download from "../assets/Download.svg";
import HTML from "../assets/Html Logo.svg";
import CSS from "../assets/CSS Logo.svg";
import JS from "../assets/JS Logo.svg";
import GITHUB from "../assets/GitHub Logo.svg";
import GIT from "../assets/Git Logo.svg";
import Button from "../components/Button";

const languagesLogos = [
  {
    Logo: HTML,
  },
  {
    Logo: CSS,
  },
  {
    Logo: JS,
  },
  {
    Logo: GITHUB,
  },
  {
    Logo: GIT,
  },
  {
    Logo: HTML,
  },
  {
    Logo: CSS,
  },
  {
    Logo: JS,
  },
  {
    Logo: GITHUB,
  },
  {
    Logo: GIT,
  },
];

const certificates = [
  {
    courseTitle: "PHP Framework Thinking Course",
  },
  {
    courseTitle: "React + Firebase combo",
  },
  {
    couseTitle: "Vue + Firbase combo",
  },
  {
    courseTitle: "PHP and Deep Dive Laravel",
  },
];

const MyCertificates = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          marginTop: 31,
        }}
      >
        <FlatList
          data={certificates}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={"fast"}
          snapToAlignment='start'
          snapToInterval={370}
          renderItem={({ item, index }) => {
            return (
              <Certificate
                style={
                  index ===
                  certificates.length - 1
                    ? { marginRight: 20 }
                    : {}
                }
                name='John Doe'
                email={"johndoe123@gmail.com"}
                repolink={
                  "https://github.com/johndoe/php_blog"
                }
                courseTitle={item.courseTitle}
              />
            );
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginTop: 30,
        }}
      >
        <Pressable>
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 12,
              backgroundColor: "#F5F5F5",
              borderRadius: 100,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 17,
                fontWeight: 500,
                color: "#656565",
              }}
            >
              Prev
            </Text>
          </View>
        </Pressable>
        <Pressable>
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 12,
              backgroundColor: "#F5F5F5",
              borderRadius: 100,
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Download width={16} height={16} />
            <Text
              style={{
                fontSize: 14,
                lineHeight: 17,
                fontWeight: 500,
                color: "#0092EF",
              }}
            >
              Download
            </Text>
          </View>
        </Pressable>
        <Pressable>
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 12,
              backgroundColor: "#F5F5F5",
              borderRadius: 100,
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 17,
                fontWeight: 500,
                color: "#656565",
              }}
            >
              Next
            </Text>
          </View>
        </Pressable>
      </View>
      <View
        style={{
          marginVertical: 24,
        }}
      >
        <FlatList
          data={languagesLogos}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={"fast"}
          snapToAlignment='start'
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: 56,
                  height: 56,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F5F5F5",
                  borderRadius: 100,
                  marginLeft:
                    index === 0 ? 20 : 8,
                  marginRight:
                    index ===
                    languagesLogos.length - 1
                      ? 20
                      : 0,
                }}
              >
                <item.Logo />
              </View>
            );
          }}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 12,
          lineHeight: 15,
          fontWeight: 500,
          color: "#656565",
        }}
      >
        Please Contact Us Get Certificate
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 50,
            height: 0.5,
            backgroundColor: "#656565",
          }}
        />
        <Text
          style={{
            fontSize: 12,
            lineHeight: 15,
            fontWeight: 500,
            color: "#656565",
            paddingHorizontal: 7,
            paddingTop: 6,
          }}
        >
          By Showing Your Project
        </Text>
        <View
          style={{
            width: 50,
            height: 0.5,
            backgroundColor: "#656565",
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 40,
          marginTop: 28,
        }}
      >
        <Button text={"Apply Certificate"} />
      </View>
    </ScrollView>
  );
};

export default MyCertificates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
