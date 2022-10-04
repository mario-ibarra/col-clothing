import { takeLatest, put, all, call, delay } from 'redux-saga/effects'
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from '../../utils/firebase/firebase.utils';



import {
  signInSuccess,
  signInFailed,

  signUpSuccess,
  signUpFailed,

  signOutSuccess,
  signOutFailed,
} from './userSlice';


export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        // console.log(userSnapshot)
        // console.log(userSnapshot.data())
        delay(6000)
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
        
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield call(getCurrentUser)
       
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)

    } catch (error) {
       yield put(signInFailed(error))
    }
};


export function* signInWithGoogle() {
    try {
        const {user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const  { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
    
  } catch (error) {
    yield put(signInFailed(error));
  }
}


export function* signUp(email, password, displayName){
try {
    const user = yield call(createAuthUserWithEmailAndPassword,
         email,
          password
          );
    yield put(signUpSuccess(user, { displayName }));
    return user
} catch (error) {
     yield put(signUpFailed(error))
}
}

export function* signOut(){
    try {
        yield call(signOutUser);
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailed)
    }
}

export function* signInAfterSignUp({payload: { user, additionalDetails}}){
    delay(1000)
    yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

//saga function to export
export function* onGoogleSignInStart() {
    yield takeLatest('user/googleSignInStart', signInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(  'user/checkUserSession', isUserAuthenticated,)
}

export function* onEmailSignInStart(){
    yield takeLatest ('user/emailSignInStart', signInWithEmail)
}


export function* onSignUpStart(){
    yield takeLatest('user/signUpStart', signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest('user/signUpStart', signInAfterSignUp)
}

export function* onSignOutStart() {
    yield takeLatest('user/signOutStart', signOut)
}


export function* userSaga(){
    yield all([
        call(onCheckUserSession),
         call(onGoogleSignInStart),
         call(onEmailSignInStart),
         call(onSignUpStart),
         call(onSignUpSuccess),
         call(onSignOutStart)
        ])
}

