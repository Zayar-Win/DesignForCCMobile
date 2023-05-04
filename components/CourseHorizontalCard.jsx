import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Tag from "./Tag";
import { Pressable } from "react-native";

const CourseHorizontalCard = ({
  image,
  chapterCount,
  lessonCount,
  title,
  description,
  fee,
  tags,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        borderBottomColor: "#EBEBEB",
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{ flex: 0.4, marginRight: 10 }}
      >
        <Image
          source={image}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "stretch",
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ flex: 0.6 }}>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 22,
            fontWeight: 600,
            paddingBottom: 12,
          }}
        >
          Website Development From Scratch
        </Text>
        <View
          style={{
            marginBottom: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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
            Chapters: {chapterCount}
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 17,
              fontWeight: 500,
              color: "#656565",
            }}
          >
            Lessons: {lessonCount}
          </Text>
        </View>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 3,
            marginTop: 12,
          }}
        >
          {tags?.map((tag, i) => (
            <Tag
              key={i}
              text={tag.name}
              backgroundColor={
                tag.backgroundColor
              }
            />
          ))}
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: "#003E66",
            borderRadius: 3,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 12,
          }}
        >
          <Pressable>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 15,
                fontWeight: 600,
                color: "white",
              }}
            >
              Fees: 30,000 MMK
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CourseHorizontalCard;

const styles = StyleSheet.create({});
