import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import { DarkAppColor } from "../../assets/Color";


export default function Stat() {


    const [ViewCount, setViewCount] = React.useState({});





    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '_' + mm + '_' + yyyy;


    var totalViews = 0;

    for (let i in ViewCount) {
        totalViews += ViewCount[i]
    }



    const URL = `https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/Static.json`;




    React.useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((json) => setViewCount(json))
            .catch((error) => console.error(error))
    }, []);



    return (

        <View style={{ backgroundColor: DarkAppColor, flex: 1, width: "100%", padding: 20 }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", borderBottomColor: "grey", borderBottomWidth: 2 }}>Statistics</Text>
            </View>

            <View style={{ marginTop: 30, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 25 }}>{ViewCount[today]}</Text>

                <Text style={{ color: "white", fontSize: 18 }}>Today's Traffic</Text>
            </View>

            <View style={{ marginTop: 30, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 25 }}>{totalViews}</Text>

                <Text style={{ color: "white", fontSize: 18 }}>Total Traffic</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 60 }}>
                <Text style={{ color: "white", fontSize: 25 }}>Version:  </Text>
                <Text style={{ color: "red", fontSize: 25 }}>Beta</Text>
            </View>




        </View>
    );

}