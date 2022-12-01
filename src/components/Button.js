import React from "react";

export const Button = ({ clsNm, label, handleOnButtonClick }) => {

  return (
    <div onClick={() => handleOnButtonClick(label)} className={clsNm}>
      {label}
    </div>
  );
};
