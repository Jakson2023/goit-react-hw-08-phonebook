import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box sx={{ml:'auto'}}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </Box>
  );
};
