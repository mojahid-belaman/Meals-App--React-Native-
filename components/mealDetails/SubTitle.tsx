import React from "react";
import { StyleSheet, Text } from "react-native";

interface ISubTitle {
  children: React.ReactNode;
}

function SubTitle(props: ISubTitle) {
  const { children } = props;
  return <Text style={styles.subTitle}>{children}</Text>;
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#e2b497",
    borderBottomWidth: 2,
    borderColor: "#e2b497",
    padding: 6,
    marginHorizontal: 4,
    marginVertical: 5,
  },
});
