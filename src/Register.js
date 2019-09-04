import React from 'react';

const Register = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });


  const handleChange = (event) => {
    console.log([event.target.name] = event.target.value)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Login</h2>{' '}
      <form
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center'
        }}
      >
        <input type="text" placeholder="Username" name="username" onChange={} />
        <br />
        <input type="text" placeholder="email" name="email" />
        <br />
        <input type="text" placeholder="Password" name="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
