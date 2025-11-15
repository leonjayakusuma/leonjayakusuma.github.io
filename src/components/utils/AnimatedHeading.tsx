import { Box, Typography } from "@mui/material";
import { useScrollVisibility } from '../../hooks/useScrollVisibility';

export default function AnimatedHeading({content}: {content: string}) {
  const { isVisible, ref } = useScrollVisibility<HTMLHeadingElement>()
  
  return <Box sx={{ textAlign: 'center', mb: 6 }}>
    <Typography
      ref={ref}
      variant="h2"
      component="h2"
      sx={{
        fontWeight: 700,
        display: 'inline-block',
        px: 3,
        py: 1,
        borderRadius: '1rem',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, all 0.5s ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
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