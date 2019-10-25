// @flow

type DataIsValid = {
  cardNum: boolean,
  expirationDate: boolean,
  cardCvv: boolean,
  firstName: boolean,
  lastName: boolean,
  question: boolean,
  answer: boolean,
};

export type Data = {
  cardNum: ?string,
  expirationDate: ?string,
  cardCvv?: string,
  firstName?: string,
  lastName?: string,
  question?: string,
  answer?: string,
  valid: DataIsValid,
  isValid: boolean,
  cardType?: string,
};
