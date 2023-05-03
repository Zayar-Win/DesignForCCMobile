import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import Tag from "./Tag";

const CourseCard = ({
  image,
  title,
  chapterCount,
  lessonCount,
  fee,
  tags,
}) => {
  return (
    <View
      style={{
        width: 188,
        borderWidth: 1,
        borderColor: "#EBEBEB",
        borderRadius: 10,
        overflow: "hidden",
        marginRight: 14,
      }}
    >
      <Image
        source={image}
        style={{
          width: "100%",
          height: 188,
          resizeMode: "contain",
        }}
      />
      <View
        style={{
          paddingHorizontal: 14,
          paddingVertical: 16,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            lineHeight: 17,
            fontWeight: 600,
            paddingBottom: 8,
          }}
        >
          {title}
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
              fontSize: 13,
              lineHeight: 15,
              fontWeight: 400,
              color: "#656565",
            }}
          >
            Chapters: {chapterCount}
          </Text>
          <Text
            style={{
              fontSize: 13,
              lineHeight: 15,
              fontWeight: 400,
              color: "#656565",
            }}
          >
            Lessons: {lessonCount}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 500,
            lineHeight: 15,
            color: "#656565",
            paddingBottom: 15,
          }}
        >
          Fees: {fee} MMK
        </Text>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 3,
          }}
        >
          {tags?.map((tag, i) => (
            <Tag
              key={i}
              backgroundColor={
                tag.backgroundColor
              }
              text={tag.name}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({});
