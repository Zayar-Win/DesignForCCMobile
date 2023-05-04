import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";
import Reply from "../assets/Reply.svg";
import Comment from "../assets/Comment Icon.svg";
import Completed from "../assets/Completed Icon.svg";
import Love from "../assets/Love Icon.svg";
import Enroll from "../assets/Enroll Icon.svg";

const ActivityCard = ({
  type,
  lessonTitle,
  replyComment,
  replyUser,
  created_at,
}) => {
  let Icon = null;
  let prefixTitle = "";
  if (type === "reply") {
    Icon = Reply;
    prefixTitle = "Someone Replied You at";
  } else if (type === "complete") {
    Icon = Completed;
    prefixTitle = "You Completed Lesson";
  } else if (type === "comment") {
    Icon = Comment;
    prefixTitle = "You commented at";
  } else if (type === "react") {
    Icon = Love;
    prefixTitle = "You React a Comment at";
  } else if (type === "enroll") {
    Icon = Enroll;
    prefixTitle = "You enroll on a Course";
  }

  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        borderBottomColor: "#EBEBEB",
        borderBottomWidth: 1,
      }}
    >
      <Icon
        width={36}
        height={30}
        style={{
          marginRight: 16,
        }}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 19,
            color: "#232425",
          }}
        >
          {prefixTitle}{" "}
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 19,
              color: "#0092EF",
            }}
          >
            {lessonTitle}
          </Text>
        </Text>
        {replyComment ? (
          <Text
            style={{
              fontSize: 12,
              lineHeight: 15,
              fontWeight: 600,
              color: "#656565",
              paddingTop: 8,
            }}
          >
            {replyUser.name} : {replyComment}
          </Text>
        ) : null}

        <Text
          style={{
            fontSize: 12,
            lineHeight: 15,
            fontWeight: 500,
            color: "#656565",
            paddingTop: 8,
          }}
        >
          {created_at}
        </Text>
      </View>
    </View>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({});
