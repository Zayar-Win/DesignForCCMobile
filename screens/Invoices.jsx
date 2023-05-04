import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import InvoiceCard from "../components/InvoiceCard";

const invoices = [
  {
    courseTitle:
      "Website Deployment From Scratch",
    access_date: "23-3-2023",
    fee: "30,000",
  },
  {
    courseTitle: "React + Firebase combo package",
    access_date: "24-3-2023",
    fee: "120,000",
    leftAmount: "60,000",
  },
  {
    courseTitle: "VueJS + Firebase combo package",
    access_date: "23-3-2023",
    fee: "100,000",
  },
];

const Invoices = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          marginTop: 16,
          paddingHorizontal: 20,
        }}
      >
        {invoices?.map((invoice, i) => (
          <InvoiceCard
            key={i}
            courseTitle={invoice.courseTitle}
            access_date={invoice.access_date}
            fee={invoice.fee}
            leftAmount={
              invoice.leftAmount || null
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Invoices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
