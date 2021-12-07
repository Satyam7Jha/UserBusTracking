import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../component/Homescreen/Header";
import Weather from "../component/Homescreen/Weather";
import ImaageOfDay from "../component/Homescreen/ImageOfDay";
import Covid19 from "../component/Homescreen/Covid19";
import Medical from "../component/Homescreen/Medical";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Overlay } from "react-native-elements";
import NoticeBoard from "../component/Homescreen/NoticeBoard";
import { DarkAppColor, MainAppColor } from "../assets/Color";


export default function App() {
  console.log("Home")

  const [showPopover, setShowPopover] = React.useState(false);

  const toggleOverlay = () => {
    setShowPopover(!showPopover);
  };

  return (
    <View style={{ backgroundColor: DarkAppColor, marginBottom: 50 }}>
      <View
        style={{
          height: 50,
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ marginLeft: "4%" }}>
          <AntDesign
            name="bars"
            size={28}
            color="white"
            onPress={toggleOverlay}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginRight: "4%",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
            College Connect
          </Text>
        </View>
      </View>

      <Overlay
        isVisible={showPopover}
        onBackdropPress={toggleOverlay}
        overlayStyle={{ width: "70%", height: "100%", marginLeft: -150 }}
        animationType="fade"
      ></Overlay>

      <ScrollView>
        <Header />
        <Weather />
        <Covid19 />
        <Medical />
        <NoticeBoard />

        {/* <View
          style={{
            width: "100%",
            height: 400,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 60 }}>coming soon..</Text>
        </View> */}

        <ImaageOfDay />
      </ScrollView>
    </View>
  );
}
