import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Modal from "react-native-paper";

import { WebView } from "react-native-webview";
import { Overlay } from "react-native-elements";
import {
  blue,
  DarkAppColor,
  MainAppColor,
  MainFontColor,
} from "../../assets/Color";

import * as WebBrowser from "expo-web-browser";
import AutoScroll from "./AutoScroll";

import NewsMenu from "./NewsMenu";
import NewsInfo from "./NewsInfo";

export default function Newss() {
  const [selectedTopic, setselectedTopic] = useState("Latest");
  const [newsData, setnewsData] = useState(undefined);

  useEffect(() => {
    fetch(
      "https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/NewsData.json"
    )
      .then((response) => response.json())
      .then((json) => setnewsData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <AutoScroll />
      <NewsMenu
        selectedTopic={selectedTopic}
        setselectedTopic={setselectedTopic}
      />
      <Text style={{ fontSize: 30 }}>{selectedTopic}</Text>

      {newsData != undefined && <NewsInfo data={newsData[selectedTopic]} />}
    </View>
  );
}
