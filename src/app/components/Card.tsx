import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className=" mt-[170px] card w-[300px] h-[500px] bg-orange-200 text">
      <div className="flex flex-col pt-[2rem] pb-[0.7rem] pl-[1rem]  pr-[2rem] gap-[0.5rem] flex-auto">
        <h2 className=" card-title font-bold ">Try now</h2>
        <p>Get a call from Toingg</p>
        <div className=" flex card-body items-center justify-start gap-[2rem]">
          <label className=" input input-bordered flex items-center text-black border-black rounded-lg">
            <input type="text" className="grow" placeholder="Name" />
          </label>
          <label className="input input-bordered flex items-center  text-black border-black rounded-lg">
            <input type="text" className="grow" placeholder="+91" />
          </label>

          <select className="select select-bordered w-[250px]  text-black border-black rounded-lg">
            <option disabled selected>
              Choose your Language
            </option>
            <option>Hindi</option>
            <option>Tamil</option>
            <option>English</option>
          </select>

          <div className="justify end mt-[2rem]">
            <Image
              alt="img "
              width={30}
              height={30}
              src="/toingg/public/Vector.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
