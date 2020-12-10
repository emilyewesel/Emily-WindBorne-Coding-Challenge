import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";

ReactDOM.render(
  <Demo
    //Here we are defining the parameters that props has
    optionsList={["Hurricane", "Wildfire", "Mission", "About Us", "Contact Us"]}
    defaultValue="Hurricane"
  />,
  document.querySelector("#root")
);
