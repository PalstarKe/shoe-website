import {
  Hero,
  Footer,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
  PopularProducts,
  CustomerReviews,
  Collection,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <section className="padding-x">
      <Nav />
    </section>
    <section className="padding-x">
      <Hero />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <Collection />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding">
      <Subscribe />
    </section>
    <section className="bg-orange-500 padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
