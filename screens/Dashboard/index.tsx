import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { RootStackParamList } from "../../routes";
import { useAppSelector } from "../../redux/store";

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

const Dashboard = ({ navigation }: Props) => {
  const meals = useAppSelector((state) => state.meals);

  console.log(meals);

  return (
    <View>
      <Button
        onPress={() => navigation.navigate("AddNewMeal")}
        title="New meal"
      />
    </View>
  );
};

export default Dashboard;
