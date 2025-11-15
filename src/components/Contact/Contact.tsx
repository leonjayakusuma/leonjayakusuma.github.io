import { Container, Box, Typography } from '@mui/material'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import AnimatedHeading from '../../utils/AnimatedHeading'
import SocialButton from './SocialButton'

export default function Contact() {
  return (
    <Box id="contact" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          {AnimatedHeading({content: 'Get In Touch'})}
          <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', fontWeight: 400, fontSize: '1.5rem' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, justifyContent: 'center' }}>
            <SocialButton 
              href="mailto:your.email@example.com"
              label="Email Me"
              icon={<Email />}
            />
            <SocialButton 
              href="https://github.com/leonjayakusuma"
              label="GitHub"
              icon={<GitHub />}
              bgColor="#1f2937"
              hoverBgColor="#111827"
            />
            <SocialButton 
              href="https://www.linkedin.com/in/leon-j-a464b3155/"
              label="LinkedIn"
              icon={<LinkedIn />}
              bgColor="#2563eb"
              hoverBgColor="#1d4ed8"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

