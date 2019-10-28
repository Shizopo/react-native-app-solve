// @flow

import React from "react";
import FormBody from "./FormBody";
import { submitForm } from "../../actions/onSubmit";
import { creditCardReducer } from "../../reducers/creditCardReducer";
import { connect } from "react-redux";

import type { Data } from "../../types/formDataTypes";

type Props = {
  submitForm: Data => void,
  form: {
    RequestStatus: string,
    data: Data,
  },
};

type State = Data;

class FormBodyContainer extends React.Component<Props, State> {
  state = {
    cardNum: "",
    expirationDate: "",
    cardCvv: "",
    firstName: "",
    lastName: "",
    question: "",
    answer: "",
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

  handleInput = (name: string, value: string) => {
    this.setState({ [name]: value });
  };

  // eslint-disable-next-line no-undef
  handleSubmit = () => {
    this.props.submitForm(this.state);
  };

  render() {
    let { data } = this.props.form;
    let requestStatus = this.props.form.RequestStatus;
    return (
      <FormBody
        data={data}
        requestStatus={requestStatus}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const FormBodyReduxContainer = connect(
  state => ({
    form: state.creditCardReducer,
  }),
  {
    submitForm,
  }
)(FormBodyContainer);

export default FormBodyReduxContainer;
