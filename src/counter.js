import React from "react";
import { useCount } from "./count-context";

function Counter() {
  const { increment } = useCount();
  return (
    <button type="button" onClick={increment}>
      Increment Count
    </button>
  );
}

export default Counter;
