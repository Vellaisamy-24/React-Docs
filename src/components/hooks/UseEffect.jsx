import React, { useState } from "react";
import { Dot } from "lucide-react";

const UseEffect = () => {
  const [copy, setCopy] = useState(false);
  const codeSnippet = `
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
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
        UseEffect Hook
      </h1>
      <h2 className="py-3 flex flex-wrap">
        useEffect is a React Hook that lets you synchronize a component with an
        external system.
      </h2>
      <ul className="flex flex-wrap flex-col gap-2">
        <li className="flex items-center">
          <Dot /> Connecting to an external system
        </li>
        <li className="flex items-center">
          {" "}
          <Dot /> Wrapping Effects in custom Hooks
        </li>
        <li className="flex items-center">
          {" "}
          <Dot />
          Controlling a non-React widget
        </li>
        <li className="flex items-center">
          {" "}
          <Dot />
          Fetching data with Effects
        </li>
        <li className="flex items-center">
          {" "}
          <Dot />
          Specifying reactive dependencies
        </li>
      </ul>
      <div className="py-3 lg:py-6 flex flex-col gap-2">
        <h1>
          <strong className="border-b">SYNTAX:</strong>
        </h1>
        <p>useEffect(setup, dependencies?)</p>
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

export default UseEffect;
