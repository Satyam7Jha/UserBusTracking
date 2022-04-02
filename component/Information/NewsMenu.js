import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function NewsMenu(props) {
  return (
    <View style={styles.container}>
      <IconVews
        src={require("../../assets/icon.png")}
        title={"Latest"}
        setselectedTopic={props.setselectedTopic}
      />
      <IconVews
        src={require("../../assets/boy.png")}
        title={"India"}
        setselectedTopic={props.setselectedTopic}
      />
      <IconVews
        src={require("../../assets/boy.png")}
        title={"Bangalore"}
        setselectedTopic={props.setselectedTopic}
      />

      <IconVews
        src={require("../../assets/boy.png")}
        title={"Business"}
        setselectedTopic={props.setselectedTopic}
      />

      <IconVews
        src={require("../../assets/icon.png")}
        title={"World"}
        setselectedTopic={props.setselectedTopic}
      />
    </View>
  );
}

const IconVews = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.setselectedTopic(props.title)}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Image style={{ width: 50, height: 50 }} source={props.src} />
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
