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
import { WebView } from 'react-native-webview';
import { MainFontColor, MainAppColor } from "../../assets/Color"


export default function App() {
    console.log("Image of the day")

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

    if (image["media_type"] == "video") {

        return (
            <View style={{ height: 470, marginBottom: 20, padding: 5, alignItems: "center", width: Dimensions.get("window").width, marginHorizontal: 10, borderBottomWidth: 5, borderColor: MainAppColor }}>

                <Text style={{ fontSize: 20, borderBottomWidth: 1, marginTop: 10, color: "white", fontWeight: "bold", borderColor: MainFontColor }}>NASA's Image of the Day</Text>

                <Text style={{ marginBottom: 5, borderBottomWidth: 1, fontSize: 12, borderColor: "white", color: "white" }}>{image["title"]}</Text>
                <Text ></Text>
                <View style={{ width: "95%", height: 200, borderRadius: 10, marginRight: 18, marginLeft: 5, backgroundColor: 'red' }}>
                    <WebView startInLoadingState={true} source={{ uri: image['url'] }} />

                </View>


                <ScrollView nestedScrollEnabled={true}>
                    <View style={{ alignItems: "center", justifyContent: "center", padding: 15, borderTopWidth: 2 }}>

                        <Text style={{ fontSize: 13, color: MainFontColor }}>{image["explanation"]}</Text>
                    </View>
                </ScrollView>

            </View>
        );

    }





    else {
        return (
            <View style={{ height: 470, marginBottom: 20, padding: 5, alignItems: "center", width: Dimensions.get("window").width, marginHorizontal: 10, borderBottomWidth: 5, borderColor: MainAppColor }}>

                <Text style={{ fontSize: 20, borderBottomWidth: 1, marginTop: 10, color: "white", fontWeight: "bold", borderColor: MainFontColor }}>NASA's Image of the Day</Text>

                <Text style={{ marginBottom: 5, borderBottomWidth: 1, fontSize: 12, borderColor: "white", color: "white" }}>{image["title"]}</Text>
                <Text ></Text>
                <Image
                    style={{ width: "95%", height: 200, borderRadius: 10, marginRight: 18, marginLeft: 5 }}
                    source={{ uri: image["hdurl"] }}
                />
                <ScrollView nestedScrollEnabled={true}>
                    <View style={{ alignItems: "center", justifyContent: "center", padding: 15, borderTopWidth: 2,marginTop:5 }}>
                        <Text style={{ fontSize: 13, color: MainFontColor }}>{image["explanation"]}</Text>
                    </View>
                </ScrollView>

            </View>
        );
    }
}
