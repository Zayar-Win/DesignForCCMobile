import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5Brands from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Switch from "../components/Switch";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Animated } from "react-native";
import SlideDown from "../components/SlideDown";
import { Platform } from "react-native";
import { UIManager } from "react-native";
import { LayoutAnimation } from "react-native";

const Profile = ({ navigation }) => {
  const [isSlideDownOpen, setIsSlideDownOpen] =
    useState(false);

  const slideHeight = useRef(null);
  const slideAnimation = useRef(
    new Animated.Value(0)
  ).current;

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(
      true
    );
  }

  const handleSlideDownOpen = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.Presets.easeInEaseOut
    );
    setIsSlideDownOpen((prev) => !prev);
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: 136,
            height: 136,
            borderRadius: 86,
            backgroundColor: "#F5F5F5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: 122,
              height: 122,
              borderRadius: 61,
              resizeMode: "contain",
            }}
            source={require("../assets/teacher-5.png")}
          />
        </View>
        <Text
          style={{
            fontSize: 24,
            lineHeight: 29,
            fontWeight: 600,
            color: "#000000",
            paddingVertical: 8,
          }}
        >
          Zayarwin
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 17,
            fontWeight: 500,
            color: "#656565",
          }}
        >
          zayarwin7751@gmail.com
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            gap: 16,
            marginTop: 16,
          }}
        >
          <AntDesign name='github' size={32} />
          <FontAwesome5Brands
            name='facebook'
            size={32}
            color='#1778F2'
          />
          <AntDesign
            name='linkedin-square'
            size={32}
            color='#0077B5'
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          flex: 1,
          padding: 20,
        }}
      >
        <View
          style={{
            flexGrow: 1,
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderColor: "#EBEBEB",
            borderRadius: 10,
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              lineHeight: 48,
              fontWeight: 700,
              color: "#0092EF",
            }}
          >
            2
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 500,
              lineHeight: 15,
              color: "#232425",
            }}
          >
            Courses
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 500,
              lineHeight: 15,
              color: "#232425",
            }}
          >
            Still Learning
          </Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderColor: "#EBEBEB",
            borderRadius: 10,
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              lineHeight: 48,
              fontWeight: 700,
              color: "#00C81A",
            }}
          >
            3
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 500,
              lineHeight: 15,
              color: "#232425",
            }}
          >
            Courses
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 500,
              lineHeight: 15,
              color: "#232425",
            }}
          >
            Completed
          </Text>
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate("MyCertificates")
          }
        >
          <View
            style={{
              flexGrow: 1,
              paddingHorizontal: 24,
              paddingVertical: 16,
              borderColor: "#EBEBEB",
              borderRadius: 10,
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name='certificate'
              size={32}
              color='#0092EF'
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                lineHeight: 15,
                color: "#232425",
              }}
            >
              View
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                lineHeight: 15,
                color: "#232425",
              }}
            >
              Certificates
            </Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate("MyCourses")
          }
        >
          <View
            style={{
              borderTopColor: "#EBEBEB",
              borderTopWidth: 1,
              padding: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <SimpleLineIcons
              name='chart'
              size={20}
            />
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 19,
                paddingLeft: 14,
              }}
            >
              My Learning Progress
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("MyActivities")
          }
        >
          <View
            style={{
              borderTopColor: "#EBEBEB",
              borderTopWidth: 1,
              padding: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign name='bars' size={20} />
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 19,
                paddingLeft: 14,
              }}
            >
              My Activities
            </Text>
          </View>
        </Pressable>
        <View
          style={{
            borderTopColor: "#EBEBEB",
            borderTopWidth: 1,
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <FontAwesome
              name='moon-o'
              size={20}
            />
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 19,
                paddingLeft: 14,
              }}
            >
              Switch Dark Mode
            </Text>
          </View>
          <Switch />
        </View>
        <View
          style={{
            borderTopColor: "#EBEBEB",
            borderTopWidth: 1,
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name='lock-outline'
              size={20}
            />
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 19,
                paddingLeft: 14,
              }}
            >
              Lock My Profile
            </Text>
          </View>
          <Switch />
        </View>
        <View
          style={{
            marginBottom: 32,
          }}
        >
          <Pressable
            onPress={handleSlideDownOpen}
          >
            <View
              style={{
                borderTopColor: "#EBEBEB",
                borderTopWidth: 1,
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  name='setting'
                  size={20}
                />
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: 19,
                    paddingLeft: 14,
                  }}
                >
                  Account Setting
                </Text>
              </View>
              <Feather
                name={
                  isSlideDownOpen
                    ? "chevron-up"
                    : "chevron-down"
                }
                size={18}
                color='#BCBCBC'
              />
            </View>
          </Pressable>
          {isSlideDownOpen ? (
            <View>
              <Animated.View
                style={{
                  marginHorizontal: 20,
                  borderWidth: isSlideDownOpen
                    ? 1
                    : 0,
                  borderColor: "#EBEBEB",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Pressable
                  onPress={() =>
                    navigation.navigate(
                      "EditProfile"
                    )
                  }
                >
                  <View
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingLeft: 45,
                      paddingVertical: 20,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name='pencil-outline'
                      size={18}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 19,
                        fontWeight: 500,
                        paddingLeft: 14,
                      }}
                    >
                      Edit Profile
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() =>
                    navigation.navigate(
                      "SocialProfiles"
                    )
                  }
                >
                  <View
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingLeft: 45,
                      paddingVertical: 20,
                      flexDirection: "row",
                      alignItems: "center",
                      borderTopColor: "#EBEBEB",
                      borderTopWidth: 1,
                    }}
                  >
                    <FontAwesome
                      name='user-circle-o'
                      size={18}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 19,
                        fontWeight: 500,
                        paddingLeft: 14,
                      }}
                    >
                      Social Profile
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() =>
                    navigation.navigate(
                      "ChangePassword"
                    )
                  }
                >
                  <View
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingLeft: 45,
                      paddingVertical: 20,
                      flexDirection: "row",
                      alignItems: "center",
                      borderTopColor: "#EBEBEB",
                      borderTopWidth: 1,
                    }}
                  >
                    <MaterialCommunityIcons
                      name='lock-outline'
                      size={18}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 19,
                        fontWeight: 500,
                        paddingLeft: 14,
                      }}
                    >
                      Password
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() =>
                    navigation.navigate(
                      "Invoices"
                    )
                  }
                >
                  <View
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingLeft: 45,
                      paddingVertical: 20,
                      flexDirection: "row",
                      alignItems: "center",
                      borderTopColor: "#EBEBEB",
                      borderTopWidth: 1,
                    }}
                  >
                    <Ionicons
                      name='newspaper-outline'
                      size={18}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 19,
                        fontWeight: 500,
                        paddingLeft: 14,
                      }}
                    >
                      Invoices
                    </Text>
                  </View>
                </Pressable>
                <View
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingLeft: 45,
                    paddingVertical: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    borderTopColor: "#EBEBEB",
                    borderTopWidth: 1,
                  }}
                >
                  <MaterialCommunityIcons
                    name='bell-outline'
                    size={18}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 19,
                      fontWeight: 500,
                      paddingLeft: 14,
                    }}
                  >
                    Manage Email Subscription
                  </Text>
                </View>
              </Animated.View>
            </View>
          ) : null}
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: 38,
          }}
        >
          <Pressable>
            <View
              style={{
                backgroundColor: "#F5F5F5",
                paddingVertical: 20,
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 11,
              }}
            >
              <MaterialIcons
                name='logout'
                size={18}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: 19,
                }}
              >
                Logout
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
