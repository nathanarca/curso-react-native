import React from "react";

import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get("window").height / 8,
        width: Dimensions.get("window").width / 4,
        padding: 20,
        backgroundColor: "#080808",
        textAlign: "center",
        textAlignVertical: "center",
        borderWidth: 1,
        color: "#fff",
        borderColor: "#151515",
    },
    operationButton: {
        color: "darkorange",
        backgroundColor: "#080808"
    },
    buttonDouble: {
        width: (Dimensions.get("window").width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get("window").width / 4) * 3
    }
});


export default props => {

    const stylesButton = [styles.button];

    if (props.double) stylesButton.push(styles.buttonDouble);

    if (props.triple) stylesButton.push(styles.buttonTriple);

    if (props.operation) stylesButton.push(styles.operationButton);

    return (
        <TouchableHighlight

            onPress={() => props.onPress(props.label)}
            underlayColor="#00BCD4"
            title>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );

}
