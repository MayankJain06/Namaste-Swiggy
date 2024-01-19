import React from "react";
import ReactDOM  from "react-dom/client";

// React.createElement ==> Object ==> HTML(render)

const heading =React.createElement("h1",{ id: "heading" },"Namaste React 🚀 ");
console.log(heading);

// JSX (transpiled before it reaches the JS Engine) ===> PARCEL ==> Babel
const jsxHeading= <h1 id="heading" className="head">Namaste React using JSX 🚀</h1>
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
