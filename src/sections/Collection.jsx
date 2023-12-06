import { collections } from "../constants"
import CollectionCard from "../components/CollectionCard"

const Collection = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-8">
      {collections.map((collection) => ( <CollectionCard key={collection.label} {...collection} /> ))}
    </section>
  )
}

export default Collection;