import './authentication.styles.scss';


import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const Authentication = () =>{
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }
    return (
      <div>
  
        <div className="auth-container">
          <SignInForm/>
          <SignUpForm />
        </div>
      </div>
    );
}

export default Authentication;