import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "../components/Button";

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
        <View
          style={{
            height: 56,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#EBEBEB",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              lineHeight: 17,
              fontWeight: 600,
              color: "#0092EF",
              paddingRight: 16,
            }}
          >
            Email :{" "}
          </Text>
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <TextInput
              value='minmin.minnaing22@gmail.com'
              style={{
                fontSize: 16,
                color: "#232425",
                width: "100%",
                paddingVertical: 5,
              }}
            />
          </View>
        </View>
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
