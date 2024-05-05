import React, { useEffect, useState } from "react";
import { evaluate } from "mathjs";

const Home = () => {
  const [input, setInput] = useState("");

  const clickHandler = (value) => {
    setInput((prevInput) => prevInput + value); //here prevInput = input
  };

  const clearHandler = () => {
    setInput("");
  };

  const calculateHandler = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error", error);
    }
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    if (/[0-9+\-*/.]/.test(key)) {
      setInput((prevInput) => prevInput + key);
    } else if (key === "Enter") {
      // event.preventDefault();
      calculateHandler();
    } else if (key === "Backspace") {
      setInput((prevInput) => prevInput.slice(0, -1));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  return (
    <div className="home">
      <div className="container">
        <div className="box1">
          <input
            type="text"
            placeholder="0"
            value={input}
          />
        </div>
        <div className="box2">
          <button className="button-1" onClick={() => clickHandler("1")}>
            1
          </button>
          <button className="button-2" onClick={() => clickHandler("2")}>
            2
          </button>
          <button className="button-3" onClick={() => clickHandler("3")}>
            3
          </button>
          <button className="button-add" onClick={() => clickHandler("+")}>
            +
          </button>
          <button className="button-4" onClick={() => clickHandler("4")}>
            4
          </button>
          <button className="button-5" onClick={() => clickHandler("5")}>
            5
          </button>
          <button className="button-6" onClick={() => clickHandler("6")}>
            6
          </button>
          <button className="button-subtract" onClick={() => clickHandler("-")}>
            -
          </button>
          <button className="button-7" onClick={() => clickHandler("7")}>
            7
          </button>
          <button className="button-8" onClick={() => clickHandler("8")}>
            8
          </button>
          <button className="button-9" onClick={() => clickHandler("9")}>
            9
          </button>
          <button className="button-multiply" onClick={() => clickHandler("*")}>
            *
          </button>
          <button className="button-AC" onClick={() => clearHandler()}>
            AC
          </button>
          <button className="button-0" onClick={() => clickHandler("0")}>
            0
          </button>
          <button className="button-=" onClick={() => calculateHandler()}>
            {" "}
            =
          </button>
          <button className="button-divide" onClick={() => clickHandler("/")}>
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
