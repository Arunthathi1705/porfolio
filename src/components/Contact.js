import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import "./../styles/Contact.css";


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k83dwag', 'template_j8qt04k', form.current, '5gdqUFtg0Hl-X5FDt'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert("your response has been submitted successfully");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };
  return (
    <div id="Contact">
      <h1 className='contactTitle'>Contact Me</h1>
      <p className='contactDesc'>Please fill out the form below to discuss any job opportunities.</p>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name="your_name"></input>
        <input type='email' className='email' placeholder='Your Email' name="your_email"></input>
        <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
        <button className="submitBtn" type="submit">Submit</button>
      </form>

    </div>
  )
}





export default Contact