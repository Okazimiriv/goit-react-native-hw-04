import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Comments = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={require("../assets/images/ava-natali.png")} />
        <View style={styles.wrapperUserInfo}>
          <Text style={styles.name}>Natali Romanchuk</Text>
          <Text style={styles.email}>email@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    marginTop: 44,
    paddingBottom: 11,
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  title: {
    backgroundColor: "#FFFFFF",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    paddingBottom: 5,
    marginLeft: 80,
  },
  pressLogoff: {
    alignSelf: "center",
    marginLeft: 12,
    paddingRight: 10,
  },
  wrapper: {
    flexDirection: "row",
    marginTop: 32,
    paddingLeft: 16,
    alignItems: "center",
  },
  wrapperUserInfo: {
    flexDirection: "column",
    paddingLeft: 8,
  },
  name: {
    fontFamily: "Roboto-Medium",
    fontWeight: 700,
    fontSize: 13,
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 11,
  },
});
export default Comments;
