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
  const [isLoadingIndia, setLoadingIndia] = useState(true);
  const [BanData, setBanData] = useState([]);

  const [isLoadingBangalore, setLoadingBangalore] = useState(true);
  const [IndiaData, setIndiaData] = useState([]);

  const BreakingNews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Bangaluru&from=2021-10102&sortBy=publishedAt&apiKey=aef039e9738e406e9b99632a2446832f"
    )
      .then((response) => response.json())
      .then((json) => setBanData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingBangalore(false));
  }, [BanData]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=India&from=2021-10102&sortBy=publishedAt&apiKey=aef039e9738e406e9b99632a2446832f"
    )
      .then((response) => response.json())
      .then((json) => setIndiaData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingIndia(false));
  }, [IndiaData]);


  // console.log(IndiaData);




  if (isLoadingIndia || isLoadingBangalore || IndiaData["status"] == "error" || BanData["status"] == "error") {
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
            <Text style={{ fontSize: 35 }}>Breaking News!</Text>
          </View>
          <ScrollView horizontal={true}>
            {BreakingNews.map((item) => {
              return (
                <View
                  style={{
                    marginLeft: 10,
                    borderWidth: 2,
                    borderRadius: 20,
                    height: 350,
                    width: 250,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 30 }}>{item}</Text>
                </View>
              );
            })}
          </ScrollView>

          <Text style={{ fontSize: 35 }}>India News</Text>
        </View>
        {IndiaData["articles"].map((item) => {
          return (
            <TouchableOpacity
              key={item["url"]}
              onPress={() => Linking.openURL(item["url"])}
            >
              <View
                style={{
                  width: Dimensions.get("window").width - 20,
                  borderWidth: 3,
                  padding: 20,
                  marginBottom: 10,
                  borderRadius: 10,
                  marginLeft: 10,
                }}
              >
                <Image
                  source={{
                    uri: item["urlToImage"],
                  }}
                  style={{
                    width: Dimensions.get("window").width / 1.2,
                    height: Dimensions.get("window").width / 2,
                    borderRadius: 10,
                  }}
                />
                <Text>{item["title"]}</Text>
                <Text></Text>
                <Text>{item["publishedAt"].slice(0, 10)}</Text>
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
        {BanData["articles"].map((item) => {
          return (
            <TouchableOpacity
              key={item["url"]}
              onPress={() => Linking.openURL(item["url"])}
            >
              <View
                style={{
                  width: Dimensions.get("window").width - 20,
                  borderWidth: 3,
                  padding: 20,
                  marginBottom: 10,
                  borderRadius: 10,
                  marginLeft: 10,
                }}
              >
                <Image
                  source={{
                    uri: item["urlToImage"],
                  }}
                  style={{
                    width: Dimensions.get("window").width / 1.2,
                    height: Dimensions.get("window").width / 2,
                    borderRadius: 10,
                  }}
                />
                <Text>{item["title"]}</Text>
                <Text></Text>
                <Text>{item["publishedAt"].slice(0, 10)}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
