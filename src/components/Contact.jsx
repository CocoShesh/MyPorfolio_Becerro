import React from "react";

const Contact = () => {
  const email = "glenardrefamonte1@gmail.com";

  return (
    <>
      <section
        className="h-screen flex flex-col justify-center items-center"
        id="contact"
      >
        <h1 className="font-Mono text-3xl md:text-4xl lg:text-3xl xl:text-3xl mb-5">
          04. Contact
        </h1>
        <p className="text-5xl md:text-6xl lg:text-7xl xl:text-5xl font-Noto my-5 font-bold text-[#ccd6f6]">
          Get In Touch
        </p>

        <p className="w-full sm:w-[500px] text-center text-lg md:text-xl lg:text-2xl xl:text-lg font-Noto text-[#67738e] pb-14">
          I'm currently actively seeking new opportunities, and my inbox is
          always open. Whether you'd like to discuss something specific or
          simply reach out, I'll make every effort to respond promptly.
        </p>

        <a href={`mailto:${email}`}>
          <button className="w-32 md:w-40 h-14 border-[1px] rounded-md font-Mono border-[#ccd6f6] text-[#ccd6f6] hover:-translate-x-1 hover:shadow-md hover:shadow-white">
            Say Hello
          </button>
        </a>
      </section>
    </>
  );
};

export default Contact;
