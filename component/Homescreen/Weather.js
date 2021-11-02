import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
  Button,
} from "react-native";

export default function App() {
  const [isLoadingBangalore, setLoadingBangalore] = useState(true);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=eca6c7f85d1d4694847175019210211&q=Bengaluru=no"
    )
      .then((response) => response.json())
      .then((json) => setWeather(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingBangalore(false));
  }, []);

  if (isLoadingBangalore) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text style={{ color: "blue", fontSize: 25, padding: 15 }}>
          Loading...
        </Text>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  // console.log(weather["current"]);

  return (
    <View>
      <View
        style={{
          paddingHorizontal: 5,
          width: "95%",
          height: 60,
          borderWidth: 3,
          borderRadius: 10,
          marginLeft: 10,
          marginTop: 30,
          marginRight: 10,
          flexDirection: "row",
          borderColor: "blue",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20 }}>{weather["location"]["name"]}</Text>
          <Text style={{ fontSize: 15 }}>{weather["location"]["region"]}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text>Temp {weather["current"]["temp_c"]}</Text>
          <Text>windSpeed {weather["current"]["wind_kph"]}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: "cdn.weatherapi.com/weather/64x64/night/116.png" }}
          />
          <Text>{weather["current"]["condition"]["text"]}</Text>
        </View>
      </View>
    </View>
  );
}
