import React, { useState } from "react";
//import { Counter } from "../components/Counter";

export { Page };

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </button>
  )
}

function Page() {
  return <>
    This page is rendered to HTML and interactive: <Counter />
  </>;
}