import { Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import CertificateIcon from "../assets/Certificate.svg";
import { useTailwind } from "tailwind-rn";

const CourseProgressCard = ({
  title,
  chapterCount,
  lessonCount,
  image,
  percentage,
}) => {
  const tailwind = useTailwind();
  return (
    <View>
      <View
        style={tailwind("mx-[20px] mb-[22px]")}
      >
        <View
          style={tailwind(
            "flex-row p-[20px] pb-[50px]"
          )}
        >
          <View style={tailwind("flex-[0.6]")}>
            <Text
              style={tailwind(
                "text-[22px] leading-[27px] font-semibold pb-[9px]"
              )}
            >
              {title}
            </Text>
            <Text
              style={tailwind(
                "text-[14px] leading-[17px] font-medium text-black-gray"
              )}
            >
              Completed Chapters : {chapterCount}
            </Text>
            <Text
              style={tailwind(
                "text-[14px] leading-[17px] font-medium text-black-gray pt-[10px]"
              )}
            >
              Completed Lessons : {lessonCount}
            </Text>
          </View>
          <View style={tailwind("flex-[0.4]")}>
            <Image
              source={image}
              style={[
                tailwind("w-full h-[150px]"),
                {
                  resizeMode: "contain",
                },
              ]}
            />
            {percentage === 100 ? (
              <View
                style={tailwind(
                  "w-[40px] h-[40px] rounded-[4px] bg-green items-center justify-center absolute -right-[10px]"
                )}
              >
                <CertificateIcon
                  width={23}
                  height={23}
                />
              </View>
            ) : null}
          </View>
        </View>
        <View
          style={tailwind(
            `w-full ${
              percentage < 60
                ? "bg-blueTransparent"
                : percentage !== 100
                ? "bg-yellowTransparent"
                : "bg-greenTransparent"
            } absolute bottom-0 rounded-[20px] px-[20px] py-[16px]`
          )}
        >
          <Text
            style={tailwind(
              "text-[12px] leading-[15px] font-medium text-black pb-[8px]"
            )}
          >
            Progress
          </Text>
          <Text
            style={tailwind(
              `text-[20px] leading-[24px] font-bold ${
                percentage < 60
                  ? "text-primary"
                  : percentage !== 100
                  ? "text-yellow"
                  : "text-green"
              }`
            )}
          >
            {percentage}% completed
          </Text>
          <View
            style={tailwind(
              "h-[6px] w-full bg-white rounded-[10px] mt-[16px]"
            )}
          >
            <View
              style={[
                tailwind(
                  `absolute left-0 ${
                    percentage < 60
                      ? "bg-primary"
                      : percentage !== 100
                      ? "bg-yellow"
                      : "bg-green"
                  } h-full rounded-[40px]`
                ),
                { width: `${percentage}%` },
              ]}
            />
          </View>
        </View>
      </View>
      <View
        style={tailwind(
          "border-b-white-gray border-b-[1px]"
        )}
      />
    </View>
  );
};

export default CourseProgressCard;
