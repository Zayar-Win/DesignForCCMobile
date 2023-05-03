import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Reply from "../assets/Reply.svg";

const ActivityCard = () => {
  return (
    <View>
      <Reply width={36} height={30} />
      <Text>ActivityCard</Text>
    </View>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({});
