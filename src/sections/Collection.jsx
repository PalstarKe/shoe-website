import { collections } from "../constants";
import CollectionCard from "../components/CollectionCard";

const Collection = () => {
  return (
    <section className="max-container">
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Collections
        </h2>
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
