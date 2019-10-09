import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";

type Props = {
  cardNum?: string,
  cardType?: string,
  firstName?: string,
  lastName?: string,
  isValid: boolean,
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
    if (
      prevProps.cardNum === this.props.cardNum &&
      prevProps.firstName === this.props.firstName &&
      prevProps.lastName === this.props.lastName
    ) {
      return;
    }

    if (!this.state.isShown) {
      return this.startTimer();
    }
  }

  render() {
    const { cardNum, firstName, lastName, cardType, isValid } = this.props;
    console.log("FormResult component rendered");
    if (!this.state.isShown) {
      return null;
    }

    if (!isValid || !cardNum) {
      return (
        <View>
          <Text>Error</Text>
        </View>
      );
    }
    return (
      <View>
        <Text>Card number: {cardNum.slice(-4)}</Text>
        <Text>Card type: {cardType}</Text>
        <Text>First Name: {firstName}</Text>
        <Text>Last Name: {lastName}</Text>
      </View>
    );
  }
}

export default FormResult;
