// @flow

import { creditCardService } from "../services/CreditCardService";
import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE,
} from "../types/actionTypes";

import type { Data } from "../types/formDataTypes.js";

export const submitForm = (formData: Data) => (
  dispatch: ({ type: string, payload?: Data }) => void,
  getState: () => void
) => {
  dispatch({
    type: FORM_SUBMIT_REQUEST,
  });
  creditCardService
    .validateCreditCard(formData)
    .then((resp: Data) => {
      dispatch({ type: FORM_SUBMIT_SUCCESS, payload: resp });
    })
    .catch((err: string) => {
      dispatch({ type: FORM_SUBMIT_FAILURE, err });
    });
};
