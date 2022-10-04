import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    onIncrementAsync:(state, action) =>{
        console.log(action)
    }
  },
});

export const { increment, decrement, incrementByAmount, onIncrementAsync } =
  counterSlice.actions;

export default counterSlice.reducer;

