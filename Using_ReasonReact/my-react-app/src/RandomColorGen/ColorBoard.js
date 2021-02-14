var React = require('react');

var Header = require('./header.bs').make;
var Square = require('./Square.bs').make;

var ColorComponent = function() {

return React.createElement(

  "div", {style: {marginBottom: "8px"}},
  //React.createElement("button", {style: {marginBottom: "10px"}, onClick:() => window.location.reload()}, React.createElement(Header)),
  React.createElement("div", {style: {marginBottom: "80px", cursor:"pointer" }, onClick:() => window.location.reload()}, React.createElement(Header)),

  React.createElement(
  "div", { style: {display: "inline-table", marginRight: "50px", marginLeft: "200px"}},
  React.createElement("div", {style: {marginBottom: "50px"}}, React.createElement(Square)),
  React.createElement("div", {style: {marginBottom: "50px"}}, React.createElement(Square)),
  React.createElement("div", {style: {marginBottom: "50px"}}, React.createElement(Square))),
  React.createElement(
  "div", {style: {display: "inline-table", marginRight: "50px"}},
  React.createElement("div", {style: {marginBottom: "50px"}}, React.createElement(Square)),
  React.createElement("div", {style: {marginBottom: "50px"}}, React.createElement(Square)),
  React.createElement("div", {style: {marginBottom: "50px"}}, React.createElement(Square))),
  React.createElement(
  "div", {style: {display: "inline-table", marginRight: "50px"}},
  React.createElement("div", {style: {marginBottom: "50px"}}, React.createElement(Square)),
  React.createElement("div", {style: {marginBottom: "50px"}}, React.createElement(Square)),
  React.createElement("div", {style: {marginBottom: "50px"}}, React.createElement(Square))),
)
};

module.exports = ColorComponent;


// class ColorBoard extends React.Component {

//   renderSquare(i) {
//     return ( <Square/> );
//   }

//   render() {        
//       return (       
//         <div> <Header> </Header>       
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//       );
//     }
// }