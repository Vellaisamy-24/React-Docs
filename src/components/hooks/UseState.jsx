import React, { useState } from "react";

const UseState = () => {
  const [copy, setCopy] = useState(false);
  const codeSnippet = `
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
`;

  const copyCode = () => {
    navigator.clipboard
      .writeText(codeSnippet)
      .then(() => setCopy(true))
      .catch((error) => setCopy(false));
  };
  return (
    <section className="  w-full lg:max-w-7xl">
      <h1 className="border-b inline text-[18px]  font-medium">
        UseState Hook
      </h1>
      <h2 className="py-3 flex flex-wrap">
        The useState hook is a function provided by React that allows you to add
        state variables to functional components. It returns an array with two
        elements:
      </h2>
      <ul className="flex flex-wrap flex-col gap-2">
        <li>
          <strong>Current State Value:</strong> The current value of the state
          variable.
        </li>
        <li>
          <strong>State Setter Function:</strong> A function that allows you to
          update the state value.
        </li>
      </ul>
      <div className="py-3 lg:py-6 flex flex-col gap-2">
        <h1>
          <strong className="border-b">SYNTAX:</strong>
        </h1>
        <p>const [state, setState] = useState(initialState);</p>
      </div>
      <div className="">
        <pre className="bg-code  rounded-lg shadow-sm p-5  flex ">
          <code className="text-sm whitespace-pre-wrap font-mono flex flex-wrap">
            {codeSnippet}
          </code>
          <div className="flex flex-col gap-3 px-5  py-3 ml-auto">
            {!copy && (
              <button
                className=" ml-auto   hover:cursor-pointer"
                onClick={() => copyCode()}
              >
                Copy
              </button>
            )}

            {copy && <p className="text-green-400 ml-auto">Copied✅</p>}
          </div>
        </pre>
      </div>
    </section>
  );
};

export default UseState;
