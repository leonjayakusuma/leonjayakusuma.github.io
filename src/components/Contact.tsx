import { Container, Box, Typography, Button } from '@mui/material'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import AnimatedHeading from '../utils/AnimatedHeading'

export default function Contact() {
  return (
    <Box id="contact" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          {AnimatedHeading({content: 'Get In Touch'})}
          <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
            <Button 
              href="mailto:your.email@example.com"
              variant="contained"
              startIcon={<Email />}
              sx={{ 
                px: 3, 
                py: 1.5,
                boxShadow: 2,
                '&:hover': { boxShadow: 4 }
              }}
            >
              Email Me
            </Button>
            <Button 
              href="https://github.com"
              target="_blank"
              variant="contained"
              startIcon={<GitHub />}
              sx={{ 
                px: 3, 
                py: 1.5,
                bgcolor: '#1f2937',
                boxShadow: 2,
                '&:hover': { bgcolor: '#111827', boxShadow: 4 }
              }}
            >
              GitHub
            </Button>
            <Button 
              href="https://linkedin.com"
              target="_blank"
              variant="contained"
              startIcon={<LinkedIn />}
              sx={{ 
                px: 3, 
                py: 1.5,
                bgcolor: '#2563eb',
                boxShadow: 2,
                '&:hover': { bgcolor: '#1d4ed8', boxShadow: 4 }
              }}
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

// function AnimatedHeading({content}: {content: string}) {
//   return <Box sx={{ textAlign: 'center', mb: 6 }}>
//     <Typography
//       variant="h2"
//       component="h2"
//       sx={{
//         fontWeight: 700,
//         display: 'inline-block',
//         px: 3,
//         py: 1,
//         borderRadius: '5px',
//         transition: 'all 0.3s ease',
//         '&:hover': {
//           color: 'primary.main',
//           transform: 'scale(1.1)',
//           cursor: 'pointer',
//           backgroundColor: 'rgba(255, 255, 255, 1)',
//         }
//       }}
//     >
//       {content}
//     </Typography>
//   </Box>
// }

