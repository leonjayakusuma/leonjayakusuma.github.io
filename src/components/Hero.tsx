import { Container, Box, Typography, Button } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import { useScrollVisibility } from '../hooks/useScrollVisibility'

// Constants
const ROLES = ['Full Stack Developer', 'Software Engineer', 'Web Developer', 'UI/UX Enthusiast']
const TYPING_SPEED = 100
const DELETING_SPEED = 50
const PAUSE_DURATION = 2000

// Custom hook for typing effect
function useTypingEffect(roles: string[]) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayedRole, setDisplayedRole] = useState('')
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    
    if (!isDeleting && displayedRole === currentRole) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true)
        setTypingSpeed(DELETING_SPEED)
      }, PAUSE_DURATION)
      return () => clearTimeout(pauseTimeout)
    }

    if (isDeleting && displayedRole === '') {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      setTypingSpeed(TYPING_SPEED)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1))
      } else {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedRole, isDeleting, currentRoleIndex, roles])

  return displayedRole
}

// Styles
const heroBoxStyles = {
  pt: { xs: 20, sm: 25 },
  pb: 10,
  px: { xs: 2, sm: 3 },
  background: 'linear-gradient(135deg, #1e293b 0%, #312e81 100%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center'
}

const h1Styles = (isVisible: boolean) => ({
  fontSize: { xs: '3rem', sm: '4rem', lg: '5rem' },
  fontWeight: 700,
  mb: 2,
  color: 'text.primary',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(-120px)',
  transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'
})

const roleTypographyStyles = {
  mb: 2,
  color: 'text.secondary',
  fontSize: '2.5rem',
  fontWeight: 600,
  minHeight: '2.5rem'
}

const cursorStyles = {
  display: 'inline-block',
  width: '2px',
  height: '1.2em',
  bgcolor: 'primary.main',
  ml: 0.5,
  animation: 'blink 1s infinite',
  '@keyframes blink': {
    '0%, 50%': { opacity: 1 },
    '51%, 100%': { opacity: 0 }
  }
}

const buttonContainerStyles = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: 6,
  justifyContent: 'center'
}

// Sub-components
function AnimatedHeadingHero({ isVisible, ref }: { isVisible: boolean; ref: React.RefObject<HTMLHeadingElement | null> }) {
  return (
    <Typography
      ref={ref}
      variant="h1"
      component="h1"
      sx={h1Styles(isVisible)}
    >
      Hi, I'm <Box component="span" sx={{ color: 'primary.main' }}>Leon Jayakusuma</Box>
    </Typography>
  )
}

function TypingRoleHero({ displayedRole }: { displayedRole: string }) {
  return (
    <Typography variant="h4" sx={roleTypographyStyles}>
      {displayedRole}
      <Box component="span" sx={cursorStyles} />
    </Typography>
  )
}

function ActionButtons({ isVisible, ref }: { isVisible: boolean; ref: React.RefObject<HTMLDivElement | null> }) {
  return (
    <Box 
      ref={ref}
      sx={{
        ...buttonContainerStyles,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(90px)',
        transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'
      }}
    >
      <Button
        href="#contact"
        variant="contained"
        size="large"
        sx={{
          px: 4,
          py: 1.5,
          boxShadow: 3,
          fontSize: { xs: '1rem', sm: '1.25rem' },
          '&:hover': { boxShadow: 6, 
            bgcolor: 'rgba(255, 255, 255, 1)',
            color: 'primary.main',
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease',
          }
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
          fontSize: { xs: '1rem', sm: '1.25rem' },
          '&:hover': { 
            borderWidth: 4, 
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            boxShadow: 6,
            color: 'rgba(255, 255, 255, 1)',
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease',
          }
        }}
      >
        View My Work
      </Button>
    </Box>
  )
}

// Main component
export default function Hero() {
  const displayedRole = useTypingEffect(ROLES)
  const { isVisible: isHeadingVisible, ref: headingRef } = useScrollVisibility<HTMLHeadingElement>()
  const { isVisible: isDescriptionVisible, ref: descriptionRef } = useScrollVisibility<HTMLParagraphElement>()
  const { isVisible: isButtonsVisible, ref: buttonsRef } = useScrollVisibility<HTMLDivElement>()

  return (
    <Box id="home" sx={heroBoxStyles}>
      <Container maxWidth="md">
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 3
        }}>
          <AnimatedHeadingHero isVisible={isHeadingVisible} ref={headingRef} />
          <TypingRoleHero displayedRole={displayedRole} />
          <Typography 
            ref={descriptionRef}
            variant="h6" 
            sx={{ 
              mb: 4,
              fontSize: '1.5rem',
              color: 'text.secondary', 
              maxWidth: '600px', 
              mx: 'auto',
              opacity: isDescriptionVisible ? 1 : 0,
              transform: isDescriptionVisible ? 'translateY(0)' : 'translateY(90px)',
              transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'
            }}
          >
            I build beautiful and functional web applications with modern technologies
          </Typography>
          <ActionButtons isVisible={isButtonsVisible} ref={buttonsRef} />
        </Box>
      </Container>
    </Box>
  )
}

