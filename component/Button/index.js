import React, { useState } from "react";
import Pure from "./pure";

const Button = ({value, icon, type, onClick, isLoading}) => {
  return <Pure value={value} icon={icon} type={type} onClick={onClick} isLoading={isLoading}/>
}

export default Button;
