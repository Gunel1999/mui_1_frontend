import axios from 'axios';

const handleRegister = async ({
  name,
  lastName,
  username,
  email,
  password,
  confirmPassword,
  setValue,
  setErrors,
  setSnackbar,
}) => {
  const url = 'https://my-json-server.typicode.com/Gunel1999/mui_1_db/db';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const newErrors = {
    name: !name,
    lastName: !lastName,
    username: !username,
    email: !email,
    emailRegex: email ? !emailRegex.test(email) : false,
    password: !password,
    passwordLength: password.length < 6,
    confirmPassword: !confirmPassword,
    confirmPasswordMatch: password !== confirmPassword,
  };

  setErrors(newErrors);

  if (
    !newErrors.name &&
    !newErrors.lastName &&
    !newErrors.username &&
    !newErrors.email &&
    !newErrors.emailRegex &&
    !newErrors.password &&
    !newErrors.passwordLength &&
    !newErrors.confirmPassword &&
    !newErrors.confirmPasswordMatch
  ) {
    const user = {
      name,
      lastName,
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(`${url}/users`, user);
      if (response.status === 201) {
        setSnackbar({ open: true, message: 'User created successfully' });
        setValue('login');
      }
    } catch (error) {
      console.error(error);
      setSnackbar({ open: true, message: 'Registration failed' });
    }
  }
};

export default handleRegister;
