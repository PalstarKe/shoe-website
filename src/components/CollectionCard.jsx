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
        <span className="text-lg font-bold font-palanquin transition duration-100 hover:text-slate-gray lg:text-xl">
          {label}
        </span>
        <span className="text-slate-gray">{subtext}</span>
        <a
          href="#"
          className="text-lg font-palanquin font-medium text-orange-500 transition duration-100 hover:text-slate-gray lg:text-xl"
        >
          {link}
        </a>
      </div>
    </div>
  );
};

export default CollectionCard;
