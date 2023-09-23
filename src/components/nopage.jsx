import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { WarningAmberSharp } from '@mui/icons-material';

const NoPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <WarningAmberSharp />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sorry you are on a wrong page!
        </Typography>
      </Box>
    </Container>
  );
};

export default NoPage;
