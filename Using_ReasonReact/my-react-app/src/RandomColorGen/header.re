
[@react.component]


let make = (~style) => { 
  <div style= ReactDOMRe.Style.make(~color = "black", ~fontSize= "50px", ~textAlign= "center", ~padding="50px", ~background = "#C9D1CB", ~fontWeight = "bold", ())> {React.string("Krrish")} </div>;
};