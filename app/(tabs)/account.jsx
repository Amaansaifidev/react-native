import { Link } from "expo-router";
import React from "react";
import {  View, Text, Button } from "react-native";

export default function Account() {

    return (
        <View>
            <Text>
            this is the account page
            </Text>
            <Link href="/accountinfo"> 
            <Button title="Go to Account Info" />
            </Link>
               
        </View>
    );
}