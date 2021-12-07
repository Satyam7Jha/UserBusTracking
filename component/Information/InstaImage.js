import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    Dimensions,
    Image,
    Button,
    Linking,
    TouchableOpacity
} from "react-native";
import { DarkAppColor, MainAppColor, MainFontColor } from "../../assets/Color";

export default function InstaImage(props) {





    const imageList = (Object.keys(props.imageData)).reverse();
    // console.log(imageList);

    return (
        <View style={{
            alignItems: "center", justifyContent: "center", backgroundColor: DarkAppColor, borderBottomWidth: 5,
            borderBottomColor: MainFontColor,
            paddingBottom: 10,
        }}>
            <ScrollView horizontal={true}>
                {imageList.map((item) => {
                    return (
                        <View
                            key={item}
                            style={{
                                width: Dimensions.get("window").width,



                                marginBottom: 10,


                            }}
                        >
                            <View style={{ alignItems: "center", padding: 3 }}>
                                <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
                                    {props.imageData[item]["Title"]}
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
                                source={{ uri: props.imageData[item]["url"] }}
                            />
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginTop: 10,
                                    paddingBottom: 5,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingBottom: 5
                                }}
                            >

                                <Text style={{ marginRight: 30, fontSize: 20, color: "white" }}>
                                    Image By: {props.imageData[item]["PicBy"]}
                                </Text>
                            </View>

                        </View>

                    );
                })}
            </ScrollView>
            <View style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 15, color: "white" }}>{"Scroll->"}</Text>
                <View style={{ width: "100%" }}>
                    <Button
                        color={MainAppColor}
                        width="90%"

                        title="Add Yours Image!!"
                        onPress={() =>
                            Linking.openURL(
                                `whatsapp://send?phone=${918521954141}&text=${"Send us pic ,image title, pic by  "}`
                            )
                        }
                    /></View></View>
        </View>
    );
}
