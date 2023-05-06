import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Tag from "./Tag";
import { Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import Button from "./Button";
import Premium from "../assets/Premium Icon.svg";

const CourseHorizontalCard = ({
  image,
  chapterCount,
  lessonCount,
  title,
  fee,
  tags,
}) => {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        "flex-row flex-1 w-full p-[20px] border-b-white-gray border-b-[1px]"
      )}
    >
      <View
        style={tailwind("flex-[0.4] mr-[10px]")}
      >
        <Image
          source={image}
          style={[
            tailwind(
              "w-full h-full rounded-[5px]"
            ),
            {
              resizeMode: "stretch",
            },
          ]}
        />
      </View>
      <View style={tailwind("flex-[0.6]")}>
        <Text
          style={tailwind(
            "text-[18px] leading-[22px] font-semibold pb-[12px]"
          )}
        >
          {title}
        </Text>
        <View
          style={tailwind(
            "mb-[8px] flex-row items-center justify-between"
          )}
        >
          <Text
            style={tailwind(
              "text-[14px] leading-[17px] font-medium text-black-gray"
            )}
          >
            Chapters: {chapterCount}
          </Text>
          <Text
            style={tailwind(
              "text-[14px] leading-[17px] font-medium text-black-gray"
            )}
          >
            Lessons: {lessonCount}
          </Text>
        </View>
        <View
          style={[
            tailwind(
              "flex-wrap flex-row mt-[12px]"
            ),
            {
              gap: 3,
            },
          ]}
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
          style={tailwind(
            "px-[16px] py-[9px] bg-secondary rounded-[3px] items-center justify-center mt-[12px]"
          )}
        >
          <Pressable>
            {fee === 0 ? (
              <Text
                style={tailwind(
                  "text-[12px] leading-[15px] font-semibold text-white"
                )}
              >
                Free Course
              </Text>
            ) : (
              <View
                style={tailwind(
                  "flex-row items-center"
                )}
              >
                <Premium width={18} height={14} />
                <Text
                  style={tailwind(
                    "text-[12px] leading-[15px] font-semibold text-white pl-[8px]"
                  )}
                >
                  Fees: {fee} MMK
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CourseHorizontalCard;
