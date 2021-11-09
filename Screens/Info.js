import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Newss from "../component/Information/Newss"
import VTU from "../component/Information/VTU"

function News() {
    return (

        <Newss />
    );
}

function VTU_info() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <VTU />
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer independent={true}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { backgroundColor: 'white' },
                    }}>
                    <Tab.Screen name="News" component={News} />
                    <Tab.Screen name="VTU" component={VTU_info} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>


    );
}
