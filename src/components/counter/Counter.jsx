import React, { Fragment } from "react";
import {useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  onIncrementAsync,
} from '../../features/counter/counterSlice';


const Counter = () => {
    const count = useSelector((state)=> state.counter.value)
    // const email= useSelector((state) => state.user.currentUser.email);
    const value = useSelector((state) => state.counter.value);
   
    // console.log(email)
    const dispatch = useDispatch()

 
    return (
      <Fragment>
        <div>
          <button onClick={() => dispatch(onIncrementAsync())}></button>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>

          <div>clicked : {value} times</div>
        </div>
      </Fragment>
    );
}

export default Counter;