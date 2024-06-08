import React from "react";

const Feature2 = () => {
  return (
    <div className=" card w-[290px] h-[490px] bg-orange-200 text shadow-3xl  border-black border-2">
      <div className="flex flex-col pt-[2rem] pb-[0.7rem] pl-[1rem]  pr-[1rem] gap-[0.5rem] flex-auto">
        <h2 className=" card-title font-bold justify-center text-2xl">
          Predictive Analysis
        </h2>

        <h2 className=" mt-4 text-1xl">
          {/*  eslint-disable-next-line react/no-unescaped-entities */}
          AI's role in business spans a spectrum of functions, from optimizing
          operations and enhancing customer experiences to driving strategic
          decision-making. Through predictive analytics, AI forecasts market
          trends, aiding in inventory management and supply chain optimization.
          Our Service will help your buisness to improve in the areas which you
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          can't imagine.
        </h2>
      </div>
    </div>
  );
};

export default Feature2;
