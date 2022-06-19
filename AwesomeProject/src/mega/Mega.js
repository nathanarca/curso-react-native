import React, { Component } from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import estilo from '../estilo'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: [],
    }

    getRandomColor = () => {

        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    setNumero = (qtdNumeros) => {

        if (qtdNumeros > 0 && qtdNumeros < 60) {

            let novosNumeros = []

            for (let i = 0; i < qtdNumeros; i++) {

                let nextNumber = this.gerarNovoNumeroNaoRepetido(this.state.numeros);

                novosNumeros.push(nextNumber);
            }

            this.setState({ numeros: novosNumeros })

        } else {
            this.setState({ numeros: [] })
        }
    }

    gerarNovoNumeroNaoRepetido = (numeros) => {

        let novoNumero = parseInt(Math.floor(Math.random() * 60) + 1);

        return numeros.includes(novoNumero) ? this.gerarNovoNumeroNaoRepetido(numeros) : novoNumero;
    }


    render() {
        return (
            <View >
                <Text style={estilo.bigText} >Números da Mega</Text>
                <TextInput
                    style={{ borderBottomWidth: 1, borderColor: '#000', padding: 10, margin: 10 }}
                    keyboardType='number-pad'
                    placeholder="Quantos números você quer gerar?"
                    value={this.state.qtdNumeros}
                    onChangeText={this.setNumero}
                ></TextInput>
                <View style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}>
                    {this.state.numeros.sort((a, b) => a - b).map((numero, index) =>
                        <View key={`${index}`} style={{ justifyContent: 'center', alignItems: "center", height: 45, width: 45, borderRadius: 50, backgroundColor: this.getRandomColor() }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>{numero}</Text>
                        </View>
                    )}
                </View>

            </View>
        )
    }
}
