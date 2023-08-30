import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet, Image, Pressable, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Post from './PostsScreen.jsx';
import CreatePost from './CreatePostsScreen.jsx';
import Profile from './ProfileScreen.jsx';
import { Ionicons, AntDesign } from "@expo/vector-icons";
import IconLogOut from "@expo/vector-icons/Feather.js";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  
  return (   
    <Tabs.Navigator
      // labeled={false}
      initialRouteName="Posts"
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
             iconName = focused ? "appstore1" : "appstore1";
          } else if (route.name === "CreatePost") {
            iconName = focused ? "pluscircleo" : "pluscircle";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }
          return <AntDesign  name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        // tabBarShowLabel: false,
        
      }}
    >
      <Tabs.Screen name="Post" component={Post} options={{
        title: "Публікації",
        headerRight: () => (
              <IconLogOut.Button
                name="log-out"
                onPress={() => navigation.navigate("Login")}
                title="Press me"
            color="#BDBDBD"
            size="24"
            backgroundColor = "transparent"
              />
            ),
          }}/>
      <Tabs.Screen
        name="CreatePost"
        component={CreatePost}        
        options={{  title: "Створити публікацію"  }}
      />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Home;