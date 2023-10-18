import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Box, Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form  onSubmit={handleSubmit} autoComplete="off">
      
        <Box sx={{
          display:'flex',
          flexDirection:'column',
          ml: 'auto',
          mr: 'auto',
          width:350,
          mb:16
        }}>
        <TextField type="email" name="email" variant='outlined'
             color='primary'label='Email' />
      <Box height={14} />
      
        <TextField  variant='outlined'
             color='primary'label='Password' type="password" name="password" />
      <Box height={14} />
      <Button type="submit" variant='contained'
             color='primary'
             size='large'>Log In</Button>
             </Box>
    </form>
  );
};
