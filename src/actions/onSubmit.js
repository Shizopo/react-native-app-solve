// @flow

import { creditCardService } from "../services/ValidationService";
import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE,
} from "../types/actionTypes";

export const submitForm = (formData: Object) => (
  dispatch: Object => void,
  getState: Object => void
) => {
  console.log(typeof dispatch);
  console.log(typeof getState);
  dispatch({
    type: FORM_SUBMIT_REQUEST,
  });
  creditCardService
    .validateCreditCard(formData)
    .then(resp => {
      dispatch({ type: FORM_SUBMIT_SUCCESS, payload: resp });
    })
    .catch(err => {
      dispatch({ type: FORM_SUBMIT_FAILURE, err });
    });
};
