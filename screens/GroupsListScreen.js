import { useContext } from "react";
import { View } from "react-native";
import Card from "../components/UI/Card";
import TextUI from "../components/UI/TextUI";
import { authCtx } from "../store/authCtx";

const GroupsListScreen = () => {
  const { signedUser } = useContext(authCtx);

  return (
    <View style={{ flex: 1 }}>
      <Card>
        <TextUI>{`Zalogowany jako ${signedUser.id} - ${signedUser.login}`}</TextUI>
      </Card>
    </View>
  );
};

export default GroupsListScreen;
