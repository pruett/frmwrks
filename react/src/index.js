import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import Hello from "./components/Hello";

// ReactDOM.render(<Hello name={"World!"} />, document.getElementById("root"));
console.log(ReactDOMServer.renderToStaticMarkup(<Hello name={"World!"} />));
