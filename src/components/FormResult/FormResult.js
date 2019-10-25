// @flow

import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { creditCardReducer } from "../../reducers/creditCardReducer";

type Props = {
  cardNum?: string,
  cardType?: string,
  firstName?: string,
  lastName?: string,
  isValid: boolean,
  form: Object,
};

type State = {
  isShown: boolean,
  timerId?: TimeoutID,
  timerStart?: number,
};

class FormResult extends React.Component<Props, State> {
  state = {
    isShown: false,
    timerId: undefined,
    timerStart: undefined,
  };

  startTimer = () => {
    let timerId = setTimeout(() => {
      this.setState(
        {
          isShown: false,
          timerId: undefined,
          timerStart: undefined,
        },
        () => console.log("expired result")
      );
    }, 5000);

    this.setState({
      isShown: true,
      timerId,
      timerStart: Date.now(),
    });
  };

  componentDidUpdate(prevProps: Props) {
    let { data } = this.props.form;
    let prevData = {};
    Object.assign(prevData, prevProps.form.data);
    if (
      prevData.cardNum === data.cardNum &&
      prevData.firstName === data.firstName &&
      prevData.lastName === data.lastName
    ) {
      return;
    }

    if (!this.state.isShown) {
      return this.startTimer();
    }
  }

  render() {
    console.log("Result rendered");
    const {
      cardNum,
      firstName,
      lastName,
      cardType,
      isValid,
    } = this.props.form.data;

    if (!this.state.isShown || !this.props.form.requestStatus === "isLoaded") {
      return null;
    }

    if (!isValid || this.props.form.err) {
      return (
        <View style={styles.formSection}>
          <Text style={styles.cardDetails}>Error</Text>
        </View>
      );
    }
    return (
      <View style={styles.formSection}>
        <Text style={styles.cardDetails}>Card number: {cardNum.slice(-4)}</Text>
        <Text style={styles.cardDetails}>Card type: {cardType}</Text>
        <Text style={styles.cardDetails}>First Name: {firstName}</Text>
        <Text style={styles.cardDetails}>Last Name: {lastName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formSection: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    alignSelf: "center",
    width: "80%",
  },
  cardDetails: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
  },
});

export default FormResult;
