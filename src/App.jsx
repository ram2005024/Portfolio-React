import "./App.scss";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Home from "./components/Home(Hero-Section)/home";
import Nav from "./components/Nav";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Service from "./components/Service/Service";
const App = () => {
  return (
    <>
      <Cursor />
      <section className="home" id="Home">
        <Nav />
        <Home />
      </section>
      <section className="parallax1">
        <Parallax type={"parallax1"} />
      </section>
      <section className="service" id="Service">
        <Service />
      </section>
      <section className="parallax">
        <Parallax type={"parallax2"} />
      </section>
      <Portfolio />
      <section className="contact" id="Contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
