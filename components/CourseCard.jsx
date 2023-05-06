import { Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import Tag from "./Tag";
import { useTailwind } from "tailwind-rn";

const CourseCard = ({
  image,
  title,
  chapterCount,
  lessonCount,
  fee,
  tags,
}) => {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        "w-[188px] border-[1px] border-white-gray rounded-[10px] overflow-hidden mr-[14px]"
      )}
    >
      <Image
        source={image}
        style={[
          tailwind("w-full h-[188px]"),
          { resizeMode: "cover" },
        ]}
      />
      <View
        style={tailwind("px-[14px] py-[16px]")}
      >
        <Text
          style={tailwind(
            "text-[14px] leading-[17px] font-semibold pb-[8px]"
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
              "text-[14px] leading-[15px] font-normal text-black-gray"
            )}
          >
            Chapters: {chapterCount}
          </Text>
          <Text
            style={tailwind(
              "text-[13px] leading-[15px] font-normal text-black-gray"
            )}
          >
            Lessons: {lessonCount}
          </Text>
        </View>
        <Text
          style={tailwind(
            "text-[12px] font-medium leading-[15px] text-black-gray pb-[15px]"
          )}
        >
          Fees: {fee} MMK
        </Text>
        <View
          style={[
            tailwind("flex-wrap flex-row"),
            {
              gap: 3,
            },
          ]}
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
