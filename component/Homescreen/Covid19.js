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

export default function Covid19() {
    const [isLoadingBangalore, setLoadingBangalore] = useState(true);
    const [covid, setCovid] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
        )
            .then((response) => response.json())
            .then((json) => setCovid(json))
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

    console.log(covid);



    return (
        <View style={{  borderWidth: 2, borderRadius: 10, marginBottom: 200, padding: 5, alignItems: "center",marginTop:50 }}>
            <View><Text style={{ fontSize: 25 }}>COVID-19</Text></View>
            <View style={{ marginLeft: -300 }}><Text>India</Text></View>
            <View style={{ flexDirection: "row", width: "100%", height: 70 }}>
                <View style={{ flex: 1, backgroundColor: "red" }}>
                    <Text>"totalCases"</Text>
                    <Text>{covid["totalCases"]}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "blue", alignItems: "center", justifyContent: "center" }}>
                    <Text>Active</Text>
                    <Text>{covid["activeCasesNew"]}</Text>
                    <Text>{covid["activeCases"]}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
                    <Text>"recovered"</Text>
                    <Text>{covid["recoveredNew"]}</Text>
                    <Text>{covid["recovered"]}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "grey", alignItems: "center", justifyContent: "center" }}>
                    <Text> "deaths"</Text>
                    <Text>{covid["deathsNew"]}</Text>
                    <Text>{covid["deaths"]}</Text>
                </View>
            </View>

            <View style={{ marginLeft: -300 }}><Text>{covid["regionData"][15]["region"]}</Text></View>
            <View style={{ flexDirection: "row", backgroundColor: "red", width: "100%", height: 70 }}>
                <View style={{ flex: 1, backgroundColor: "red" }}>
                    <Text>"totalCases"</Text>
                    <Text>{covid["regionData"][15]["totalInfected"]}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "blue", alignItems: "center", justifyContent: "center" }}>
                    <Text>Active</Text>
                    <Text>{covid["regionData"][15]["newInfected"]}</Text>
                    <Text>{covid["regionData"][15]["activeCases"]}</Text>
                    
                </View>
                <View style={{ flex: 1, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
                    <Text>"recovered"</Text>
                    <Text>{covid["regionData"][15]["newRecovered"]}</Text>
                    <Text>{covid["regionData"][15]["recovered"]}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "grey", alignItems: "center", justifyContent: "center" }}>
                    <Text> "deaths"</Text>
                    <Text>{covid["regionData"][15]["newDeceased"]}</Text>
                    <Text>{covid["regionData"][15]["deceased"]}</Text>
                </View>
            </View>

        </View>
    );
}
