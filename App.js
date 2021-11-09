import * as React from "react";
import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import BusLoc from "./Screens/BusLoc";
import Info from "./Screens/Info"
import Home from "./Screens/Home"
import Ecom from "./Screens/Ecom"


function HomeScreen() {
  return (
    <Home />
  );
}

function BusLocation() {
  return <BusLoc />;
}

function Information() {
  return (
    <Info />
  );
}

function ecom() {
  return (
    <Ecom />
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Bus Tracking"
        component={BusLocation}
        options={{
          tabBarLabel: "BusLoc",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          headerShown: false,
          tabBarLabel: "Info",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WhatsApp: 8521954141"
        component={ecom}
        options={{
          headerShown: false,
          tabBarLabel: "E-com",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>

        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
