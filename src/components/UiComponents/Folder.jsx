import React from "react";
import { GoFileDirectory } from "react-icons/go";
import { RiShareBoxFill } from "react-icons/ri";
const Folder = ({ children }) => {
  return (
    <section className="w-auto h-1/2   p-5  rounded-md  bg-[#0a192f] shadow shadow-slate-500">
      <section className="flex justify-between mt-5 items-center">
        <GoFileDirectory className="text-4xl fill-purple-500" />
        <RiShareBoxFill className="text-2xl  fill-purple-500" />
      </section>
      {children}
    </section>
  );
};

export default Folder;
