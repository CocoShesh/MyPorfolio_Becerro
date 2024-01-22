import React from "react";
import data from "./data";

const TechStack = () => {
  return (
    <>
      <h1 className="text-[#ccd6f6] text-xl mt-5 leading-8">Tech Stack:</h1>

      {data?.map((item, index) => (
        <div class="stats bg-[#0a192f] ">
          <div class="stat-title pr-5  " key={index}>
            {" "}
            <img
              src={item?.src}
              alt=""
              key={index}
              className="h-[50px] bg-transparent"
              title={item?.title}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TechStack;
