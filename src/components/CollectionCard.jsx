const CollectionCard = ({ imgURL, label, subtext, link }) => {
  return (
    <div>
      <a
        href="#"
        className="group mb-2 block h-96 overflow-hidden rounded-[30px] bg-gray-100 shadow-lg lg:mb-3"
      >
        <img
          src={imgURL}
          loading="lazy"
          alt={label}
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </a>

      <div className="flex flex-col flex-wrap">
        <span className="text-2xl leading-normal font-semibold font-palanquin transition duration-100 hover:text-slate-gray lg:text-2xl">
          {label}
        </span>
        <span className="text-slate-gray mt-2">{subtext}</span>
        <a
          href="#"
          className="mt-2 text-2xl leading-normal font-semibold font-montserrat text-orange-500 transition duration-100 hover:text-slate-gray lg:text-xl"
        >
          {link}
        </a>
      </div>
    </div>
  );
};

export default CollectionCard;
