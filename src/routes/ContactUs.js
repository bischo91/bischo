import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_G450MAckYglOAjutsXnzC");
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bischo',
    'template_bischo', 
    form.current,
    'user_G450MAckYglOAjutsXnzC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
