/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { StyleSheet, View, Text, Alert, TouchableWithoutFeedback } from 'react-native';

import params from './src/params';

import Field from './src/components/Field';

import MineFields from './src/components/MineFields';

import {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  invertFlag,
  showMines
} from './src/functions';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultyLevel);
  }

  createState = () => {

    const cols = params.getColumnsAmount();

    const rows = params.getRowsAmount();

    return {
      board: createMineBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }

  }

  onOpenField = (row, column) => {

    const board = cloneBoard(this.state.board);

    openField(board, row, column);

    const lost = hadExplosion(board);

    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeu!', 'Que pena, você perdeu!')
    } else {
      if (won) {
        Alert.alert('Parabéns!', 'Você venceu!')
      }
    }

    this.setState({ board, lost, won });

  }

  onSelectField = (row, column) => {

    const board = cloneBoard(this.state.board);

    invertFlag(board, row, column);

    const won = wonGame(board);

    if (won) {
      showMines(board);
      Alert.alert('Parabéns!', 'Você venceu!')
    }

    this.setState({ board, won });
  }

  render() {
    return (
      <View style={style.container} >
        <View style={style.board}>
          <MineFields onSelectField={this.onSelectField} onOpenField={this.onOpenField} board={this.state.board} />
        </View>
      </View>
    )
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});


