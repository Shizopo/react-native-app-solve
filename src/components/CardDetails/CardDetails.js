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

type Props = {
  cardNum?: string,
  cardType?: string,
  onCardTypeChange: (cardType?: string) => void,
};

type State = {
  cardType?: string,
};

class CardDetails extends React.Component<Props, State> {
  state = {
    cardType: undefined,
  };

  checkCardType = () => {
    let cardNum = this.props.cardNum;
    let cardType = this.props.cardType;
    if (cardNum && cardNum.length === 16) {
      parseInt(cardNum.slice(-4), 10) <= 2000
        ? (cardType = "MasterCard")
        : (cardType = "Visa");
    }
    this.props.onCardTypeChange(cardType);
  };

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.cardNum === this.props.cardNum ||
      !this.props.cardNum ||
      this.props.cardNum.length < 16
    ) {
      return;
    }
    this.checkCardType();
  }

  render() {
    console.log("CardDetails component rendered");
    return (
      <View>
        <Text>{this.props.cardType}</Text>
      </View>
    );
  }
}

export default CardDetails;
