import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-2xl lg:text-4xl font-bold ">What Our <span className="text-coral-red ">Customers</span> Say?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center ">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {reviews.map((review) => ( <ReviewCard 
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        />))}
      </div> 
    </section>
  )
}

export default CustomerReviews