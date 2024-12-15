// * Import Sections
import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

import PopularProductDetail from "./sections/PopularProductDetail";

import Nav from "./components/Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main className="realtive">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product/:id" element={<PopularProductDetail />} />
    </Routes>
  </Router>
);

export default App;
