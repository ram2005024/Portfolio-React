import "./contact.scss";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const formRef = useRef(null);
  const [processing, setProcessing] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();

    const form = new FormData(formRef.current);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {
      setProcessing(true);
      const res = await toast.promise(
        fetch(`${import.meta.env.VITE_SERVER_URL}/send-email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }),
        {
          loading: "Submitting...",
          success: "Message sent successfully!",
          error: "Something went wrong",
        },
      );

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          formRef.current.reset();
        }, 3000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      console.error(err);
      setFailure(true);
      setTimeout(() => {
        setFailure(false);
        formRef.current.reset();
      }, 3000);
    } finally {
      setProcessing(false);
    }
  };

  const variants = {
    initial: { opacity: 0, y: 500 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 1 },
    },
  };

  return (
    <motion.div
      className="contact-container"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="contact-text">
        <motion.h1>Lets Work Together</motion.h1>
        <motion.div className="item">
          <motion.h2>Mail</motion.h2>
          <motion.span>sharmashekhar20050@gmail.com</motion.span>
        </motion.div>
        <motion.div className="item">
          <motion.h2>Address</motion.h2>
          <motion.span>Dhapasi ,Kathmandu</motion.span>
        </motion.div>
        <motion.div className="item">
          <motion.h2>Phone</motion.h2>
          <motion.span>+977 9765571937</motion.span>
        </motion.div>
      </motion.div>

      <motion.div className="form-container">
        <motion.div className="svgContainer">
          <motion.svg
            strokeWidth={1}
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            initial={{ opacity: 1 }}
            whileInView={{
              opacity: 0,
              transition: { delay: 5, duration: 0.2 },
            }}
          >
            <motion.path
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1, transition: { duration: 5 } }}
              d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 5, duration: 1 } }}
        >
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
          />
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            rows={8}
            required
          ></textarea>
          <button type="submit" disabled={processing}>
            Submit
          </button>
          {success && <span>Submitted Successfully</span>}
          {failure && <span>Error Sending Message</span>}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
