import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Text, View } from "react-native";
import { RootStackParamList } from "../../routes";
import { useAppSelector } from "../../redux/store";

// TODO: no idea why that is giving an error
import KeepItUp from "../../assets/keep-it-up/keep-it-up.png";
import ThatIsSad from "../../assets/that-is-sad/that-is-sad.png";
import Button from "../../components/Button";

type Props = NativeStackScreenProps<RootStackParamList, "MealConfirmation">;

const texts = {
  inDiet: {
    header: "Keep it up",
    text: "You continue inside your diet. Very good!",
  },
  outDiet: {
    header: "That is sad :(",
    text: "You are out of your diet this time., but keep trying and don't give up",
  },
};

const MealConfirmation = ({ navigation, route }: Props) => {
  const mealId = route.params.id;

  const meal = useAppSelector((state) =>
    state.meals.find((meal) => meal.id === mealId)
  );

  const isInDiet = meal?.isInDiet;

  return (
    <View
      style={{
        marginTop: 160,
        paddingHorizontal: 32,
        alignItems: "center",
        flex: 1,
        gap: 40,
      }}
    >
      <View style={{ alignItems: "center", gap: 8 }}>
        <Text style={{ color: isInDiet ? "#639339" : "#BF3B44", fontSize: 24 }}>
          {isInDiet ? texts["inDiet"].header : texts["outDiet"].header}
        </Text>

        <Text style={{ fontSize: 16, color: "#1B1D1E" }}>
          {isInDiet ? texts["inDiet"].text : texts["outDiet"].text}
        </Text>
      </View>
      <Image source={isInDiet ? KeepItUp : ThatIsSad} />
      <Button onPress={() => navigation.navigate("Dashboard")}>
        <Text style={{ color: "#ffffff", fontWeight: "700" }}>
          Go to dashboard
        </Text>
      </Button>
    </View>
  );
};

export default MealConfirmation;
