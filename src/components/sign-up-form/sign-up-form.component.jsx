import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentfromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields); //useState(initialState)
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    // console.log(event.target);
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value }); //update form field in the form state proprty and value dynamically
  };
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    //authenticate useer from firebase
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentfromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user alsready in use");
      } else {
        console.log("error signing up", error);
      }
    }

    //create a userDoc ref
    // const user = await createUserDocumentfromAuth()
  };
  return (
    <div>
      <h1>Sign up with yoour email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
