import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  
  
  // const initialValues = { name: "", email: ""};
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  const [message, setMessage] = useState(false);
  const formRef = useRef();



  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormValues({...formValues, [name]: value});
  //   console.log(formValues);
  // };

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$;

  //   if(!values.name){
  //       errors.name="Pls Enter name";
  //    }
  //   if(!values.email){
  //     errors.name="Pls Enter Email";
  //    } 

  //    return errors;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      {/*<div className="container contact__container">*/}
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fenil.code@gmail.com</h5>
            <a href="mailto:fenil.code@gmail.com">Send a message</a>
          </article>
        </div>
        {/*<form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            required
            // value= {formValues.name}
            // onChange= {handleChange}
          />
         
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            required
            // value= {formValues.email}
            // onChange= {handleChange}
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>*/}
    </section>
  );
};

export default Contact;
