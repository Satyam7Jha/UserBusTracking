import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    Dimensions,
    Image,

    Linking,
    TouchableOpacity,
} from "react-native";
import { blue, DarkAppColor, MainAppColor, MainFontColor } from "../../assets/Color";
import { Button } from "react-native-paper";

export default function WeekMovi(props) {


    const moviList = Object.keys(props.MoviData);


    return (
        <View style={{
            alignItems: "center", justifyContent: "center", backgroundColor: DarkAppColor, borderBottomWidth: 5,
            borderBottomColor: MainFontColor



        }}>
            <ScrollView horizontal={true}>
                {moviList.map((item) => {
                    return (
                        <View

                            key={item}
                            style={{
                                borderWidth: 0.5,
                                flex: 1,
                                height: "100%",
                                marginHorizontal: 5,
                                borderRadius: 10,
                                borderColor: MainFontColor,
                            }}
                        >

                            <Image
                                style={{
                                    // width: "100%",
                                    height: 180,
                                    borderRadius: 10,

                                }}
                                source={{ uri: props.MoviData[item]["imgurl"] }}
                            />

                            <View style={{ padding: 5 }}>
                                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <Image style={{ width: 20, height: 20 }} source={require('../../assets/star.png')} />
                                    <Text style={{ fontSize: 15, color: "white" }}>  {props.MoviData[item]["imdb"]}  </Text>
                                </View>


                                <View style={{ alignItems: "center", padding: 5, flexDirection: "row", }}>
                                    <Text style={{ fontSize: 12, color: "white"}}>
                                        {props.MoviData[item]["name"].length < 20 ? props.MoviData[item]["name"] : props.MoviData[item]["name"].slice(0, 15) + "..."}
                                    </Text>

                                </View>
                                <View style={{ alignItems: "center", padding: 5, flexDirection: "row", }}>
                                    <Text style={{ fontSize: 12, color: MainFontColor, fontWeight: "bold" }}>
                                        {props.MoviData[item]["director"].length < 20 ? props.MoviData[item]["director"] : props.MoviData[item]["director"].slice(0, 15) + "..."}
                                    </Text>

                                </View>


                                <View
                                    style={{




                                        alignItems: "center",
                                        justifyContent: "center",

                                        // backgroundColor: "red"
                                    }}
                                >


                                    <TouchableOpacity onPress={() =>
                                        Linking.openURL(props.MoviData[item]["download"])
                                    }><View style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: MainFontColor, width: 120, borderRadius: 2, height: 30, marginTop: 10 }}>
                                            <Text style={{ fontSize: 15, color: "white", fontWeight: "bold", marginRight: 10, color: blue }}>
                                                Download
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>


                                {/* <Button style={{ borderWidth: 2, borderColor: MainFontColor, width: "85%" }} color={blue} raised={true} onPress={() =>

                                    Linking.openURL(props.MoviData[item]["download"])
                                }>
                                    Download

                                </Button> */}

                            </View>




                        </View>

                    );
                })}
            </ScrollView>

        </View>
    );
}
