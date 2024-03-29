import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount for{" "}
          <span className="text-white">one month </span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted></GetStarted>
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est repellat
        aut inventore adipisci autem, facilis reiciendis. Numquam fugiat sed
        error impedit, optio eum eligendi ducimus ut ex provident! In, tenetur!
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient opacity-50" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white-gradient opacity-50" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue-gradient opacity-50" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted></GetStarted>
    </div>
  </section>
);

export default Hero;
