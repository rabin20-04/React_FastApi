import React, { useState } from "react";

function Button(props) {
  const [label, setLabel] = useState("click me ");
  const updateLabel = () => {
    setLabel(props.la);
  };
  return <button className="px-4" onClick={updateLabel}>{label}</button>;
}

export default Button;

// Buttons

// -------
// always update in setLabel or other variable with setVariable
// -------------
// just button tap count increament

// function Button() {
//     const [label,setLabel]=useState(1)
//     const updatelabel=()=>{
//         setLabel(label + 1);
//         console.log(label + 1);
//     }
//   return (
//     <button onClick={updatelabel}>Button {label}</button>
//   )
// }

// export default Button // remember this button is the name of function used here if mistake it doesnt returns anything 

// ----------
// button with custom name
// should send <button la="something" that something to replace to the variable label in the following function to delete, upload >
// function Button(props) {
//     const [label,setLabel]=useState("click me")  clickme is just a initial value which is put is variable label
//     const updateLabel=()=>{
//         setLabel(props.la);
//         console.log(props.la);
//     }
//   return (
//     <button onClick={updateLabel}>{label}</button>
//   )
// }

// export default Button
