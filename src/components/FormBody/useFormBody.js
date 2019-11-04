// @flow

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import type { Data } from "../../types/formDataTypes";

export const useFormBody = (submitForm: Data => void) => {
  const [data, setData] = useState({
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
  });

  const handleInput = useCallback(
    (name: string, value: string) => {
      //   console.log(name, value);
      setData({ ...data, [name]: value });
    },
    [data]
  );

  const dispatch = useDispatch();

  // eslint-disable-next-line no-undef
  const handleSubmit = useCallback(() => {
    console.log("yay");
    console.log(data);
    dispatch(submitForm(data));
    console.log("second", data);
  });

  return { data, handleInput, handleSubmit };
};
