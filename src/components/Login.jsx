import React, { useState, useContext } from 'react';
import handleLogin from '../logic/HandleLog';
import { LoginRegContext } from '../context/LoginReg/LoginReg';
import {
  Stack,
  TextField,
  Paper,
  Typography,
  Button,
  Snackbar,
} from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const { setValue } = useContext(LoginRegContext);

  const handleSubmit = async () => {
    await handleLogin({
      email,
      password,
      setValue,
      setErrors,
      setSnackbar,
    });
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 600, minWidth: 400 }} elevation={3}>
      <Stack spacing={2}>
        <Typography
          align="center"
          sx={{
            fontSize: 20,
            fontWeight: 'bold',
            mb: 2,
            letterSpacing: 1,
            textTransform: 'uppercase',
            color: '#FE6B8B',
          }}
        >
          Login
        </Typography>
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={errors.email || errors.emailRegex}
          helperText={
            errors.email
              ? 'Email is required'
              : errors.emailRegex
              ? 'Email is not valid'
              : ''
          }
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          error={errors.password || errors.passwordLength}
          helperText={
            errors.password
              ? 'Password is required'
              : errors.passwordLength
              ? 'Password must be at least 6 characters'
              : ''
          }
        />
        <Typography align="center" sx={{ color: 'grey' }}>
          Don't have an account?{' '}
          <Button
            onClick={() => setValue('register')}
            sx={{ color: '#FF8E53', fontWeight: 600 }}
          >
            Register
          </Button>
        </Typography>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            backgroundColor: '#FF8E53',
            fontWeight: 600,
            letterSpacing: 1.3,
            ':hover': { backgroundColor: '#FE6B8B' },
          }}
        >
          Login
        </Button>
      </Stack>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Paper>
  );
};

export default Login;
