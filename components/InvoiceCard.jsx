import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import DownloadIcon from "../assets/Download Icon.svg";

const InvoiceCard = ({
  courseTitle,
  access_date,
  fee,
  leftAmount,
}) => {
  return (
    <View
      style={{
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#F5F5F5",
        overflow: "hidden",
        marginBottom: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 16,
          paddingHorizontal: 20,

          borderBottomWidth: 1,
          borderBottomColor: "#EBEBEB",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 17,
            color: "#0092EF",
            paddingRight: 8,
          }}
        >
          Course :{" "}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 17,
            color: "#232425",
          }}
        >
          {courseTitle}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 16,
          paddingHorizontal: 20,

          borderBottomWidth: 1,
          borderBottomColor: "#EBEBEB",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 17,
            color: "#0092EF",
            paddingRight: 8,
          }}
        >
          Access Date :{" "}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 17,
            color: "#232425",
          }}
        >
          {access_date}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 16,
          paddingHorizontal: 20,

          borderBottomWidth: 1,
          borderBottomColor: "#EBEBEB",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 17,
            color: "#0092EF",
            paddingRight: 8,
          }}
        >
          Fee :{" "}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 17,
              color: "#232425",
            }}
          >
            {fee} MMK
          </Text>
          <View
            style={{
              paddingVertical: 4,
              paddingHorizontal: 8,
              backgroundColor: leftAmount
                ? "#FFB933"
                : "#0092EF",
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 17,
                fontSize: 14,
                color: "white",
              }}
            >
              {leftAmount ? "Left" : "Paid"}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 16,
          paddingHorizontal: 20,

          borderBottomWidth: 1,
          borderBottomColor: "#EBEBEB",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 17,
            color: "#0092EF",
            paddingRight: 8,
          }}
        >
          Left Amount :{" "}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 17,
            color: leftAmount
              ? "#EC272E"
              : "#A8A8A8",
          }}
        >
          {leftAmount ? leftAmount : "0"} MMK
        </Text>
      </View>
      <View
        style={{
          height: 56,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#003E66",
          gap: 8,
        }}
      >
        <DownloadIcon width={16} height={16} />
        <Text
          style={{
            fontWeight: 600,
            fontSize: 14,
            lineHeight: 17,
            color: "white",
          }}
        >
          Download
        </Text>
      </View>
    </View>
  );
};

export default InvoiceCard;

const styles = StyleSheet.create({});
