import React from "react";
import { useCount } from "./count-context";

function CountDisplay() {
  const { count } = useCount();
  return <div>The current count is {count}</div>;
}

export default CountDisplay;
