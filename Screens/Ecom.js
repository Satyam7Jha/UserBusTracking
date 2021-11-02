import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function Buy() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Comming Soon!</Text>
        </View>
    );
}

function Sell() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Comming Soon!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <NavigationContainer independent={true}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { backgroundColor: 'white' },
                    }}>
                    <Tab.Screen name="Buy" component={Buy} />
                    <Tab.Screen name="Sell" component={Sell} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>


    );
}
