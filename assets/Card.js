import React from "react";
import { View, StyleSheet } from "react-native";
import { DarkAppColor, MainAppColor } from "../assets/Color";

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 15,
        maxWidth: "90%",
        alignItems: "center",
        shadowColor: "black",
        backgroundColor: MainAppColor,
        shadowOpacity: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 10,
        borderRadius: 10,

    },
});
export default Card;
