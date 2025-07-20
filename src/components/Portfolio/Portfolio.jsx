import "./Portfolio.scss";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
  });
  const items = [
    {
      id: 1,
      title: "React Commerce",
      titleDes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      titleImg:
        "https://cdn.pixabay.com/photo/2024/05/22/21/51/dog-8781844_1280.jpg",
    },
    {
      id: 2,
      title: "Next.Js Blog",
      titleDes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      titleImg:
        "https://cdn.pixabay.com/photo/2022/08/21/08/02/animal-7400625_1280.jpg",
    },
    {
      id: 3,
      title: "Vanilla Js App",
      titleDes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      titleImg:
        "https://cdn.pixabay.com/photo/2023/05/30/15/34/silver-gull-8028946_1280.jpg",
    },
    {
      id: 4,
      title: "Music App",
      titleDes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      titleImg:
        "https://cdn.pixabay.com/photo/2022/03/07/10/47/bird-7053394_1280.jpg",
    },
  ];
  const SingleItem = ({ items }) => {
    const [onMobile, setOnMobile] = useState(false);
    useEffect(() => {
      const checkOnMobile = () => {
        setOnMobile(window.innerWidth <= 830);
      };
      checkOnMobile();
      window.addEventListener("resize", checkOnMobile);
      return () => {
        window.removeEventListener("resize", checkOnMobile);
      };
    }, []);
    const imageRef = useRef();
    const { scrollYProgress } = useScroll({
      target: imageRef,
    });
    const yCondition = onMobile ? [-50, 100] : [-300, 300];
    const y = useTransform(scrollYProgress, [0, 1], yCondition);
    return (
      <section id="Portfolio">
        <div className="container">
          <div className="image-wrapper">
            <img src={items.titleImg} ref={imageRef} />
          </div>
          <motion.div
            className="title-wrapper"
            style={{
              y,
            }}
          >
            <h1>{items.title}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              dicta fuga similique cumque debitis sequi fugit voluptatem
              voluptates voluptatum deleniti. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Iusto saepe, consequuntur rem sequi
              corporis explicabo, ipsum porro suscipit rerum iure beatae
              obcaecati!
            </p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </section>
    );
  };
  return (
    <div className="portfolio-container" ref={ref}>
      <div className="mainTitle">
        <h1>Featured Works</h1>
        <motion.div
          className="progressBar"
          style={{
            scaleX,
          }}
        ></motion.div>
      </div>
      {items.map((items) => (
        <SingleItem items={items} />
      ))}
    </div>
  );
};

export default Portfolio;
