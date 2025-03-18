import React, { useState } from "react";

function Button(props) {
  const [label, setLabel] = useState("click me ");
  const updateLabel = () => {
    setLabel(props.la);
  };
  return <button className="px-4" onClick={updateLabel}>{label}</button>;
}

export default Button;
