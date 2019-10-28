// @flow

import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Modal,
} from "react-native";
import type { Data } from "../../types/formDataTypes";

type Props = {
  data: Data,
  requestStatus: string,
  handleInput: (name: string, value: string) => void,
  handleSubmit: () => void,
};

const FormBody = ({
  data,
  requestStatus,
  handleInput,
  handleSubmit,
}: Props) => {
  return (
    <View>
      <View style={styles.formSection}>
        <Text style={styles.formHeading}>Checkout form</Text>

        <Text style={styles.label}>Card number</Text>
        <TextInput
          style={[
            styles.input,
            {
              borderBottomColor:
                data.valid.cardNum === false ? "#ff0000" : "#000",
            },
          ]}
          maxLength={16}
          placeholder="1111222233334444"
          value={data.value}
          onChangeText={val => handleInput("cardNum", val)}
        />

        <View>
          <Text style={styles.label}>Card expiry date</Text>
          <TextInput
            style={[
              styles.input,
              {
                borderBottomColor:
                  data.valid.expirationDate === false ? "#ff0000" : "#000",
              },
            ]}
            maxLength={5}
            placeholder="MM/YY"
            value={data.value}
            onChangeText={val => handleInput("expirationDate", val)}
          />

          <Text style={styles.label}>CVV2/CVC2</Text>
          <TextInput
            style={[
              styles.input,
              {
                borderBottomColor:
                  data.valid.cardCvv === false ? "#ff0000" : "#000",
              },
            ]}
            maxLength={4}
            placeholder="1234"
            value={data.value}
            onChangeText={val => handleInput("cardCvv", val)}
          />
        </View>

        <Text style={styles.label}>First name</Text>
        <TextInput
          style={[
            styles.input,
            {
              borderBottomColor:
                data.valid.firstName === false ? "#ff0000" : "#000",
            },
          ]}
          placeholder="Jane"
          value={data.value}
          onChangeText={val => handleInput("firstName", val)}
        />

        <Text style={styles.label}>Last name</Text>
        <TextInput
          style={[
            styles.input,
            {
              borderBottomColor:
                data.valid.lastName === false ? "#ff0000" : "#000",
            },
          ]}
          placeholder="Doe"
          value={data.value}
          onChangeText={val => handleInput("lastName", val)}
        />

        <Text style={styles.label}>Security question</Text>
        <TextInput
          style={[
            styles.input,
            {
              borderBottomColor:
                data.valid.question === false ? "#ff0000" : "#000",
            },
          ]}
          placeholder="Your security question"
          value={data.value}
          onChangeText={val => handleInput("question", val)}
        />

        <Text style={styles.label}>Security answer</Text>
        <TextInput
          style={[
            styles.input,
            {
              borderBottomColor:
                data.valid.answer === false ? "#ff0000" : "#000",
            },
          ]}
          placeholder="Your security answer"
          value={data.value}
          onChangeText={val => handleInput("answer", val)}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        style={styles.loadingModal}
        visible={requestStatus === "isLoading"}
      >
        <ActivityIndicator
          style={{ marginTop: 350 }}
          size="large"
          color="#0000ff"
        />
      </Modal>
    </View>
  );
};
// }

const styles = StyleSheet.create({
  formSection: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    alignSelf: "center",
    width: "80%",
  },
  formHeading: {
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 26,
    fontWeight: "600",
  },
  label: {
    paddingTop: 10,
    fontSize: 16,
  },
  input: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  invalidInput: {
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  submitButton: {
    margin: 40,
  },
  loadingModal: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default FormBody;
