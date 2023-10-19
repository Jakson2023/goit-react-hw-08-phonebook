import { useAuth } from 'hooks';
import { Box } from '@mui/material';
import { StyledLink } from 'components/RootStyle/rootStyle';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Box sx={{ display: 'flex', ml:4}}>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </Box>
    </nav>
  );
};
