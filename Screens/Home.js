import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../component/Homescreen/Header";
import Weather from "../component/Homescreen/Weather";
import ImaageOfDay from "../component/Homescreen/ImageOfDay"
import Covid19 from "../component/Homescreen/Covid19"
import Medical from "../component/Homescreen/Medical"

import NoticeBoard from '../component/Homescreen/NoticeBoard'
import { DarkAppColor, MainAppColor } from "../assets/Color";

export default function App() {
  return (
    <View style={{ backgroundColor: DarkAppColor }}>
        <View style = {{height:50,width:"100%",alignItems:"center",justifyContent:"center"}}><Text style = {{color:"white",fontWeight:"bold",fontSize:25}}>College Connect</Text></View>

      <ScrollView >

        <Header />
        <Weather />
        <Covid19 />
        <NoticeBoard />

        <View style={{ width: "100%", height: 400, alignItems: "center", justifyContent: "center" }}><Text style={{ color:"white",fontSize: 60 }}>coming soon..</Text></View>
        <Medical />
        <ImaageOfDay />
      </ScrollView>
    </View>
  );
}
