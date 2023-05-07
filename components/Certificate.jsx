import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Logo from "../assets/Creative-Coder-W-01.svg";
import { Image } from "react-native";
import { useTailwind } from "tailwind-rn";

const Certificate = ({
  name,
  email,
  repolink,
  courseTitle,
  style,
}) => {
  const tailwind = useTailwind();

  return (
    <View
      style={[
        tailwind(
          "w-[350px] rounded-[5px] border-[1px] border-white-gray items-center justify-center px-[40px] pb-[20px] overflow-hidden ml-[20px]"
        ),
        style,
      ]}
    >
      <Logo
        width={140}
        height={110}
        fill='black'
      />
      <Text
        style={[
          tailwind(
            "text-[29px] font-semibold text-primary  -mt-[10px]"
          ),
          { letterSpacing: 2 },
        ]}
      >
        CERTIFICATE
      </Text>
      <View
        style={tailwind(
          "flex-row items-center justify-center mt-[4px] px-[40px]"
        )}
      >
        <View
          style={tailwind(
            "grow h-[1px] bg-primary"
          )}
        />
        <Text
          style={tailwind(
            "text-[12px] font-semibold px-[10px]"
          )}
        >
          OF COMPLETION
        </Text>
        <View
          style={tailwind(
            "grow h-[1px] bg-primary"
          )}
        />
      </View>
      <Text
        style={tailwind(
          "text-[11px] leading-[15px] font-semibold text-black-gray pt-[20px]"
        )}
      >
        This certificate is proudly present to
      </Text>
      <View
        style={tailwind(
          "flex-row items-center justify-center mt-[20px]"
        )}
      >
        <Image
          source={require("../assets/teacher-5.png")}
          style={tailwind(
            "w-[50px] h-[50px] rounded-[6px] mr-[10px]"
          )}
        />
        <View>
          <Text
            style={tailwind(
              "text-[16px] font-semibold"
            )}
          >
            {name}
          </Text>
          <Text
            style={tailwind(
              "text-[10px] leading-[15px] font-semibold text-black-gray"
            )}
          >
            {email}
          </Text>
          <Text
            style={tailwind(
              "text-[10px] leading-[15px] font-medium text-primary"
            )}
          >
            {repolink}
          </Text>
        </View>
      </View>
      <Text
        style={tailwind(
          "text-[11px] leading-[15px] font-normal text-black-gray pt-[20px]"
        )}
      >
        Has successfully completed in{" "}
      </Text>
      <Text
        style={tailwind(
          "text-[16px] leading-[19px] font-semibold pt-[20px]"
        )}
      >
        {courseTitle}
      </Text>
      <View
        style={tailwind(
          "h-[1px] w-[150px] bg-primary mt-[40px]"
        )}
      />
      <Text
        style={tailwind(
          "text-[12px] leading-[15px] font-medium text-primary pt-[13px]"
        )}
      >
        Founder & Instructor
      </Text>
      <Text
        style={tailwind(
          "text-[12px] leading-[15px] font-medium pt-[5px] pb-[30px]"
        )}
      >
        Hlaing Min Than
      </Text>
      <View
        style={[
          tailwind(
            "w-[200px] h-[130px] bg-secondary items-center justify-center absolute -top-[50px] -left-[130px] "
          ),
          {
            transform: [
              {
                rotate: "45deg",
              },
            ],
          },
        ]}
      >
        <View
          style={tailwind(
            "w-[95%] h-[93%] border-[5px] border-primary"
          )}
        ></View>
      </View>
      <View
        style={[
          tailwind(
            "w-[200px] h-[150px] bg-secondary items-center justify-center absolute -top-[90px] -right-[80px] "
          ),
          {
            transform: [
              {
                rotate: "40deg",
              },
            ],
          },
        ]}
      >
        <View
          style={tailwind(
            "w-[95%] h-[93%] border-[5px] border-primary"
          )}
        ></View>
      </View>
      <View
        style={[
          tailwind(
            "w-[200px] h-[150px] bg-secondary items-center justify-center absolute -bottom-[90px] -left-[80px] "
          ),
          {
            transform: [
              {
                rotate: "40deg",
              },
            ],
          },
        ]}
      >
        <View
          style={tailwind(
            "w-[95%] h-[93%] border-[5px] border-primary"
          )}
        ></View>
      </View>
      <View
        style={[
          tailwind(
            "w-[200px] h-[130px] bg-secondary items-center justify-center absolute -bottom-[50px] -right-[130px] "
          ),
          {
            transform: [
              {
                rotate: "45deg",
              },
            ],
          },
        ]}
      >
        <View
          style={tailwind(
            "w-[95%] h-[93%] border-[5px] border-primary"
          )}
        ></View>
      </View>
    </View>
  );
};

export default Certificate;

const styles = StyleSheet.create({});
