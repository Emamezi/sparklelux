import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";
import { createUserDocumentfromAuth } from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentfromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser} formTarget="_self">
        Sign in with Google pop up
      </button>
      <div>Singn In</div>
    </div>
  );
};

export default SignIn;
