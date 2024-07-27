import React, { useState, useEffect, useContext } from 'react';
import {
  LoginRegProvider,
  LoginRegContext,
} from '../context/LoginReg/LoginReg';
import { Container, CssBaseline, Snackbar, Slide } from '@mui/material';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../pages/Home';

const SignContent = () => {
  const { value } = useContext(LoginRegContext);
  const [prevValue, setPrevValue] = useState(value);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start the slide-out animation
    setShowContent(false);
    const timer = setTimeout(() => {
      setPrevValue(value);
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Slide in={showContent} mountOnEnter unmountOnExit>
      <div>
        {prevValue === 'login' ? (
          <Login />
        ) : prevValue === 'register' ? (
          <Register />
        ) : prevValue === 'home' ? (
          <Home />
        ) : null}
      </div>
    </Slide>
  );
};

const Sign = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  return (
    <LoginRegProvider>
      <CssBaseline />
      <Container
        sx={{
          minHeight: '100vh',
          minWidth: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        }}
      >
        <SignContent setSnackbar={setSnackbar} />
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </LoginRegProvider>
  );
};

export default Sign;
