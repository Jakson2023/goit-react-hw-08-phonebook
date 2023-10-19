import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ml: 'auto',
          mr: 'auto',
          width: 350,
          mb: 16,
          mt: 40
        }}
      >
        <TextField
          type="text"
          name="name"
          variant="outlined"
          color="primary"
          label="Name"
        />
        <Box height={18} />
        <TextField
          type="email"
          name="email"
          variant="outlined"
          color="primary"
          label="Email"
        />
        <Box height={18} />
        <TextField
          variant="outlined"
          color="primary"
          label="Password"
          type="password"
          name="password"
        />
        <Box height={18} />
        <Button type="submit" variant="contained" color="primary" size="large">
          Register
        </Button>
      </Box>
    </form>
  );
};
