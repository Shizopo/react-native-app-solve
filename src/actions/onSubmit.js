// @flow

import { creditCardService } from "../services/CreditCardService";
import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE,
} from "../types/actionTypes";

import type { Data } from "../types/formDataTypes.js";

// type DataIsValid = {
//   cardNum: boolean,
//   expirationDate: boolean,
//   cardCvv: boolean,
//   firstName: boolean,
//   lastName: boolean,
//   question: boolean,
//   answer: boolean,
// };

// type Data = {
//   cardNum: ?string,
//   expirationDate: ?string,
//   cardCvv?: string,
//   firstName?: string,
//   lastName?: string,
//   question?: string,
//   answer?: string,
//   valid: DataIsValid,
//   isValid: boolean,
//   cardType?: string,
// };

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
