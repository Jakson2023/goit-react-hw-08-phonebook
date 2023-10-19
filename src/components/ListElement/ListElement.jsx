import { Delete } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/tasks/operations';

export const ListElement = ({ element }) => {
  const dispatch = useDispatch();

  return (
    <Box
      component={'span'}
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        mb: 1,
      }}
    >
      <Typography>
        {element.name}: {element.number}
      </Typography>
      <Button
        onClick={() => dispatch(deleteContact(element.id))}
        color="error"
        size="small"
        variant="contained"
        startIcon={<Delete />}
      >
        delete
      </Button>
    </Box>
  );
};
