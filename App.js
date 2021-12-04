import * as React from "react";
import { View, SafeAreaView, StatusBar, Platform, StyleSheet } from "react-native";
import BusLoc from "./Screens/BusLoc";
import Info from "./Screens/Info"
import Home from "./Screens/Home"
import Ecom from "./Screens/Ecom"
import { blue, DarkAppColor, MainAppColor } from "./assets/Color";
import { BottomNavigation, Text } from 'react-native-paper';


function HomeScreen() {
  return (
    <Home />
  );
}

function BusLocation() {
  return <BusLoc />;
}

function Information() {
  return (
    <Info />
  );
}

function ecom() {
  return (
    <Ecom />
  );
}


const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);



const App = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "bus", title: "Tracking", icon: "bus" },
    { key: "info", title: "info", icon: "information" },
    { key: "ecommers", title: "E-com", icon: "shopping" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    bus: BusLocation,
    info: Information,
    ecommers: ecom
  });



  return (


    <View style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        <MyStatusBar backgroundColor={DarkAppColor} barStyle="light-content" />

        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          activeColor="#02abde"
          barStyle={{ backgroundColor: DarkAppColor,borderTopWidth:1,borderTopColor:MainAppColor }}
        />
      </View>


    </View >

  );

};



const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: DarkAppColor,
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: DarkAppColor,
  },
});



export default App;