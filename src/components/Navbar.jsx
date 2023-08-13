import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white p-12 fixed w-full z-10">
      <div>
        <a href="">
          <h1 className=" text-4xl font-bold tracking-widest ">DVLPR</h1>
        </a>
      </div>

      <div>
        <a
          href=""
          className=" rounded pt-2 pb-3 px-10 leading-none border-2 font-semibold text-lg transition-all hover:text-black hover:bg-white"
        >
          contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
