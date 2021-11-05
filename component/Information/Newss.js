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

export default function App() {

  const [isLoadingTop, setLoadingTop] = useState(true);
  const [TopNews, setTopNews] = useState([]);

  const [isLoadingIndia, setLoadingIndia] = useState(true);
  const [BanData, setBanData] = useState([]);

  const [isLoadingBangalore, setLoadingBangalore] = useState(true);
  const [IndiaData, setIndiaData] = useState([]);



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
        <Text style={{ color: "blue", fontSize: 25, padding: 15 }}>
          Loading...
        </Text>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }



  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
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
          <View>
            <Text style={{ fontSize: 35 }}>Top News!</Text>
          </View>
          <ScrollView horizontal={true}>
            {TopNews.map((item) => {
              return (
                <TouchableOpacity
                  key={item['title']}
                  onPress={() => Linking.openURL(item["url"])}
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
                      justifyContent: "center"

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

          <Text style={{ fontSize: 35 }}>India News</Text>
        </View>
        {IndiaData.map((item) => {
          return (
            <TouchableOpacity
              key={item['title']}
              onPress={() => Linking.openURL(item["url"])}
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
                  <Text></Text>
                  <Text>{item["date"].slice(9, item['date'].length)}</Text>
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
          <Text
            style={{ fontSize: 35, borderTopWidth: 5, borderTopColor: "red" }}
          >
            ** Bangalore News **
          </Text>
        </View>
        {BanData.map((item) => {
          return (
            <TouchableOpacity
              key={item['title']}
              onPress={() => Linking.openURL(item["url"])}
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
    </View>
  );
}
