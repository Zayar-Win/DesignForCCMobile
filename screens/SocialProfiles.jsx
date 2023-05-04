import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Github from "../assets/github.svg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import Button from "../components/Button";
import { TextInput } from "react-native";
import ProfileInputField from "../components/ProfileInputField";

const SocialProfiles = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          gap: 16,
          marginTop: 32,
        }}
      >
        <Image
          source={require("../assets/Robot.png")}
          style={{
            width: 64,
            height: 64,
            resizeMode: "contain",
          }}
        />
        <Github />
        <Facebook />
        <LinkedIn />
      </View>
      <View
        style={{
          marginTop: 32,
          flex: 1,
          width: "100%",
        }}
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
        style={{
          paddingHorizontal: 20,
          width: "100%",
          marginTop: 16,
        }}
      >
        <Button text={"Save Social Profiles"} />
      </View>
    </ScrollView>
  );
};

export default SocialProfiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
