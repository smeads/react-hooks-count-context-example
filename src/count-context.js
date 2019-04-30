import React from "react";

const CountContext = React.createContext();

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  // 99% of the time, your context providers should probably be using useMemo
  // context providers do an equality check on the value you provide and if
  // it's different between renders it will re-render every consumer
  // (this can be a big performance problem if your context has many consumers)
  const value = React.useMemo(() => {
    return {
      count,
      setCount
    };
  }, [count]);
  return <CountContext.Provider value={value} {...props} />;
}

function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  const { count, setCount } = context;

  const increment = () => setCount(c => c + 1);

  return {
    count,
    increment
  };
}

export { CountProvider, useCount };

/*
1. You shouldn't be reaching for context to solve every state sharing problem that crosses your desk.
2. Context does NOT have to be global to the whole app, but can be applied to one part of your tree
3. You can (and probably should) have multiple logically separated contexts in your app.
*/
