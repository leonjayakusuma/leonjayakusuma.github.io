import { Container, Box, Typography } from '@mui/material'

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 } }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
          About Me
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}>
            I'm a passionate developer who loves creating innovative solutions and 
            bringing ideas to life through code. With a strong foundation in modern 
            web technologies, I enjoy building user-friendly applications that make 
            a difference.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}>
            When I'm not coding, you can find me exploring new technologies, contributing 
            to open-source projects, or sharing knowledge with the developer community.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

