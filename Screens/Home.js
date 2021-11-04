import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../component/Homescreen/Header";
import Weather from "../component/Homescreen/Weather";
import ImaageOfDay from "../component/Homescreen/ImageOfDay"
import Covid19 from "../component/Homescreen/Covid19"
import Medical from "../component/Homescreen/Medical"

export default function App() {
  return (
    <View>
      <ScrollView>
        <Weather />
        <Header />
        <Covid19 />
        <Medical />
        <View style={{ width: "100%", height: 400, alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: 60 }}>comming soon..</Text></View>
        <ImaageOfDay />
      </ScrollView>
    </View>
  );
}
