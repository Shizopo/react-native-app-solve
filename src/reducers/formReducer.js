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
      console.log(action);
      return {
        ...state,
        isLoading: true,
      };
    case "FORM_SUBMIT_FAILURE":
      console.log("IM A DRUNK REDUCER, LOOK AT ME!", action);
      console.log(action.err);
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        err: action.err,
      };
    case "FORM_SUBMIT_SUCCESS":
      console.log("IM A LUCKY REDUCER, LOOK AT ME!", action);
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
