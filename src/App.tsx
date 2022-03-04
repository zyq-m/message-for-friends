import { useState } from "react";
import img from "./assets/wink-emoji.png";
import { data } from "./data/data";

function App() {
  const [message, setMessage] = useState("");

  const generateIndex = () => Math.floor(Math.random() * data.length);

  const firstMessage = () => {
    let index = generateIndex();
    return data[index].message;
  };

  const handleMessage = () => {
    let index = generateIndex();
    setMessage(data[index].message);
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100">
      <article className="grid place-items-center w-3/4 max-w-md rounded-2xl bg-white shadow-md">
        <div className="grid gap-4 my-8 w-3/5 text-center">
          <img src={img} alt="" />
          <h1 className="font-extrabold text-pink-500 text-2xl">
            Dear friend...
          </h1>
          <p className="text-gray-500">{message || firstMessage()}</p>
          <button
            onClick={handleMessage}
            className="p-2 bg-pink-500 text-white font-semibold w-3/4 mx-auto uppercase rounded-full active:bg-pink-600 active:scale-95"
          >
            Next
          </button>
        </div>
      </article>
    </div>
  );
}

export default App;
