import { useReducer, useState } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const dispatchReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: state.value,
    };
  }
  if (action.type === "RESET") {
    return initialState;
  }
  if (action.type === "ResetTouch") {
    return {
      isTouched: true,
      value: "",
    };
  }
  return initialState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(dispatchReducer, initialState);

  const valueIsValid = validateValue(inputState.value);
  let hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    //setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
    //setIsTouched(true);
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const resetTouched = () => {
    dispatch({ type: "ResetTouch" });
    //setIsTouched(true);
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    resetTouched,
  };
};

export default useInput;
