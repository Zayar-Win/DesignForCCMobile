import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Logo from "../assets/Creative-Coder-W-01.svg";
import Svg from "react-native-svg";
import { TextInput } from "react-native-gesture-handler";
import { Animated } from "react-native";
import { Easing } from "react-native";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Dimensions } from "react-native";

const { width, height } =
  Dimensions.get("screen");

const Signup = () => {
  const translateAnimation = useRef(
    new Animated.Value(0)
  ).current;
  const scaleAnimation = useRef(
    new Animated.Value(0)
  ).current;
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    Animated.timing(translateAnimation, {
      toValue: 1,
      duration: 900,
      easing: Easing.bezier(0.4, 0.4, 0.4, 0.1),
      useNativeDriver: false,
    }).start();
    Animated.timing(scaleAnimation, {
      toValue: 1,
      duration: 1200,
      easing: Easing.bezier(0.4, 0.4, 0.4, 0.1),
      useNativeDriver: false,
    }).start();
  }, []);

  const translateY = useMemo(() => {
    return translateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [height + 200, 0],
    });
  }, [translateAnimation]);
  return (
    <Animated.View style={[styles.container]}>
      <Animated.View
        style={[
          { width: 250, height: 160 },
          {
            transform: [
              {
                translateY,
              },
              {
                scale: scaleAnimation.interpolate(
                  {
                    inputRange: [0, 1],
                    outputRange: [0.1, 1],
                  }
                ),
              },
            ],
          },
        ]}
      >
        <Logo
          width='100%'
          height='100%'
          fill='black'
        />
      </Animated.View>
      <Animated.Text
        style={[
          styles.text,
          {
            transform: [
              {
                translateY,
              },
            ],
          },
        ]}
      >
        Ready To Learn 🚀
      </Animated.Text>
      <TextField
        label='Username'
        value={userName}
        onChangeText={(text) => setUserName(text)}
        style={{
          transform: [
            {
              translateY,
            },
          ],
        }}
      />
      <TextField
        label='Email'
        style={{
          marginTop: 20,
          transform: [
            {
              translateY,
            },
          ],
        }}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextField
        label='Password'
        style={{
          marginTop: 20,
          transform: [
            {
              translateY,
            },
          ],
        }}
        isPassword
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button
        text='Register Now'
        style={{
          marginTop: 20,
          transform: [
            {
              translateY,
            },
          ],
        }}
      />
      <Animated.View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          transform: [
            {
              translateY,
            },
          ],
        }}
      >
        <View style={styles.bar} />
        <Text style={{ paddingHorizontal: 10 }}>
          Or use social sign in
        </Text>
        <View style={styles.bar} />
      </Animated.View>
      <Animated.View
        style={{
          marginTop: 22,
          flexDirection: "row",
          gap: 16,
          transform: [
            {
              translateY,
            },
          ],
        }}
      >
        <Pressable>
          <View
            style={{
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#EBEBEB",
              borderRadius: 10,
            }}
          >
            <Icon name='google' size={35} />
          </View>
        </Pressable>
        <Pressable>
          <View
            style={{
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#EBEBEB",
              borderRadius: 10,
            }}
          >
            <Icon name='apple1' size={35} />
          </View>
        </Pressable>
        <Pressable>
          <View
            style={{
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#EBEBEB",
              borderRadius: 10,
            }}
          >
            <Icon name='github' size={35} />
          </View>
        </Pressable>
      </Animated.View>
      <Animated.View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 38,
          transform: [
            {
              translateY,
            },
          ],
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            paddingRight: 10,
          }}
        >
          Already have an account?
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#0092EF",
          }}
        >
          Sign In Here
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: 600,
    marginTop: -28,
    marginBottom: 28,
  },
  bar: {
    flex: 1,
    height: 1,
    backgroundColor: "#656565",
  },
});
