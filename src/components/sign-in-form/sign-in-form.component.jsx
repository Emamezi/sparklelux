import { useState } from "react";
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormFields] = useState(defaultFormField);
  const { email, password } = formField;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formField, [name]: value });
  };
  const resetFormField = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!email || !password) return;
      const { user } = await signInUserWithEmailAndPassword(email, password);

      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential user not found":
          alert("invalid email");
          break;
        case "auth/wrong-password":
          alert("invalid password");
          break;

        default:
          alert("user not found");
          break;
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h1>Already have an account?</h1>
      <p>Sign in with your username and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput //props=={label:"password", inputOptions:{type:"password", required: true}}
          label={"Password"}
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type={"submit"}>Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
