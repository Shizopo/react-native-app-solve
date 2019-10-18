export const onSubmit = (
  cardNum,
  expirationDate,
  cardCvv,
  firstName,
  lastName,
  question,
  answer
) => {
  return {
    type: "ON_SUBMIT",
    payload: {
      cardNum,
      expirationDate,
      cardCvv,
      firstName,
      lastName,
      question,
      answer,
    },
  };
};
