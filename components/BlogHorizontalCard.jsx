import { Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import Tag from "./Tag";
import { useTailwind } from "tailwind-rn";

const BlogHorizontalCard = ({
  image,
  title,
  tags,
}) => {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        "flex-1 w-full items-center p-[20px] flex-row border-b-white-gray border-b-[1px]"
      )}
    >
      <View
        style={tailwind("flex-[0.4] mr-[20px]")}
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
        <View
          style={tailwind(
            "flex-row items-center"
          )}
        >
          <View
            style={tailwind(
              "w-[40px] h-[40px] items-center justify-center rounded-full border-[1px] border-white-gray-soft mr-[8px]"
            )}
          >
            <Image
              source={require("../assets/teacher-5.png")}
              style={[
                tailwind("w-[30px] h-[30px]"),
                {
                  resizeMode: "contain",
                },
              ]}
            />
          </View>
          <View>
            <Text
              style={tailwind(
                "text-[14px] font-semibold leading-[17px] text-black pb-[4px]"
              )}
            >
              Creative Coder
            </Text>
            <Text
              style={tailwind(
                "text-[12px] font-medium leading-[15px] text-black-gray"
              )}
            >
              15 minutes ago
            </Text>
          </View>
        </View>
        <Text
          style={tailwind(
            "mt-[18px] text-[18px] font-semibold leading-[25px] text-black"
          )}
        >
          {title}
        </Text>
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
      </View>
    </View>
  );
};

export default BlogHorizontalCard;
