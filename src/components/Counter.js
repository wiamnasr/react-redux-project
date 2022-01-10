/*
  Importing a custom hook made by the React Redux team
  note, there is also a useStore hook that can be used as well, that gives direct access to the store
  But useSelector is a bit more convenient to use, because that allows me to automatically select a part of the state managed by the store
  Note: if a class based component was being used, then there is also a connect function that can be used as a wrapper around the class component, to connect that class component to the store
*/

/*
  Also importing the useDispatch hook, that helps me dispatch an action
*/

import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  /*
    Calling useDispatch(), no arguments are passed, the result is a dispatch function that can be executed
    - Dispatch is a function that can be called
    - It will then dispatch an action against our redux store
  */
  const dispatch = useDispatch();

  // Defining my handler functions:
  const incrementHandler = () => {
    // dispatching an action, remember the action is an object with a type property
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  /*
    Now there is access to the data managed by the store, by using 'useSelector()'
    a function must be passed, it will be executed by react-redux, this function determines which piece of data we want to extract from the store
    Important =>using useSelector, react-redux will automatically setup a subscription to the redux store for this component
    this subscription is managed by react-redux, meaning if the component was removed (unmounted for some reason), react-redux will automatically unsubscribe it from the store => handy!
  */
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        {/* Wiring up the handler functions to the buttons, and Voila! */}
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
