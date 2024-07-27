import React, { useState, useContext } from 'react';
import handleRegister from '../logic/HandleReg';
import { LoginRegContext } from '../context/LoginReg/LoginReg';
import {
  Stack,
  TextField,
  Paper,
  Typography,
  Button,
  Snackbar,
} from '@mui/material';

const Register = () => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const { setValue } = useContext(LoginRegContext);

  const handleSubmit = async () => {
    await handleRegister({
      name,
      lastName,
      username,
      email,
      password,
      confirmPassword,
      setValue,
      setErrors,
      setSnackbar,
    });
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 600, minWidth: 300 }} elevation={3}>
      <Stack spacing={{ xs: 1, sm: 2 }}>
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
          Register
        </Typography>
        <Stack direction={'row'} spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Stack spacing={{ xs: 1, sm: 2 }}>
            <TextField
              label="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              error={errors.name}
              helperText={errors.name ? 'Name is required' : ''}
            />
            <TextField
              label="Last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              error={errors.lastName}
              helperText={errors.lastName ? 'Last Name is required' : ''}
            />
            <TextField
              label="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              error={errors.username}
              helperText={errors.username ? 'Username is required' : ''}
            />
          </Stack>
          <Stack spacing={{ xs: 1, sm: 2 }}>
            <TextField
              label="Email"
              value={email}
              type="email"
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
              label="Password"
              value={password}
              type="password"
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
            <TextField
              label="Confirm Password"
              value={confirmPassword}
              type="password"
              onChange={e => setConfirmPassword(e.target.value)}
              error={errors.confirmPassword || errors.confirmPasswordMatch}
              helperText={
                errors.confirmPassword
                  ? 'Confirm Password is required'
                  : errors.confirmPasswordMatch
                  ? 'Passwords do not match'
                  : ''
              }
            />
          </Stack>
        </Stack>
        <Typography align="center" sx={{ color: 'grey' }}>
          Already have an account?{' '}
          <Button
            onClick={() => setValue('login')}
            sx={{ color: '#FF8E53', fontWeight: 600 }}
          >
            Login
          </Button>
        </Typography>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: '#FF8E53',
            fontWeight: 600,
            letterSpacing: 1.3,
            ':hover': { backgroundColor: '#FE6B8B' },
          }}
        >
          Register
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

export default Register;
