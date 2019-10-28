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
import type { Data } from "../../types/formDataTypes.js";

type Props = {
  data: Data,
  isShown: boolean,
  requestStatus: string,
  err?: string,
};

type State = {};

const FormResult = ({ data, isShown, requestStatus, err }: Props) => {
  const { cardNum, firstName, lastName, cardType, isValid } = data;

  if (!isShown || !requestStatus === "isLoaded") {
    return null;
  }

  if (!isValid || err) {
    return (
      <View style={styles.formSection}>
        <Text style={styles.cardDetails}>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.formSection}>
      <Text style={styles.cardDetails}>
        Card number: {cardNum ? cardNum.slice(-4) : false}
      </Text>
      <Text style={styles.cardDetails}>Card type: {cardType}</Text>
      <Text style={styles.cardDetails}>First Name: {firstName}</Text>
      <Text style={styles.cardDetails}>Last Name: {lastName}</Text>
    </View>
  );
};

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
