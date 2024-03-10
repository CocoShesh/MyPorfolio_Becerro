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
    src: "/tailwind-css.svg",
    title: "Tailwind Css",
  },
  {
    src: "/daisy-ui.svg",
    title: "Daisy UI",
  },
  {
    src: "/bootstrap-4.svg",
    title: "Bootstrap 4",
  },
  {
    src: "/ant-d.svg",
    title: "ANT Design",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg",
    title: "Git",
  },
  {
    src: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
    title: "Mysql",
  },
  {
    src: "/mariadb.svg",
    title: "Maria Db",
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
    src: "/postman.svg",
    title: "Postman",
  },
  {
    src: "/python.svg",
    title: "Python", // Assuming this is Python since it wasn't mentioned in the frontend/backend category
  },
];
const TechStack = () => {
  return (
    <>
      <h1 className="text-[#ccd6f6] text-xl mt-5 leading-8">Tech Stack:</h1>

      <div class="flex  gap-3 flex-wrap bg-[#0a192f] ">
        {data?.map((item, index) => (
          <div
            key={index}
            class="stat-title px-2 py-2 bg-[#0a192f] custom-shadow  rounded-lg cursor-pointer "
          >
            <img
              src={item?.src}
              alt=""
              key={index}
              className="h-[50px]  w-[50px] bg-transparent"
              title={item?.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
