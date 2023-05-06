import { Text, View } from "react-native";
import React, { useRef } from "react";
import Reply from "../assets/Reply.svg";
import Comment from "../assets/Comment Icon.svg";
import Completed from "../assets/Completed Icon.svg";
import Love from "../assets/Love Icon.svg";
import Enroll from "../assets/Enroll Icon.svg";
import { useTailwind } from "tailwind-rn";

const ActivityCard = ({
  type,
  lessonTitle,
  replyComment,
  replyUser,
  created_at,
}) => {
  const tailwind = useTailwind();
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
      style={tailwind(
        "flex-row flex-1 w-full p-[20px] border-b-white-gray border-b-[1px]"
      )}
    >
      <Icon
        width={36}
        height={30}
        style={tailwind("mr-[16px]")}
      />
      <View style={tailwind("flex-1")}>
        <Text
          style={tailwind(
            "text-[16px] font-semibold leading-[19px] text-black"
          )}
        >
          {prefixTitle}{" "}
          <Text
            style={tailwind(
              "text-[16px] font-medium leading-[19px] text-primary"
            )}
          >
            {lessonTitle}
          </Text>
        </Text>
        {replyComment ? (
          <Text
            style={tailwind(
              "text-[12px] leading-[15px] font-semibold text-black-gray pt-[8px]"
            )}
          >
            {replyUser.name} : {replyComment}
          </Text>
        ) : null}

        <Text
          style={tailwind(
            "text-[12px] leading-[15px] font-medium text-black-gray pt-[8px]"
          )}
        >
          {created_at}
        </Text>
      </View>
    </View>
  );
};

export default ActivityCard;
