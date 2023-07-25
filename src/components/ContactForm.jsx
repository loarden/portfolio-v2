import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import EmailSentMessage from "./EmailSentMessage";
import { AnimatePresence } from "framer-motion";

const style = {
  input: "bg-[#f5f5f5] resize-none p-2 w-full border-none",
};

function ContactForm() {
  const ref = useRef();

  const [email, setEmail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState({
    sent: false,
    error: false,
  });

  const changeHandler = (e) => {
    setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_pdpe4xo", ref.current, "bgKCC9p0J_Ht-PZQo")
      .then(
        (result) => {
          setIsSent((prev) => ({ ...prev, sent: true }));
          setTimeout(() => {
            setIsSent((prev) => ({ ...prev, sent: false }));
          }, 1500);
        },
        (error) => {
          setIsSent((prev) => ({ ...prev, error: true }));
          setTimeout(() => {
            setIsSent((prev) => ({ ...prev, error: false }));
          }, 1500);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={ref}
      className="relative max-w-xl flex flex-col gap-4 mt-14 md:mt-24 mx-auto items-center"
    >
      <input
        onChange={changeHandler}
        className={style.input}
        required
        type="text"
        name="name"
        placeholder="Your name"
      />
      <input
        onChange={changeHandler}
        className={style.input}
        required
        type="email"
        name="email"
        placeholder="Your email address"
      />
      <textarea
        onChange={changeHandler}
        className={style.input}
        name="message"
        cols="30"
        rows="5"
        placeholder="Message..."
      />
      <button className="px-5 py-2 text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-background cursor-pointer transition-all font-sans">
        Send
      </button>
      <AnimatePresence>
        {isSent.sent && <EmailSentMessage text="Email sent" />}
        {isSent.error && <EmailSentMessage text="Email error" />}
      </AnimatePresence>
    </form>
  );
}

export default ContactForm;
