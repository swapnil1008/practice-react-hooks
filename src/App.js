import React, { useReducer } from "react";
import "./App.css";
import logo from "./logo.svg";
import Counter from "./UseStateEmaples/Counter";
import HookCounter from "./UseStateEmaples/HookCounter";
import HookCounter2 from "./UseStateEmaples/HookCounter2";
import HookCounter3 from "./UseStateEmaples/HookCounter3";
import HookCounter4 from "./UseStateEmaples/HookCounter4";
import CounterClass from "./UseEffectExamples/CounterClass";
import UseEffectCounter1 from "./UseEffectExamples/UseEffectCounter1";
import UseEffectHook2 from "./UseEffectExamples/UseEffectHook2";
import ClassMouse from "./UseEffectExamples/ClassMouse";
import UseEffectMouseMove from "./UseEffectExamples/UseEffectMouseMove";
import MouseContainer from "./UseEffectExamples/MouseContainer";
import IntervalClassCounter from "./UseEffectExamples/IntervalClassCounter";
import InrevalHookCounter from "./UseEffectExamples/InrevalHookCounter";
import DataFetching1 from "./UseEffectExamples/DataFetching/DataFetching1";
import DataFetching2 from "./UseEffectExamples/DataFetching/DataFetching2";
//import ComponentC from "./UseContextExamples/ComponentC";
import UseReducerCounter1 from "./UseReducerExamples/UseReducerCounter1";
import UseReducerCounter2 from "./UseReducerExamples/UseReducerCounter2";
import UseReducerCounter3 from "./UseReducerExamples/UseReducerCounter3";
import ComponentA from "./UseReducerExamples/UseReducerWithUSeContext/ComponentA";
import ComponentB from "./UseReducerExamples/UseReducerWithUSeContext/ComponentB";
import ComponentC from "./UseReducerExamples/UseReducerWithUSeContext/ComponentC";
import UseReducerDataFetchingOne from "./UseReducerExamples/UseReducerDataFetching/UseReducerDataFetchingOne";
import USeReducerDataFetchingTwo from "./UseReducerExamples/UseReducerDataFetching/USeReducerDataFetchingTwo";
import ParentComponent from "./UseCallBackExamples/ParentComponent";
import UseMemoCounter from "./UseMemo/UseMemoCounter";
import UseRefFocusInput from "./UseRef/UseRefFocusInput";
import ClassTimer from "./UseRef/ClassTimer";
import UseRefTimer from "./UseRef/UseRefTimer";
import CustomHookOne from "./CustomHook/CustomHookOne";
import CustomHookTwo from "./CustomHook/CustomHookTwo";
import CustomHookCounterOne from "./CustomHook/CustomHookCounterOne";
import CustomHookCounterTwo from "./CustomHook/CustomHookCounterTwo";
import CustomHookUserForm from "./CustomHook/CustomHookUserForm";
import ParentComp from "./PureComponents/ParentComp";
// useContext Example
//-----------------------------------------
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
// function App() {
//   return (
//     <div className="App">
//       <UserContext.Provider value={"Swapnil"}>
//         <ChannelContext.Provider value={"YouTube"}>
//           <ComponentC />
//         </ChannelContext.Provider>
//       </UserContext.Provider>
//     </div>
//   );
// }

//Use reducer code with useContext examples
// ------------------------------------------------
export const CounterContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="App">
//       <div>Count: {count}</div>
//       <CounterContext.Provider
//         value={{ countState: count, countDispatch: dispatch }}
//       >
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </CounterContext.Provider>
//     </div>
//   );
// }
// export default App;

function App() {
  return (
    <div className="App">
      <ParentComp />
    </div>
  );
}
export default App;
