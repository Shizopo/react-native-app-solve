// @flow

import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE,
} from "../types/actionTypes";
import { RequestStatus } from "../utils/RequestStatus";
import type { Data } from "../types/formDataTypes.js";

type State = {
  RequestStatus: string,
  data: Data,
};

const initialValue = {
  RequestStatus: RequestStatus.Default,
  data: {
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
  },
};

export const creditCardReducer = (
  state: State = initialValue,
  action: {
    type: string,
    err?: string,
    payload?: Data,
  }
) => {
  switch (action.type) {
    case FORM_SUBMIT_REQUEST:
      return {
        ...state,
        RequestStatus: RequestStatus.isLoading,
      };
    case FORM_SUBMIT_FAILURE:
      return {
        ...state,
        RequestStatus: RequestStatus.isLoaded,
        err: action.err,
      };
    case FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        RequestStatus: RequestStatus.isLoaded,
        data: action.payload,
      };

    default:
      return state;
  }
};
