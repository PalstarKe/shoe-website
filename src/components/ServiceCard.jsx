const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex flex-1 flex-row justify-center items-center gap-6 sm:w-[350px] sm:min-w[350px] w-full rounded-[20px] shadow-3xl px-4 py-6">
        <div className="w-20 h-20 flex justify-center items-center bg-orange-500 rounded-full">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <div>
          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
          <p className="mt-2 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
        </div>
    </div>
  )
}

export default ServiceCard;