import * as React from 'react';
import { Text, View, SafeAreaView, Button,Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BuyProduct from '../component/Ecommerce/BuyProduct';
import { blue, DarkAppColor } from '../assets/Color';


function Buy() {
    return (
        <BuyProduct />
    );
}

function Sell() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: DarkAppColor }}>
            <Text style={{ fontSize: 20, color: "white" }}>Want to Sell</Text>
            <Text style={{ fontSize: 20, color: "white" }}>Share the details with us</Text>
            <Button title="Share" onPress={() =>
                Linking.openURL(
                    `whatsapp://send?phone=${918521954141}&text=${"HII: ,\n,give us ,product name,expected price,condition,horizontal image.\n"
                    }`
                )
            } />

        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer independent={true} >
                <Tab.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: blue,
                        tabBarInactiveTintColor: "white",
                        tabBarLabelStyle: { fontSize: 15, fontWeight: "bold" },
                        tabBarStyle: { backgroundColor: DarkAppColor },
                        tabBarIndicatorStyle: { backgroundColor: blue, height: 5, },


                    }}>
                    <Tab.Screen name="Buy" component={Buy} />
                    <Tab.Screen name="Sell" component={Sell} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>


    );
}
