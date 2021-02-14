'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_math = require("bs-platform/lib/js/js_math.js");

function randomColorGen(state, action) {
  return {
          color: "rgb(" + (String(Js_math.random_int(1, 255)) + ("," + (String(Js_math.random_int(1, 255)) + ("," + (String(Js_math.random_int(1, 255)) + ")")))))
        };
}

function Square(Props) {
  var initialColor = {
    color: "rgb(" + (String(Js_math.random_int(1, 255)) + ("," + (String(Js_math.random_int(1, 255)) + ("," + (String(Js_math.random_int(1, 255)) + ")")))))
  };
  var match = React.useReducer(randomColorGen, initialColor);
  var dispatch = match[1];
  var buttonStyle = {
    background: match[0].color,
    height: "150px",
    width: "150px",
    borderRadius: "4px 4px 4px 4px"
  };
  return React.createElement("div", undefined, React.createElement("button", {
                  style: buttonStyle,
                  onClick: (function (_event) {
                      return Curry._1(dispatch, /* OnClick */0);
                    })
                }));
}

var make = Square;

exports.randomColorGen = randomColorGen;
exports.make = make;
/* react Not a pure module */
