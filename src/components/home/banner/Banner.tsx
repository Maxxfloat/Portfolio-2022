import React from "react";
import Title from "./Title";
const Banner = () => {
  return (
    <section className="h-screen min-h-screen p-4 ">
      <div className="flex items-center w-full h-full p-6 border border-white">
        <Title />
      </div>
    </section>
  );
};

export default Banner;
