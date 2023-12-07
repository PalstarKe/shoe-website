import { useState } from "react";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className=" flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-6/12 xl:py-24">
        <p className="mb-4 font-semibold font-montserrat text-orange-500 md:mb-6 md:text-lg xl:text-xl">
          Adorn Your Elegance
        </p>

        <h1 className="mb-8 text-3xl font-palanquin font-bold text-black sm:text-5xl md:mb-12 lg:text-4xl">
          Discover <span className="text-orange-500">Timeless</span> Beauty at
          Elegems
        </h1>

        <p className="mb-6 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          Crafted with Precision, Worn with Pride – Elevate Your Style with
          Exquisite Pieces that Capture the Essence of Elegems. Unveil a World
          of Enduring Glamour and Unforgettable Moments.
        </p>

        <div className="mb-10 flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <a
            href="#"
            className="inline-block rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-orange-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
          >
            Shop now
          </a>
        </div>
        <div className="-mx-6 grid grid-cols-3 gap-3 md:-mx-8 md:flex md:divide-x">
          {statistics.map((stat, index) => (
            <div key={index} className="px-6 md:px-8">
              <span className="block text-center text-lg font-bold font-palanquin text-orange-500 md:text-left md:text-xl">
              {stat.value}
              </span>
              <span className="block text-center text-sm font-montserrat font-semibold text-slate-gray md:text-left md:text-base">
              {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 h-48 overflow-hidden rounded-lg lg:h-48 xl:w-6/12">
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={500}
          className="h-full w-full object-contain object-center"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
