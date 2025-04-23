import React, { useState } from 'react';
import Css from './RegisterForm.module.css';

const RegisterForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Регистрация:', form);
  };

  return (
    <div className={Css.register_container}>
      <form className={Css.register_form} onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Email"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Phone"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Password"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Address"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Name Market"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegisterForm;
