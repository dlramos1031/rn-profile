import { Button } from "react-native-paper";

export default function SignOutButton() {
  return (
    <Button style={{paddingHorizontal: 10}} icon="logout" mode="contained" compact onPress={() => console.log('Sign Out Button Pressed')}>
      Sign Out
    </Button>
  );
}