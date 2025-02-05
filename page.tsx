'use client'

import { ToastHandler } from "@/app/_shared/component/toast";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
    ToastHandler.Success('click');
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Fragment>
      <h1>Dashboard</h1>
      <div>
      <Link href="/category">MyLink</Link>

        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </Fragment>
  );
}
