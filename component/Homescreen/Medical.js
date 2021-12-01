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

import  { MainFontColor,MainAppColor, DarkAppColor, blue } from "../../assets/Color"

export default function App() {

    const URL = "https://i.pinimg.com/originals/be/f5/d0/bef5d0e27b11ccc40b0a1793047bc769.png";

    return (

        <View style={{ flex: 1, padding: 5, width: Dimensions.get("window").width , borderTopWidth:5,borderBottomWidth:5,borderColor: MainAppColor,paddingBottom:20}}>
            <View style={{ alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: 20, borderBottomWidth: 2,color:"white",borderColor:"white" }}>Not Feeling well !!</Text></View>
            <View style={{
                padding: 5, alignItems: "center",
                height: 170, flexDirection: "row",
            }}>
                <Image
                    style={{ width: 150, height: 150, marginTop: 0 }}
                    source={{ uri: URL }}
                />
                <View style={{ marginLeft: 20, flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold",color:MainFontColor }}>Get a Doctor on Call</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold",color:MainFontColor }}>Free consultations. </Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>


                    </View>

                </View>






            </View>
            <View>
                <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 5 }}><Text style={{ color: "red", fontSize: 12 }}>{"For Emergency please Visit Nearest Hospital/call: 111 "} </Text></View>

            </View>
            <Button
                title="SCHEDULE NOW!!"
                color= {MainAppColor}

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
