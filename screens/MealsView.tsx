import { useLayoutEffect } from "react";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { RootStackParamList } from "../types/ParamScreens";
import MealList from "../components/mealList/MealList";

function MealsViewScreen() {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "MealsView">>();
  const route = useRoute<RouteProp<RootStackParamList, "MealsView">>();

  const catId = route.params?.categoryId;
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealList items={displayMeals} />;
}

export default MealsViewScreen;
