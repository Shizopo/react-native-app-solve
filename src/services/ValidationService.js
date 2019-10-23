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

type Data = {
  cardNum: ?string,
  expirationDate: ?string,
  cardCvv?: string,
  firstName?: string,
  lastName?: string,
  question?: string,
  answer?: string,
  valid: DataIsValid,
  isValid: boolean,
  cardType: string,
};

const callAPI = (data: Data) => {
  return new Promise<Data | string>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      reject(new Error("Something wrong"));
    }, 500);
  });
};

const callValidationApi = (data: Data) => callAPI(validate(data));

const handleCardType = cardNumber => {
  let cardType = "";
  if (cardNumber && cardNumber.length === 16) {
    parseInt(cardNumber.slice(-4), 10) <= 2000
      ? (cardType = "MasterCard")
      : (cardType = "Visa");
  }
  return cardType;
};

const validate = (data: Data) => {
  let formData = { ...data };
  let valid = { ...data.valid };

  let dataFields = Object.keys(formData);

  dataFields.forEach((el: string) => {
    switch (el) {
      case "cardNum": {
        const cardNumReg = /^[0-9]{16}/;
        if (data.cardNum) {
          valid.cardNum = cardNumReg.test(data.cardNum) ? true : false;
        } else {
          valid.cardNum = false;
        }
        // console.log("I validated cardNum and get " + valid.cardNum);
        break;
      }
      case "expirationDate": {
        const expirationDateReg = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (data.expirationDate) {
          valid.expirationDate = expirationDateReg.test(data.expirationDate)
            ? true
            : false;
        } else {
          valid.expirationDate = false;
        }
        // console.log(
        //   "I validated expiration date and get " + valid.expirationDate
        // );
        break;
      }
      case "cardCvv": {
        const cardCvvReg = /^[0-9]{3,4}$/;
        if (data.cardCvv) {
          valid.cardCvv = cardCvvReg.test(data.cardCvv) ? true : false;
        } else {
          valid.cardCvv = false;
        }
        // console.log("I validated card cvv and get " + valid.cardCvv);
        break;
      }
      case "firstName": {
        valid.firstName =
          !data.firstName || data.firstName.length < 2 ? false : true;
        // console.log("I validated first name and get " + valid.firstName);
        break;
      }
      case "lastName": {
        valid.lastName =
          !data.lastName || data.lastName.length < 3 ? false : true;
        // console.log("I validated last name and get " + valid.lastName);
        break;
      }
      case "question": {
        valid.question =
          !data.question || data.question.length < 10 ? false : true;
        // console.log("I validated security question and get " + valid.question);
        break;
      }
      case "answer": {
        valid.answer = !data.answer || data.answer.length < 3 ? false : true;
        // console.log("I validated security answer and get " + valid.answer);
        break;
      }
      default: {
        // console.log("something else");
        break;
      }
    }
  });

  formData.cardType = handleCardType(data.cardNum);

  for (let key in valid) {
    if (valid[key] === false) {
      formData.isValid = false;
    }
  }

  Object.assign(formData.valid, valid);

  return formData;
};

class CreditCardService {
  validateCreditCard(data: Data) {
    return callValidationApi(data);
  }
}

const creditCardService = new CreditCardService();

export { creditCardService };
