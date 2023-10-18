import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', gap: 4 }}>
      <Typography component={'p'} fontWeight={500}>
        {' '}
        {user.email}
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        size="small"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
