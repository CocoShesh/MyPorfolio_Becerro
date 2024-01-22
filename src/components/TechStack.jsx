import React from "react";
const data = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    title: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    title: "Tailwind CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
    title: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
    title: "Node js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg",
    title: "Git",
  },
];
const TechStack = () => {
  return (
    <>
      <h1 className="text-[#ccd6f6] text-xl mt-5 leading-8">Tech Stack:</h1>

      {data?.map((item, index) => (
        <div key={index} class="stats bg-[#0a192f] ">
          <div class="stat-title pr-5  ">
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
