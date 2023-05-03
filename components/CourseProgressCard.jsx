import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import CertificateIcon from "../assets/Certificate.svg";

const CourseProgressCard = ({
  title,
  chapterCount,
  lessonCount,
  image,
  percentage,
}) => {
  return (
    <View>
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 22,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            paddingBottom: 50,
          }}
        >
          <View
            style={{
              flex: 0.6,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                lineHeight: 27,
                fontWeight: 600,
                paddingBottom: 9,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 17,
                fontWeight: 500,
                color: "#656565",
              }}
            >
              Completed Chapters : {chapterCount}
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 17,
                fontWeight: 500,
                color: "#656565",
                paddingTop: 10,
              }}
            >
              Completed Lessons : {lessonCount}
            </Text>
          </View>
          <View
            style={{
              flex: 0.4,
            }}
          >
            <Image
              source={image}
              style={{
                width: "100%",
                height: 150,
                resizeMode: "contain",
              }}
            />
            {percentage === 100 ? (
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 4,
                  backgroundColor: "#35CB00",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  right: -10,
                }}
              >
                <CertificateIcon
                  width={23}
                  height={23}
                />
              </View>
            ) : null}
          </View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor:
              percentage < 60
                ? "rgba(0, 146, 239, 0.15)"
                : percentage !== 100
                ? "rgba(255, 185, 51, 0.15)"
                : "rgba(53, 203, 0, 0.15)",
            position: "absolute",
            bottom: 0,
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 16,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              lineHeight: 15,
              fontWeight: 500,
              color: "#232425",
              paddingBottom: 8,
            }}
          >
            Progress
          </Text>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 24,
              fontWeight: 700,
              color:
                percentage < 60
                  ? "#0092EF"
                  : percentage !== 100
                  ? "#FFB933"
                  : "#35CB00",
            }}
          >
            {percentage}% completed
          </Text>
          <View
            style={{
              height: 6,
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: 10,
              marginTop: 16,
            }}
          >
            <View
              style={{
                position: "absolute",
                left: 0,
                backgroundColor:
                  percentage < 60
                    ? "#0092EF"
                    : percentage !== 100
                    ? "#FFB933"
                    : "#35CB00",

                height: "100%",
                width: `${percentage}%`,
                borderRadius: 40,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#EBEBEB",
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

export default CourseProgressCard;

const styles = StyleSheet.create({});
