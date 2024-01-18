import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParamList } from "../../routes";
import { useAppSelector } from "../../redux/store";

type Props = NativeStackScreenProps<RootStackParamList, "MealConfirmation">;

const MealConfirmation = ({ route }: Props) => {
  const mealId = route.params.id;

  const meal = useAppSelector((state) =>
    state.meals.find((meal) => meal.id === mealId)
  );

  const isInDiet = meal?.isInDiet;

  return (
    <View>
      <Text>{isInDiet ? "Keep it up" : "That is sad :("}</Text>
    </View>
  );
};

export default MealConfirmation;
