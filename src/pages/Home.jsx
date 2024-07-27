import React, { useContext } from 'react';
import { LoginRegContext } from '../context/LoginReg/LoginReg';
import { Button, Container, Paper, Skeleton, Stack } from '@mui/material';

const Home = () => {
  const { setValue } = useContext(LoginRegContext);
  return (
    <Container maxWidth="lg">
      <Paper sx={{ padding: 3, maxWidth: 700, minWidth: 600 }} elevation={3}>
        <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="circular" width={150} height={150} />
          <Skeleton variant="rounded" maxWidth={700} height={80} />
          <Skeleton variant="rounded" maxWidth={700} height={60} />
        </Stack>
      </Paper>
      <Button
        sx={{
          mt: 3,
          backgroundColor: '#FF8E53',
          ':hover': { backgroundColor: '#FE6B8B' },
        }}
        variant="contained"
        onClick={() => setValue('login')}
      >
        Log out
      </Button>
    </Container>
  );
};

export default Home;
