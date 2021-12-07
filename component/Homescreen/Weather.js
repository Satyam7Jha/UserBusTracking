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
import { MainAppColor, MainFontColor } from "../../assets/Color"
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
  console.log("weather");
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



  else {
    return (
      <View>
        <View
          style={{
            paddingHorizontal: 5,
            width: "95%",
            height: 60,
            marginLeft: 10,
            marginRight: 10,
            flexDirection: "row",
            borderColor: "black",
            marginTop: 20,
            borderBottomWidth: 5,
            borderColor: MainAppColor
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: 20, color: MainFontColor }}>{weather["location"]["name"]}</Text>
            <Text style={{ fontSize: 15, color: MainFontColor }}>{weather["location"]["region"]}</Text>
          </View>

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: MainFontColor }}>Temp {weather["current"]["temp_c"]}°C</Text>
            <Text style={{ color: MainFontColor }}>wind {weather["current"]["wind_kph"]}km/hr</Text>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View style={{ alignItems: 'center', justifyContent: "center" }}>
              <Image
                style={{ width: 40, height: 35, marginTop: 0 }}
                source={{ uri: "http:" + weather["current"]["condition"]["icon"] }}
              />
              <Text style={{ fontSize: 10, color: "white", fontWeight: "bold" }}>
                {weather["current"]["condition"]["text"]}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
