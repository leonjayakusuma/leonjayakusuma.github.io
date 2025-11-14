import { Container, Box, Typography, Button } from '@mui/material'

export default function Hero() {
  return (
    <Box 
      id="home" 
      sx={{ 
        pt: { xs: 20, sm: 25 }, 
        pb: 10, 
        px: { xs: 2, sm: 3 }, 
        background: 'linear-gradient(135deg, #1e293b 0%, #312e81 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              fontSize: { xs: '3rem', sm: '4rem', lg: '5rem' }, 
              fontWeight: 700, 
              mb: 2,
              color: 'text.primary'
            }}
          >
            Hi, I'm <Box component="span" sx={{ color: 'primary.main' }}>Leon Jayakusuma</Box>
          </Typography>
          <Typography variant="h4" sx={{ mb: 2, color: 'text.secondary', fontWeight: 400 }}>
            Full Stack Developer
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
            I build beautiful and functional web applications with modern technologies
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
            <Button 
              href="#contact" 
              variant="contained" 
              size="large"
              sx={{ 
                px: 4, 
                py: 1.5,
                boxShadow: 3,
                '&:hover': { boxShadow: 6 }
              }}
            >
              Get In Touch
            </Button>
            <Button 
              href="#projects" 
              variant="outlined" 
              size="large"
              sx={{ 
                px: 4, 
                py: 1.5,
                borderWidth: 2,
                '&:hover': { borderWidth: 2, bgcolor: 'rgba(99, 102, 241, 0.1)' }
              }}
            >
              View My Work
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

