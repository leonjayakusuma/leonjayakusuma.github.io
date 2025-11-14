import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        px: { xs: 2, sm: 3 }, 
        bgcolor: 'background.paper', 
        color: 'text.secondary',
        textAlign: 'center'
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Leon Jayakusuma. All rights reserved.
      </Typography>
    </Box>
  )
}

