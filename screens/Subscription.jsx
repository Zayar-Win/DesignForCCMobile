import { Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "../components/Button";
import ProfileInputField from "../components/ProfileInputField";
import { useTailwind } from "tailwind-rn";

const Subscription = () => {
  const tailwind = useTailwind();
  return (
    <ScrollView
      style={tailwind("flex-1 bg-white")}
    >
      <View
        style={tailwind(
          "mt-[32px] flex-1 w-full"
        )}
      >
        <ProfileInputField
          label='Email'
          value='minmin.minnaing22@gmail.com'
        />
      </View>
      <Text
        style={tailwind(
          "px-[71px] text-center text-[14px] leading-[17px] font-medium text-black-gray my-[32px]"
        )}
      >
        We will send to your email when we upload
        a new post or youtube video.
      </Text>
      <View style={tailwind("px-[20px]")}>
        <Button text='Subscribe' />
      </View>
    </ScrollView>
  );
};

export default Subscription;
