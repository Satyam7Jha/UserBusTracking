import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import { DarkAppColor, MainAppColor } from "../../assets/Color";
import InstaImage from "../Information/InstaImage"
import Series from "./Series";
import WeekMovi from "./WeekMovi";



export default function Gellery() {
    const [GalleryData, setGdata] = useState({});
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        fetch(
            "https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/Gallery.json"
        )
            .then((response) => response.json())
            .then((json) => setGdata(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    // console.log(GalleryData['InstaImage'], "********")

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
    return (
        <View style={{ backgroundColor: DarkAppColor, flex: 1 }}>
            <ScrollView>
                {/* <View style={{ alignItems: "center", justifyContent: "center", padding: 8 }}><Text style={{ color: "white", fontWeight: "bold" }}>Showing results for capture the surroundings</Text></View> */}
                <View style={{ width: "100%"}}>
                    <InstaImage imageData={GalleryData['InstaImage']} />
                </View>

                <View style={{ width: "100%", marginTop: 20, borderBottomColor: MainAppColor, borderBottomWidth: 6 }}>
                    <Text style={{ color: "white", fontSize: 20,marginBottom:5}}>This Week's Movi</Text>
                    <WeekMovi MoviData={GalleryData['WeekMovi']} />
                </View>
                <View style={{ backgroundColor: "blue", width: "100%", marginTop: 20 }}>
                    <Series seriesData={GalleryData['series']} />
                </View>
            </ScrollView>


        </View>


    );
}
