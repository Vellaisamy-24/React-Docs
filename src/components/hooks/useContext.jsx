import React, { useState } from "react";
import { Dot } from "lucide-react";

const UseContext = () => {
  const [copy, setCopy] = useState(false);
  const codeSnippet = `
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext);
  // ...
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
        UseContext Hook
      </h1>
      <h2 className="py-3 flex flex-wrap">
        useContext is a React Hook that lets you read and subscribe to context
        from your component.
      </h2>
      <ul className="flex flex-wrap flex-col gap-2">
        <li className="flex items-center">
          <Dot /> Passing data deeply into the tree
        </li>
        <li className="flex items-center">
          {" "}
          <Dot /> Updating data passed via context
        </li>
        <li className="flex items-center">
          {" "}
          <Dot />
          Specifying a fallback default value
        </li>
        <li className="flex items-center">
          {" "}
          <Dot />
          Overriding context for a part of the tree
        </li>
        <li className="flex items-center">
          {" "}
          <Dot />
          Optimizing re-renders when passing objects and functions
        </li>
      </ul>
      <div className="py-3 lg:py-6 flex flex-col gap-2">
        <h1>
          <strong className="border-b">SYNTAX:</strong>
        </h1>
        <p>const value = useContext(SomeContext)</p>
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

export default UseContext;
