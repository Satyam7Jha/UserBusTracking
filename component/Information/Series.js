import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
  Button,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  blue,
  DarkAppColor,
  MainAppColor,
  MainFontColor,
} from "../../assets/Color";
import { Video, AVPlaybackStatus } from "expo-av";
import { WebView } from "react-native-webview";

export default function Series(props) {
  const seriesList = Object.keys(props.seriesData);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  var epsList = [];

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderBottomWidth: 5,
        borderBottomColor: MainFontColor,
        flex: 1,
      }}
    >
      {seriesList.map((item) => {
        epsList = Object.keys(props.seriesData[item]);
        return (
          <View
            key={item}
            style={{
              flex: 1,
              width: "100%",

              backgroundColor: DarkAppColor,
              borderBottomColor: MainFontColor,
              borderBottomWidth: 5,
              height: 300,
            }}
          >
            <View style={{ width: "100%", height: 50 }}>
              <Text style={{ fontSize: 30, color: "white" }}>{item}</Text>
            </View>
            <ScrollView horizontal={true} style={{ flex: 1 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                {epsList.map((eps) => {
                  return (
                    <View
                      key={eps}
                      style={{
                        width: Dimensions.get("window").width,
                      }}
                    >
                      <View
                        style={{
                          width: "98%",
                          height: 230,
                          borderRadius: 10,
                          marginLeft: 20,
                        }}
                      >
                        <WebView
                          startInLoadingState={true}
                          source={{ uri: props.seriesData[item][eps] }}
                        />

                        <TouchableOpacity
                          onPress={() => {
                            Linking.openURL(props.seriesData[item][eps]);
                          }}
                        >
                          <View
                            style={{
                              width: "100%",
                              backgroundColor: DarkAppColor,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Text style={{ color: blue, fontSize: 20 }}>
                              Open In YouTube
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        );
      })}
    </View>
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});
