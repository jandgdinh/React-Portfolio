import React, { useState } from 'react';
import './Contact.css'; // Assuming you have a CSS file for styling

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (field) => {
    let newErrors = { ...errors };
    if (!name && field === 'name') {
      newErrors.name = 'Name is required';
    } else {
      delete newErrors.name;
    }
    if (!email && field === 'email') {
      newErrors.email = 'Email is required';
    } else if (email && !validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    } else {
      delete newErrors.email;
    }
    if (!message && field === 'message') {
      newErrors.message = 'Message is required';
    } else {
      delete newErrors.message;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email address';
    if (!message) newErrors.message = 'Message is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit the form
      console.log('Form submitted:', { name, email, message });
    }
  };

  return (
    <div>
      <h1>Contact John Dinh</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur('name')}
          className="form-input"
        />
        {errors.name && <p className="error">{errors.name}</p>}
        
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
          className="form-input"
        />
        {errors.email && <p className="error">{errors.email}</p>}
        
        <label>Message:</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur('message')}
          className="form-input"
        />
        {errors.message && <p className="error">{errors.message}</p>}
        
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
}