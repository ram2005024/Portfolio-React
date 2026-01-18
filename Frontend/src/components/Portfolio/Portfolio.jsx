// Portfolio.jsx
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
      title: "Resume Builder",
      titleDes:
        "Build professional resumes effortlessly with AI-powered suggestions, using the PERN stack. Export in multiple formats for your applications.",
      titleImg: "/resume.png",
      demoLink: "https://resume-pern-frontend.vercel.app/",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      titleDes:
        "A robust E-Commerce solution built with the PERN stack, integrated with Inngest and modern tools for seamless shopping experiences.",
      titleImg: "/ecom.png",
      demoLink: "https://ecom-app-gilt.vercel.app/",
    },
    {
      id: 3,
      title: "Next.js Blog",
      titleDes:
        "A dynamic blog powered by Next.js featuring SSR, clean design, and easy content management for writers and readers.",
      titleImg: "/nextblog.png",
      demoLink: "https://next14-starter-31as.vercel.app/",
    },
    {
      id: 4,
      title: "Expense Tracker",
      titleDes:
        "Track your expenses efficiently with this MERN stack application. Features include analytics, categories, and secure authentication.",
      titleImg: "/exp.png",
      demoLink: "https://mern-expense-tracker-frontend-nine.vercel.app/",
    },
  ];

  const SingleItem = ({ item }) => {
    const [onMobile, setOnMobile] = useState(false);
    const imageRef = useRef();

    useEffect(() => {
      const checkOnMobile = () => setOnMobile(window.innerWidth <= 830);
      checkOnMobile();
      window.addEventListener("resize", checkOnMobile);
      return () => window.removeEventListener("resize", checkOnMobile);
    }, []);

    const { scrollYProgress: imageScroll } = useScroll({ target: imageRef });
    const yCondition = onMobile ? [-50, 100] : [-300, 300];
    const y = useTransform(imageScroll, [0, 1], yCondition);

    return (
      <section className="portfolio-item" id="Portfolio">
        <div className="container">
          <div className="image-wrapper">
            <img src={item.titleImg} alt={item.title} ref={imageRef} />
          </div>
          <motion.div className="title-wrapper" style={{ y }}>
            <h1>{item.title}</h1>
            <p>{item.titleDes}</p>
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
              <button>View Demo</button>
            </a>
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div className="portfolio-container" ref={ref}>
      <div className="mainTitle">
        <h1>Featured Projects</h1>
        <motion.div className="progressBar" style={{ scaleX }} />
      </div>
      {items.map((item) => (
        <SingleItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
