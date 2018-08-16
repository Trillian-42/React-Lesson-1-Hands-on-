import React from "react";
import ReactDOM from "react-dom";

const colorsList = React.createElement(
  "ol",
  {},
  React.createElement("li", {}, "purple"),
  React.createElement("li", {}, "metallic teal green"),
  React.createElement("li", {}, "fushia"),
  React.createElement("li", {}, "rainbow")
);

const musicList = React.createElement(
  "ol",
  {},
  React.createElement("li", {}, "jazz"),
  React.createElement("li", {}, "blues"),
  React.createElement("li", {}, "classic rock"),
  React.createElement("li", {}, "new wave")
);

const foodList = React.createElement(
  "ol",
  {},
  React.createElement("li", {}, "steak and baked potato"),
  React.createElement("li", {}, "oriental chicken salad"),
  React.createElement(
    "li",
    {},
    "warm french apple pie with struesel topping and vanilla ice cream ala mode"
  ),
  React.createElement("li", {}, "McDonald's Caramel Frappachino")
);

const webList = React.createElement(
  "ol",
  {},
  React.createElement(
    "li",
    {},
    React.createElement(
      "a",
      { href: "https://trillian-42.github.io/portfolio-website/" },
      "My Portfolio Site"
    )
  ),

  React.createElement(
    "li",
    {},
    React.createElement(
      "a",
      { href: "https://inkedinfinal.herokuapp.com/" },
      "Inked-In - Final Project Group Website"
    )
  ),

  React.createElement(
    "li",
    {},
    React.createElement(
      "a",
      { href: "https://github.com/Trillian-42" },
      "My Github Repos"
    )
  )
);

ReactDOM.render(
  React.createElement(
    "ul",
    {},
    React.createElement("li", {}, "My Favorite Colors", colorsList),
    React.createElement("li", {}, "My Favorite Music", musicList),
    React.createElement("li", {}, "My Favorite Foods", foodList),
    React.createElement("li", {}, "My Favorite Websites", webList)
  ),
  document.getElementById("root")
);
