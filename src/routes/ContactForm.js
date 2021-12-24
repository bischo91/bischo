import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

init("user_G450MAckYglOAjutsXnzC");
export const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bischo",
        "template_bischo",
        form.current,
        "user_G450MAckYglOAjutsXnzC"
      )
      .then(
        (result) => {
          alert("Email sent! Thank you!")

        },
        (error) => {
          alert("Something went wrong.\
          \nPlease send me an email directly at bischo91@gmail.com")
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mx-14 mb-12">
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        className="flex rounded-lg my-4 w-full px-3 py-2"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        className="flex rounded-lg my-4 w-full px-3 py-2"
      />
      <input
        type="subject"
        name="subject"
        placeholder="Subject"
        className="flex rounded-lg my-4 w-full px-3 py-2"
      />
      <textarea
        name="message"
        placeholder="Message"
        className="flex rounded-lg h-64 w-full my-4 px-3 py-2"
      />
      <button
        type="submit"
        className="flex float-right mt-4 rounded-lg
        bg-primary text-primary font-bold py-2 px-4"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
