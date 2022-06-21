import React from "react";

import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import params from "../params";

import Mine from "./Mine";

import Flag from "./Flag";

export default props => {

    const { mined, opened, nearMines, exploded, flagged } = props;

    const styleField = [styles.field];

    if (opened) styleField.push(styles.opened);

    if (exploded) styleField.push(styles.exploded);

    if (flagged) styleField.push(styles.flagged);

    if (!opened && !exploded) styleField.push(styles.regular);

    let color = null;

    if (nearMines > 0) {
        if (nearMines == 1) color = "#2A28D7";
        else if (nearMines == 2) color = "#2B520F";
        else if (nearMines == 3) color = "#F9060A";
        else if (nearMines >= 4) color = "#F221A9";
    }


    return (
        <TouchableWithoutFeedback onPress={props.onOpenField} onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, { color }]}>{nearMines}</Text> : false}
                {mined && opened ?
                    <Mine /> : false}
                {flagged && !opened ?
                    <Flag /> : false}

            </View>
        </TouchableWithoutFeedback >
    );

}


const styles = StyleSheet.create({
    field: {
        width: params.blockSize,
        height: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: "#999",
        borderLeftColor: "#CCC",
        borderTopColor: "#CCC",
        borderRightColor: "#333",
        borderBottomColor: "#333",
    },
    opened: {
        backgroundColor: "#999",
        borderColor: "#777",
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        fontSize: params.fontSize,
        fontWeight: "bold",
    },
    exploded: {
        backgroundColor: "#F00",
        borderColor: "#F00",
    }
})
