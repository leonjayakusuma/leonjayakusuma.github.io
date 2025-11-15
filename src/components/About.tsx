import { Container, Box, Typography } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import AnimatedHeading from '../utils/AnimatedHeading'

const aboutText = "I'm a passionate developer who loves creating innovative solutions and bringing ideas to life through code. With a strong foundation in modern web technologies, I enjoy building user-friendly applications that make a difference."
const aboutText2 = "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."

function useScrollVisibility<T extends HTMLElement = HTMLElement>(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { isVisible, ref }
}

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 } }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          {AnimatedHeading({content: 'About Me'})}
        </Box>
        {AboutContent()}
      </Container>
    </Box>
  )
}

function AboutContent() {
  const { isVisible, ref } = useScrollVisibility<HTMLDivElement>()
  
  return (
    <Box 
      ref={ref}
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 3,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 2s ease-out, transform 2s ease-out'
      }}
    >
      {AboutParagraph({ text: aboutText })}
      {AboutParagraph({ text: aboutText2 })}
    </Box>
  )
}

function AboutParagraph({text}: {text: string}) {
  return <Typography variant="body1" sx={{ fontSize: '1.5rem', lineHeight: 1.8, color: 'text.secondary' }}>
    {text}
  </Typography>
}

