import { Link } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";

export default function Account() {
  return (
    <View>
      <Text>this is the account page</Text>
      <Link href="/accountinfo" asChild>
        <Pressable>
          <Text style={{ color: 'blue' }}>Go to Account Info</Text>
        </Pressable>
      </Link>
    </View>
  );
}
