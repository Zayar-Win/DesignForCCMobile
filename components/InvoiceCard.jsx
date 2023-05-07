import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import DownloadIcon from "../assets/Download Icon.svg";
import { useTailwind } from "tailwind-rn";
import Button from "./Button";

const InvoiceCard = ({
  courseTitle,
  access_date,
  fee,
  leftAmount,
}) => {
  const tailwind = useTailwind();

  return (
    <View
      style={tailwind(
        "w-full rounded-[10px] bg-white-gray-soft overflow-hidden mb-[16px]"
      )}
    >
      <View
        style={tailwind(
          "flex-row items-center py-[16px] px-[20px] border-b-[1px] border-b-white-gray"
        )}
      >
        <Text
          style={tailwind(
            "text-[14px] font-semibold leading-[17px] text-primary pr-[8px]"
          )}
        >
          Course :{" "}
        </Text>
        <Text
          style={tailwind(
            "text-[14px] font-semibold leading-[17px] text-black"
          )}
        >
          {courseTitle}
        </Text>
      </View>
      <View
        style={tailwind(
          "flex-row items-center py-[16px] px-[20px] border-b-[1px] border-b-white-gray"
        )}
      >
        <Text
          style={tailwind(
            "text-[14px] font-semibold leading-[17px] text-primary pr-[8px]"
          )}
        >
          Access Date :{" "}
        </Text>
        <Text
          style={tailwind(
            "text-[14px] font-semibold leading-[17px] text-black"
          )}
        >
          {access_date}
        </Text>
      </View>
      <View
        style={tailwind(
          "flex-row items-center py-[16px] px-[20px] border-b-[1px] border-b-white-gray"
        )}
      >
        <Text
          style={tailwind(
            "text-[14px] font-semibold leading-[17px] text-primary pr-[8px]"
          )}
        >
          Fee :{" "}
        </Text>
        <View
          style={tailwind(
            "flex-1 flex-row items-center justify-between"
          )}
        >
          <Text
            style={tailwind(
              "text-[14px] font-semibold leading-[17px] text-black"
            )}
          >
            {fee} MMK
          </Text>
          <View
            style={tailwind(
              `py-[4px] px-[8px] ${
                leftAmount
                  ? "bg-yellow"
                  : "bg-primary"
              } rounded-[8px]`
            )}
          >
            <Text
              style={tailwind(
                "text-[14px] leading-[17px] text-[14px] text-white"
              )}
            >
              {leftAmount ? "Left" : "Paid"}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={tailwind(
          "flex-row items-center py-[16px] px-[20px] border-b-[1px] border-b-white-gray"
        )}
      >
        <Text
          style={tailwind(
            "text-[14px] font-semibold leading-[17px] text-primary pr-[8px]"
          )}
        >
          Left Amount :{" "}
        </Text>
        <Text
          style={tailwind(
            `text-[14px] font-semibold leading-[17px] ${
              leftAmount
                ? "text-red"
                : "text-[#A8A8A8]"
            }`
          )}
        >
          {leftAmount ? leftAmount : "0"} MMK
        </Text>
      </View>
      <Button
        text={"Download"}
        buttonStyle={tailwind(
          "rounded-tl-none rounded-tr-none"
        )}
        icon={
          <DownloadIcon width={16} height={16} />
        }
      />
    </View>
  );
};

export default InvoiceCard;

const styles = StyleSheet.create({});
