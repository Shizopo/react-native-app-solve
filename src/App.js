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
      <>
        <View>
          <FormBody
            onSubmit={this.handleSubmit}
            onCardTypeChange={this.handleCardTypeChange}
          />
          <FormResult
            cardNum={this.state.cardNum}
            cardType={this.state.cardType}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            isValid={this.state.isValid}
          />
        </View>
      </>
    );
  }
}

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: "absolute",
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "600",
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: "400",
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: "700",
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: "600",
//     padding: 4,
//     paddingRight: 12,
//     textAlign: "right",
//   },
// });

export default App;
