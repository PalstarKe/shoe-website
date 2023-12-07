import { offer } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section>
      <div className="flex flex-col overflow-hidden rounded-lg bg-hero sm:flex-row md:h-80">
        <div className="flex w-full flex-col p-2 sm:w-1/2 sm:p-8 lg:w-3/5">
          <h2 className="mt-2 font-palanquin text-2xl lg:text-4xl capitalize font-bold lg:max-w-lg">
            Summer Sale Up to <span className="text-orange-500">70%</span> off.
          </h2>

          <p className="mb-4 info-text">
            From the vintage allure of Art Deco to the minimalist beauty and
            Bohemian-inspired pieces, discover extraordinary pieces for every
            taste.Redefine your elegance today.
          </p>
          <div className="mt-auto">
            <a
              href="#"
              className="inline-block rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 hover:bg-orange-500 focus-visible:ring active:bg-orange-500 md:text-base"
            >
              Shop now
            </a>
          </div>
        </div>
        <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
          <img
            src={offer}
            alt="offer image"
            width={773}
            height={687}
            loading="lazy"
            className="h-full w-full object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
