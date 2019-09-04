import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username,
      password
    };

    setUser(userData);
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Login</h2>{' '}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center'
        }}
      >
        <input
          type="text"
          placeholder="Username"
          onChange={event => setUsername(event.target.value)}
          value={username}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{user && JSON.stringify(user)}</p>
    </div>
  );
};

export default Login;
