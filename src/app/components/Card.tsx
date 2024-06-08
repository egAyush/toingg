import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className=" mt-[170px] card w-[300px] h-[500px] bg-orange-200 text shadow-3xl ">
      <div className="flex flex-col pt-[2rem] pb-[0.7rem] pl-[1rem]  pr-[2rem] gap-[0.5rem] flex-auto">
        <h2 className=" card-title font-bold ">Try now</h2>
        <p>Get a call from Toingg</p>
        <div className=" flex card-body items-center justify-start gap-[2rem]">
          <label className=" input input-bordered flex items-center text-black border-black rounded-xl">
            <input type="text" className="grow" placeholder="Name" />
          </label>
          <label className="input input-bordered flex items-center  text-black border-black rounded-xl">
            <input type="text" className="grow" placeholder="+91" />
          </label>

          <select className="select select-bordered w-[250px]  text-black border-black rounded-xl">
            <option disabled selected>
              Choose your Language
            </option>
            <option>Hindi</option>
            <option>Tamil</option>
            <option>English</option>
          </select>

          <div className=" mt-[2rem] w-[55px] h-[55px] bg-orange-600 rounded-full flex items-center justify-center">
            <Image alt="img " width={25} height={25} src="/Vector.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
