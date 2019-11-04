// @flow

import React, { useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { connect } from "react-redux";
import { creditCardReducer } from "../../reducers/creditCardReducer";
import { useFormResult } from "./useFormResult";
import type { Data } from "../../types/formDataTypes.js";

type Props = {
  form: {},
  isShown: boolean,
  startTimer: () => void,
  requestStatus: string,
  err?: string,
};

type State = {};

const FormResult = form => {
  const { cardNum, cardType, firstName, lastName, isValid } = form.form.data;
  const requestStatus = form.form.RequestStatus;

  const { isShown } = useFormResult(cardNum, cardType, firstName, lastName);

  if (requestStatus !== "isLoaded" || !isShown) {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }

  if (!isValid) {
    return (
      <View style={styles.formSection}>
        <Text style={styles.cardDetails}>Error</Text>
      </View>
    );
  }

  if (requestStatus === "isLoaded" && isValid) {
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
  }
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

const FormResultContainer = connect(state => ({
  form: state.creditCardReducer,
}))(FormResult);

export default FormResultContainer;
