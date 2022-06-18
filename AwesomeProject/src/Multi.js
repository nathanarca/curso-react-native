import React from "react";

import { Text } from "react-native";

import estilo from "./estilo";

export default () => {
    return (
        <Text style={estilo.bigText} >Componente #padrão</Text>
    );
}

export function Comp1() {
    return (<Text style={estilo.bigText} >Componente 1</Text>);
}

export function Comp2() {
    return (<Text style={estilo.bigText} >Componente 2</Text>);
}

export function Comp3() {
    return (<Text style={estilo.bigText} >Componente 3</Text>);
}




