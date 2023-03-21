import React from "react";

function Header() {
  return (
    <>
      <div
        className="bg-black w-full h-20 fixed text-white flex 
                    justify-center items-center transform -rotate-90
                    top-1/2 -translate-x-[48%]"
      >
        <div className="transform text-xl font-semi ">
          <div
            className="flex space-x-4"
          >
            <h1>Home</h1>
            <h2>About Me</h2>
            <h3>Projects</h3>
            <h4>Contact</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
