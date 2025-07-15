import "./App.scss";
import { motion, spring } from "framer-motion";
import Nav from "./components/Nav";
const App = () => {
  return (
    <>
      <section className="home" id="home">
        <Nav />
      </section>
      <section className="parallax">Parallax</section>
      <section className="service" id="service">
        Service
      </section>
      <section className="parallax">Parallax</section>
      <section className="portfolio1" id="portfolio">
        Portfolio1
      </section>
      <section className="portfolio2">Portfolio2</section>
      <section className="portfolio3">Portfolio3</section>
      <section className="contact" id="contact">
        Contact
      </section>
    </>
  );
};

export default App;
