import * as React from 'react';
import { Text, View, SafeAreaView, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BuyProduct from '../component/Ecommerce/BuyProduct';
import { blue, DarkAppColor } from '../assets/Color';
import SellProduct from '../component/Ecommerce/SellProduct';


function Buy() {
    return (
        <BuyProduct />
    );
}

function Sell() {
    return (
        <View style={{ flex: 1 }}>
            <SellProduct />


        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
    console.log("Ecom")
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer independent={true} >
                <Tab.Navigator
                    screenOptions={{
                        swipeEnabled: false,

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
