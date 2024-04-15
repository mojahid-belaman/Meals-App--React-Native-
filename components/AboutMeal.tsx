import { StyleSheet, Text, View } from "react-native";

interface IAboutMeal {
  duration: number;
  complexity: string;
  affordability: string;
  style?: object;
}

function AboutMeal(props: IAboutMeal) {
  const { duration, complexity, affordability, style } = props;
  return (
    <View style={styles.details}>
      <Text style={[styles.detail, style]}>{duration}m</Text>
      <Text style={[styles.detail, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detail, style]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default AboutMeal;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginBottom: 10,
  },
  detail: {
    fontSize: 12,
  },
});
