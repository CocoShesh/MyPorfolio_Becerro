import React from "react";
import { Link } from "react-router-dom";
const Repository = () => {
  return (
    <>
      <section className="min-h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-5xl font-inter uppercase font-bold">
          Repositories
        </h1>
        <p className="text-sm leading-10">
          A list of all of the public repositories on my GitHub
        </p>

        <section className="grid grid-cols-2 w-full border border-red-500 h-screen p-20 gap-10  max-sm:grid-cols-1">
          <section className="flex flex-col items-center justify-center  border border-red-500"></section>
          <section className="flex flex-col items-center justify-center  border border-red-500"></section>
          <section className="flex flex-col items-center justify-center  border border-red-500"></section>
          <section className="flex flex-col items-center justify-center  border border-red-500"></section>
          <section className="flex flex-col items-center justify-center  border border-red-500"></section>
          <section className="flex flex-col items-center justify-center  border border-red-500"></section>
          <section className="flex flex-col items-center justify-center  border border-red-500"></section>
          <section className="flex flex-col items-center justify-center  border border-red-500"></section>
        </section>
      </section>
    </>
  );
};

export default Repository;
