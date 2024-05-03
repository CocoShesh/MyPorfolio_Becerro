import React, { useState, useEffect } from "react";
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
    src: "/TechStack/tailwind-css.svg",
    title: "Tailwind Css",
  },
  {
    src: "/TechStack/daisy-ui.svg",
    title: "Daisy UI",
  },
  {
    src: "/TechStack/bootstrap-4.svg",
    title: "Bootstrap 4",
  },
  {
    src: "/TechStack/ant-d.svg",
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
    src: "/TechStack/mariadb.svg",
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
    src: "/TechStack/postman.svg",
    title: "Postman",
  },
  {
    src: "/TechStack/python.svg",
    title: "Python",
  },
];
const TechStack = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = data.map(item => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = item.src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch(error => {
        throw error;
      });
  }, []);
  return (
    <>
      <h1 className="text-[#ccd6f6] text-xl mt-5 leading-8">Tech Stack:</h1>

      {!imagesLoaded && (
        <div className="flex gap-3 flex-wrap bg-[#0a192f]">
          {data?.map((item, index) => (
            <div
              key={index}
              className="tooltip stat-title px-2 py-2 bg-[#ccd6f6] custom-shadow animate-pulse rounded-lg cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out transform hover:bg-[#0a192f]"
            >
              <div
                key={index}
                className="h-[50px] animate-pulse w-[50px] bg-transparent"
              />
            </div>
          ))}
        </div>
      )}

      <div
        className={`flex gap-3 flex-wrap bg-[#0a192f] ${
          imagesLoaded ? "visible" : "hidden"
        }`}
      >
        {data?.map((item, index) => (
          <div
            key={index}
            className="tooltip stat-title px-2 py-2 bg-[#0a192f] custom-shadow rounded-lg cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out transform hover:bg-[#0a192f]"
            data-tip={item.title}
          >
            <img
              src={item.src}
              alt=""
              className="h-[50px] w-[50px] bg-transparent"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
