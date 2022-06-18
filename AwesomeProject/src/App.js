import React from 'react';

import { useState } from 'react';

import { Text, View } from 'react-native';

import estilo from './estilo';

import Primeiro from './Primeiro';

import Comp, { Comp1, Comp2, Comp3 } from './Multi';

import Aleatorio from './Aleatorio';

import Titulo from './Titulo';

import Botao from './Botao';

export default () => {

  const [count, setCount] = useState(0);

  return (
    <View style={estilo.center}>
      <Titulo titulo={count} subTitulo="react2" ></Titulo>
      <View>
        <Botao onClick={() => setCount(count + 1)} titulo="Aumentar" />
        <Botao onClick={() => setCount(count - 1)} titulo="Diminuir" />
      </View>
    </View>
  );
};
