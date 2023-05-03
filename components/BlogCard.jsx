import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import Tag from "./Tag";

const BlogCard = ({
  image,
  title,
  description,
  created_at,
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
            fontSize: 10,
            lineHeight: 15,
            fontWeight: 500,
            paddingBottom: 8,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 8,
            fontWeight: 500,
            lineHeight: 10,
            color: "#656565",
            paddingBottom: 8,
          }}
        >
          {created_at}
        </Text>
        <Text
          style={{
            fontSize: 8,
            fontWeight: 400,
            lineHeight: 11,
            color: "#232425",
            paddingBottom: 20,
          }}
        >
          {description}
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

export default BlogCard;

const styles = StyleSheet.create({});
