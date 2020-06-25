import React from "react";
import BeatLoader from "react-spinners/BeatLoader";


const Pure = ({ value, icon, type, onClick, isLoading }) => {
  const primary = "text-white";
  return (
    <button
      className={'pt-2 pl-3 pr-3 pb-2 m-2 rounded-sm text-sm text-left tracking-wide focus:outline-none font-semibold text-white bg-blue-900 '}
      onClick={onClick}>
      {icon && <img className="inline fill-current w-4 h-4 mr-3 text-black" src={icon} />}
      {!isLoading ? value :
        <BeatLoader
          className="w-64"
          size={8}
          color={"#FFFFFF"}
          loading={true}
        />}

    </button>
  );
}

export default Pure;
