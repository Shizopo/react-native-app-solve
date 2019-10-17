// import React from "react";
// import {
//   Platform,
//   StyleSheet,
//   FlatList,
//   View,
//   Text,
//   Image,
// } from "react-native";

const formServer = data => {
  return new Promise(resolve => {
    setTimeout(() => resolve(validate(data)), 2000);
  });
};

// const serverValidation = fn => {
//   return fn(data).then(() => {
//     console.log("data received");
//   });
// };

const serverValidation = data => formServer(data);
const callAPI = data => serverValidation(data);

// callAPI(data);

// serverValidation(formServer);

const validate = data => {
  let formData = { ...data };
  let valid = { ...data.valid };

  console.log(valid);
  console.log(formData);
  let dataFields = Object.keys(formData);
  dataFields.forEach(el => {
    switch (el) {
      case "cardNum": {
        let cardNumReg = /^[0-9]{16}/;
        valid.cardNum = cardNumReg.test(data.cardNum) ? true : false;
        console.log("I validated cardNum and get " + valid.cardNum);
        break;
      }
      case "expirationDate": {
        let expirationDateReg = /^(0[1-9]|1[0-2])\/\d{2}$/;
        valid.expirationDate = expirationDateReg.test(data.expirationDate)
          ? true
          : false;
        console.log(
          "I validated expiration date and get " + valid.expirationDate
        );
        break;
      }
      case "cardCvv": {
        let cardCvvReg = /^[0-9]{3,4}$/;
        valid.cardCvv = cardCvvReg.test(data.cardCvv) ? true : false;
        console.log("I validated card cvv and get " + valid.cardCvv);
        break;
      }
      case "firstName": {
        valid.firstName =
          data.firstName && data.firstName.length < 2 ? false : true;
        console.log("I validated first name and get " + valid.firstName);
        break;
      }
      case "lastName": {
        valid.lastName =
          data.lastName && data.lastName.length < 3 ? false : true;
        console.log("I validated last name and get " + valid.lastName);
        break;
      }
      case "question": {
        valid.question =
          data.question && data.question.length < 10 ? false : true;
        console.log("I validated security question and get " + valid.question);
        break;
      }
      case "answer": {
        valid.answer = data.answer && data.answer.length < 3 ? false : true;
        console.log("I validated security answer and get " + valid.answer);
        break;
      }
      default: {
        console.log("something else");
        break;
      }
    }
  });
  console.log(valid);
  console.log(formData);
  return valid;
  //   this.setState({ valid, [name]: value }, () => console.log(this.state));
};

export default callAPI;
