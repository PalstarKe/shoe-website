{/* <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="mb-4 mt-8 font-semibold text-orange-500 font-montserrat md:mb-6 md:text-lg xl:text-xl">
          Adorn Your Elegance
        </p>
        <h1 className="mt-7 mb-4 text-4xl font-bold font-palanquin sm:text-3xl md:mb-12 md:text-5xl lg:text-8xl">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10  pr-10">
            Discover Timeless
          </span>
          <br />
          <span className="text-orange-500 inline-block mt-3">Beauty</span>
        </h1>
        <p className="font-montserrat text-slate-gray leading-8 mb-8 sm:max-w-sm mt-4 sm:mt-8">
          Crafted with Precision, Worn with Pride – Elevate Your Style with
          Exquisite Pieces that Capture the Essence of Elegems. Unveil a World
          of Enduring Glamour and Unforgettable Moments.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-6 sm:mt-10 gap-4 sm:gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="mb-4 sm:mb-0">
              {" "}
              {/* Add margin-bottom for better spacing on small screens */}
              <p className="text-3xl sm:text-4xl font-palanquin font-bold">
                {stat.value}
              </p>{" "}
              {/* Reduce font size on small screens */}
              <p className="leading-6 sm:leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
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
    </section> */}


    bg-primary bg-hero bg-cover bg-center shadow-lg