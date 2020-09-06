import React from "react";
import ReactDOM from "react-dom";
import { useDencrypt } from "use-dencrypt-effect";

import "./App.css";

const values = ["Stay Home Stay Safe", "Go Corona Go"," Your Safety Is Our Priority !!!"];

const Example = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 3500);

    return () => clearInterval(action);
  }, []);

  return <h3 className="mastslog">{result}</h3>;
};

export default Example;
if (typeof window !== "undefined") {
  ReactDOM.render(<Example />, document.getElementById("root"));
}

