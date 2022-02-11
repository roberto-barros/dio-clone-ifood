import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "./style.js";

export default function Perfil({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <Text>Perfil</Text>
      </SafeAreaView>
    </>
  );
}
