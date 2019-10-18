const initialValue = {
  cardNum: "",
  expirationDate: "",
  cardCvv: "",
  firstName: "",
  lastName: "",
  question: "",
  answer: "",
};

export const formReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ON_SUBMIT":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
