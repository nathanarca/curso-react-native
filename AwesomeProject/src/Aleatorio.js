import React from "react";
import { Text, View } from "react-native";


import estilo from "./estilo";

export default function Aleatorio(props) {

    const min = Math.ceil(props.min);

    const max = Math.floor(props.max);

    const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <View>
            <Text style={estilo.bigText}>{aleatorio}</Text>
        </View>
    );
}
