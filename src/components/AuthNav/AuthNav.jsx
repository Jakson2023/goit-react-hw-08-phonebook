import { StyledLink } from 'components/rootStyle/rootStyle';
import { Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box component={'span'} sx={{ ml: 'auto' }}>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Box>
  );
};
