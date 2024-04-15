import { View, FlatList, StyleSheet } from "react-native";

import Meal from "../../modals/meal";
import MealItem from "./MealItem";

interface IMealList {
  items: Meal[];
}

function renderMeals(item: Meal) {
  const mealItemProps = {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    duration: item.duration,
    complexity: item.complexity,
    affordability: item.affordability,
  };
  return <MealItem {...mealItemProps} />;
}

function MealList(props: IMealList) {
  const { items } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => renderMeals(item)}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
