// @flow

import FormBody from "./FormBody";
import { submitForm } from "../../actions/onSubmit";
import { connect } from "react-redux";

const FormBodyContainer = connect(
  state => ({
    form: state.creditCardReducer,
  }),
  {
    submitForm,
  }
)(FormBody);

export default FormBodyContainer;
