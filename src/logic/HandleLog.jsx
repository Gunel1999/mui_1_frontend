import axios from 'axios';

const handleLogin = async ({
  email,
  password,
  setValue,
  setErrors,
  setSnackbar,
}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const newErrors = {
    email: !email,
    password: !password,
    passwordLength: password.length < 6,
    emailRegex: email ? !emailRegex.test(email) : false,
  };

  setErrors(newErrors);

  if (
    !newErrors.email &&
    !newErrors.password &&
    !newErrors.emailRegex &&
    !newErrors.passwordLength
  ) {
    const user = {
      email,
      password,
    };
    const url = 'https://my-json-server.typicode.com/Gunel1999/mui_1_db/db';

    try {
      const response = await axios.get(`${url}/users`);
      const users = response.data;
      const foundUser = users.find(user => user.email === email);
      if (foundUser) {
        if (foundUser.password === password) {
          setValue('home');
          setSnackbar({ open: true, message: 'Login successful' });
        } else {
          setSnackbar({ open: true, message: 'Wrong password' });
        }
      } else {
        setSnackbar({ open: true, message: 'User not found' });
      }
    } catch (error) {
      setSnackbar({ open: true, message: 'An error occurred' });
    }
  }
};

export default handleLogin;
