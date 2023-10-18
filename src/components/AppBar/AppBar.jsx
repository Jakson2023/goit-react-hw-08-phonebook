import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Box, Icon, Toolbar, Typography } from '@mui/material';
import { Phone } from '@mui/icons-material';

export const AppBarComp = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component={'header'}sx={{mb:6}}>
      <AppBar position="static">
        <Toolbar>
          <Icon sx={{ mr: 1 }}>
            <Phone />
          </Icon>
          <Typography>PhoneBook</Typography>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
