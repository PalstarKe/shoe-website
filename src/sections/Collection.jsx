import { collections } from "../constants";
import CollectionCard from "../components/CollectionCard";

const Collection = () => {
  return (
    <section className="max-container">
      <div className="mb-10 md:mb-16">
        <h2 className="text-2xl text-center lg:text-4xl font-palanquin font-bold">
          Our <span className="text-orange-500">Collection</span>
        </h2>
        <p className="info-text m-auto mt-4 max-w-lg text-center ">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-3 ">
        {collections.map((collection) => (
          <CollectionCard key={collection.label} {...collection} />
        ))}
      </div>
    </section>
  );
};

export default Collection;
