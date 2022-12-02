import { useState } from "react";

const SimpleInput = (props) => {
  const [username, setUsername] = useState("");
  const [usernameisTouched, setUsernameIsTouched] = useState(false);
  const [enteredEmail, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const usernameIsValid = username.trim() !== "";
  const inputIsValid = !usernameIsValid && usernameisTouched;

  const isEmailValid = enteredEmail.includes("@") && enteredEmail.trim() !== "";
  const emailIsValid = !isEmailValid && emailIsTouched;
  console.log(emailIsValid);

  let formIsValid = false;

  if (usernameIsValid && isEmailValid) {
    formIsValid = true;
  }

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setUsernameIsTouched(true);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailTouchHandler = (event) => {
    setEmailIsTouched(true);
  };

  const submitHanlder = (event) => {
    event.preventDefault();
    setEmailIsTouched(true);
    setUsernameIsTouched(true);
    if (!usernameIsValid && !isEmailValid) {
      return;
    }
    console.log(username);
    setUsername("");
    setEmail("");
    setUsernameIsTouched(false);
    setEmailIsTouched(false);
  };

  const usernameInputClass = inputIsValid
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailIsValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHanlder}>
      <div className={usernameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={username}
          onChange={usernameHandler}
          onBlur={inputBlurHandler}
        />
      </div>
      {inputIsValid && <p className="error-text">Name cannot be empty</p>}
      <div className={emailClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailHandler}
          onBlur={emailTouchHandler}
        />
      </div>
      {emailIsValid && <p className="error-text">Invalid Email</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
