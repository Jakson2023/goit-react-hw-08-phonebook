import { inputFilteredContacts } from 'redux/tasks/filterSlice';
import { useDispatch } from 'react-redux';
import { Box, InputAdornment, TextField } from '@mui/material';
import { PersonSearch } from '@mui/icons-material';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputSearchFilter = e => {
    dispatch(inputFilteredContacts(e.target.value));
  };
  return (
    <Box
      sx={{
        mt: 4,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TextField
        label="Find contacts by name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonSearch />
            </InputAdornment>
          ),
        }}
        variant="standard"
        color="secondary"
        type="text"
        onChange={e => {
          inputSearchFilter(e);
        }}
      />
    </Box>
  );
};
