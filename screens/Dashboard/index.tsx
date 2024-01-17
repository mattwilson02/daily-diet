import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { RootStackParamList } from "../../routes";

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

const Dashboard = ({ navigation }: Props) => {
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
