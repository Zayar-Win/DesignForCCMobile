import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "../components/Button";
import ProfileInputField from "../components/ProfileInputField";

const Subscription = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          marginTop: 32,
          flex: 1,
          width: "100%",
        }}
      >
        <ProfileInputField
          label='Email'
          value='minmin.minnaing22@gmail.com'
        />
      </View>
      <Text
        style={{
          paddingHorizontal: 71,
          textAlign: "center",
          fontSize: 14,
          lineHeight: 17,
          fontWeight: 500,
          color: "#656565",
          marginVertical: 32,
        }}
      >
        We will send to your email when we upload
        a new post or youtube video.
      </Text>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Button text='Subscribe' />
      </View>
    </ScrollView>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
