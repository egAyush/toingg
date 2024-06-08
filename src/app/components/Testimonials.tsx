import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="mt-[40px] card w-[290px] h-[290px] bg-orange-300 shadow-3xl ">
        <div className="flex flex-col pt-[2rem] pb-[0.7rem] pl-[1rem]  pr-[1rem] gap-[0.5rem] flex-auto">
          <h2 className=" card-title font-bold justify-center text-2xl">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image width={24} height={24} alt="img" src="" />
              </div>
            </div>
            Ayush Pandey
          </h2>
          <h2 className=" mt-4 text-1xl">
            Althogh my buisnees was profitable enough to have human resourses,
            but the AI calling features it turns out I can be more profitable!!
            Cheers !! hoo
          </h2>
        </div>
      </div>

      <div className="mt-[40px] card w-[290px] h-[290px] bg-orange-300 shadow-3xl ">
        <div className="flex flex-col pt-[2rem] pb-[0.7rem] pl-[1rem]  pr-[1rem] gap-[0.5rem] flex-auto">
          <h2 className=" card-title font-bold justify-center text-2xl">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image width={24} height={24} alt="img" src="" />
              </div>
            </div>
            Arjun
          </h2>
          <h2 className=" mt-4 text-1xl">
            They helped me scale my buisness so much that I'm now profitable and
            trying to scale much more!! Thank You Toingg!!
          </h2>
        </div>
      </div>

      <div className="mt-[40px] card w-[290px] h-[290px] bg-orange-300 shadow-3xl ">
        <div className="flex flex-col pt-[2rem] pb-[0.7rem] pl-[1rem]  pr-[1rem] gap-[0.5rem] flex-auto">
          <h2 className=" card-title font-bold justify-center text-2xl">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image width={24} height={24} alt="img" src="" />
              </div>
            </div>
            Shruti
          </h2>
          <h2 className=" mt-4 text-1xl">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            All the features available on this AI model isn't available
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            anywhere. So this is pretty amazing and I'm beneficiery of this.!!
          </h2>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
