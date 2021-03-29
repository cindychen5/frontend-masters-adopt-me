import React from 'react';
import { render } from 'react-dom';
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Bobo",
      animal: "Dog",
      breed: "Pug",
    }),
    React.createElement(Pet, {
      name: "Dingo",
      animal: "Cat",
      breed: "Black cat",
    }),
    React.createElement(Pet, {
      name: "NeeNee",
      animal: "Cat",
      breed: "Long white hair cat",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
