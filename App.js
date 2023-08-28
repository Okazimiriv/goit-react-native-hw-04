import "react-native-gesture-handler";
import { StyleSheet, Button, View, ImageBackground } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Registration from "./screens/RegistrationScreen.jsx";
import Login from "./screens/LoginScreen.jsx";
import Post from "./screens/PostsScreen.jsx";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Registration"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Registration" component={Registration} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Post" component={Post} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
