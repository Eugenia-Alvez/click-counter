import React from "react";


function Button({text, isClickButton, handleClick}) {
  return ( 
  <button className={isClickButton ? 'btn-primary' : 'btn-secondary'}
  onClick={handleClick}
  >
    {text}
    </button>
);
}

export default Button;
