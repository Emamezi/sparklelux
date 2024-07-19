import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";
import { createUserDocumentfromAuth } from "../../utils/firebase/firebase.utils.js";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentfromAuth(user);
  };

  return (
    <div>
      <h1>Singn In</h1>
      <button onClick={logGoogleUser} formTarget="_self">
        Sign in with Google pop up
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
