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

import { WebView } from 'react-native-webview';
import { Overlay } from 'react-native-elements';
import { blue, DarkAppColor, MainAppColor } from "../../assets/Color";

export default function App() {

  const [isLoadingTop, setLoadingTop] = useState(true);
  const [TopNews, setTopNews] = useState([]);

  const [isLoadingIndia, setLoadingIndia] = useState(true);
  const [BanData, setBanData] = useState([]);

  const [isLoadingBangalore, setLoadingBangalore] = useState(true);
  const [IndiaData, setIndiaData] = useState([]);


  const [newsUrl, setNewsUrl] = useState("");
  const [showPopover, setShowPopover] = useState(false);

  const toggleOverlay = () => {
    setShowPopover(!showPopover);
  };



  useEffect(() => {
    fetch(
      "https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/NEWS/NDTV.json"
    )
      .then((response) => response.json())
      .then((json) => setTopNews(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingTop(false));
  }, []);

  useEffect(() => {
    fetch(
      "https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/NEWS/Bangalore.json"
    )
      .then((response) => response.json())
      .then((json) => setBanData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingBangalore(false));
  }, []);


  useEffect(() => {
    fetch(
      "https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/NEWS/mint.json"
    )
      .then((response) => response.json())
      .then((json) => setIndiaData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingIndia(false));
  }, []);


  // console.log(IndiaData);




  if (isLoadingIndia || isLoadingBangalore || isLoadingTop) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text>{IndiaData["message"]}</Text>
        <Text style={{ color: blue, fontSize: 25, padding: 15 }}>
          Loading...
        </Text>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }



  return (
    <View style={{ alignItems: "center", justifyContent: "center" ,backgroundColor:DarkAppColor}}>
      <ScrollView>
        <View
          style={{
            borderBottomWidth: 5,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <View style={{ backgroundColor: blue, width: "90%", alignItems: "center", justifyContent: "center", padding: 10, borderWidth: 2, marginBottom: 5, marginTop: 5 }}><Text style={{ fontSize: 35, color: "white" }}>Top Stories</Text></View>

          <ScrollView horizontal={true}>
            {TopNews.map((item) => {
              return (
                <TouchableOpacity
                  key={item['title']}
                  onPress={() => { setNewsUrl(item['url']); setShowPopover(true) }}
                >
                  <View
                    style={{
                      width: Dimensions.get("window").width - 120,
                      borderWidth: 2,
                      padding: 10,
                      minHeight: 270,
                      maxHeight: 300,
                      marginBottom: 10,
                      borderRadius: 10,
                      marginLeft: 10,
                      alignItems: "center",
                      justifyContent: "center",



                    }}
                  >
                    <Image
                      source={{
                        uri: item["img"],
                      }}
                      style={{
                        width: 200,

                        height: 150,
                        borderRadius: 10,
                      }}
                    />
                    <View style={{ flex: 1, marginHorizontal: 10, marginTop: 4 }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item["title"]}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={{ backgroundColor: blue, width: "90%", alignItems: "center", justifyContent: "center", padding: 10, borderWidth: 2, marginBottom: 5 }}><Text style={{ fontSize: 35, color: "white" }}>India's News</Text></View>
        </View>
        {IndiaData.map((item) => {
          return (
            <TouchableOpacity
              key={item['title']}
              onPress={() => { setNewsUrl(item['url']); setShowPopover(true) }}
            >
              <View
                style={{
                  width: Dimensions.get("window").width - 20,
                  borderWidth: 2,
                  padding: 20,
                  marginBottom: 10,
                  borderRadius: 10,
                  marginLeft: 10,
                  flexDirection: "row"
                }}
              >
                <Image
                  source={{
                    uri: item["img"],
                  }}
                  style={{
                    width: 100,
                    height: 110,
                    borderRadius: 10,
                  }}
                />
                <View style={{ flex: 1, marginHorizontal: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item["title"]}</Text>

                  <Text style={{ marginTop: 3 }}>{item["date"]}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        <View
          style={{
            borderBottomWidth: 5,
            borderTopW: 5,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <View style={{ backgroundColor: blue, width: "100%", alignItems: "center", justifyContent: "center", padding: 10, borderWidth: 2, marginBottom: 5, marginTop: 5 }}><Text style={{ fontSize: 35, color: "white" }}>Bengaluru's News</Text></View>

        </View>
        {BanData.map((item) => {
          return (
            <TouchableOpacity
              key={item['title']}
              onPress={() => { setNewsUrl(item['url']); setShowPopover(true) }}
            >
              <View
                style={{
                  width: Dimensions.get("window").width - 20,
                  borderWidth: 2,
                  padding: 20,
                  marginBottom: 10,
                  borderRadius: 10,
                  marginLeft: 10,
                  flexDirection: "row"
                }}
              >
                <Image
                  source={{
                    uri: item["img"],
                  }}
                  style={{
                    width: 100,
                    height: 110,
                    borderRadius: 10,
                  }}
                />
                <View style={{ flex: 1, marginHorizontal: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item["title"]}</Text>
                  {/* <Text></Text> */}
                  <Text style={{ marginTop: 5 }}>{item["date"]}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Overlay
        isVisible={showPopover} onBackdropPress={toggleOverlay}
        overlayStyle={{ width: "100%", height: "100%" }}
      >


        <WebView source={{ uri: newsUrl }} />
        {/* <Button title="Go Back" onPress={() => setShowPopover(!showPopover)} /> */}
      </Overlay>

    </View>
  );
}
