import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Newss from "../component/Information/Newss"

function News() {
    return (

        <Newss />
    );
}

function VTU() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
            <NavigationContainer independent={true}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { backgroundColor: 'white' },
                    }}>
                    <Tab.Screen name="News" component={News} />
                    <Tab.Screen name="VTU" component={VTU} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>


    );
}
