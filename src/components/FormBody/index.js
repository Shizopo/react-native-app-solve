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
import CardDetails from "../CardDetails";
import { connect } from "react-redux";
import { submitForm } from "../../actions/onSubmit";
import { formReducer } from "../../reducers/formReducer";
// import { handleCardType } from "../../actions/handleCardType";
// import { cardTypeReducer } from "../../reducers/cardTypeReducer";

type Props = {
  onSubmit: (
    cardNum?: string,
    firstName?: string,
    lastName?: string,
    isValid: boolean
  ) => void,
};

type StateValidate = {
  cardNum: boolean,
  expirationDate: boolean,
  cardCvv: boolean,
  firstName: boolean,
  lastName: boolean,
  question: boolean,
  answer: boolean,
};

type State = {
  cardNum?: string,
  expirationDate?: string,
  cardCvv?: string,
  firstName?: string,
  lastName?: string,
  question?: string,
  answer?: string,
  valid: StateValidate,
  isValid: boolean,
};

class FormBody extends React.Component<Props, State> {
  state = {
    cardNum: undefined,
    expirationDate: undefined,
    cardCvv: undefined,
    firstName: undefined,
    lastName: undefined,
    question: undefined,
    answer: undefined,
    valid: {
      cardNum: true,
      expirationDate: true,
      cardCvv: true,
      firstName: true,
      lastName: true,
      question: true,
      answer: true,
    },
    isValid: true,
  };

  handleInput = (name, value) => {
    this.setState({ [name]: value });
  };

  // eslint-disable-next-line no-undef
  handleSubmit = () => {
    this.props.submitForm(this.state);
    return true;
  };

  render() {
    let { valid } = this.props.form.data;
    return (
      <View>
        <View style={styles.formSection}>
          <Text style={styles.formHeading}>Checkout form</Text>

          <Text style={styles.label}>Card number</Text>
          <TextInput
            style={[
              styles.input,
              {
                borderBottomColor: valid.cardNum === false ? "#ff0000" : "#000",
              },
            ]}
            type="text"
            name="cardNum"
            id="cardNum"
            minLength={16}
            maxLength={16}
            placeholder="1111222233334444"
            value={this.state.value}
            onChangeText={val => this.handleInput("cardNum", val)}
          />

          <View className="creditCardSecurity">
            <Text style={styles.label}>Card expiry date</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderBottomColor:
                    valid.expirationDate === false ? "#ff0000" : "#000",
                },
              ]}
              type="text"
              name="expirationDate"
              id="expirationDate"
              maxLength={5}
              placeholder="MM/YY"
              value={this.state.value}
              onChangeText={val => this.handleInput("expirationDate", val)}
            />

            <Text style={styles.label}>CVV2/CVC2</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderBottomColor:
                    valid.cardCvv === false ? "#ff0000" : "#000",
                },
              ]}
              type="text"
              inputMode="numeric"
              name="cardCvv"
              id="cardCvv"
              minLength={3}
              maxLength={4}
              placeholder="1234"
              value={this.state.value}
              onChangeText={val => this.handleInput("cardCvv", val)}
            />
          </View>

          <Text style={styles.label}>First name</Text>
          <TextInput
            style={[
              styles.input,
              {
                borderBottomColor:
                  valid.firstName === false ? "#ff0000" : "#000",
              },
            ]}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Jane"
            value={this.state.value}
            onChangeText={val => this.handleInput("firstName", val)}
          />

          <Text style={styles.label}>Last name</Text>
          <TextInput
            style={[
              styles.input,
              {
                borderBottomColor:
                  valid.lastName === false ? "#ff0000" : "#000",
              },
            ]}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
            value={this.state.value}
            onChangeText={val => this.handleInput("lastName", val)}
          />

          <Text style={styles.label}>Security question</Text>
          <TextInput
            style={[
              styles.input,
              {
                borderBottomColor:
                  valid.question === false ? "#ff0000" : "#000",
              },
            ]}
            type="text"
            name="question"
            id="question"
            placeholder="Your security question"
            value={this.state.value}
            onChangeText={val => this.handleInput("question", val)}
          />

          <Text style={styles.label}>Security answer</Text>
          <TextInput
            style={[
              styles.input,
              {
                borderBottomColor: valid.answer === false ? "#ff0000" : "#000",
              },
            ]}
            type="text"
            name="answer"
            id="answer"
            placeholder="Your security answer"
            value={this.state.value}
            onChangeText={val => this.handleInput("answer", val)}
          />
          <Button
            type="submit"
            title="Submit"
            style={styles.submitButton}
            onPress={this.handleSubmit}
          />
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          style={styles.loadingModal}
          visible={this.props.form.isLoading}
        >
          <ActivityIndicator
            style={{ marginTop: 350 }}
            size="large"
            color="#0000ff"
          />
        </Modal>
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

const FormBodyContainer = connect(
  state => ({
    form: state.formReducer,
  }),
  {
    submitForm,
  }
)(FormBody);

export { FormBodyContainer as FormBody };
