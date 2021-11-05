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
    const [image, setImage] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.nasa.gov/planetary/apod?api_key=rzPBkvhd0iWAeUHHwHbvINQEpVdLiuBr4vTUZ8NH"
        )
            .then((response) => response.json())
            .then((json) => setImage(json))
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

    // console.log(image);



    return (
        <View style={{ height: 450, borderWidth: 2, borderRadius: 10, marginBottom: 200, padding: 5, alignItems: "center", marginHorizontal: 15 }}>
            <Text ></Text>
            <Text style={{ fontSize: 20, borderBottomWidth: 1 }}>NASA's Image of the Day</Text>

            <Text style={{ marginBottom: 5, borderBottomWidth: 1, fontSize: 12 }}>{image["title"]}</Text>
            <Image
                style={{ width: "95%", height: 200, borderRadius: 10, marginRight: 5, marginLeft: 10 }}
                source={{ uri: image["hdurl"] }}
            />
            <ScrollView nestedScrollEnabled={true}>
                <View style={{ alignItems: "center", justifyContent: "center", padding: 15 }}>
                    <Text>-------------------------------------------------------------------</Text>
                    <Text style={{ fontSize: 13 }}>{image["explanation"]}</Text>
                </View>
            </ScrollView>

        </View>
    );
}
