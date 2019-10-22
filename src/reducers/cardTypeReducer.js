const initialValue = {
  //   cardNum: "",
  cardType: "MasterCard",
};

export const cardTypeReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "CARD_TYPE_CHANGE":
      return {
        ...state,
        cardType: action.payload,
      };
  }
};
