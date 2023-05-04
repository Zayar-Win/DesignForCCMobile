import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import Tag from "./Tag";

const BlogHorizontalCard = ({
  image,
  title,
  tags,
}) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        padding: 20,
        flexDirection: "row",
        borderBottomColor: "#EBEBEB",
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          flex: 0.4,
          marginRight: 20,
        }}
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
      <View
        style={{
          flex: 0.6,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "#F5F5F5",
              marginRight: 8,
            }}
          >
            <Image
              source={require("../assets/teacher-5.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 600,
                lineHeight: 17,
                color: "#232425",
                paddingBottom: 4,
              }}
            >
              Creative Coder
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                lineHeight: 15,
                color: "#656565",
              }}
            >
              15 minutes ago
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 18,
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 22,
            color: "#232425",
          }}
        >
          {title}
        </Text>
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
      </View>
    </View>
  );
};

export default BlogHorizontalCard;

const styles = StyleSheet.create({});
