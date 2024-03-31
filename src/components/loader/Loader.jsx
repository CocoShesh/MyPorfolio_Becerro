import React from "react";

const Loader = () => {
  return (
    <div className="wrapper h-screen">
      <svg>
        <text
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
          className="responsive-text"
        >
          Glenard Becerro
        </text>
      </svg>
    </div>
  );
};

export default Loader;
