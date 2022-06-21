import React from "react";

import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Button from "./src/components/Button";

import Display from "./src/components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};

export default class App extends React.Component {

  state = { ...initialState };

  addDigit = n => {

    const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay;

    if (n === "." && clearDisplay && this.state.displayValue.includes(".")) return;

    const currentValue = clearDisplay && n !== "." ? "" : this.state.displayValue;

    const displayValue = currentValue + n;

    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {

      const newValue = parseFloat(displayValue);

      const values = [...this.state.values];

      values[this.state.current] = newValue;

      this.setState({ values });

    }

  }

  clearMemory = () => {
    this.setState({ ...initialState });
  }

  setOperation = operation => {

    if (this.state.current === 0) {

      this.setState({ operation, current: 1, clearDisplay: true });

    } else {

      const equals = operation === "=";

      const values = [...this.state.values];

      try {

        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);

      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;

      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values
      });

    }
  }



  render() {
    return (
      <SafeAreaView style={style.container}>
        <Display value={this.state.displayValue} />
        <View style={style.buttons}>
          <Button label="AC" triple onPress={this.clearMemory} />
          <Button label="/" operation onPress={this.setOperation} />
          <Button label="7" onPress={this.addDigit} />
          <Button label="8" onPress={this.addDigit} />
          <Button label="9" onPress={this.addDigit} />
          <Button label="*" operation onPress={this.setOperation} />
          <Button label="4" onPress={this.addDigit} />
          <Button label="5" onPress={this.addDigit} />
          <Button label="6" onPress={this.addDigit} />
          <Button label="-" operation onPress={this.setOperation} />
          <Button label="1" onPress={this.addDigit} />
          <Button label="2" onPress={this.addDigit} />
          <Button label="3" onPress={this.addDigit} />
          <Button label="+" operation onPress={this.setOperation} />
          <Button label="0" double onPress={this.addDigit} />
          <Button label="." onPress={this.addDigit} />
          <Button label="=" operation onPress={this.setOperation} />
        </View>
      </SafeAreaView>
    );
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexGrow: 2
  }
});