import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/* Context */
import { CountProvider } from "./count-context";

/* Child Components */
import CountDisplay from "./count-display";
import Counter from "./counter";

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/* 
Example from Kent C. Dodds "How to use React Context effectively" 
https://kentcdodds.com/blog/how-to-use-react-context-effectively
*/
