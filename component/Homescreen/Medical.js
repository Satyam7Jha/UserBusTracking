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
    const URL2 = "data:image/jpeg;base64,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";

    return (

        <View style={{ flex: 1, borderWidth: 2, borderRadius: 10, padding: 5, width: Dimensions.get("window").width - 10, marginLeft: 5 }}>
            <View style={{
                padding: 5, alignItems: "center",
                height: 200, flexDirection: "row",
            }}>
                <Image
                    style={{ width: 150, height: 150, marginTop: 0 }}
                    source={{ uri: URL }}
                />
                <View style={{ marginLeft: 20 }}><Text>Not Feeling well !!</Text>
                    <Text>Get a Doctor on Call</Text>
                    <Text>Free consultations </Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>


                    </View>
                    <Text style={{ color: "red" }}>{"For Emergency please Visit\n Nearest Hospital/call: 111 "} </Text>
                </View>





            </View>
            <Button
                title="SHEDULE NOW!!"

                onPress={() =>
                    Linking.openURL(
                        `whatsapp://send?phone=${918521954141}&text=${"HII: ,\nWANT TO SHEDULE ,\nA CALL WITH DOCTOR.\nDESCRIBE YOUR PROBLEM IN LINE"
                        }`
                    )
                }
            />
        </View>
    );
}
