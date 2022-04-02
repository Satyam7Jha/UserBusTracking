import React from "react";
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
import { MainAppColor, MainFontColor } from "../../assets/Color";

export default function NewsInfo({ data }) {
  console.log(data);
  return (
    <View style={{ padding: 10 }}>
      <ScrollView>
        {data.map((item, index) => {
          return (
            <View key={index} style={{ marginTop: 10 }}>
              <Card item={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const Card = ({ item }) => {
  return (
    <TouchableOpacity
      key={item["title"]}
      // onPress={() => {
      //   _handlePressButtonAsync(item["url"]);
      //   setNewsUrl(item["url"]);
      //   // setShowPopover(true);
      // }}
    >
      <Text>{item["media"]}</Text>

      <View
        style={{
          width: "100%",
          borderBottomColor: MainAppColor,
          borderBottomWidth: 1,
          padding: 20,
          marginBottom: 10,
          marginLeft: 10,
          flexDirection: "row-reverse",
          backgroundColor: "red",
        }}
      >
        <Image
          source={{
            uri: item["img"],
          }}
          style={{
            width: 90,
            height: 80,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "white",
          }}
        />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {item["title"]}
          </Text>

          <Text style={{ marginTop: 3, color: MainFontColor }}>
            {item["date"]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
