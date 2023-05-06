import { Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import Tag from "./Tag";
import { useTailwind } from "tailwind-rn";

const BlogCard = ({
  image,
  title,
  description,
  created_at,
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
            "text-[10px] leading-[15px] font-medium pb-[8px]"
          )}
        >
          {title}
        </Text>
        <Text
          style={tailwind(
            "text-[8px] font-medium leading-[10px] text-black-gray pb-[8px]"
          )}
        >
          {created_at}
        </Text>
        <Text
          style={tailwind(
            "text-[8px] font-normal leading-[11px] text-black pb-[20px]"
          )}
        >
          {description}
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

export default BlogCard;
