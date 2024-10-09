import {Text, View} from "react-native";
import ProfilePicture from "../ProfilePicture/index";

export default function Profile() {
  return (
    <View>
      <View style={{paddingBottom: 30}}>
        <ProfilePicture />
      </View>
      
      <Text style={{fontSize: 30, fontWeight: "bold"}}>
          Linus
      </Text>
      <Text style={{fontSize: 30, color: "#808080"}}>
          Torvalds
      </Text>
    </View>
  );
}