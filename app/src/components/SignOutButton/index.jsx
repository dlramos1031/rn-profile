import { Button, Text } from "react-native-paper";

export default function SignOutButton() {
  return (
    <Button 
        style={{paddingHorizontal: 8, paddingVertical: 4, backgroundColor: "#d3d3d3"}} 
        mode="contained" 
        onPress={() => console.log('Sign Out Button Pressed')}>
      <Text style={{color: "black", fontSize: 20}}>Sign Out</Text>
    </Button>
  );
}