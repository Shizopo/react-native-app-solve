// @flow

import React from "react";
import { connect } from "react-redux";
import FormResult from "./FormResult";
import { creditCardReducer } from "../../reducers/creditCardReducer";
import type { Data } from "../../types/formDataTypes.js";

type Props = {
  form: {
    requestStatus: string,
    data: Data,
    err?: string,
  },
};

type State = {
  isShown: boolean,
  timerId?: TimeoutID,
  timerStart?: number,
};

class FormResultContainer extends React.Component<Props, State> {
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
    return (
      <FormResult
        data={this.props.form.data}
        isShown={this.state.isShown}
        requestStatus={this.props.form.requestStatus}
        err={this.props.form.err}
      />
    );
  }
}

const FormResultReduxContainer = connect(state => ({
  form: state.creditCardReducer,
}))(FormResultContainer);

export default FormResultReduxContainer;
