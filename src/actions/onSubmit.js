import { callAPI } from "../services/ValidationService";

export const submitForm = formData => (dispatch, getState) => {
  dispatch({
    type: "FORM_SUBMIT_REQUEST",
  });
  callAPI(formData)
    .then(resp => {
      dispatch({ type: "FORM_SUBMIT_SUCCESS", payload: resp });
    })
    .catch(err => {
      dispatch({ type: "FORM_SUBMIT_FAILURE", err });
    });
};
