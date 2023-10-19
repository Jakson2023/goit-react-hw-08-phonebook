import { Box, Typography } from '@mui/material';
import background from '../img/phone-book-telephone-arrangement.webp';

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        height: '100vh',
        opacity: '0.8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component={'span'}
        sx={{
          backgroundColor: 'lightgray',
          border: '4px solid #2196f3',
          borderRadius: 2,
          padding: 2,
          opacity: 0.9,
        }}
      >
        <Typography fontSize={80} component={'h1'} fontWeight={700}>
          PhoneBook
        </Typography>
      </Box>
    </Box>
  );
}
