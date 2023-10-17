import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';
import { AppBar, Box, Icon,  Toolbar, Typography } from '@mui/material';
import { Phone } from '@mui/icons-material';

export const AppBarComp = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <AppBar position="static">
        <Toolbar>
          
        <Icon sx={{mr:1}}>
            <Phone/>
          </Icon>
          <Typography  >PhoneBook</Typography>
          
          
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
      </AppBar>
    </header>
  );
};
