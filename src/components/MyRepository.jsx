import React from "react";
import { Link } from "react-router-dom";
const MyRepository = () => {
  return (
    <>
      <section className="h-[300px] pt-10 flex  flex-col items-center justify-center font-figtree ">
        <Link to="/repository">
          <button className="w-56 h-14 border border-slate-500 rounded-lg   uppercase text-sm">
            Repositories
          </button>
        </Link>
      </section>
    </>
  );
};

export default MyRepository;
