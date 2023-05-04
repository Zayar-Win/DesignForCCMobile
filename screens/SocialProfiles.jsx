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
        <View
          style={{
            padding: 20,
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
            Github URL :{" "}
          </Text>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                fontWeight: 500,
                color: "#232425",
              }}
            >
              github.com/MinNaing7
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#EBEBEB",
            flexDirection: "row",
            flex: 1,
            width: "100%",
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
            Fackbook URL :{" "}
          </Text>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                fontWeight: 500,
                color: "#232425",
              }}
            >
              facebook.com/Min.Naing.7
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#EBEBEB",
            flexDirection: "row",
            flex: 1,
            width: "100%",
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
            LinkedIn URL :{" "}
          </Text>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                fontWeight: 500,
                color: "#232425",
              }}
            >
              linkedin.com/in/min-naing-7
            </Text>
          </View>
        </View>
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
