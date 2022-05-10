import React, { useRef, useState } from "react";

const Form = () => {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...errors };
    console.log(name.current.value);

    if (!name.current.value) {
      newErrors.name = true;
    } else {
      newErrors.name = false;
    }
    if (!email.current.value) {
      newErrors.email = true;
    } else {
      newErrors.email = false;
    }
    if (!message.current.value) {
      newErrors.message = true;
    } else {
      newErrors.message = false;
    }
    setErrors(newErrors);

    window.alert(
      "Go to my website to send me a message ==> https://thicode.fr"
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row row-name">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={name}
          placeholder="Jane Appleseed"
          className={`${errors.name ? "error" : ""}`}
        />
        {errors.name && <p className="error">This field is required</p>}
      </div>
      <div className="row row-email">
        <label htmlFor="mail">Email Address</label>
        <input
          type="mail"
          id="mail"
          ref={email}
          placeholder="email@example.com"
          className={`${errors.email ? "error" : ""}`}
        />
        {errors.email && <p className="error">This field is required</p>}
      </div>
      <div className="row row-message">
        <label htmlFor="message">Message</label>
        <textarea
          ref={message}
          name="message"
          id="message"
          placeholder="How can I help ?"
          className={`${errors.message ? "error" : ""}`}
        ></textarea>
        {errors.message && <p className="error">This field is required</p>}
      </div>
      <button className="btn primary" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default Form;
