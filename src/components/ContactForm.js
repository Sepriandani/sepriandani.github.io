import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nzqt12f',
        'template_2u2ewel',
        formRef.current,
        'user_p5Udbt2D7bBREcqsUmohK'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <FormStyle ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user_name">
            Your Name
            <input type="text" id="name" name="user_name" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="user_subject">
            Subject
            <input type="text" id="subject" name="user_subject" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input type="email" id="email" name="user_email" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea type="text" id="message" name="message" />
          </label>
        </div>
        <button type="submit">Send</button>
        {done && 'Thank you...'}
      </FormStyle>
    </>
  );
}
