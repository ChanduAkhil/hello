import { Container, TextField, Button, Box } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Password" type="password" variant="outlined" fullWidth />
        <Button variant="contained" color="primary">Login</Button>
      </Box>
    </Container>
  );
};

export default Login;