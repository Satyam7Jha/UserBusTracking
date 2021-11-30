import * as React from "react";
import { Text, View } from "react-native";
import { DarkAppColor } from "../assets/Color";
import Maps from "../component/BusLOcation/Maps"

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style = {{height:50,width:"100%",backgroundColor:DarkAppColor,alignItems:"center",justifyContent:"center"}}><Text style = {{color:"white",fontSize:30,fontWeight:"bold"}}>Bus Tracking</Text></View>
      <Maps />
    </View>
  );
}
