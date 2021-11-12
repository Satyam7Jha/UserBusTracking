import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    Dimensions,
    Image,
    Linking,
    Button,
} from "react-native";

export default function App() {

    const URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4FW_t2q0PtoUyqzVg6D3uawgI82pzlD-qg&usqp=CAU";

    return (

        <View style={{ flex: 1, borderWidth: 2, borderRadius: 10, padding: 5, width: Dimensions.get("window").width - 20, marginHorizontal: 10 }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: 20, borderBottomWidth: 2 }}>Not Feeling well !!</Text></View>
            <View style={{
                padding: 5, alignItems: "center",
                height: 170, flexDirection: "row",
            }}>
                <Image
                    style={{ width: 150, height: 150, marginTop: 0 }}
                    source={{ uri: URL }}
                />
                <View style={{ marginLeft: 20, flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Get a Doctor on Call</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Free consultations. </Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>


                    </View>

                </View>






            </View>
            <View>
                <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 5 }}><Text style={{ color: "red", fontSize: 12 }}>{"For Emergency please Visit Nearest Hospital/call: 111 "} </Text></View>

            </View>
            <Button
                title="SCHEDULE NOW!!"

                onPress={() =>
                    Linking.openURL(
                        `whatsapp://send?phone=${918521954141}&text=${"HII: ,\nWANT TO SHEDULE ,\nA CALL WITH DOCTOR.\n"
                        }`
                    )
                }
            />
        </View>
    );
}
