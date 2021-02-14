

type state = {color: string};

type action = OnClick;


let randomColorGen = (state, action) => {
         
    switch (action) {
        | OnClick => {color: ("rgb(" ++ Belt.Int.toString(Js.Math.random_int(1,255)) ++ "," ++ Belt.Int.toString(Js.Math.random_int(1,255)) ++ "," ++ Belt.Int.toString(Js.Math.random_int(1,255)) ++ ")")}
        };   
};

[@react.component]

let make = () => {
    
  let initialColor = {color: ("rgb(" ++ Belt.Int.toString(Js.Math.random_int(1,255)) ++ "," ++ Belt.Int.toString(Js.Math.random_int(1,255)) ++ "," ++ Belt.Int.toString(Js.Math.random_int(1,255)) ++ ")")};
  let (state, dispatch) = React.useReducer(randomColorGen, initialColor);
  let buttonStyle = ReactDOMRe.Style.make(~borderRadius="4px 4px 4px 4px", ~width="150px",~background={state.color}, ~height = "150px", ());

  <div>
      <button style = buttonStyle onClick = {_event => dispatch(OnClick)}/>        
  </div>;
};
