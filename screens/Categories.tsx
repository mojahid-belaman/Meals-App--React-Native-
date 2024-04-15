import { FlatList } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";
import { RootStackParamList } from "../types/ParamScreens";

interface IrenderCategoryItem {
  id: string;
  title: string;
  color: string;
}

function CategoriesScreen() {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "MealCategories">>();

  function renderCategoryItem(item: IrenderCategoryItem) {
    function pressHandler() {
      navigation.navigate("MealsView", {
        categoryId: item.id,
      });
    }
    return (
      <CategoryGrid
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => renderCategoryItem(item)}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
