import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import Cross from "../assets/Cross Icon.svg";
import Camera from "../assets/Camera Icon.svg";
import Button from "../components/Button";
import { TextInput } from "react-native";
import ProfileInputField from "../components/ProfileInputField";

const EditProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginTop: 32,
        }}
      >
        <View
          style={{
            width: 136,
            height: 136,
            borderRadius: 200,
            backgroundColor: "#F5F5F5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/teacher-5.png")}
            style={{
              width: "90%",
              height: "90%",
              borderRadius: 200,
            }}
          />
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "#EBEBEB",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: -28,
              left: -8,
            }}
          >
            <Cross width={25} height={25} />
          </View>
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "#EBEBEB",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: -28,
              right: -8,
            }}
          >
            <Camera width={24} hegiht={22} />
          </View>
        </View>
        <View
          style={{
            marginTop: 32,
            flex: 1,
            width: "100%",
          }}
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
          style={{
            paddingHorizontal: 20,
            width: "100%",
            marginTop: 16,
          }}
        >
          <Button text={"Save Profile"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
