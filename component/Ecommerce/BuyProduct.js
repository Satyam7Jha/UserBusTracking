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

export default function BuyProduct() {
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(
      "https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app/SellProduct.json"
    )
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [product]);

  if (isLoading) {
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

  // console.log(product);
  const productList = Object.keys(product);
  // console.log(productList);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {productList.map((item) => {
          return (
            <View
              key={item}
              style={{
                flex: 1,
                borderWidth: 2,
                borderRadius: 5,
                marginBottom: 5,
              }}
            >
              <View style={{ alignItems: "center", padding: 3 }}>
                <Text style={{ fontSize: 20 }}>
                  {product[item]["ProductName"]}
                </Text>
              </View>
              <Image
                style={{
                  width: "90%",
                  height: 190,
                  borderRadius: 10,
                  marginRight: 5,
                  marginLeft: 15,
                }}
                source={{ uri: product[item]["url"] }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Condition: {product[item]["condition"]}</Text>
                <Text style={{ marginRight: 30, fontSize: 20 }}>
                  ₹{product[item]["price"]}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
