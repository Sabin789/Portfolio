import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import {BsEnvelope} from 'react-icons/bs'
import {FaHatWizard} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8q87ldk', 'template_jpv8idm', form.current, '7h3yY1XT7yq53rdVc')
    setMsg("Hello! ")
    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id='contact'>
      <h5 className='text-light'>You can contact me here!</h5>
      <h2 className='text-light'>Contact Info</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon"/>
            <h4>E-mail</h4>
            <h5>sabinandrei125@gmail.com</h5>
            <a href="mailto:sabinandrei125@gmail.com">Message</a>
          </article>
          {/* <article className="contact__option">
            <FaHatWizard className="contact__option-icon"/>
            <h4>Site</h4>
            <h5>SEOxperts</h5>
            <a href="https://seoxperts.com.br" target="_blank" rel="noopener noreferrer">seoxperts.com.br</a>
          </article> */}
 
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your E-mail" required />
            <textarea name="message" rows="7" required placeholder="Message text"></textarea>
            <button type="submit" className="btn btn-primary">Send</button><span>{msg}</span>
          </form>
      </div>
    </section>
  )
}

export default Contact