/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import FormBody from "./FormBody";
import FormResult from "./FormResult";
import EndlessList from "./EndlessList";

type Props = {};

type State = {
  cardNum?: string,
  cardType?: string,
  firstName?: string,
  lastName?: string,
  isValid: boolean,
};

console.disableYellowBox = true;

class App extends React.Component<Props, State> {
  state = {
    cardNum: undefined,
    cardType: undefined,
    firstName: undefined,
    lastName: undefined,
    isValid: true,
  };

  handleSubmit = (
    cardNum?: string,
    firstName?: string,
    lastName?: string,
    isValid: boolean
  ) => {
    this.setState({
      cardNum: cardNum,
      firstName: firstName,
      lastName: lastName,
      isValid: isValid,
    });
  };

  handleCardTypeChange = (cardType: string | void) => {
    this.setState({ cardType });
  };

  render() {
    return (
      <EndlessList />
      // <ScrollView>
      //   <View style={styles.container}>
      //     <FormBody
      //       onSubmit={this.handleSubmit}
      //       onCardTypeChange={this.handleCardTypeChange}
      //     />
      //     <FormResult
      //       cardNum={this.state.cardNum}
      //       cardType={this.state.cardType}
      //       firstName={this.state.firstName}
      //       lastName={this.state.lastName}
      //       isValid={this.state.isValid}
      //     />
      //   </View>

      //   <View style={styles.container}>

      //   </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    paddingTop: 70,
    backgroundColor: "#fafafa",
    height: "100%",
  },
});

export default App;
