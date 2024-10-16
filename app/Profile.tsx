import { Text, View } from "react-native";
import Profile from "./src/components/Profile/index";
import JoinText from "./src/components/JoinText/index";
import SignOutButton from "./src/components/SignOutButton/index";
import OptionList from "./src/components/OptionList/index";

export default function Index() {
  return (
    <>
    <View style={{flexDirection: "row", padding: 30}}>
      <View style={{flex: 1}}>
        <Profile />
      </View>
      <View style={{flex: 1}}>
        <JoinText />
      </View>
    </View>
    <View style={{padding: 20}}>
      <OptionList />
    </View>
    <View style={{padding: 20, alignItems: "flex-start"}}>
      <SignOutButton />
    </View>
    </>
  );
}
