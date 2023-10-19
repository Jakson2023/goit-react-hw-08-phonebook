import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Box, Icon, Toolbar, Typography } from '@mui/material';
import { Phone } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';
export const AppBarComp = () => {
  const { isLoggedIn } = useAuth();
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <Box component={'header'} >
      <AppBar position="fixed">
        <Toolbar variant="regular">
          <Icon sx={{ mr: 1 }}>
            <Phone />
          </Icon>
          <Typography>PhoneBook</Typography>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
      { (
           isLoading && <Box sx={{ width: '100%', position:'absolute', top:65,zIndex:1100 }}>
            <LinearProgress color='warning' />
          </Box>
          )}
    </Box>
  );
};
