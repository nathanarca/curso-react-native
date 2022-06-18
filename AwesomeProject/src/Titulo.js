import React from "react";

import { Text } from "react-native";

import estilo from "./estilo";

export default ({ titulo, subTitulo }) =>
    <>
        <Text style={estilo.bigText} >{titulo}</Text>
        <Text>{subTitulo}</Text>
    </>;
