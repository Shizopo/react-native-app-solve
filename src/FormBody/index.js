import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import CardDetails from "../CardDetails";
import callAPI from "../FormServer";

type Props = {
  onSubmit: (
    cardNum?: string,
    firstName?: string,
    lastName?: string,
    isValid: boolean
  ) => void,
  onCardTypeChange: (cardType: string | void) => void,
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

type StateErrors = {
  cardNum: string,
  expirationDate: string,
  cardCvv: string,
  firstName: string,
  lastName: string,
  question: string,
  answer: string,
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
  errors: StateErrors,
  isValid: boolean,
  value?: string,
};

class FormBody extends React.Component<Props, State> {
  state = {
    // value: undefined,
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
    errors: {
      cardNum: "",
      expirationDate: "",
      cardCvv: "",
      firstName: "",
      lastName: "",
      question: "",
      answer: "",
    },
    isValid: true,
  };

  pushData = (data: Array) => {
    callAPI(data)
      // .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        this.setState({ valid: resp });
      })
      .catch(err => console.log(err));
  };

  // validate = (name, value) => {
  //   let valid = { ...this.state.valid };

  //   console.log(name, value, valid);

  //   switch (name) {
  //     case "cardNum": {
  //       let cardNumReg = /^[0-9]{16}/;
  //       valid.cardNum = cardNumReg.test(value) ? true : false;
  //       break;
  //     }
  //     case "expirationDate": {
  //       let expirationDateReg = /^(0[1-9]|1[0-2])\/\d{2}$/;
  //       valid.expirationDate = expirationDateReg.test(value) ? true : false;
  //       break;
  //     }
  //     case "cardCvv": {
  //       let cardCvvReg = /^[0-9]{3,4}$/;
  //       valid.cardCvv = cardCvvReg.test(value) ? true : false;
  //       break;
  //     }
  //     case "firstName": {
  //       valid.firstName = value.length < 2 ? false : true;
  //       break;
  //     }
  //     case "lastName": {
  //       valid.lastName = value.length < 3 ? false : true;
  //       break;
  //     }
  //     case "question": {
  //       valid.question = value.length < 10 ? false : true;
  //       break;
  //     }
  //     case "answer": {
  //       valid.answer = value.length < 3 ? false : true;
  //       break;
  //     }
  //     default: {
  //       console.log("nothing to validate");
  //       break;
  //     }
  //   }

  //   this.setState({ valid, [name]: value }, () => console.log(this.state));
  // };

  handleInput = (name, value) => {
    this.setState(
      { [name]: value }
      //    () => {
      //   this.validate(name, value);
      // }
    );
  };

  // eslint-disable-next-line no-undef
  handleSubmit = () => {
    let valid = { ...this.state.valid };
    let isValid = this.state.isValid;
    let errors = { ...this.state.errors };

    // for (let key in valid) {
    //   if (valid[key] !== true) {
    //     this.setState(
    //       prevState => ({
    //         errors: {
    //           ...prevState.errors,
    //           [key]: "Error",
    //         },
    //       }),
    //       () => console.log(this.state.errors)
    //     );

    //     isValid = false;
    //     this.setState({ isValid });
    //   } else {
    //     this.setState(
    //       prevState => ({
    //         errors: {
    //           ...prevState.errors,
    //           [key]: "",
    //         },
    //       }),
    //       () => console.log(this.state.errors)
    //     );
    //   }
    // }

    this.setState({ isValid }, () => {
      this.props.onSubmit(
        this.state.cardNum,
        this.state.firstName,
        this.state.lastName,
        this.state.isValid
      );
    });

    // this.pushData([
    //   this.state.cardNum,
    //   this.state.firstName,
    //   this.state.lastName,
    //   this.state.isValid,
    // ]);

    this.pushData(this.state);

    return true;
  };

  render() {
    let { valid } = this.state;
    let { errors } = this.state;
    console.log(valid);

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

          <CardDetails
            cardNum={this.state.cardNum}
            onCardTypeChange={this.props.onCardTypeChange}
          />
          <Button
            type="submit"
            title="Submit"
            style={styles.submitButton}
            onPress={this.handleSubmit}
          />
        </View>
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
});

export default FormBody;
