import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({

    display: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#080808",
        alignItems: "flex-end",
        flexGrow: 1
    },
    displayValue:
    {
        fontSize: 40,
        color: "white"
    }
});

export default props => {
    return (
        <View style={styles.display}>
            <Text numberOfLines={1} style={styles.displayValue}>{props.value}</Text>
        </View>
    );
}