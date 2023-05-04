import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import ActivityCard from "../components/ActivityCard";
import CourseHorizontalCard from "../components/CourseHorizontalCard";

const activities = [
  {
    type: "reply",
    lessonTitle:
      "php lesson-26 composer autoloading",
    replyComment:
      "Lorem ipsum dolor Lorem ipsum dolor...",
    replyUser: { name: "Hlaing Min Than" },
    created_at: "22 min ago",
  },
  {
    type: "complete",
    lessonTitle:
      "php lesson-26 composer autoloading",
    created_at: "32 min ago",
  },
  {
    type: "comment",
    lessonTitle:
      "php lesson-26 composer autoloading",
    replyComment:
      "Lorem ipsum dolor Lorem ipsum dolor...",
    replyUser: { name: "Zayarwin" },
    created_at: "58 min ago",
  },
  {
    type: "complete",
    lessonTitle:
      "php lesson-26 composer autoloading",
    created_at: "2 hours ago",
  },
  {
    type: "comment",
    lessonTitle:
      "php lesson-26 composer autoloading",
    replyComment:
      "Lorem ipsum dolor Lorem ipsum dolor...",
    replyUser: { name: "Zayarwin" },
    created_at: "58 min ago",
  },
  {
    type: "react",
    lessonTitle:
      "php lesson-26 composer autoloading",
    created_at: "58 min ago",
  },
  {
    type: "enroll",
    lessonTitle:
      "VueJs and Firebase combo Package",
    created_at: "3 hours ago",
  },
];

const MyActivities = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          marginTop: 16,
        }}
      >
        {activities?.map((activity, i) => (
          <ActivityCard
            key={i}
            type={activity.type}
            lessonTitle={activity.lessonTitle}
            replyComment={
              activity.replyComment || null
            }
            replyUser={activity.replyUser || null}
            created_at={activity.created_at}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MyActivities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
