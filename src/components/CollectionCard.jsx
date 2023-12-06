const CollectionCard = ({imgURL, label, subtext, link}) => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-6 sm:w-[350px] sm:min-w[350px] w-full rounded-[20px] shadow-3xl px-4 py-6">
        <div className="flex justify-center items-center bg-hero rounded-full">
            <img src={imgURL} alt={label} className="w-[280px] h-[280px]" />
        </div>
          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
          <p className="mt-2 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
          <p className="mt-2 break-words font-montserrat text-lg leading-normal text-slate-gray">{link}</p>
    </div>
  )
}

export default CollectionCard;