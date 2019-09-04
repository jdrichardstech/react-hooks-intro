import React, { useState } from 'react';

const initialFormState = {
  username: '',
  email: '',
  password: ''
};

const Register = () => {
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState(null);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm(initialFormState);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Login</h2>{' '}
      <form
        onSubmit={event => {
          handleSubmit(event);
        }}
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center'
        }}
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={event => handleChange(event)}
          value={form.username}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={event => handleChange(event)}
          value={form.email}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={event => handleChange(event)}
          value={form.password}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {user && JSON.stringify(user)}
    </div>
  );
};

export default Register;
