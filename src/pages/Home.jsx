import React, { useContext } from 'react';
import { LoginRegContext } from '../context/LoginReg/LoginReg';
import { Button, Container, Paper, Skeleton, Stack, Grid } from '@mui/material';

const Home = () => {
  const { setValue } = useContext(LoginRegContext);

  return (
    <Container maxWidth="lg">
      <Paper
        sx={{
          padding: 3,
          margin: 'auto',
          maxWidth: { xs: '100%', sm: 700 },
          minWidth: { xs: '90%', sm: 600 },
        }}
        elevation={3}
      >
        <Stack spacing={1}>
          <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
          <Skeleton variant="circular" width={150} height={150} />
          <Skeleton variant="rounded" width="100%" height={80} />
          <Skeleton variant="rounded" width="100%" height={60} />
        </Stack>
      </Paper>
      <Grid container justifyContent="center">
        <Button
          sx={{
            mt: 3,
            backgroundColor: '#FF8E53',
            ':hover': { backgroundColor: '#FE6B8B' },
            width: { xs: '100%', sm: 'auto' },
          }}
          variant="contained"
          onClick={() => setValue('login')}
        >
          Log out
        </Button>
      </Grid>
    </Container>
  );
};

export default Home;
