// @flow

import { connect } from "react-redux";
import FormResult from "./FormResult";

const FormResultContainer = connect(state => ({
  form: state.creditCardReducer,
}))(FormResult);

export default FormResultContainer;
