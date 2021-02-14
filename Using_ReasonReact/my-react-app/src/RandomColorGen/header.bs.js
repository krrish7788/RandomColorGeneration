'use strict';

var React = require("react");

function Header(Props) {
  return React.createElement("div", {
              style: {
                background: "#C9D1CB",
                color: "black",
                fontSize: "50px",
                fontWeight: "bold",
                padding: "50px",
                textAlign: "center"
              }
            }, "Krrish");
}

var make = Header;

exports.make = make;
/* react Not a pure module */
