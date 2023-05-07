import { Text, View } from "react-native";
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
import { useTailwind } from "tailwind-rn";
import Github from "../assets/GitHub Logo.svg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Certificate from "../assets/View Certificate Icon.svg";
import Progress from "../assets/Progress Icon.svg";
import Activities from "../assets/Activities Icon.svg";
import Lock from "../assets/Lock Icon.svg";
import Moon from "../assets/Moon Icon.svg";
import Setting from "../assets/Setting Icon.svg";
import Pencil from "../assets/Pencil.svg";
import ProfileIcon from "../assets/Profile Icon.svg";
import Invoice from "../assets/Invoice Icon.svg";
import Bell from "../assets/Bell Icon.svg";
import Button from "../components/Button";
import Logout from "../assets/Logout Icon.svg";

const Profile = ({ navigation }) => {
  const [isSlideDownOpen, setIsSlideDownOpen] =
    useState(false);
  const tailwind = useTailwind();

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
    <ScrollView
      style={tailwind("flex-1 bg-white")}
    >
      <View
        style={tailwind(
          "items-center justify-center mt-[10px]"
        )}
      >
        <View
          style={tailwind(
            "w-[136px] h-[136px] rounded-full bg-white-gray-soft items-center justify-center"
          )}
        >
          <Image
            style={[
              tailwind(
                "w-[122px] h-[122px] rounded-full"
              ),
              {
                resizeMode: "contain",
              },
            ]}
            source={require("../assets/teacher-5.png")}
          />
        </View>
        <Text
          style={tailwind(
            "text-[24px] leading-[29px] font-semibold text-black py-[8px]"
          )}
        >
          Zayarwin
        </Text>
        <Text
          style={tailwind(
            "text-[14px] leading-[17px] font-medium text-black-gray"
          )}
        >
          zayarwin7751@gmail.com
        </Text>
        <View
          style={[
            tailwind(
              "flex-row items-center justify-center mt-[16px]"
            ),
            {
              gap: 16,
            },
          ]}
        >
          <Github width={32} />
          <Facebook size={32} />
          <LinkedIn size={32} />
        </View>
      </View>
      <View
        style={[
          tailwind("flex-row flex-1 p-[20px]"),
          {
            gap: 10,
          },
        ]}
      >
        <View
          style={tailwind(
            "grow px-[24px] py-[16px] border-white-gray-soft rounded-[10px] border-[1px] items-center justify-center"
          )}
        >
          <Text
            style={tailwind(
              "text-[40px] leading-[48px] font-bold text-primary"
            )}
          >
            2
          </Text>
          <Text
            style={tailwind(
              "text-[12px] font-medium leading-[15px] text-black"
            )}
          >
            Courses
          </Text>
          <Text
            style={tailwind(
              "text-[12px] font-medium leading-[15px] text-black"
            )}
          >
            Still Learning
          </Text>
        </View>
        <View
          style={tailwind(
            "grow px-[24px] py-[16px] border-white-gray-soft rounded-[10px] border-[1px] items-center justify-center"
          )}
        >
          <Text
            style={tailwind(
              "text-[40px] leading-[48px] font-bold text-green"
            )}
          >
            3
          </Text>
          <Text
            style={tailwind(
              "text-[12px] font-medium leading-[15px] text-black"
            )}
          >
            Courses
          </Text>
          <Text
            style={tailwind(
              "text-[12px] font-medium leading-[15px] text-black"
            )}
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
            style={tailwind(
              "grow px-[24px] py-[16px] border-white-gray-soft rounded-[10px] border-[1px] items-center justify-center"
            )}
          >
            <Certificate width={32} height={48} />
            <Text
              style={tailwind(
                "text-[12px] font-medium leading-[15px] text-black"
              )}
            >
              View
            </Text>
            <Text
              style={tailwind(
                "text-[12px] font-medium leading-[15px] text-black"
              )}
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
            style={tailwind(
              "border-t-white-gray border-t-[1px] p-[20px] flex-row items-center"
            )}
          >
            <Progress width={20} />
            <Text
              style={tailwind(
                "font-medium text-[16px] leading-[19px] pl-[14px]"
              )}
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
            style={tailwind(
              "border-t-white-gray border-t-[1px] p-[20px] flex-row items-center"
            )}
          >
            <Activities width={20} />
            <Text
              style={tailwind(
                "font-medium text-[16px] leading-[19px] pl-[14px]"
              )}
            >
              My Activities
            </Text>
          </View>
        </Pressable>
        <View
          style={tailwind(
            "border-t-white-gray border-t-[1px] p-[20px] flex-row items-center justify-between"
          )}
        >
          <View
            style={tailwind(
              "flex-row justify-center"
            )}
          >
            <Moon width={20} />
            <Text
              style={tailwind(
                "font-medium text-[16px] leading-[19px] pl-[14px]"
              )}
            >
              Switch Dark Mode
            </Text>
          </View>
          <Switch />
        </View>
        <View
          style={tailwind(
            "border-t-white-gray border-t-[1px] p-[20px] flex-row items-center justify-between"
          )}
        >
          <View
            style={tailwind(
              "flex-row justify-center"
            )}
          >
            <Lock width={20} />
            <Text
              style={tailwind(
                "font-medium text-[16px] leading-[19px] pl-[14px]"
              )}
            >
              Lock My Profile
            </Text>
          </View>
          <Switch />
        </View>
        <View style={tailwind("mb-[32px]")}>
          <Pressable
            onPress={handleSlideDownOpen}
          >
            <View
              style={tailwind(
                "border-t-white-gray border-t-[1px] p-[20px] flex-row items-center justify-between"
              )}
            >
              <View
                style={tailwind(
                  "flex-row items-center"
                )}
              >
                <Setting width={20} />
                <Text
                  style={tailwind(
                    "font-medium text-[16px] leading-[19px] pl-[14px]"
                  )}
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
                style={tailwind(
                  "mx-[20px] border-[1px] border-white-gray rounded-[10px] overflow-hidden"
                )}
              >
                <Pressable
                  onPress={() =>
                    navigation.navigate(
                      "EditProfile"
                    )
                  }
                >
                  <View
                    style={tailwind(
                      "bg-white-gray-soft pl-[45px] py-[20px] flex-row items-center border-t-[1px] border-t-white-gray"
                    )}
                  >
                    <Pencil width={18} />
                    <Text
                      style={tailwind(
                        "text-[16px] leading-[19px] font-medium pl-[14px]"
                      )}
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
                    style={tailwind(
                      "bg-white-gray-soft pl-[45px] py-[20px] flex-row items-center border-t-[1px] border-t-white-gray"
                    )}
                  >
                    <ProfileIcon width={18} />
                    <Text
                      style={tailwind(
                        "text-[16px] leading-[19px] font-medium pl-[14px]"
                      )}
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
                    style={tailwind(
                      "bg-white-gray-soft pl-[45px] py-[20px] flex-row items-center border-t-[1px] border-t-white-gray"
                    )}
                  >
                    <Lock width={18} />
                    <Text
                      style={tailwind(
                        "text-[16px] leading-[19px] font-medium pl-[14px]"
                      )}
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
                    style={tailwind(
                      "bg-white-gray-soft pl-[45px] py-[20px] flex-row items-center border-t-[1px] border-t-white-gray"
                    )}
                  >
                    <Invoice width={18} />
                    <Text
                      style={tailwind(
                        "text-[16px] leading-[19px] font-medium pl-[14px]"
                      )}
                    >
                      Invoices
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() =>
                    navigation.navigate(
                      "Subscription"
                    )
                  }
                >
                  <View
                    style={tailwind(
                      "bg-white-gray-soft pl-[45px] py-[20px] flex-row items-center border-t-[1px] border-t-white-gray"
                    )}
                  >
                    <Bell width={18} />
                    <Text
                      style={tailwind(
                        "text-[16px] leading-[19px] font-medium pl-[14px]"
                      )}
                    >
                      Manage Email Subscription
                    </Text>
                  </View>
                </Pressable>
              </Animated.View>
            </View>
          ) : null}
        </View>

        <View
          style={tailwind("px-[20px] mb-[38px]")}
        >
          <Button
            text={"Logout"}
            buttonStyle={tailwind(
              "bg-white-gray-soft"
            )}
            textStyle={tailwind(
              "text-black text-[16px]"
            )}
            icon={
              <Logout
                width={18}
                text={"Logout"}
              />
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
