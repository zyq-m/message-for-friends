import { useState } from "react";
import img from "./assets/wink-emoji.png";
import { data } from "./data/data";
import { Footer } from "./components";

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
    <main className="bg-gray-100">
      <div className="min-h-screen grid place-items-center">
        <article className="grid place-items-center w-3/4 max-w-md rounded-2xl bg-white shadow-md">
          <div className="grid gap-4 my-8 w-3/5 text-center">
            <img src={img} alt="" />
            <h1 className="font-extrabold text-pink-500 text-2xl">
              Dear friend...
            </h1>
            <p className="text-gray-500">{message || firstMessage()}</p>
            <button
              onClick={handleMessage}
              className="p-2 bg-pink-500 text-white font-semibold mx-auto rounded-full active:bg-pink-600 active:scale-95"
            >
              Tell Me More
            </button>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}

export default App;
