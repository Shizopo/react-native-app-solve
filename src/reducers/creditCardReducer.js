// @flow

import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE,
} from "../types/actionTypes";
import { RequestStatus } from "../utils/RequestStatus";

type State = {
  RequestStatus: Object,
  data: {
    cardNum: string,
    expirationDate: string,
    cardCvv: string,
    firstName: string,
    lastName: string,
    question: string,
    answer: string,
    valid: {
      cardNum: boolean,
      expirationDate: boolean,
      cardCvv: boolean,
      firstName: boolean,
      lastName: boolean,
      question: boolean,
      answer: boolean,
    },
    isValid: boolean,
  },
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
  action: Object
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
