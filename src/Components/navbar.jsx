import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'darkgreen' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Job Portal
        </Typography>
        <Button sx={{ color: 'blue' }} component={Link} to="/">Home</Button>
        <Button sx={{ color: 'red' }} component={Link} to="/Jobs">Jobs</Button>
        <Button sx={{ color: 'orange' }} component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
