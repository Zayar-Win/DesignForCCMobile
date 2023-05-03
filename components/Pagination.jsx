import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Pressable } from "react-native";

const Pagination = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        marginVertical: 24,
        alignContent: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <View
        style={{
          backgroundColor: "#F5F5F5",
          paddingHorizontal: 24,
          paddingVertical: 12,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
        }}
      >
        <Pressable>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 17,
              color: "#656565",
            }}
          >
            Prev
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#F5F5F5",
          paddingHorizontal: 24,
          paddingVertical: 12,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 17,
            color: "#1778F2",
          }}
        >
          01
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 17,
            color: "#656565",
          }}
        >
          /
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 17,
            color: "#656565",
          }}
        >
          03
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F5F5F5",
          paddingHorizontal: 24,
          paddingVertical: 12,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
        }}
      >
        <Pressable>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 17,
              color: "#656565",
            }}
          >
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({});
