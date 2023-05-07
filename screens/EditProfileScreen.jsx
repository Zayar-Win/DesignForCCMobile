import { Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import Cross from "../assets/Cross Icon.svg";
import Camera from "../assets/Camera Icon.svg";
import Button from "../components/Button";
import { TextInput } from "react-native";
import ProfileInputField from "../components/ProfileInputField";
import { useTailwind } from "tailwind-rn";

const EditProfileScreen = () => {
  const tailwind = useTailwind();

  return (
    <ScrollView style={styles.container}>
      <View
        style={tailwind("items-center mt-[32px]")}
      >
        <View
          style={tailwind(
            "w-[136px] h-[136px] rounded-full bg-white-gray-soft items-center justify-center"
          )}
        >
          <Image
            source={require("../assets/teacher-5.png")}
            style={tailwind(
              "w-[90%] h-[90%] rounded-full"
            )}
          />
          <View
            style={tailwind(
              "w-[56px] h-[56px] rounded-full bg-white border-[1px] border-white-gray items-center justify-center absolute -bottom-[16px] -left-[8px]"
            )}
          >
            <Cross width={25} height={25} />
          </View>
          <View
            style={tailwind(
              "w-[56px] h-[56px] rounded-full bg-white border-[1px] border-white-gray items-center justify-center absolute -bottom-[16px] -right-[8px]"
            )}
          >
            <Camera width={24} hegiht={22} />
          </View>
        </View>
        <View
          style={tailwind(
            "mt-[32px] flex-1 w-full"
          )}
        >
          <ProfileInputField
            label='Name'
            value='Min Naing'
          />
          <ProfileInputField
            label='Email'
            value='minmin.minnaing22@gmail.com'
          />
          <ProfileInputField
            label='Portfilio URL'
            value='behance.net/minnaing7'
          />
          <ProfileInputField
            label={"Job"}
            value='Graphic & UiUx Designer'
          />

          <ProfileInputField
            label={"Bio"}
            multiline
            wrapperStyle={{
              alignItems: "flex-start",
            }}
            labelStyle={{ paddingTop: 3 }}
            value='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores rerum tenetur aut id labore consequuntur sed tempore commodi corrupti!'
          />
        </View>
        <View
          style={tailwind(
            "px-[20px] w-full my-[16px]"
          )}
        >
          <Button text={"Save Profile"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfileScreen;
