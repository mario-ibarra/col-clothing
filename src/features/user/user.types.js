import { createAction } from "../../utils/reducer/reducer.utils";
import { emailSignInStart } from './userSlice';
//  setCurrentUser:(state, action)=>{
//             console.log(action)
//             state.currentUser = action.payload
//             state.isLoading = false
//         },
//         checkUserSession:(state, action) =>{
//             state.currentUser = action.payload
//         },
//         googleSignInStart:() =>{},
//         emailSignInStart: () =>{},


//         signInSuccess:(state, action) =>{
//             state.isLoading = false
//             state.currentUser = action.payload
//         },
//         signInFailed:(state, action) =>{
//             state.isLoading = false
//             state.error = action.payload
//         },

// export const checkUserSession = () =>createAction(setCheckUserSession);

// export const googleSigInStart = () =>createAction(setGoogleSignInStart);

export const emailSignInstart = (email, password) => createAction(emailSignInStart, {email, password})

// export const singInSuccess = (user) =>createAction(setSignInSuccesss, user);

// export const signInFailed = (error) =>createAction(setSignInFailed, error)
