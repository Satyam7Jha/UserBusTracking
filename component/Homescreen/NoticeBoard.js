import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    Dimensions,
    Image,
    Button,
    TouchableOpacity,
    Linking
} from "react-native";
import  { MainAppColor,MainFontColor } from "../../assets/Color"
export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [Notice_data, setNoticeData] = useState([]);

    useEffect(() => {
        fetch(
            "https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/Notice_Board.json"
        )
            .then((response) => response.json())
            .then((json) => setNoticeData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [Notice_data]);

    // console.log(Notice_data)



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

    // console.log(image);



    else {


        const noticeList = Object.keys(Notice_data);
        noticeList.reverse();
        const totalLen = noticeList.length
        // console.log(noticeList);


        return (
            <View style={{ height: 420,marginBottom: 10, padding: 5, alignItems: "center", width: "100%", marginHorizontal: 10,borderBottomWidth:5,borderBottomColor:MainAppColor}}>
                <View style={{ borderBottomWidth: 2,borderColor:"white" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 25 ,color:"white"}}>NOTICE   BOARD</Text>
                </View>

                <ScrollView horizontal={true}>

                    <View style={{ flex: 1, flexDirection: "row" }}>


                        {

                            noticeList.map((item, index) => {
                                return (

                                    <View key={item} style={{ maxHeight: 280, borderWidth: 2, borderRadius: 10, padding: 5, alignItems: "center", width: Dimensions.get("window").width - 50, marginHorizontal: 10, marginTop: 50,borderColor:MainAppColor }}>
                                        <Text style={{ fontSize: 20,color:MainFontColor }}>{Notice_data[item]['Head']}</Text>
                                        <View style={{ marginTop: 10, width: "100%", marginBottom: 5 }}><Text style={{ fontWeight: "bold",color:"white" }}>{Notice_data[item]['date']}</Text></View>

                                        <View style={{ flex: 1, width: "100%" }}>
                                            <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>


                                                <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: "center" }}><Text style={{ fontSize: 15 ,color:MainFontColor }}>{Notice_data[item]['desc']}</Text></View>
                                                <TouchableOpacity onPress={() => Linking.openURL(Notice_data[item]["url"])}><Text style={{ color: "blue" }}>{Notice_data[item]["urltitle"]}</Text></TouchableOpacity>


                                            </ScrollView>
                                            <View style={{ justifyContent: "space-between", flexDirection: "row", marginTop: 10, width: "100%", paddingBottom: 5, paddingHorizontal: 5 }}><Text style={{ fontWeight: "bold", fontSize: 18,color:"white" }}>{Notice_data[item]['by_who']}</Text>
                                                <Text style = {{color:"white"}}>{index + 1}/{totalLen}</Text>
                                            </View>

                                        </View>

                                    </View>
                                );
                            })

                        }
                    </View>
                </ScrollView>
                <View><Text style={{ color: "white",fontWeight:"bold",fontSize:17 }}>{'NEXT ->'}</Text></View>


            </View >
        );
    }
}
