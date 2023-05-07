import { Text, View } from "react-native";
import React from "react";
import Github from "../assets/github.svg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import Button from "../components/Button";
import { TextInput } from "react-native";
import ProfileInputField from "../components/ProfileInputField";
import { useTailwind } from "tailwind-rn";

const SocialProfiles = () => {
  const tailwind = useTailwind();
  return (
    <ScrollView
      style={tailwind("flex-1 bg-white")}
    >
      <View
        style={[
          tailwind(
            "flex-row items-center px-[20px] mt-[32px]"
          ),
          {
            gap: 16,
          },
        ]}
      >
        <Image
          source={require("../assets/Robot.png")}
          style={[
            tailwind("w-[64px] h-[64px]"),
            {
              resizeMode: "contain",
            },
          ]}
        />
        <Github />
        <Facebook />
        <LinkedIn />
      </View>
      <View
        style={tailwind(
          "mt-[32px] flex-1 w-full"
        )}
      >
        <ProfileInputField
          value='github.com/MinNaing7'
          label='Github URL'
        />
        <ProfileInputField
          label='Facebook URL'
          value='facebook.com/Min.Naing.7'
        />
        <ProfileInputField
          label='LinkedIn URL'
          value='linkedin.com/in/min-naing-7'
        />
      </View>
      <View
        style={tailwind(
          "px-[20px] w-full mt-[16px]"
        )}
      >
        <Button text={"Save Social Profiles"} />
      </View>
    </ScrollView>
  );
};

export default SocialProfiles;
