import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Logo from "../assets/Creative-Coder-W-01.svg";
import { Image } from "react-native";

const Certificate = ({
  name,
  email,
  repolink,
  courseTitle,
  style,
}) => {
  return (
    <View
      style={[
        {
          width: 350,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#EBEBEB",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 40,
          paddingBottom: 20,
          overflow: "hidden",
          marginLeft: 20,
        },
        style,
      ]}
    >
      <Logo
        width={140}
        height={110}
        fill='black'
      />
      <Text
        style={{
          fontSize: 29,
          fontWeight: 600,
          color: "#0092EF",
          letterSpacing: 2,
          marginTop: -10,
        }}
      >
        CERTIFICATE
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 4,
          paddingHorizontal: 40,
        }}
      >
        <View
          style={{
            flexGrow: 1,
            height: 1,
            backgroundColor: "#0092EF",
          }}
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: 600,
            paddingHorizontal: 10,
          }}
        >
          OF COMPLETION
        </Text>
        <View
          style={{
            flexGrow: 1,
            height: 1,
            backgroundColor: "#0092EF",
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 11,
          lineHeight: 15,
          fontWeight: 600,
          color: "#656565",
          paddingTop: 20,
        }}
      >
        This certificate is proudly present to
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Image
          source={require("../assets/teacher-5.png")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 6,
            marginRight: 10,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 10,
              lineHeight: 15,
              fontWeight: 600,
              color: "#656565",
            }}
          >
            {email}
          </Text>
          <Text
            style={{
              fontSize: 10,
              lineHeight: 15,
              fontWeight: 500,
              color: "#0092EF",
            }}
          >
            {repolink}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 11,
          lineHeight: 15,
          fontWeight: 400,
          color: "#656565",
          paddingTop: 20,
        }}
      >
        Has successfully completed in{" "}
      </Text>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 19,
          fontWeight: 600,
          paddingTop: 20,
        }}
      >
        {courseTitle}
      </Text>
      <View
        style={{
          height: 1,
          width: 150,
          backgroundColor: "#0092EF",
          marginTop: 40,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          lineHeight: 15,
          fontWeight: 500,
          color: "#0092EF",
          paddingTop: 13,
        }}
      >
        Founder & Instructor
      </Text>
      <Text
        style={{
          fontSize: 12,
          lineHeight: 15,
          fontWeight: 500,
          paddingTop: 5,
          paddingBottom: 30,
        }}
      >
        Hlaing Min Than
      </Text>
      <View
        style={{
          width: 200,
          height: 130,
          backgroundColor: "#003E66",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: -50,
          left: -130,
          transform: [
            {
              rotate: "45deg",
            },
          ],
        }}
      >
        <View
          style={{
            width: "95%",
            height: "93%",
            borderWidth: 5,
            borderColor: "#0092EF",
          }}
        ></View>
      </View>
      <View
        style={{
          width: 200,
          height: 150,
          backgroundColor: "#003E66",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: -90,
          right: -80,
          transform: [
            {
              rotate: "40deg",
            },
          ],
        }}
      >
        <View
          style={{
            width: "95%",
            height: "93%",
            borderWidth: 5,
            borderColor: "#0092EF",
          }}
        ></View>
      </View>
      <View
        style={{
          width: 200,
          height: 150,
          backgroundColor: "#003E66",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: -90,
          left: -80,
          transform: [
            {
              rotate: "40deg",
            },
          ],
        }}
      >
        <View
          style={{
            width: "95%",
            height: "93%",
            borderWidth: 5,
            borderColor: "#0092EF",
          }}
        ></View>
      </View>
      <View
        style={{
          width: 200,
          height: 130,
          backgroundColor: "#003E66",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: -50,
          right: -130,
          transform: [
            {
              rotate: "45deg",
            },
          ],
        }}
      >
        <View
          style={{
            width: "95%",
            height: "93%",
            borderWidth: 5,
            borderColor: "#0092EF",
          }}
        ></View>
      </View>
    </View>
  );
};

export default Certificate;

const styles = StyleSheet.create({});
