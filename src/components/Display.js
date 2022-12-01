import React from 'react'

export const Display = ({str}) => {
  return (
    <>
          <div className="display">{ str || "0.00"}</div>
    </>
  );
}
