import { Box, Typography } from "@mui/material";

export default function AnimatedHeading({content}: {content: string}) {
    return <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 700,
          display: 'inline-block',
          px: 3,
          py: 1,
          borderRadius: '5px',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: 'primary.main',
            transform: 'scale(1.1)',
            cursor: 'pointer',
            backgroundColor: 'rgba(255, 255, 255, 1)',
          }
        }}
      >
        {content}
      </Typography>
    </Box>
  }