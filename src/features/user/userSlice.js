import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser:(state, action)=>{
            state.currentUser = action.payload
        },
        signInSuccess:(state, action) =>{  
            state.currentUser = action.payload
            state.isLoading = false
        },

        checkUserSession:(state, action) =>{ 
            state.currentUser = action.payload
        },
      
        googleSignInStart:() =>{
           
        },

        emailSignInStart: (state) =>{
           state.isLoading = true
        },

        signInFailed:(state, action) =>{
         state.error = action.payload
        },


        signUpStart:(state, action)=>{
           state.isLoading = true
        },  
        
        signUpSuccess:(user)=>{
          return user
        },
        
        signUpFailed:(state, action)=>{
            state.error = action.payload
        },


        signOutStart:(state) =>{
            state.isLoading = true
        },
        signOutSuccess:(state, action) =>{
            state.currentUser = null
            
        },
        signOutFailed:(state, action) =>{
            state.error = action.payload
        },

    }
});

export const {
  setCurrentUser,
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailed,

  signUpSuccess,
  signUpStart,
  signUpFailed,

  signOutStart,
  signOutSuccess,
  signOutFailed
} = userSlice.actions;
export default userSlice.reducer;

