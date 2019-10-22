const initialValue = {
  isLoading: false,
  isLoaded: false,
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

export const formReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FORM_SUBMIT_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FORM_SUBMIT_FAILURE":
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        err: action.err,
      };
    case "FORM_SUBMIT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload,
      };

    default:
      return state;
  }
};
