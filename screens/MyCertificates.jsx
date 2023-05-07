import { Text, View } from "react-native";
import React from "react";
import Certificate from "../components/Certificate";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import Download from "../assets/Download.svg";
import HTML from "../assets/Html Logo.svg";
import CSS from "../assets/CSS Logo.svg";
import JS from "../assets/JS Logo.svg";
import GITHUB from "../assets/GitHub Logo.svg";
import GIT from "../assets/Git Logo.svg";
import Button from "../components/Button";
import { useTailwind } from "tailwind-rn";

const languagesLogos = [
  {
    Logo: HTML,
  },
  {
    Logo: CSS,
  },
  {
    Logo: JS,
  },
  {
    Logo: GITHUB,
  },
  {
    Logo: GIT,
  },
  {
    Logo: HTML,
  },
  {
    Logo: CSS,
  },
  {
    Logo: JS,
  },
  {
    Logo: GITHUB,
  },
  {
    Logo: GIT,
  },
];

const certificates = [
  {
    courseTitle: "PHP Framework Thinking Course",
  },
  {
    courseTitle: "React + Firebase combo",
  },
  {
    couseTitle: "Vue + Firbase combo",
  },
  {
    courseTitle: "PHP and Deep Dive Laravel",
  },
];

const MyCertificates = () => {
  const tailwind = useTailwind();

  return (
    <ScrollView
      style={tailwind("flex-1 bg-white")}
    >
      <View style={tailwind("mt-[31px]")}>
        <FlatList
          data={certificates}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={"fast"}
          snapToAlignment='start'
          snapToInterval={370}
          renderItem={({ item, index }) => {
            return (
              <Certificate
                style={
                  index ===
                  certificates.length - 1
                    ? { marginRight: 20 }
                    : {}
                }
                name='John Doe'
                email={"johndoe123@gmail.com"}
                repolink={
                  "https://github.com/johndoe/php_blog"
                }
                courseTitle={item.courseTitle}
              />
            );
          }}
        />
      </View>
      <View
        style={[
          tailwind(
            "mx-[20px] flex-row items-center justify-center mt-[30px]"
          ),
          {
            gap: 8,
          },
        ]}
      >
        <Pressable>
          <View
            style={tailwind(
              "px-[24px] py-[12px] bg-white-gray-soft rounded-[100px]"
            )}
          >
            <Text
              style={tailwind(
                "text-[14px] leading-[17px] font-medium text-black-gray"
              )}
            >
              Prev
            </Text>
          </View>
        </Pressable>
        <Pressable>
          <View
            style={tailwind(
              "px-[24px] flex-row items-center  py-[12px] bg-white-gray-soft rounded-[100px]"
            )}
          >
            <Download width={16} height={16} />
            <Text
              style={tailwind(
                "text-[14px] pl-[13px] leading-[17px] font-medium text-primary"
              )}
            >
              Download
            </Text>
          </View>
        </Pressable>
        <Pressable>
          <View
            style={tailwind(
              "px-[24px] py-[12px] bg-white-gray-soft rounded-[100px]"
            )}
          >
            <Text
              style={tailwind(
                "text-[14px] leading-[17px] font-medium text-black-gray"
              )}
            >
              Next
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={tailwind("my-[24px]")}>
        <FlatList
          data={languagesLogos}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={"fast"}
          snapToAlignment='start'
          renderItem={({ item, index }) => {
            return (
              <View
                style={tailwind(
                  `w-[56px] h-[56px] items-center justify-center bg-white-gray-soft rounded-full ${
                    index === 0
                      ? "ml-[20px]"
                      : "ml-[8px]"
                  } ${
                    index ===
                    languagesLogos.length - 1
                      ? "mr-[20px]"
                      : ""
                  }`
                )}
              >
                <item.Logo />
              </View>
            );
          }}
        />
      </View>
      <Text
        style={tailwind(
          "text-center text-[12px] leading-[15px] font-medium text-black-gray"
        )}
      >
        Please Contact Us Get Certificate
      </Text>
      <View
        style={tailwind(
          "flex-row items-center justify-center mt-[6px]"
        )}
      >
        <View
          style={tailwind(
            "w-[50px] h-[0.5px] bg-black-gray"
          )}
        />
        <Text
          style={tailwind(
            "text-[12px] leading-[15px] font-medium text-black-gray px-[7px]"
          )}
        >
          By Showing Your Project
        </Text>
        <View
          style={tailwind(
            "w-[50px] h-[0.5px] bg-black-gray"
          )}
        />
      </View>
      <View
        style={tailwind(
          "mx-[20px] mb-[40px] mt-[28px]"
        )}
      >
        <Button text={"Apply Certificate"} />
      </View>
    </ScrollView>
  );
};

export default MyCertificates;
