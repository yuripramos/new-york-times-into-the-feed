import React from "react";
/*eslint-disable*/

function Arrow({ height, width }) {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
      width={width}
      height={height}
    >
      <g>
        <path fill="currentColor" fillRule="nonzero" d="M560.1,507.6" />
        <path fill="currentColor" fillRule="nonzero" d="M672.8,476.3" />
        <path fill="currentColor" fillRule="nonzero" d="M177,681.2" />
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M812.5,929.1L383.4,500L812.5,70.9c13.9-13.9,13.9-36.5,0-50.5C798.6,6.5,776,6.5,762,20.5L307.7,474.8c-13.9,13.9-13.9,36.5,0,50.5L762,979.5c13.9,13.9,36.5,13.9,50.5,0C826.5,965.6,826.5,943,812.5,929.1z"
        />
      </g>
    </svg>
  );
}

export default Arrow;
