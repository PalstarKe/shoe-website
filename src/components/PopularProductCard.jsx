import { star, cart } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          4.5(237 Reviews)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <div className="flex justify-between items-center">
        <p className="mt-2 text-2xl leading-normal font-semibold font-montserrat text-orange-500">
          {" "}
          {price}{" "}
        </p>
        <div className="ml-auto pr-8 cursor-pointer">
          <div className="bg-hero rounded-full p-2">
            <img src={cart} alt="add to cart" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
