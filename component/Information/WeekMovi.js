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
    TouchableOpacity,
} from "react-native";
import { DarkAppColor, MainAppColor, MainFontColor } from "../../assets/Color";

export default function WeekMovi(props) {


    const moviList = Object.keys(props.MoviData);


    return (
        <View style={{
            alignItems: "center", justifyContent: "center", backgroundColor: DarkAppColor, borderBottomWidth: 5,
            borderBottomColor: MainFontColor,
            paddingBottom: 10,
        }}>
            <ScrollView horizontal={true}>
                {moviList.map((item) => {
                    return (
                        <View
                            key={item}
                            style={{
                                width: Dimensions.get("window").width,



                                marginBottom: 10,


                            }}
                        >
                            <View style={{ alignItems: "center", padding: 3, flexDirection: "row", paddingLeft: 20, justifyContent: "center" }}>
                                <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", marginRight: 10 }}>
                                    {props.MoviData[item]["name"]}
                                </Text>

                            </View>
                            <Image
                                style={{
                                    width: "90%",
                                    height: 180,
                                    borderRadius: 10,
                                    marginRight: 5,
                                    marginLeft: 15,
                                }}
                                source={{ uri: props.MoviData[item]["imgurl"] }}
                            />

                            <View style={{}}>
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
                                        {props.MoviData[item]["director"]}
                                    </Text>
                                    <Text style={{ fontSize: 20, color: "white" }}>imdb {props.MoviData[item]["imdb"]}</Text>



                                </View>
                                <TouchableOpacity onPress={() =>
                                    Linking.openURL(props.MoviData[item]["download"])
                                }><View style={{ alignItems: "center" }}>
                                        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", marginRight: 10, borderBottomWidth: 1, borderBottomColor: "white" }}>
                                            Download
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                    );
                })}
            </ScrollView>

        </View>
    );
}
