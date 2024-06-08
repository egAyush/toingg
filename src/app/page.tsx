import Image from "next/image";
import Navbar from "./components/Navbar";
import Swipable from "./components/Swipable";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <div className="pt-[50px]  pl-[15px] container  flex  flex-col justify-center items-center ">
        <h1 className=" text-3xl font-Medium ">
          <p className="pl-[20px]">Build AI Calling</p>
          Agent that can do{" "}
        </h1>
        <p className="mt-3 font-bold text-4xl">Sales Call</p>

        <button className="mt-[100px] btn  bg-orange-400  flex flex-col w-[290px] h-[68px]  shadow-xl">
          <p className="mb-0 mt-2 text-white font-semibold text-base">
            Build your own voice agent {"   "}
          </p>

          <p className="mt-0 mb-2 ">‘It’s free!’</p>
        </button>

        <button className="btn w-[200px] h-[54px] mt-5 rounded-md bg-inherit border-black">
          Hear it in Action
        </button>

        <Card />

        <h1 className="mt-[160px] font-bold text-left text-3xl text-black">
          Features
        </h1>
        <div>Swipe Below for More!</div>

        <Swipable />

        <h1 className="mt-[160px] font-bold text-left text-3xl text-black">
          Testimonials
        </h1>

        <div className="w-auto h-auto">
          <Image width={60} height={60} alt="img" src="testimonial.svg" />
        </div>

        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
