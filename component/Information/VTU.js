import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { DarkAppColor } from "../../assets/Color";

import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{ uri: "https://vtu.ac.in/en/" }}
      // onLoadEnd={() => console.log("hiii")}
      
    />
  );
}
