import "./service.scss";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Service = () => {
  const [onMobile, setOnMobile] = useState(false);

  useEffect(() => {
    const checkOnMobile = () => {
      setOnMobile(window.innerWidth <= 830);
    };
    checkOnMobile();
    window.addEventListener("resize", checkOnMobile);
    return () => window.removeEventListener("resize", checkOnMobile);
  }, []);

  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: onMobile ? "0px" : "-500px",
  });

  const variants = {
    initial: {
      x: onMobile ? -120 : -500,
      y: onMobile ? -15 : 30,
      opacity: 1,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: onMobile ? 0.1 : 0.2,
        duration: onMobile ? 1 : 1,
      },
    },
  };

  const services = [
    {
      title: "Frontend Development",
      desc: "I build clean, responsive, and high-performance user interfaces using React, Next.js, Tailwind CSS, and modern UI patterns that users love.",
    },
    {
      title: "Backend & APIs",
      desc: "Secure and scalable backend systems using Node.js, Express, PostgreSQL, MongoDB, authentication, REST APIs, and real-world business logic.",
    },
    {
      title: "Full-Stack Solutions",
      desc: "Complete end-to-end applications integrating frontend, backend, database, cloud deployment, and AI-powered features for real-world products.",
    },
    {
      title: "UI/UX & Design",
      desc: "Designing intuitive, modern, and accessible interfaces with a focus on user experience, performance, and mobile-first design.",
    },
  ];

  return (
    <motion.div
      className="service-container"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={inView || onMobile ? "animate" : "initial"}
    >
      <motion.div className="title-container">
        <motion.p>
          I focus on building scalable, modern web products <br />
          that help ideas grow and move forward
        </motion.p>
        <motion.hr />
      </motion.div>

      <motion.div className="text-container">
        <motion.div className="first-text-container">
          <motion.img src="people.webp" alt="Team working" />
          <motion.p>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </motion.p>
        </motion.div>

        <motion.div className="second-text-container">
          <motion.p>
            <motion.b whileHover={{ color: "orange" }}>for your</motion.b>{" "}
            digital products.
          </motion.p>
          <motion.div>
            <motion.button>
              <a href="#Portfolio"> SEE MY WORK</a>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="box-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={
              !onMobile
                ? {
                    background: "rgb(245, 190, 65, 0.2)",
                    color: "black",
                  }
                : {}
            }
          >
            <motion.h2>{service.title}</motion.h2>
            <motion.p>{service.desc}</motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Service;
