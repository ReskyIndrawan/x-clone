import { View, Text, Button } from "react-native";
import React from "react";
import { useClerk } from "@clerk/clerk-expo";

const index = () => {
  const { signOut } = useClerk();
  return (
    <View className=' flex flex-col'>
      <Text>Home Screen</Text>
      <Button title='Log Out' onPress={() => signOut}></Button>
    </View>
  );
};

export default index;
