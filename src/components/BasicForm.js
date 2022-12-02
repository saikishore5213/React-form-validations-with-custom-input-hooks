import { useState } from "react";
import useInput from "./hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: isFirstNameValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstResest,
    resetTouched: firstTouched,
  } = useInput((value) => value.trim() !== "");

  const firstNameErrorClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const {
    value: enteredSecondName,
    isValid: isSecondNameValid,
    hasError: secondNameHasError,
    valueChangeHandler: secondNameChangedHandler,
    inputBlurHandler: secondNameBlurHandler,
    reset: secondReset,
    resetTouched: secondTouched,
  } = useInput((value) => value.trim() !== "");

  const secondNameErrorClasses = secondNameHasError
    ? "form-control invalid"
    : "form-control";

  let formIsValid = false;
  if (isFirstNameValid && isSecondNameValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isFirstNameValid && !isSecondNameValid) {
      firstTouched();
      secondTouched();
      console.log("form not valid");
      return;
    }
    firstResest();
    secondReset();
    console.log(enteredFirstName);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameErrorClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p>FirstName cannot be empty</p>}
        </div>
        <div className={secondNameErrorClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredSecondName}
            onChange={secondNameChangedHandler}
            onBlur={secondNameBlurHandler}
          />
          {secondNameHasError && <p>SecondName cannot be empty</p>}
        </div>
      </div>
      {/* <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div> */}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};
export default BasicForm;
