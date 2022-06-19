import React from "react";

import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Button from "./src/components/Button";

import Display from "./src/components/Display";

export default class App extends React.Component {

  state = {
    displayValue: "0"
  }

  addDigit = n => {
    const { displayValue } = this.state;

    if (displayValue === "0") {
      this.setState({ displayValue: n });
    } else {
      this.setState({ displayValue: displayValue + n });
    }
  }

  clearDisplay = () => {
    this.setState({ displayValue: "0" });
  }

  addOperation = operation => {
    const { displayValue } = this.state;

    const newValue = parseFloat(displayValue);

    const operations = ["/", "*", "-", "+"];

    if (operations.includes(operation)) {
      this.setState({ displayValue: `${newValue} ${operation}` });
    }
  }



  render() {
    return (
      <SafeAreaView style={style.container}>
        <Display value={this.state.displayValue} />
        <View style={style.buttons}>
          <Button label="AC" triple onPress={this.clearDisplay} />
          <Button label="/" operation onPress={this.addOperation} />
          <Button label="7" onPress={this.addDigit} />
          <Button label="8" onPress={this.addDigit} />
          <Button label="9" onPress={this.addDigit} />
          <Button label="*" operation onPress={this.addOperation} />
          <Button label="4" onPress={this.addDigit} />
          <Button label="5" onPress={this.addDigit} />
          <Button label="6" onPress={this.addDigit} />
          <Button label="-" operation onPress={this.addOperation} />
          <Button label="1" onPress={this.addDigit} />
          <Button label="2" onPress={this.addDigit} />
          <Button label="3" onPress={this.addDigit} />
          <Button label="+" operation onPress={this.addOperation} />
          <Button label="0" double onPress={this.addDigit} />
          <Button label="." onPress={this.addDigit} />
          <Button label="=" operation onPress={this.addOperation} />
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