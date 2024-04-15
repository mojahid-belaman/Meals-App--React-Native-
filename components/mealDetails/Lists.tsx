import { StyleSheet, Text, View } from "react-native";

interface ILists {
  data: string[] | undefined;
}

function Lists(props: ILists) {
  const { data } = props;
  return data?.map((dataPoint) => (
    <View key={dataPoint} style={styles.list}>
      <Text style={styles.item}>{dataPoint}</Text>
    </View>
  ));
}

export default Lists;

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#e2b497",
    padding: 6,
    marginVertical: 6,
    borderRadius: 10,
  },
  item: {
    textAlign: "center",
    color: "#351401",
    fontWeight: "bold",
    fontSize: 16,
  },
});
